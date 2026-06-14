// Données structurées du site : services, professions, zones locales, articles.
// Les contenus respectent le cadre prudentiel de distribution d'assurance.

export type FAQ = { question: string; answer: string }

export type ContentSection = { title: string; paragraphs: string[]; bullets?: string[] }

export type ServicePage = {
  slug: string
  navLabel: string
  title: string
  metaTitle: string
  metaDescription: string
  hero: { eyebrow: string; heading: string; intro: string }
  sections: ContentSection[]
  faqs: FAQ[]
}

export type ProfessionPage = {
  slug: string
  profession: string
  metaTitle: string
  metaDescription: string
  hero: { eyebrow: string; heading: string; intro: string }
  enjeux: string[]
  sections: ContentSection[]
  faqs: FAQ[]
}

export type LocationPage = {
  slug: string
  city: string
  metaTitle: string
  metaDescription: string
  intro: string
  context: string[]
}

export type Article = {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  category: string
  content: ContentSection[]
}

// ---------------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------------

export const services: ServicePage[] = [
  {
    slug: "prevoyance-professionnelle",
    navLabel: "Prévoyance professionnelle",
    title: "Prévoyance professionnelle",
    metaTitle: "Prévoyance professionnelle | Vincent Leroy — Agent Général AXA",
    metaDescription:
      "Protégez vos revenus en cas d'arrêt de travail, d'invalidité ou de décès. Bilan de prévoyance professionnelle personnalisé à Paris et dans le Val-de-Marne.",
    hero: {
      eyebrow: "Service",
      heading: "Prévoyance professionnelle",
      intro:
        "Lorsque l'activité repose sur vous, un arrêt de travail peut fragiliser vos revenus et votre entreprise. Une étude personnalisée permet d'identifier les garanties adaptées à votre situation.",
    },
    sections: [
      {
        title: "Pourquoi la prévoyance est essentielle pour les actifs",
        paragraphs: [
          "Le régime obligatoire couvre rarement l'intégralité des revenus en cas d'incapacité de travail. Pour les indépendants et les professions libérales, l'écart peut être important.",
          "Un contrat de prévoyance vient compléter ces régimes afin de maintenir un niveau de ressources cohérent avec vos charges et votre niveau de vie, sous réserve d'éligibilité et des conditions contractuelles.",
        ],
        bullets: [
          "Indemnités journalières en cas d'arrêt de travail",
          "Rente d'invalidité partielle ou totale",
          "Capital ou rente versés aux bénéficiaires en cas de décès",
        ],
      },
      {
        title: "Une approche par bilan personnalisé",
        paragraphs: [
          "Chaque situation est différente : statut, charges fixes, composition du foyer, régime obligatoire. C'est pourquoi une analyse personnalisée est nécessaire avant toute recommandation.",
          "Le bilan permet de dimensionner les garanties au plus juste, sans sur-assurance ni zones non couvertes.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quelle différence entre prévoyance et mutuelle santé ?",
        answer:
          "La complémentaire santé rembourse les frais de soins. La prévoyance protège vos revenus en cas d'arrêt de travail, d'invalidité ou de décès. Les deux sont complémentaires.",
      },
      {
        question: "À partir de quel statut la prévoyance est-elle utile ?",
        answer:
          "Dès lors que vos revenus dépendent de votre activité, un bilan est pertinent. Les indépendants et professions libérales y sont particulièrement exposés.",
      },
    ],
  },
  {
    slug: "prevoyance-dirigeant",
    navLabel: "Prévoyance dirigeant",
    title: "Prévoyance dirigeant",
    metaTitle: "Prévoyance du dirigeant | Vincent Leroy — Agent Général AXA",
    metaDescription:
      "Dirigeant assimilé salarié ou TNS : protégez vos revenus et la pérennité de votre entreprise. Étude de prévoyance dédiée aux dirigeants.",
    hero: {
      eyebrow: "Service",
      heading: "Prévoyance du dirigeant",
      intro:
        "Le statut du dirigeant (TNS ou assimilé salarié) influence directement le niveau de protection sociale. Une étude dédiée permet d'aligner vos garanties sur vos responsabilités.",
    },
    sections: [
      {
        title: "Protéger le dirigeant et l'entreprise",
        paragraphs: [
          "Un arrêt prolongé du dirigeant peut affecter la continuité de l'activité. Au-delà de la protection personnelle, certains dispositifs visent à préserver l'entreprise (frais généraux, homme clé).",
          "Le choix des garanties dépend du statut social, de la rémunération et de l'organisation de la société.",
        ],
        bullets: [
          "Maintien de revenus en cas d'incapacité ou d'invalidité",
          "Garantie frais généraux permanents",
          "Protection du conjoint et des associés",
        ],
      },
    ],
    faqs: [
      {
        question: "Le statut TNS change-t-il la couverture nécessaire ?",
        answer:
          "Oui. Les Travailleurs Non Salariés ont une protection obligatoire plus limitée, ce qui rend l'analyse des garanties complémentaires d'autant plus importante.",
      },
    ],
  },
  {
    slug: "retraite-per",
    navLabel: "Retraite & PER",
    title: "Retraite et Plan Épargne Retraite (PER)",
    metaTitle: "Retraite & PER | Vincent Leroy — Agent Général AXA",
    metaDescription:
      "Préparez votre retraite avec un Plan Épargne Retraite adapté. Le PER peut permettre, selon votre situation, de constituer un complément de revenus.",
    hero: {
      eyebrow: "Service",
      heading: "Retraite & Plan Épargne Retraite",
      intro:
        "Anticiper la baisse de revenus à la retraite demande une stratégie d'épargne progressive. Le PER est l'un des outils à étudier dans le cadre d'un bilan.",
    },
    sections: [
      {
        title: "Comprendre le PER",
        paragraphs: [
          "Le Plan Épargne Retraite permet de constituer une épargne disponible sous forme de capital ou de rente au moment de la retraite, dans le respect des conditions du contrat.",
          "Les versements peuvent, selon votre situation fiscale, offrir un cadre avantageux. Une analyse personnalisée est nécessaire pour en mesurer la pertinence.",
        ],
        bullets: [
          "Sortie en capital, en rente ou de façon mixte",
          "Versements libres ou programmés",
          "Cas de déblocage anticipé prévus par la réglementation",
        ],
      },
    ],
    faqs: [
      {
        question: "Le PER permet-il de réduire ses impôts ?",
        answer:
          "Les versements volontaires peuvent, selon votre situation, être déductibles du revenu imposable dans les limites prévues. Un bilan permet d'évaluer l'intérêt réel selon votre tranche.",
      },
    ],
  },
  {
    slug: "complementaire-sante",
    navLabel: "Complémentaire santé",
    title: "Complémentaire santé",
    metaTitle: "Complémentaire santé | Vincent Leroy — Agent Général AXA",
    metaDescription:
      "Choisissez une complémentaire santé adaptée à vos besoins de soins et à votre budget. Comparaison de garanties pour particuliers et professionnels.",
    hero: {
      eyebrow: "Service",
      heading: "Complémentaire santé",
      intro:
        "Les besoins de soins varient selon l'âge, la situation familiale et les habitudes médicales. Le bon niveau de garanties dépend de votre profil.",
    },
    sections: [
      {
        title: "Adapter les garanties à vos besoins réels",
        paragraphs: [
          "Optique, dentaire, hospitalisation, médecines douces : chaque poste de soins mérite d'être évalué selon vos usages.",
          "L'objectif est d'obtenir un niveau de remboursement cohérent avec votre budget, sans payer pour des garanties inutiles.",
        ],
      },
    ],
    faqs: [
      {
        question: "Puis-je changer de complémentaire santé en cours d'année ?",
        answer:
          "Après douze mois, la résiliation est généralement possible à tout moment. Un point sur vos garanties actuelles permet d'identifier d'éventuels ajustements.",
      },
    ],
  },
  {
    slug: "assurance-emprunteur",
    navLabel: "Assurance emprunteur",
    title: "Assurance emprunteur",
    metaTitle: "Assurance emprunteur | Vincent Leroy — Agent Général AXA",
    metaDescription:
      "Assurance de prêt immobilier : comparez les garanties décès, invalidité et incapacité. La délégation d'assurance peut permettre, selon votre profil, des conditions adaptées.",
    hero: {
      eyebrow: "Service",
      heading: "Assurance emprunteur",
      intro:
        "L'assurance de prêt représente une part significative du coût d'un crédit immobilier. Comparer les garanties est essentiel.",
    },
    sections: [
      {
        title: "Délégation d'assurance et garanties",
        paragraphs: [
          "La réglementation permet de choisir une assurance différente de celle proposée par la banque, sous réserve d'une équivalence de garanties.",
          "Une étude permet de vérifier l'adéquation des garanties (décès, PTIA, invalidité, incapacité) avec les exigences de votre prêt.",
        ],
      },
    ],
    faqs: [
      {
        question: "Puis-je changer d'assurance emprunteur à tout moment ?",
        answer:
          "La législation permet la résiliation à tout moment, sous réserve de présenter des garanties équivalentes acceptées par la banque.",
      },
    ],
  },
  {
    slug: "protection-sociale-entreprise",
    navLabel: "Protection sociale entreprise",
    title: "Protection sociale de l'entreprise",
    metaTitle: "Protection sociale entreprise | Vincent Leroy — Agent Général AXA",
    metaDescription:
      "Mutuelle collective, prévoyance et retraite d'entreprise : structurez la protection sociale de vos salariés en conformité avec vos obligations.",
    hero: {
      eyebrow: "Service",
      heading: "Protection sociale de l'entreprise",
      intro:
        "Mettre en place une protection sociale collective conforme renforce l'attractivité de l'entreprise tout en respectant les obligations légales.",
    },
    sections: [
      {
        title: "Structurer les garanties collectives",
        paragraphs: [
          "Complémentaire santé obligatoire, prévoyance collective, épargne salariale et retraite : chaque dispositif répond à des obligations et à des objectifs précis.",
          "Un audit permet de vérifier la conformité des contrats existants et d'identifier les axes d'amélioration.",
        ],
        bullets: [
          "Mutuelle collective conforme à l'ANI",
          "Prévoyance cadres et non-cadres",
          "Dispositifs d'épargne et de retraite collective",
        ],
      },
    ],
    faqs: [
      {
        question: "La complémentaire santé collective est-elle obligatoire ?",
        answer:
          "Oui, l'employeur du secteur privé doit proposer une complémentaire santé à ses salariés et en financer au moins la moitié, selon les règles en vigueur.",
      },
    ],
  },
]

// ---------------------------------------------------------------------------
// PROFESSIONS LIBÉRALES
// ---------------------------------------------------------------------------

function professionTemplate(
  slug: string,
  profession: string,
  enjeux: string[],
  caisse: string,
): ProfessionPage {
  return {
    slug,
    profession,
    metaTitle: `Prévoyance ${profession} | Vincent Leroy — Agent Général AXA`,
    metaDescription: `Solution de prévoyance et retraite dédiée aux ${profession.toLowerCase()}. Bilan personnalisé tenant compte de votre régime et de votre activité à Paris et en Val-de-Marne.`,
    hero: {
      eyebrow: "Professions libérales",
      heading: `Prévoyance pour ${profession.toLowerCase()}`,
      intro: `En tant que ${profession.toLowerCase()}, vos revenus dépendent directement de votre activité. Une étude dédiée permet d'adapter vos garanties à votre exercice et à votre régime obligatoire.`,
    },
    enjeux,
    sections: [
      {
        title: "Les spécificités de votre régime",
        paragraphs: [
          `Votre protection sociale obligatoire (${caisse}) couvre une partie des risques, mais laisse souvent un écart de revenus en cas d'arrêt prolongé.`,
          "Une analyse personnalisée est nécessaire pour mesurer cet écart et déterminer les garanties complémentaires pertinentes, sous réserve d'éligibilité et des conditions contractuelles.",
        ],
      },
      {
        title: "Adapter la prévoyance à votre exercice",
        paragraphs: [
          "Charges fixes du cabinet, indemnités journalières, invalidité, protection du foyer : chaque dimension est étudiée dans le cadre d'un bilan complet.",
        ],
        bullets: enjeux,
      },
    ],
    faqs: [
      {
        question: `Pourquoi une prévoyance dédiée aux ${profession.toLowerCase()} ?`,
        answer:
          "Chaque profession a un régime obligatoire et des charges spécifiques. Une étude dédiée permet d'ajuster les garanties au plus près de la réalité de votre exercice.",
      },
      {
        question: "Comment se déroule le bilan ?",
        answer:
          "Le bilan consiste à analyser votre situation, votre régime obligatoire et vos charges, puis à formuler des recommandations personnalisées. Aucun engagement n'est requis pour cet échange.",
      },
    ],
  }
}

export const professions: ProfessionPage[] = [
  professionTemplate(
    "prevoyance-medecin",
    "Médecins",
    ["Maintien de revenus en cas d'arrêt", "Couverture des charges du cabinet", "Protection en cas d'invalidité"],
    "CARMF",
  ),
  professionTemplate(
    "prevoyance-dentiste",
    "Dentistes",
    ["Indemnités journalières adaptées", "Protection du matériel et des charges", "Anticipation de la retraite"],
    "CARCDSF",
  ),
  professionTemplate(
    "prevoyance-veterinaire",
    "Vétérinaires",
    ["Couverture en cas d'incapacité", "Protection des charges de la clinique", "Prévoyance du conjoint collaborateur"],
    "CARPV",
  ),
  professionTemplate(
    "prevoyance-avocat",
    "Avocats",
    ["Maintien de revenus en cas d'arrêt", "Protection des charges du cabinet", "Complément retraite"],
    "CNBF",
  ),
  professionTemplate(
    "prevoyance-architecte",
    "Architectes",
    ["Couverture en cas d'invalidité", "Protection des charges de l'agence", "Prévoyance et retraite"],
    "CIPAV",
  ),
  professionTemplate(
    "prevoyance-pharmacien",
    "Pharmaciens",
    ["Protection des revenus de l'officine", "Garantie des charges fixes", "Prévoyance des collaborateurs"],
    "CAVP",
  ),
  professionTemplate(
    "prevoyance-orthophoniste",
    "Orthophonistes",
    ["Indemnités journalières en cas d'arrêt", "Protection en cas d'invalidité", "Préparation de la retraite"],
    "CARPIMKO",
  ),
  professionTemplate(
    "prevoyance-psychologue",
    "Psychologues",
    ["Maintien de revenus en cas d'arrêt", "Couverture des charges du cabinet", "Complément retraite"],
    "CIPAV",
  ),
  professionTemplate(
    "prevoyance-opticien",
    "Opticiens",
    ["Protection des revenus du magasin", "Garantie des charges fixes", "Prévoyance et retraite"],
    "régime des indépendants",
  ),
]

// ---------------------------------------------------------------------------
// SEO LOCAL
// ---------------------------------------------------------------------------

function locationTemplate(slug: string, city: string, context: string[]): LocationPage {
  return {
    slug,
    city,
    metaTitle: `Prévoyance ${city} | Vincent Leroy — Agent Général AXA`,
    metaDescription: `Conseil en prévoyance, retraite et protection sociale à ${city}. Vincent Leroy, Agent Général AXA, vous accompagne avec une étude personnalisée.`,
    intro: `Vincent Leroy, Agent Général AXA, accompagne les professionnels, dirigeants et particuliers de ${city} en matière de prévoyance, de retraite et de protection sociale.`,
    context,
  }
}

export const locations: LocationPage[] = [
  locationTemplate("prevoyance-paris", "Paris", [
    "Un tissu dense de professions libérales et d'indépendants",
    "Des besoins variés en prévoyance, retraite et santé",
    "Un accompagnement de proximité avec rendez-vous sur site ou à distance",
  ]),
  locationTemplate("prevoyance-vincennes", "Vincennes", [
    "Une clientèle de professionnels et de familles",
    "Un suivi local et personnalisé",
    "Des bilans adaptés aux indépendants du secteur",
  ]),
  locationTemplate("prevoyance-val-de-marne", "Val-de-Marne", [
    "Un département dynamique pour les professions libérales",
    "Des solutions de protection sociale pour entreprises et indépendants",
    "Un interlocuteur unique sur l'ensemble du territoire",
  ]),
  locationTemplate("prevoyance-paris-12", "Paris 12e", [
    "Proximité avec les quartiers de Bercy et Nation",
    "Accompagnement des commerçants et professions libérales",
    "Bilans de prévoyance et de retraite personnalisés",
  ]),
  locationTemplate("prevoyance-saint-mande", "Saint-Mandé", [
    "Une commune résidentielle aux portes de Paris",
    "Des besoins en prévoyance familiale et professionnelle",
    "Un conseil de proximité",
  ]),
  locationTemplate("prevoyance-charenton", "Charenton-le-Pont", [
    "Un pôle économique du Val-de-Marne",
    "Accompagnement des entreprises et indépendants",
    "Études de protection sociale sur mesure",
  ]),
  locationTemplate("prevoyance-nogent-sur-marne", "Nogent-sur-Marne", [
    "Une ville dynamique de l'est parisien",
    "Conseil en prévoyance et retraite pour particuliers et pros",
    "Un accompagnement dans la durée",
  ]),
  locationTemplate("prevoyance-montreuil", "Montreuil", [
    "Un bassin d'activité varié et en croissance",
    "Solutions pour indépendants, dirigeants et salariés",
    "Bilans personnalisés et suivi régulier",
  ]),
]

// ---------------------------------------------------------------------------
// ARTICLES (BLOG / RESSOURCES)
// ---------------------------------------------------------------------------

function article(
  slug: string,
  title: string,
  excerpt: string,
  category: string,
  date: string,
  content: ContentSection[],
): Article {
  return { slug, title, excerpt, category, date, readingTime: "5 min", content }
}

const genericBody = (subject: string): ContentSection[] => [
  {
    title: "Ce qu'il faut comprendre",
    paragraphs: [
      `${subject} soulève des questions concrètes pour les professionnels comme pour les particuliers. Comprendre les mécanismes en jeu permet de prendre des décisions éclairées.`,
      "Chaque situation étant différente, une analyse personnalisée est nécessaire avant toute décision, sous réserve d'éligibilité et des conditions contractuelles.",
    ],
  },
  {
    title: "Les points à étudier",
    paragraphs: [
      "Avant de vous engager, plusieurs éléments méritent d'être examinés dans le cadre d'un bilan : votre statut, vos charges, votre régime obligatoire et vos objectifs.",
    ],
    bullets: [
      "Votre niveau de protection actuel",
      "Les écarts éventuels avec vos besoins réels",
      "Les solutions complémentaires à étudier",
    ],
  },
  {
    title: "En pratique",
    paragraphs: [
      "Un échange permet de faire le point sans engagement et d'identifier les éventuels ajustements pertinents pour votre situation.",
    ],
  },
]

export const articles: Article[] = [
  article(
    "comprendre-la-prevoyance-pour-les-independants",
    "Comprendre la prévoyance pour les indépendants",
    "Pourquoi les travailleurs indépendants ont souvent une protection sociale incomplète et comment y remédier.",
    "Prévoyance",
    "2025-01-15",
    genericBody("La prévoyance des indépendants"),
  ),
  article(
    "per-comment-preparer-sa-retraite",
    "PER : comment préparer sa retraite sereinement",
    "Le fonctionnement du Plan Épargne Retraite et les points à étudier selon votre situation.",
    "Retraite",
    "2025-01-22",
    genericBody("Le Plan Épargne Retraite"),
  ),
  article(
    "arret-de-travail-quels-revenus",
    "Arrêt de travail : quels revenus pour un professionnel ?",
    "Ce que couvrent réellement les régimes obligatoires en cas d'incapacité de travail.",
    "Prévoyance",
    "2025-02-03",
    genericBody("Le maintien de revenus en cas d'arrêt de travail"),
  ),
  article(
    "choisir-sa-complementaire-sante",
    "Bien choisir sa complémentaire santé",
    "Les critères à examiner pour adapter ses garanties santé à ses besoins réels.",
    "Santé",
    "2025-02-12",
    genericBody("Le choix d'une complémentaire santé"),
  ),
  article(
    "assurance-emprunteur-changer-de-contrat",
    "Assurance emprunteur : peut-on changer de contrat ?",
    "La délégation d'assurance et la résiliation à tout moment expliquées simplement.",
    "Emprunteur",
    "2025-02-20",
    genericBody("Le changement d'assurance emprunteur"),
  ),
  article(
    "prevoyance-du-dirigeant-les-essentiels",
    "Prévoyance du dirigeant : les essentiels",
    "Comment le statut social du dirigeant influence le niveau de protection à prévoir.",
    "Dirigeant",
    "2025-03-01",
    genericBody("La prévoyance du dirigeant"),
  ),
  article(
    "protection-sociale-en-entreprise",
    "Mettre en place la protection sociale en entreprise",
    "Mutuelle collective, prévoyance et obligations de l'employeur : le panorama.",
    "Entreprise",
    "2025-03-10",
    genericBody("La protection sociale collective"),
  ),
  article(
    "tns-ou-assimile-salarie",
    "TNS ou assimilé salarié : quelles différences ?",
    "Comprendre l'impact du statut social sur votre protection et votre retraite.",
    "Dirigeant",
    "2025-03-18",
    genericBody("Le choix du statut social"),
  ),
  article(
    "garantie-frais-generaux-cabinet",
    "La garantie frais généraux pour les professions libérales",
    "Comment protéger les charges fixes de votre cabinet en cas d'arrêt.",
    "Prévoyance",
    "2025-03-26",
    genericBody("La garantie frais généraux"),
  ),
  article(
    "rente-education-proteger-ses-enfants",
    "La rente éducation pour protéger ses enfants",
    "Un dispositif à étudier pour assurer l'avenir de vos enfants en cas de décès.",
    "Prévoyance",
    "2025-04-02",
    genericBody("La rente éducation"),
  ),
  article(
    "epargne-retraite-quand-commencer",
    "Épargne retraite : quand faut-il commencer ?",
    "L'effet du temps sur l'épargne et les questions à se poser selon son âge.",
    "Retraite",
    "2025-04-10",
    genericBody("Le moment de commencer son épargne retraite"),
  ),
  article(
    "bilan-de-prevoyance-comment-ca-marche",
    "Le bilan de prévoyance : comment ça marche ?",
    "Les étapes d'un bilan personnalisé et ce qu'il permet d'identifier.",
    "Prévoyance",
    "2025-04-18",
    genericBody("Le bilan de prévoyance"),
  ),
]

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

export const getService = (slug: string) => services.find((s) => s.slug === slug)
export const getProfession = (slug: string) => professions.find((p) => p.slug === slug)
export const getLocation = (slug: string) => locations.find((l) => l.slug === slug)
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug)
