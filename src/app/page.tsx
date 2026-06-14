import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import TrustBlock from "@/components/ui/TrustBlock";
import LocalSEOBlock from "@/components/ui/LocalSEOBlock";
import ArticleCard from "@/components/ui/ArticleCard";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Prévoyance & Patrimoine à Paris | Vincent Leroy AXA",
  description:
    "Agent AXA Prévoyance & Patrimoine à Paris et Vincennes. Vincent Leroy accompagne dirigeants, indépendants et professions libérales en prévoyance, retraite, santé et protection financière.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Prévoyance & Patrimoine à Paris | Vincent Leroy AXA",
    description:
      "Agent AXA Prévoyance & Patrimoine à Paris et Vincennes. Prévoyance, retraite, santé et protection financière pour dirigeants et professions libérales.",
    url: SITE_CONFIG.url,
  },
};

const services = [
  {
    icon: "🛡️",
    title: "Prévoyance professionnelle",
    description:
      "Protégez vos revenus en cas d'arrêt de travail, d'invalidité ou de décès. Indispensable pour tout indépendant ou profession libérale.",
    href: "/prevoyance-professionnelle",
  },
  {
    icon: "👔",
    title: "Prévoyance dirigeant",
    description:
      "Vous êtes gérant ou président de société ? Votre protection sociale mérite une attention particulière. Étudions ensemble les solutions adaptées à votre statut.",
    href: "/prevoyance-dirigeant",
  },
  {
    icon: "🏖️",
    title: "Retraite & PER",
    description:
      "Anticipez votre retraite avec un Plan d'Épargne Retraite individuel. Plus tôt vous commencez, plus votre capital sera constitué sereinement.",
    href: "/retraite-per",
  },
  {
    icon: "❤️",
    title: "Complémentaire santé",
    description:
      "Choisir une mutuelle adaptée à votre profil : dentaire, optique, hospitalisation, médecines douces. Nous comparons pour vous les meilleures garanties.",
    href: "/complementaire-sante",
  },
  {
    icon: "🏠",
    title: "Assurance emprunteur",
    description:
      "Réduisez le coût de votre assurance de prêt immobilier en optant pour une délégation d'assurance. Une étude comparative gratuite est disponible.",
    href: "/assurance-emprunteur",
  },
  {
    icon: "🏢",
    title: "Protection sociale entreprise",
    description:
      "Santé collective, prévoyance collective, épargne salariale, convention collective : accompagnement complet des employeurs de 1 à 50 salariés.",
    href: "/protection-sociale-entreprise",
  },
];

const problems = [
  {
    icon: "⚠️",
    title: "Arrêt de travail prolongé",
    text: "Savez-vous ce que vous percevrez réellement si vous ne pouvez plus exercer pendant 6 mois ? Pour un indépendant, la réponse est souvent inférieure aux attentes.",
  },
  {
    icon: "💔",
    title: "Invalidité professionnelle",
    text: "Une invalidité partielle peut mettre fin à votre activité libérale tout en vous laissant en vie. Les régimes obligatoires ne couvrent pas toujours ce scénario.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Protection de votre famille",
    text: "En cas de décès, votre famille doit pouvoir maintenir son niveau de vie sans se retrouver dans une situation financière difficile.",
  },
  {
    icon: "📉",
    title: "Retraite insuffisante",
    text: "Les professions libérales et TNS accumulent souvent moins de droits retraite que les salariés. L'anticipation est la meilleure réponse.",
  },
  {
    icon: "⚖️",
    title: "Obligations sociales employeur",
    text: "En tant qu'employeur, vous avez des obligations légales en matière de prévoyance et santé collective. Un audit permet de s'assurer que tout est en règle.",
  },
];

const targets = [
  { icon: "🩺", label: "Médecins & dentistes", href: "/prevoyance-medecin" },
  { icon: "⚖️", label: "Avocats", href: "/prevoyance-avocat" },
  { icon: "🏗️", label: "Architectes", href: "/prevoyance-architecte" },
  { icon: "🐾", label: "Vétérinaires", href: "/prevoyance-veterinaire" },
  { icon: "💊", label: "Pharmaciens", href: "/prevoyance-pharmacien" },
  { icon: "👓", label: "Opticiens", href: "/prevoyance-opticien" },
  { icon: "💼", label: "Dirigeants TPE/PME", href: "/prevoyance-dirigeant" },
  { icon: "🔧", label: "TNS & indépendants", href: "/prevoyance-professionnelle" },
];

const faqItems = [
  {
    question: "Quelle est la différence entre un agent général et un courtier en assurance ?",
    answer:
      "Un agent général AXA représente exclusivement AXA et ses produits. Il est mandaté par la compagnie et dispose d'une relation de proximité et de durée avec ses clients. Un courtier travaille en revanche avec plusieurs compagnies. L'avantage de l'agent général : une expertise profonde des produits d'une compagnie reconnue et un interlocuteur stable dans le temps.",
  },
  {
    question: "Pourquoi ma prévoyance professionnelle actuelle ne suffit-elle peut-être pas ?",
    answer:
      "Les régimes obligatoires des indépendants et professions libérales ont des taux de remplacement variables selon les caisses. En cas d'arrêt de travail, certains indépendants peuvent ne percevoir que 30 à 50 % de leurs revenus habituels. Une analyse personnalisée permet d'identifier les lacunes et d'y remédier avec des solutions adaptées.",
  },
  {
    question: "Comment fonctionne un audit prévoyance gratuit ?",
    answer:
      "L'audit dure 30 à 45 minutes. Nous analysons ensemble votre situation : statut professionnel, revenus, charges fixes, contrats existants, situation familiale et objectifs. À l'issue, vous repartez avec une vision claire des risques non couverts et des pistes de solution, sans engagement de votre part.",
  },
  {
    question: "Intervenez-vous uniquement à Paris et Vincennes ?",
    answer:
      "Mon cabinet est basé à Paris et Vincennes, mais j'accompagne des clients dans tout le Val-de-Marne et en Île-de-France. Les rendez-vous peuvent se faire en cabinet, dans vos locaux ou en visioconférence selon votre préférence.",
  },
  {
    question: "Quelles garanties peut-on trouver dans une prévoyance professionnelle ?",
    answer:
      "Une prévoyance professionnelle peut couvrir : l'indemnisation journalière en arrêt de travail (maladie, accident), la rente d'invalidité partielle ou totale, le capital décès, et parfois la dépendance. Les niveaux de garantie et les délais de carence varient selon les contrats – c'est pourquoi une étude comparative est recommandée.",
  },
];

const recentArticles = [
  {
    title: "Pourquoi faire un bilan prévoyance quand on est indépendant ?",
    excerpt:
      "Beaucoup d'indépendants découvrent trop tard que leur protection est insuffisante. Voici pourquoi un bilan régulier est essentiel.",
    category: "Prévoyance",
    href: "/ressources/bilan-prevoyance-independant",
    date: "Juin 2025",
    readTime: "5 min de lecture",
  },
  {
    title: "Prévoyance dirigeant : les erreurs les plus fréquentes",
    excerpt:
      "Entre sous-estimation des risques et contrats mal calibrés, les dirigeants font souvent les mêmes erreurs en matière de protection.",
    category: "Dirigeants",
    href: "/ressources/erreurs-prevoyance-dirigeant",
    date: "Mai 2025",
    readTime: "6 min de lecture",
  },
  {
    title: "PER : comment préparer sa retraite quand on est TNS ?",
    excerpt:
      "Le Plan d'Épargne Retraite est un outil puissant pour les travailleurs non salariés. Comment l'utiliser efficacement ?",
    category: "Retraite",
    href: "/ressources/per-retraite-tns",
    date: "Avril 2025",
    readTime: "7 min de lecture",
  },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vincent Leroy – AXA Prévoyance & Patrimoine",
  url: "https://www.vincentleroy-axa.fr",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.vincentleroy-axa.fr/ressources?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-light text-white py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="badge bg-white/10 text-white mb-4 border border-white/20">
              Agent Général AXA Prévoyance &amp; Patrimoine
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-balance">
              Prévoyance, retraite et protection patrimoniale à Paris et Vincennes
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              Je protège les revenus, la famille et le patrimoine des dirigeants, travailleurs indépendants
              et professions libérales — avant que le problème n&apos;arrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/audit-prevoyance-gratuit" className="btn-red">
                Demander un audit gratuit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-200"
              >
                Être rappelé
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-blue-200">
              <span>✓ Premier échange sans engagement</span>
              <span>✓ Analyse claire de votre situation</span>
              <span>✓ Réponse sous 24h ouvrées</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust block */}
      <TrustBlock />

      {/* Problèmes */}
      <section className="py-16 bg-brand-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Les risques que les indépendants sous-estiment souvent
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Ces situations peuvent arriver à n&apos;importe qui. La différence, c&apos;est d&apos;y avoir pensé avant.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="card">
                <span className="text-2xl mb-3 block">{p.icon}</span>
                <h3 className="font-bold text-brand-blue-dark mb-2">{p.title}</h3>
                <p className="text-brand-gray-600 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Mes domaines d&apos;expertise</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Des solutions concrètes pour chaque situation professionnelle.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Cibles */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Professions libérales et dirigeants : je connais vos spécificités
            </h2>
            <p className="text-blue-100 max-w-xl mx-auto">
              Chaque profession a ses propres régimes obligatoires, ses lacunes et ses opportunités.
              Je m&apos;adapte à votre réalité.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {targets.map((t, i) => (
              <Link
                key={i}
                href={t.href}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-center border border-white/10"
              >
                <span className="text-2xl">{t.icon}</span>
                <span className="text-sm font-medium text-white">{t.label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/professions-liberales" className="text-blue-200 hover:text-white text-sm underline">
              Voir toutes les professions →
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi me consulter */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Une approche concrète, pas des discours généraux</h2>
              <div className="space-y-4 text-brand-gray-600 leading-relaxed">
                <p>
                  Quand vous venez me consulter, je commence par écouter votre situation réelle : votre statut,
                  vos revenus, vos charges, votre situation familiale, vos contrats existants et vos inquiétudes.
                </p>
                <p>
                  Je ne vends pas de produits génériques. Je construis avec vous une protection cohérente,
                  adaptée à votre profil, et je vous explique clairement ce qui est couvert et ce qui ne l&apos;est pas.
                </p>
                <p>
                  Mon objectif : que vous repartiez avec une vision claire de votre situation et des options
                  concrètes pour améliorer votre protection — sans jargon, sans surenchère.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Analyse de vos contrats existants",
                  "Identification des lacunes de couverture",
                  "Propositions adaptées à votre statut",
                  "Suivi dans le temps et révision annuelle",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-brand-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/a-propos" className="btn-secondary">
                  En savoir plus sur mon approche
                </Link>
              </div>
            </div>
            <div className="bg-brand-gray-50 rounded-2xl p-8 border border-brand-gray-100">
              <blockquote className="text-brand-gray-600 leading-relaxed italic mb-6">
                "Mon rôle est de vous aider à comprendre vos risques réels, pas de vous vendre
                quelque chose que vous n'avez pas besoin. Un bilan honnête, même s'il conclut que
                votre protection actuelle est suffisante, est une valeur ajoutée pour vous."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">
                  VL
                </div>
                <div>
                  <p className="font-semibold text-brand-blue-dark text-sm">Vincent Leroy</p>
                  <p className="text-xs text-brand-gray-400">Agent Général AXA Prévoyance &amp; Patrimoine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local block */}
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="section-title mb-4">
                Conseiller de proximité à Paris, Vincennes et en Île-de-France
              </h2>
              <p className="text-brand-gray-600 leading-relaxed mb-6">
                Basé dans l&apos;Est parisien, je connais les dynamiques économiques du Val-de-Marne :
                cabinets médicaux de Vincennes, études d&apos;avocats du 12e, agences d&apos;architecture
                de Charenton, PME de Montreuil. Cette proximité me permet de vous conseiller
                avec une connaissance du terrain.
              </p>
              <Link href="/contact" className="btn-primary">
                Prendre rendez-vous
              </Link>
            </div>
            <LocalSEOBlock />
          </div>
        </div>
      </section>

      {/* Articles récents */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="section-title mb-2">Ressources & guides</h2>
              <p className="section-subtitle">Comprendre pour mieux protéger.</p>
            </div>
            <Link href="/ressources" className="text-brand-blue font-semibold text-sm hover:underline hidden sm:block">
              Voir tous les articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {recentArticles.map((a, i) => (
              <ArticleCard key={i} {...a} />
            ))}
          </div>
          <div className="text-center mt-6 sm:hidden">
            <Link href="/ressources" className="text-brand-blue font-semibold text-sm hover:underline">
              Voir tous les articles →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-brand-gray-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-10">Questions fréquentes</h2>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <AuditCTA
            title="Prenez 30 minutes pour faire le point sur votre protection"
            subtitle="Un audit gratuit et sans engagement pour comprendre vos lacunes et les options qui s'offrent à vous."
            ctaPrimary="Demander un audit gratuit"
            ctaSecondary="Planifier un rendez-vous"
          />
        </div>
      </section>
    </>
  );
}
