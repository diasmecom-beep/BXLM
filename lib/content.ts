/**
 * ─────────────────────────────────────────────────────────────
 *  BXLM — contenu éditable
 * ─────────────────────────────────────────────────────────────
 *  Modifiez ce fichier pour mettre à jour : l'adresse de commande,
 *  les tarifs, l'URL du site et les métadonnées du livre.
 *  Aucune autre partie du code n'a besoin d'être touchée.
 */

export const site = {
  /** URL de production (sans slash final). Sert au SEO et aux liens de partage. */
  url: "https://www.bxlm.site",

  /** Adresse vers laquelle pointent tous les boutons de commande. */
  orderEmail: "hello@bxlm.site",
};

export const book = {
  title: "BXLM",
  subtitle:
    "Le récit de première main de la plus grande mobilisation contre la négrophobie de l’histoire belge.",
  authors: "Tayino Chérubin & Dido Lakama",
  photographer: "Teddy Mazina",
  collection: "Chimen Zanset",
  coverDesign: "BMH",
  layout: "Aymeric Maricq",
  year: "2026",
  format: "Poche, 105 × 175 mm",
  pages: "64, illustré N&B",
  language: "Français",
};

export const specs: { label: string; value: string }[] = [
  { label: "Titre", value: book.title },
  { label: "Auteurs", value: book.authors },
  { label: "Format", value: book.format },
  { label: "Pages", value: book.pages },
  { label: "Photographies", value: book.photographer },
  { label: "Collection", value: book.collection },
  { label: "Parution", value: book.year },
  { label: "Langue", value: book.language },
];

/** Bande vidéo : court extrait du documentaire de Change asbl, en écho au QR code imprimé dans le livre. */
export const video = {
  /** Titre du documentaire (chaîne Change asbl). */
  title: "« Black Lives Matter à Bruxelles »",
  credit: "Change asbl",
  /**
   * Fichier vidéo (dans public/). Pour le remplacer : déposez le nouveau
   * fichier dans public/ et mettez à jour ces deux chemins.
   */
  fileSrc: "/extrait-documentaire.mp4",
  poster: "/extrait-poster.jpg",
  qrNote:
    "Vidéo complète disponible via un QR code dans chaque exemplaire du livre",
};

/**
 * Offres. `price` s'affiche tel quel — mettez le montant (« 9 € »)
 * ou laissez une mention comme « sur demande ».
 */
export const offers = {
  ebook: {
    kicker: "Numérique",
    title: "E-book",
    format: "EPUB + PDF · sans DRM",
    price: "10 €",
    priceCents: 1000,
    /**
     * Lien de paiement Stripe (Payment Link). Actuellement en MODE TEST —
     * aucun paiement réel n'est débité. Voir README.md § 5 pour passer en
     * production.
     */
    paymentLink: "https://buy.stripe.com/7sYbJ16mvezWcMdbWLffy09",
    paymentCta: "Payer 10 € — recevoir l’e-book",
    lines: [
      {
        strong: "Licence individuelle",
        rest: " — 10 €, un lecteur, tous ses appareils",
      },
      {
        strong: "Licence établissement",
        rest: " — diffusion interne à une classe, un cours, un groupe, tarif sur demande",
      },
      { strong: "", rest: "Extrait de consultation envoyé sur simple demande" },
      { strong: "", rest: "Livraison par lien de téléchargement sous 48 h" },
    ],
    mailCta: "Licence établissement / devis",
    note: "10 € en licence individuelle, paiement sécurisé par Stripe — l’e-book arrive par e-mail dans les minutes qui suivent. Licence établissement : tarif sur demande.",
    mailSubject: "BXLM — demande e-book",
    mailBody: [
      "Bonjour,",
      "",
      "Je souhaite obtenir l'e-book BXLM (EPUB + PDF).",
      "",
      "- Type de licence souhaité : individuelle / établissement",
      "- Organisme :",
      "- Nombre de lecteurs / groupe concerné :",
      "- Merci de m'indiquer le tarif et les modalités.",
      "",
      "Cordialement,",
    ].join("\n"),
  },
  paper: {
    kicker: "Imprimé",
    title: "Version papier",
    format: "Poche 105 × 175 mm · 64 p.",
    price: "12 €",
    priceCents: 1200,
    /**
     * Lien de paiement Stripe (Payment Link), collecte l'adresse de
     * livraison. MODE TEST — voir README.md § 5 pour passer en production.
     */
    paymentLink: "https://buy.stripe.com/14AeVd3aj8by8vXgd1ffy0a",
    paymentCta: "Payer 12 € — commander l’exemplaire",
    lines: [
      { strong: "À l’unité", rest: " — 12 €, pour découvrir ou offrir" },
      { strong: "Lot classe (10 ex.)", rest: " — tarif dégressif, sur devis" },
      { strong: "Lot atelier (30 ex.)", rest: " — tarif dégressif renforcé, sur devis" },
      { strong: "", rest: "Facture et bon de commande pour les établissements" },
    ],
    mailCta: "Lot classe / devis",
    note: "12 € l’unité, port compris, paiement sécurisé par Stripe. Tarif dégressif par lot sur devis.",
    mailSubject: "BXLM — commande version papier",
    mailBody: [
      "Bonjour,",
      "",
      "Je souhaite commander la version papier de BXLM (poche, 64 p.).",
      "",
      "- Quantité : 1 / lot de 10 / lot de 30 / autre :",
      "- Organisme :",
      "- Adresse de livraison :",
      "- Adresse de facturation (si différente) :",
      "- Bon de commande à établir : oui / non",
      "",
      "Merci de m'indiquer le tarif, les frais de port et le délai.",
      "",
      "Cordialement,",
    ].join("\n"),
  },
  deskCopy: {
    cta: "Recevoir un exemplaire",
    mailSubject: "BXLM — exemplaire de consultation",
    mailBody: [
      "Bonjour,",
      "",
      "J'enseigne / je forme au sein de l'organisme suivant :",
      "- Organisme :",
      "- Fonction :",
      "- Public et niveau :",
      "- Usage envisagé :",
      "",
      "Je souhaite recevoir un exemplaire de consultation de BXLM afin d'évaluer une commande groupée.",
      "",
      "Adresse d'envoi :",
      "",
      "Cordialement,",
    ].join("\n"),
  },
  general: {
    mailSubject: "BXLM — renseignements",
    mailBody: "Bonjour,\n\n",
  },
};

/** Frise chronologique du récit. */
export const timeline: { when: string; title: string; text: string }[] = [
  {
    when: "31 mai",
    title: "L’appel annulé",
    text: "Un collectif de militantes néerlandophones lance un appel à manifester place de la Monnaie, puis l’annule sous la pression de certains responsables politiques.",
  },
  {
    when: "31 mai",
    title: "Le sit-in maintenu",
    text: "Sous l’impulsion de Change asbl, un cercle silencieux se forme malgré tout : mains sur la bouche, à genoux, une minute pour George Floyd. « Quelque chose vient de se passer. »",
  },
  {
    when: "1–6 juin",
    title: "Une semaine de tractations",
    text: "Des dizaines d’associations se réunissent chez Change asbl. Les autorités fédérales s’opposent officiellement au rassemblement ; la pression sur les épaules des organisateurs atteint son paroxysme.",
  },
  {
    when: "6 juin",
    title: "La bataille du slogan",
    text: "Négrophobie uniquement, ou toutes les violences policières ? Le désaccord fracture les organisations. Une vidéo de clarification, 400 000 vues la veille, apaise les communautés.",
  },
  {
    when: "7 juin",
    title: "Le rassemblement",
    text: "Dix mille personnes selon la police, vingt mille selon les organisateurs. Le père de Lamine Bangoura prend la parole ; l’histoire, largement méconnue, trouve enfin un écho.",
  },
  {
    when: "Après",
    title: "La récupération — et les suites",
    text: "Des figures absentes des préparatifs s’approprient l’événement devant les caméras. Mais la mobilisation débouche sur deux commissions parlementaires et sur le plan bruxellois de lutte contre le racisme.",
  },
  {
    when: "2021 +",
    title: "Le voyage vers la Terre Mère",
    text: "Change asbl emmène une quinzaine de jeunes en RDC : université de Kinshasa, Académie des Beaux-Arts, musées, agro-écologie. L’éducation à la citoyenneté mondiale comme prolongement de la rue.",
  },
];

/** Les six portes d'entrée pédagogiques. */
export const entryPoints: {
  id: string;
  k: string;
  title: string;
  text: string;
  question: string;
}[] = [
  {
    id: "institutions",
    k: "Institutions",
    title: "Violences policières & État",
    text: "Comment manifester contre la police tout en négociant avec elle le maintien de l’ordre ? Le livre montre ce dilemme en temps réel.",
    question: "Peut-on collaborer avec une institution que l’on conteste ?",
  },
  {
    id: "racisme",
    k: "Racisme",
    title: "Négrophobie & racisme structurel",
    text: "Logement, santé mentale, école, emploi : la manifestation lie les violences policières à un système plus large.",
    question: "Qu’est-ce qui distingue un préjugé d’un racisme structurel ?",
  },
  {
    id: "memoire",
    k: "Mémoire",
    title: "Colonialité & récit national",
    text: "Du Code noir aux regrets du Roi Philippe : quelle place l’histoire coloniale occupe-t-elle dans l’espace public ?",
    question: "Qui a le droit de raconter cette histoire ?",
  },
  {
    id: "citoyennete",
    k: "Citoyenneté",
    title: "Éducation à la citoyenneté mondiale",
    text: "Le « Sud » au « Nord » et inversement : identités plurielles, diasporas, liens avec les terres d’origine.",
    question: "De quoi ai-je hérité, et qu’est-ce que je choisis ?",
  },
  {
    id: "mouvements",
    k: "Mouvements",
    title: "Organiser & se faire déposséder",
    text: "Récupération médiatique, guerre des leaderships, rôle des réseaux sociaux dans l’emballement comme dans l’apaisement.",
    question: "À qui appartient un mouvement social ?",
  },
  {
    id: "solidarites",
    k: "Solidarités",
    title: "Alliances intercommunautaires",
    text: "Tensions entre jeunes maghrébins et subsahariens, place des femmes, des militant·es LGBTQIA+, des écologistes de terrain.",
    question: "Qu’est-ce qui fait tenir une alliance fragile ?",
  },
];

/**
 * Formations proposées par les auteurs, déclinables sur chacune des six
 * portes d'entrée. Grille indicative — à ajuster librement ici.
 */
export const training = {
  intro:
    "Chaque porte d’entrée peut se prolonger en atelier ou en formation avec les auteurs, adaptée à votre groupe.",
  formats: [
    {
      id: "decouverte",
      name: "Atelier découverte",
      duration: "2 h",
      audience: "1 classe ou 1 groupe (30 pers. max)",
      price: "180 €",
      details:
        "Lecture d’extraits et discussion guidée autour de la porte d’entrée choisie. Présentiel ou distanciel.",
    },
    {
      id: "approfondi",
      name: "Atelier approfondi",
      duration: "Demi-journée (3 h 30)",
      audience: "1 à 2 groupes",
      price: "320 €",
      details:
        "Atelier suivi d’une activité pratique (débat mouvant, écriture, analyse de sources). Présentiel.",
    },
    {
      id: "journee",
      name: "Journée pédagogique",
      duration: "Journée complète (6 h)",
      audience: "Établissement (plusieurs classes)",
      price: "550 €",
      details:
        "Plusieurs ateliers dans la journée et restitution collective, en présence des auteurs.",
    },
    {
      id: "formation-continue",
      name: "Cycle formation continue",
      duration: "3 séances de 2 h",
      audience: "Équipes pédagogiques ou formateur·ices",
      price: "950 € (forfait)",
      details:
        "Cycle destiné aux enseignant·es et formateur·ices pour s’approprier les six portes d’entrée.",
    },
  ],
  logistics: [
    "Déplacement inclus en Région bruxelloise ; au-delà, forfait kilométrique en sus, précisé au devis.",
    "Réservation conseillée 4 à 6 semaines à l’avance (8 semaines pour une journée ou un cycle).",
    "Tarif adaptable pour les associations à budget réduit — n’hésitez pas à nous consulter.",
  ],
  note: "Grille indicative 2026. Devis personnalisé envoyé sous 5 jours ouvrés selon la porte d’entrée et la formule choisies.",
};

export const whyPoints: { title: string; text: string }[] = [
  {
    title: "Format de poche, 64 pages",
    text: "Se lit en une séance. Un exemplaire par élève reste abordable en set de classe.",
  },
  {
    title: "Une source primaire",
    text: "Témoignage direct des organisateurs et photographies documentaires de Teddy Mazina : matière brute pour un travail sur les sources.",
  },
  {
    title: "Ancré dans le contexte belge",
    text: "Lamine Bangoura, Mehdi, la colonisation du Congo, le Palais de Justice : des repères proches des élèves.",
  },
  {
    title: "Des paradoxes assumés",
    text: "Le texte expose ses propres contradictions : idéal pour exercer l’esprit critique plutôt que délivrer une leçon.",
  },
];

/** Utilitaire : construit un lien mailto encodé. */
export function mailto(subject: string, body: string): string {
  return `mailto:${site.orderEmail}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
