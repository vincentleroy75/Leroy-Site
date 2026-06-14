// Configuration centrale du site.
// Remplacer les placeholders ci-dessous avant la mise en ligne.

export const siteConfig = {
  name: "Vincent Leroy",
  fullName: "Vincent Leroy — AXA Prévoyance & Patrimoine",
  role: "Agent Général AXA Prévoyance & Patrimoine",
  url: "https://www.vincentleroy-axa.fr",
  description:
    "Vincent Leroy, Agent Général AXA, accompagne professionnels, dirigeants et particuliers en prévoyance, retraite (PER), santé et protection sociale à Paris et dans le Val-de-Marne.",

  // --- À COMPLÉTER AVANT MISE EN LIGNE ---
  phone: "[TELEPHONE_A_COMPLETER]",
  phoneHref: "tel:+33000000000",
  email: "[EMAIL_A_COMPLETER]",
  address: "[ADRESSE_A_COMPLETER]",
  orias: "[ORIAS_A_COMPLETER]",
  siret: "[SIRET_A_COMPLETER]",
  calendly: "[LIEN_CALENDLY_A_COMPLETER]",
  // ----------------------------------------

  zones: ["Paris", "Vincennes", "Saint-Mandé", "Charenton", "Nogent-sur-Marne", "Montreuil", "Val-de-Marne"],
} as const

export type SiteConfig = typeof siteConfig
