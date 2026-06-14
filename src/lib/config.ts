export const SITE_CONFIG = {
  name: "Vincent Leroy – AXA Prévoyance & Patrimoine",
  shortName: "Vincent Leroy AXA",
  url: "https://www.vincentleroy-axa.fr",
  description:
    "Agent AXA Prévoyance & Patrimoine à Paris et Vincennes. Conseil en prévoyance, retraite, santé, assurance emprunteur et protection sociale pour dirigeants, professions libérales et entreprises.",
  phone: "[TELEPHONE_A_COMPLETER]",
  email: "[EMAIL_A_COMPLETER]",
  address: "[ADRESSE_A_COMPLETER]",
  city: "Paris / Vincennes",
  region: "Val-de-Marne – Île-de-France",
  orias: "[ORIAS_A_COMPLETER]",
  siret: "[SIRET_A_COMPLETER]",
  calendly: "[LIEN_CALENDLY_A_COMPLETER]",
  social: {
    linkedin: "[LIEN_LINKEDIN_A_COMPLETER]",
  },
};

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  {
    label: "Prévoyance",
    href: "/prevoyance-professionnelle",
    children: [
      { label: "Prévoyance professionnelle", href: "/prevoyance-professionnelle" },
      { label: "Prévoyance dirigeant", href: "/prevoyance-dirigeant" },
      { label: "Professions libérales", href: "/professions-liberales" },
    ],
  },
  { label: "Retraite & PER", href: "/retraite-per" },
  { label: "Santé", href: "/complementaire-sante" },
  { label: "Assurance emprunteur", href: "/assurance-emprunteur" },
  { label: "Entreprises", href: "/protection-sociale-entreprise" },
  { label: "Ressources", href: "/ressources" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const DISCLAIMER =
  "Les informations présentées sur ce site sont générales et ne constituent pas un conseil personnalisé. Une étude individuelle est nécessaire avant toute recommandation. Sous réserve d'éligibilité et des conditions contractuelles.";
