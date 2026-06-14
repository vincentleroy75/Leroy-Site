import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactForm from "@/components/ui/ContactForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SummaryBox from "@/components/ui/SummaryBox";

export const metadata: Metadata = {
  title: "Audit prévoyance gratuit Paris | Vincent Leroy AXA",
  description:
    "Bénéficiez d'un audit prévoyance gratuit et sans engagement à Paris. Analyse de votre protection, identification des lacunes, propositions adaptées à votre statut en 30-45 min.",
  alternates: { canonical: "/audit-prevoyance-gratuit" },
};

const whatIsAnalyzed = [
  { icon: "📋", title: "Votre statut professionnel", desc: "TNS, assimilé salarié, professionnel libéral : votre régime de base conditionne tout." },
  { icon: "💰", title: "Vos revenus et charges", desc: "Pour calibrer le niveau de protection nécessaire à votre niveau de vie réel." },
  { icon: "🏦", title: "Vos contrats existants", desc: "Analyse de vos contrats actuels : garanties, exclusions, tarifs, points forts et lacunes." },
  { icon: "👨‍👩‍👧", title: "Votre situation familiale", desc: "Conjoint, enfants, charges : pour adapter la protection à votre réalité familiale." },
  { icon: "🏛️", title: "Votre régime obligatoire", desc: "CARMF, CIPAV, CARCDSF, SSI… Que vous apporte réellement votre caisse ?" },
  { icon: "🎯", title: "Vos objectifs", desc: "Retraite, immobilier, transmission : votre protection doit servir vos projets." },
];

const whatYouGet = [
  "Un bilan clair de votre situation actuelle",
  "L'identification des risques non couverts ou sous-couverts",
  "Une estimation de ce que vous percevriez en cas de sinistre",
  "Des pistes de solutions adaptées à votre profil (sans engagement)",
  "Un document de synthèse à conserver",
];

const faqItems = [
  {
    question: "L'audit est-il vraiment gratuit ?",
    answer: "Oui, l'audit est entièrement gratuit et sans engagement. Mon rôle est de vous aider à comprendre votre situation. Si les solutions proposées vous conviennent, vous pouvez choisir de travailler avec moi. Sinon, vous repartez avec une vision claire de votre situation, c'est déjà une valeur ajoutée.",
  },
  {
    question: "Quelle est la durée de l'audit ?",
    answer: "L'entretien initial dure généralement entre 30 et 45 minutes. Il peut être prolongé selon la complexité de votre situation. Nous prenons le temps nécessaire pour que vous ayez une compréhension complète.",
  },
  {
    question: "Que dois-je préparer pour l'audit ?",
    answer: "Idéalement, préparez vos contrats de prévoyance existants (s'il y en a), une idée de votre niveau de revenus habituels, vos principales charges fixes (crédit immobilier, loyer professionnel…) et vos éventuels objectifs (retraite, projets immobiliers…). Mais vous pouvez venir sans rien : on reconstruit ensemble.",
  },
  {
    question: "L'audit peut-il se faire en visioconférence ?",
    answer: "Oui, le format visioconférence est tout aussi efficace que le présentiel pour un audit prévoyance. Je m'adapte à vos contraintes géographiques et d'emploi du temps.",
  },
  {
    question: "Suis-je engagé après l'audit ?",
    answer: "Non, absolument pas. L'audit est un service que je vous offre pour vous permettre de prendre des décisions éclairées. Il n'y a aucune obligation de souscrire quoi que ce soit à l'issue de l'entretien.",
  },
];

const targets = [
  { icon: "👔", label: "Dirigeants de TPE/PME" },
  { icon: "🏥", label: "Médecins, dentistes, vétérinaires" },
  { icon: "⚖️", label: "Avocats, architectes, notaires" },
  { icon: "💊", label: "Pharmaciens, orthophonistes" },
  { icon: "💼", label: "Consultants et freelances" },
  { icon: "🔧", label: "Artisans et commerçants" },
];

export default function AuditPrevoyanceGratuitPage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "Audit prévoyance gratuit" }]} /></div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl text-center">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4 mx-auto w-fit">Gratuit · Sans engagement</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Audit prévoyance gratuit pour dirigeants, indépendants et professions libérales
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            30 à 45 minutes pour analyser votre protection réelle, identifier les lacunes
            et explorer des solutions adaptées à votre situation. Sans engagement, sans frais.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-100">
            <span>✓ Gratuit et sans engagement</span>
            <span>✓ En cabinet, chez vous ou en visio</span>
            <span>✓ Réponse sous 24h</span>
          </div>
        </div>
      </section>

      {/* Résumé AEO */}
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            L&apos;audit prévoyance gratuit est un entretien de 30 à 45 minutes avec Vincent Leroy,
            Agent Général AXA, au cours duquel sont analysés votre statut professionnel, votre
            régime obligatoire, vos contrats existants et vos besoins de protection. Vous repartez
            avec un bilan clair et des pistes de solutions. Aucun engagement n&apos;est requis.
          </SummaryBox>
        </div>
      </section>

      {/* Ce qui est analysé */}
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide">
          <h2 className="section-title text-center mb-3">Ce qui est analysé pendant l&apos;audit</h2>
          <p className="section-subtitle text-center max-w-xl mx-auto mb-10">Un diagnostic complet de votre situation en 6 points.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {whatIsAnalyzed.map((item, i) => (
              <div key={i} className="card">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-brand-blue-dark mb-1 text-sm">{item.title}</h3>
                <p className="text-brand-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que vous obtenez */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-brand-blue-dark mb-6">Ce que vous obtenez</h2>
              <ul className="space-y-3">
                {whatYouGet.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span className="text-brand-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-blue-dark mb-6">Pour qui ?</h2>
              <div className="grid grid-cols-2 gap-3">
                {targets.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 bg-brand-gray-50 rounded-lg p-3 border border-brand-gray-100">
                    <span className="text-xl">{t.icon}</span>
                    <span className="text-xs font-medium text-brand-gray-600">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-14 bg-brand-gray-50">
        <div className="container-wide max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark text-center mb-3">Demandez votre audit maintenant</h2>
          <p className="text-brand-gray-600 text-center mb-8 text-sm">Remplissez ce formulaire et je vous recontacte sous 24h ouvrées.</p>
          <div className="card">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8 text-center">Questions sur l&apos;audit prévoyance</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
