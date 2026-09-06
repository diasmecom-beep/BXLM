import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { head } from "@vercel/blob";

// Le SDK Stripe et la vérification de signature ont besoin du runtime Node
// (pas du runtime Edge, qui ne supporte pas tout ce dont Stripe a besoin ici).
export const runtime = "nodejs";

/**
 * Chemin du fichier e-book (EPUB) dans le store Vercel Blob (privé).
 * Voir README.md pour la procédure d'upload.
 */
const EBOOK_BLOB_PATH = "ebooks/BXLM.site.epub";
const EBOOK_FILENAME = "BXLM.epub";

/**
 * Adresse d'expédition des e-mails. Sans domaine vérifié sur Resend,
 * seule l'adresse de test "onboarding@resend.dev" fonctionne. Une fois
 * un domaine vérifié (ex. bxlm.site), définissez RESEND_FROM_EMAIL dans
 * les variables d'environnement Vercel (ex. "hello@bxlm.site").
 */
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

function getStripeClient(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

export async function POST(req: NextRequest) {
  const stripe = getStripeClient();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = req.headers.get("stripe-signature");

  if (!stripe || !webhookSecret) {
    console.error(
      "Webhook Stripe non configuré : STRIPE_SECRET_KEY ou STRIPE_WEBHOOK_SECRET manquant.",
    );
    return NextResponse.json(
      { error: "Webhook non configuré." },
      { status: 500 },
    );
  }
  if (!signature) {
    return NextResponse.json({ error: "Signature manquante." }, { status: 400 });
  }

  // La vérification de signature Stripe exige le corps brut de la requête,
  // avant tout parsing JSON.
  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error("Signature Stripe invalide :", err);
    return NextResponse.json({ error: "Signature invalide." }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const customerEmail = session.customer_details?.email;

  if (!customerEmail) {
    console.error(
      `Session ${session.id} complétée sans e-mail client — envoi impossible.`,
    );
    return NextResponse.json({ received: true });
  }

  // On relit les articles de la session pour connaître le(s) produit(s)
  // acheté(s) : chaque produit Stripe porte une métadonnée `sku`
  // ("ebook" ou "paper") définie dans le tableau de bord Stripe.
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
    expand: ["data.price.product"],
  });

  const purchasedEbook = lineItems.data.some((item) => {
    const product = item.price?.product;
    if (typeof product !== "object" || product === null) return false;
    if ("deleted" in product && product.deleted) return false;
    return (product as Stripe.Product).metadata?.sku === "ebook";
  });

  if (!purchasedEbook) {
    // Version papier (ou autre article) : pas d'envoi automatique.
    // Le paiement et l'adresse de livraison restent consultables dans le
    // tableau de bord Stripe pour l'expédition manuelle.
    return NextResponse.json({ received: true });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error(
      `RESEND_API_KEY manquante : e-book non envoyé pour la session ${session.id} (${customerEmail}).`,
    );
    return NextResponse.json({ received: true });
  }

  try {
    const blobInfo = await head(EBOOK_BLOB_PATH);
    const fileRes = await fetch(blobInfo.url, {
      headers: {
        Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`,
      },
    });
    if (!fileRes.ok) {
      throw new Error(`Téléchargement du blob échoué (${fileRes.status}).`);
    }
    const arrayBuffer = await fileRes.arrayBuffer();

    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: `BXLM <${FROM_EMAIL}>`,
      to: customerEmail,
      subject: "Votre e-book BXLM",
      html: [
        "<p>Bonjour,</p>",
        "<p>Merci pour votre achat ! Vous trouverez le livre <strong>BXLM</strong>",
        " (Tayino Chérubin &amp; Dido Lakama) en pièce jointe, au format EPUB",
        " (lisible sur liseuse, tablette, smartphone ou ordinateur).</p>",
        "<p>Une question ? Écrivez-nous à hello@bxlm.site.</p>",
        "<p>Bonne lecture,<br>L'équipe BXLM</p>",
      ].join(""),
      attachments: [
        {
          filename: EBOOK_FILENAME,
          content: Buffer.from(arrayBuffer),
        },
      ],
    });

    if (error) {
      console.error(
        `Échec de l'envoi Resend pour la session ${session.id} (${customerEmail}) :`,
        error,
      );
    }
  } catch (err) {
    // On répond quand même 200 à Stripe pour éviter des tentatives de renvoi
    // en boucle ; l'erreur reste visible dans les logs Vercel pour un envoi
    // manuel de rattrapage à ce client.
    console.error(
      `Échec de l'envoi de l'e-book pour la session ${session.id} (${customerEmail}) :`,
      err,
    );
  }

  return NextResponse.json({ received: true });
}
