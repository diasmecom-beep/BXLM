# BXLM — page vitrine

Site vitrine du livre **BXLM** (Tayino Chérubin & Dido Lakama), à destination
des organismes pédagogiques : présentation de l'ouvrage, pistes d'exploitation
en classe, commande de l'e-book et de la version papier.

Construit avec **Next.js 16** (App Router) + TypeScript. Pas de base de données :
les formulaires de formation ouvrent un e-mail pré-rempli, et l'achat du livre
passe par des **Stripe Payment Links** (carte, Bancontact, iDEAL, PayPal…). Un webhook Stripe envoie automatiquement l'e-book par e-mail dès
qu'un paiement e-book est confirmé — voir **section 5**.

---

## 1. Ce qu'il faut personnaliser

Tout le contenu modifiable est regroupé dans **`lib/content.ts`** :

| À changer | Où |
| --- | --- |
| Adresse e-mail de commande | `site.orderEmail` (actuellement `hello@bxlm.site`) |
| URL de production (SEO / partage) | `site.url` |
| Tarifs, mentions, texte des offres | `offers.ebook`, `offers.paper` |
| Formules de formation (portes d'entrée) | `training` |
| Fiche technique | `book`, `specs` |
| Frise du récit / portes d'entrée pédagogiques | `timeline`, `entryPoints`, `whyPoints` |

Les photographies sont dans `app/assets/`. L'image de partage (Open Graph) est
`public/og.jpg`.

> **Droits d'image.** Les photos proviennent du livre (© Teddy Mazina).
> Vérifiez l'autorisation de diffusion en ligne avant toute mise en production
> publique.

---

## 2. Lancer en local

Prérequis : Node.js 18.18+ (20+ recommandé).

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:3000.

Pour tester la version de production :

```bash
npm run build
npm run start
```

---

## 3. Déployer sur Vercel

### Option A — depuis GitHub (recommandé)

1. Poussez ce dossier sur un dépôt GitHub / GitLab / Bitbucket.
2. Sur [vercel.com](https://vercel.com) : **Add New… → Project**, importez le dépôt.
3. Vercel détecte Next.js automatiquement — aucun réglage à changer.
   Cliquez **Deploy**.
4. Après le déploiement, renseignez l'URL obtenue dans `site.url`
   (`lib/content.ts`), commitez, le site se redéploie tout seul.

### Option B — CLI

```bash
npm i -g vercel
vercel          # préversion
vercel --prod   # production
```

### Domaine personnalisé

Project → **Settings → Domains** : ajoutez votre nom de domaine et suivez les
instructions DNS.

---

## 4. Structure

```
app/
  layout.tsx              métadonnées, polices (next/font)
  page.tsx                toute la page vitrine
  globals.css             charte graphique (couleurs, typographie)
  icon.svg, apple-icon.tsx favicons
  assets/                 photographies
  api/stripe-webhook/     webhook Stripe → envoi automatique de l'e-book
components/
  PedagogyCards.tsx       pop-ups tarifs formation + formulaire de réservation
lib/
  content.ts              ← contenu éditable (e-mail, tarifs, textes)
public/
  og.jpg                  image de partage réseaux sociaux
```

---

## 5. Paiement en ligne et envoi automatique de l'e-book

### Comment ça marche

1. Les boutons « Se procurer » pointent vers deux **Stripe Payment Links**
   (créés dans le tableau de bord Stripe → Payment Links, un pour l'e-book à
   10 €, un pour la version papier à 12 € avec collecte d'adresse de
   livraison). Stripe gère seul l'affichage des moyens de paiement
   disponibles (carte, Bancontact, iDEAL, PayPal…).
2. Chaque produit Stripe porte une **métadonnée `sku`** (`ebook` ou `paper`)
   — c'est ce qui permet au code de savoir quoi faire après paiement, sans
   dépendre d'un identifiant de prix qui change entre le mode test et le
   mode production.
3. À chaque paiement réussi, Stripe appelle le webhook
   `app/api/stripe-webhook/route.ts`. S'il s'agit de l'e-book, le serveur
   récupère l'EPUB stocké sur **Vercel Blob** (privé) et l'envoie par e-mail
   via **Resend**, à l'adresse indiquée par l'acheteur au paiement.
4. Pour la version papier, rien n'est automatisé (expédition physique) :
   la commande et l'adresse de livraison restent consultables dans le
   tableau de bord Stripe.

### Variables d'environnement à configurer dans Vercel

Project → **Settings → Environment Variables** (type **Secret**) :

| Variable | Où la trouver |
| --- | --- |
| `STRIPE_SECRET_KEY` | Stripe → Developers → API keys (une **clé restreinte**, lecture seule, suffit) |
| `STRIPE_WEBHOOK_SECRET` | Stripe → Developers → Webhooks → votre endpoint → « Signing secret » |
| `RESEND_API_KEY` | [resend.com](https://resend.com) → API Keys |
| `RESEND_FROM_EMAIL` *(optionnel)* | une adresse sur un domaine vérifié dans Resend, ex. `hello@bxlm.site`. Sans cette variable, les e-mails partent de `onboarding@resend.dev` (fonctionne sans vérification de domaine, mais moins pro). |

`BLOB_READ_WRITE_TOKEN` et les autres variables `BLOB_*` sont ajoutées
automatiquement par Vercel lors de la connexion du store Blob au projet —
rien à faire manuellement pour celles-ci.

### Mettre à jour le fichier e-book

L'EPUB vendu est stocké dans le store Vercel Blob **`bxlm-blob`**, sous le
chemin `ebooks/bxlm.epub` (accès **privé** — personne ne peut le télécharger
sans passer par un paiement). Pour le remplacer : Vercel → Storage →
`bxlm-blob` → Manage Blobs → uploadez le nouveau fichier au même chemin
(`ebooks/bxlm.epub`), ou changez `EBOOK_BLOB_PATH` dans
`app/api/stripe-webhook/route.ts` si vous préférez un autre chemin.

### Passer du mode test au mode production Stripe

Les Payment Links et la clé API créés pour la mise au point sont en **mode
test** (aucun vrai paiement). Pour encaisser réellement :

1. Dans Stripe, basculez en mode **Live** (bouton en haut du tableau de
   bord) et recréez les deux produits (E-book 10 €, Version papier 12 €)
   avec la **même métadonnée `sku`** (`ebook` / `paper`).
2. Recréez les deux Payment Links en mode live, et remplacez les URLs dans
   `lib/content.ts` (`offers.ebook.mailSubject`/liens — voir les boutons
   dans `app/page.tsx`).
3. Recréez le webhook en mode live vers la même URL
   (`/api/stripe-webhook`), récupérez son nouveau *signing secret*.
4. Créez une nouvelle clé API restreinte en mode live.
5. Remplacez `STRIPE_SECRET_KEY` et `STRIPE_WEBHOOK_SECRET` dans Vercel par
   ces valeurs live.

> Test et production sont deux univers Stripe totalement séparés (clés,
> produits, webhooks) : rien de ce qui est créé en mode test n'apparaît en
> mode live, et inversement.
