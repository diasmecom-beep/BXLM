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
  url: "https://bxlm-five.vercel.app",

  /** Adresse vers laquelle pointent tous les boutons de commande. */
  orderEmail: "hello@bxlm.be",
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

/**
 * Offres. `price` s'affiche tel quel — mettez le montant (« 9 € »)
 * ou laissez une mention comme « sur demande ».
 */
export const offers = {
  ebook: {
    kicker: "Numérique",
    title: "E-book",
    format: "EPUB + PDF · sans DRM",
    lines: [
      { strong: "Licence individuelle", rest: " — un lecteur, tous ses appareils" },
      {
        strong: "Licence établissement",
        rest: " — diffusion interne à une classe, un cours, un groupe",
      },
      { strong: "", rest: "Extrait de consultation envoyé sur simple demande" },
      { strong: "", rest: "Livraison par lien de téléchargement sous 48 h" },
    ],
    cta: "Demander l’e-book",
    note: "Tarif communiqué selon le type de licence.",
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
    lines: [
      { strong: "À l’unité", rest: " — pour découvrir ou offrir" },
      { strong: "Lot classe (10 ex.)", rest: " — tarif dégressif" },
      { strong: "Lot atelier (30 ex.)", rest: " — tarif dégressif renforcé" },
      { strong: "", rest: "Facture et bon de commande pour les établissements" },
    ],
    cta: "Commander la version papier",
    note: "Frais de port calculés selon la destination et la quantité.",
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
    text: "Des dizaines d’associations se réunissent chez Change asbl. Les autorités fédérales s’opposent au rassemblement ; la Ville de Bruxelles finit par le tolérer en se déresponsabilisant à l’avance.",
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
    text: "Change asbl emmène une centaine de jeunes en RDC : université de Kinshasa, Académie des Beaux-Arts, musées, agro-écologie. L’éducation à la citoyenneté mondiale comme prolongement de la rue.",
  },
];

/** Les six portes d'entrée pédagogiques. */
export const entryPoints: {
  k: string;
  title: string;
  text: string;
  question: string;
}[] = [
  {
    k: "Institutions",
    title: "Violences policières & État",
    text: "Comment manifester contre la police tout en négociant avec elle le maintien de l’ordre ? Le livre montre ce dilemme en temps réel.",
    question: "Peut-on collaborer avec une institution que l’on conteste ?",
  },
  {
    k: "Racisme",
    title: "Négrophobie & racisme structurel",
    text: "Logement, santé mentale, école, emploi : la manifestation lie les violences policières à un système plus large.",
    question: "Qu’est-ce qui distingue un préjugé d’un racisme structurel ?",
  },
  {
    k: "Mémoire",
    title: "Colonialité & récit national",
    text: "Du Code noir aux regrets du Roi Philippe : quelle place l’histoire coloniale occupe-t-elle dans l’espace public ?",
    question: "Qui a le droit de raconter cette histoire ?",
  },
  {
    k: "Citoyenneté",
    title: "Éducation à la citoyenneté mondiale",
    text: "Le « Sud » au « Nord » et inversement : identités plurielles, diasporas, liens avec les terres d’origine.",
    question: "De quoi ai-je hérité, et qu’est-ce que je choisis ?",
  },
  {
    k: "Mouvements",
    title: "Organiser & se faire déposséder",
    text: "Récupération médiatique, guerre des leaderships, rôle des réseaux sociaux dans l’emballement comme dans l’apaisement.",
    question: "À qui appartient un mouvement social ?",
  },
  {
    k: "Solidarités",
    title: "Alliances intercommunautaires",
    text: "Tensions entre jeunes maghrébins et subsahariens, place des femmes, des militant·es LGBTQIA+, des écologistes de terrain.",
    question: "Qu’est-ce qui fait tenir une alliance fragile ?",
  },
];

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
