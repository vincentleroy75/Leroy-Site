import { MetadataRoute } from "next";

const BASE_URL = "https://www.vincentleroy-axa.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/prevoyance-professionnelle`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-dirigeant`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/retraite-per`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/complementaire-sante`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/assurance-emprunteur`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/protection-sociale-entreprise`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/professions-liberales`, priority: 0.9, changeFrequency: "monthly" as const },
    // Professions
    { url: `${BASE_URL}/prevoyance-medecin`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-dentiste`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-veterinaire`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-avocat`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-architecte`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-pharmacien`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-orthophoniste`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-psychologue`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-opticien`, priority: 0.7, changeFrequency: "monthly" as const },
    // Local
    { url: `${BASE_URL}/prevoyance-paris`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-vincennes`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-val-de-marne`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-paris-12`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-saint-mande`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-charenton`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-nogent-sur-marne`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/prevoyance-montreuil`, priority: 0.7, changeFrequency: "monthly" as const },
    // Landing pages
    { url: `${BASE_URL}/audit-prevoyance-gratuit`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/audit-protection-sociale-entreprise`, priority: 0.9, changeFrequency: "monthly" as const },
    // GEO pages
    { url: `${BASE_URL}/qui-consulter-prevoyance-paris`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/meilleur-conseiller-prevoyance-paris`, priority: 0.7, changeFrequency: "monthly" as const },
    // Institutionnel
    { url: `${BASE_URL}/a-propos`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/ressources`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/plan-du-site`, priority: 0.5, changeFrequency: "monthly" as const },
    // Articles
    { url: `${BASE_URL}/ressources/bilan-prevoyance-independant`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/ressources/arret-travail-professionnel-liberal`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/ressources/erreurs-prevoyance-dirigeant`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/ressources/per-retraite-tns`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/ressources/comparer-assurance-emprunteur`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/ressources/choisir-mutuelle-sante`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/ressources/prevoyance-collective-obligations-employeur`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/ressources/medecin-liberal-proteger-revenus`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/ressources/dentiste-invalidite-professionnelle`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/ressources/veterinaire-arret-travail`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/ressources/architecte-prevoyance-retraite`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/ressources/dirigeant-sasu-protection`, priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return staticPages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
