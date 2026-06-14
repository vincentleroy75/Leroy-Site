import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ArticleCard from "@/components/ui/ArticleCard";

export const metadata: Metadata = {
  title: "Ressources & Blog | Prévoyance & Patrimoine — Vincent Leroy AXA",
  description:
    "Articles, guides et conseils pratiques sur la prévoyance professionnelle, la retraite, la santé et la protection sociale. À destination des professions libérales et dirigeants.",
  alternates: { canonical: "/ressources" },
};

const articles = [
  {
    slug: "bilan-prevoyance-independant",
    title: "Bilan prévoyance : ce que tout indépendant doit vérifier",
    excerpt: "Revenu de remplacement, délai de carence, invalidité partielle : les points clés à vérifier avant d'avoir un problème.",
    category: "Prévoyance",
    date: "2025-03-10",
    readTime: "7 min",
  },
  {
    slug: "arret-travail-professionnel-liberal",
    title: "Arrêt de travail : ce qui se passe vraiment pour un professionnel libéral",
    excerpt: "Indemnités journalières, délais de carence, régime obligatoire : ce que votre caisse vous verse réellement en cas d'arrêt.",
    category: "Prévoyance",
    date: "2025-02-20",
    readTime: "8 min",
  },
  {
    slug: "erreurs-prevoyance-dirigeant",
    title: "5 erreurs de prévoyance que font les dirigeants",
    excerpt: "Confondre prévoyance collective et protection personnelle, négliger l'homme-clé, sous-estimer les frais généraux : les pièges courants.",
    category: "Dirigeants",
    date: "2025-02-05",
    readTime: "6 min",
  },
  {
    slug: "per-retraite-tns",
    title: "PER et retraite pour les TNS : ce qu'il faut comprendre",
    excerpt: "Plan d'épargne retraite, déduction des cotisations, plafond Madelin : les leviers de préparation retraite pour les travailleurs non salariés.",
    category: "Retraite",
    date: "2025-01-28",
    readTime: "9 min",
  },
  {
    slug: "comparer-assurance-emprunteur",
    title: "Comparer son assurance emprunteur : mode d'emploi",
    excerpt: "Délégation d'assurance, loi Lemoine, garanties ITT/IPP : comment optimiser son assurance de prêt sans se perdre dans les comparatifs.",
    category: "Emprunteur",
    date: "2025-01-15",
    readTime: "7 min",
  },
  {
    slug: "choisir-mutuelle-sante",
    title: "Choisir sa mutuelle santé : les questions à se poser",
    excerpt: "Ticket modérateur, chambre particulière, optique, dentaire : comment lire un tableau de garanties et choisir selon son profil.",
    category: "Santé",
    date: "2024-12-18",
    readTime: "6 min",
  },
  {
    slug: "prevoyance-collective-obligations-employeur",
    title: "Prévoyance collective : ce que l'employeur doit mettre en place",
    excerpt: "Obligations légales, conventions collectives, contrats surcomplémentaires : le point sur ce que vous devez proposer à vos salariés.",
    category: "Entreprise",
    date: "2024-12-05",
    readTime: "8 min",
  },
  {
    slug: "medecin-liberal-proteger-revenus",
    title: "Médecin libéral : protéger ses revenus face aux aléas de la vie",
    excerpt: "CARMF, IJ complémentaires, frais généraux, assurance décès : le point complet sur la prévoyance du médecin libéral.",
    category: "Médecins",
    date: "2024-11-20",
    readTime: "10 min",
  },
  {
    slug: "dentiste-invalidite-professionnelle",
    title: "Chirurgien-dentiste : comprendre le risque d'invalidité professionnelle",
    excerpt: "TMS, pathologies du poignet, CARCDSF : pourquoi l'invalidité partielle est le risque le plus sous-estimé chez les dentistes.",
    category: "Dentistes",
    date: "2024-11-10",
    readTime: "7 min",
  },
  {
    slug: "veterinaire-arret-travail",
    title: "Vétérinaire : que se passe-t-il financièrement en cas d'arrêt ?",
    excerpt: "CARPV, zoonoses, blessures animales : les risques spécifiques du vétérinaire et ce que garantit vraiment le régime obligatoire.",
    category: "Vétérinaires",
    date: "2024-10-28",
    readTime: "7 min",
  },
  {
    slug: "architecte-prevoyance-retraite",
    title: "Architecte libéral : prévoyance et retraite, l'essentiel",
    excerpt: "CIPAV, engagements chantiers, clause homme-clé en société : ce que l'architecte libéral doit anticiper.",
    category: "Architectes",
    date: "2024-10-15",
    readTime: "8 min",
  },
  {
    slug: "dirigeant-sasu-protection",
    title: "Dirigeant de SASU : êtes-vous vraiment bien protégé ?",
    excerpt: "Assimilé salarié, régime général, lacunes réelles : pourquoi le statut SASU ne garantit pas une protection suffisante sans contrats complémentaires.",
    category: "Dirigeants",
    date: "2024-10-02",
    readTime: "8 min",
  },
];

const categories = ["Tous", "Prévoyance", "Retraite", "Santé", "Emprunteur", "Dirigeants", "Entreprise", "Médecins", "Dentistes", "Vétérinaires", "Architectes"];

export default function RessourcesPage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "Ressources & Blog" }]} /></div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14">
        <div className="container-wide">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Ressources & Blog</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Guides pratiques, explications pédagogiques et analyses pour comprendre et
            anticiper les risques liés à votre activité professionnelle.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-brand-gray-100">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span key={cat} className={`badge-blue text-xs px-3 py-1 rounded-full cursor-pointer ${cat === "Tous" ? "bg-brand-blue text-white" : ""}`}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                href={`/ressources/${article.slug}`}
                category={article.category}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                readTime={article.readTime}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide text-center max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-brand-blue-dark mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-brand-gray-600 mb-6">
            Posez votre question directement : un premier échange gratuit de 30 à 45 minutes
            pour analyser votre situation et répondre à vos interrogations.
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-primary">
            Demander un audit gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
