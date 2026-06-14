import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";

export const metadata: Metadata = {
  title: "Prévoyance orthophoniste libéral Paris | Vincent Leroy AXA",
  description:
    "Prévoyance orthophoniste libéral : sécurisez vos revenus en cas d'arrêt de travail. Régime CARPIMKO, solutions adaptées à Paris et Val-de-Marne.",
  alternates: { canonical: "/prevoyance-orthophoniste" },
};

const faqItems = [
  {
    question: "Quelle caisse gère la prévoyance des orthophonistes ?",
    answer: "Les orthophonistes libéraux cotisent à la CARPIMKO (Caisse Autonome de Retraite et de Prévoyance des Infirmiers, Masseurs-Kinésithérapeutes, Pédicures-Podologues, Orthophonistes et Orthoptistes) pour leur retraite et prévoyance de base.",
  },
  {
    question: "Quels risques un orthophoniste libéral doit-il anticiper ?",
    answer: "Les orthophonistes font face à des risques de TMS (voix, gorge, fatigue vocale), de burn-out professionnel et d'épuisement psychologique. Un arrêt prolongé impacte directement les patients et les revenus. Les charges fixes (loyer du cabinet, abonnements) continuent pendant l'arrêt.",
  },
  {
    question: "Est-ce pertinent de souscrire une prévoyance dès le début d'activité ?",
    answer: "Oui, il est généralement recommandé de s'assurer dès le début de l'activité libérale. Plus vous souscrivez tôt, plus les cotisations sont faibles (lien avec l'âge) et moins il y a de risques de questionnaire médical défavorable. Attendre expose à des cotisations plus élevées ou à des exclusions.",
  },
  {
    question: "La prévoyance CARPIMKO est-elle suffisante ?",
    answer: "La CARPIMKO offre une protection de base en cas d'arrêt de travail et d'invalidité. Selon votre niveau de revenus et de charges, cette protection peut ne pas suffire à maintenir votre niveau de vie. Une étude personnalisée permet de mesurer l'écart et d'identifier les compléments utiles.",
  },
];

export default function PrevoyanceOrthophonistePage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Professions libérales", href: "/professions-liberales" }, { label: "Orthophoniste" }]} />
        </div>
      </div>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Orthophonistes</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Prévoyance orthophoniste libéral : sécuriser vos revenus et votre activité
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Profession paramedicale libérale, l&apos;orthophoniste a des revenus directement liés
            à sa présence. La CARPIMKO assure une base — mais analysons ensemble si elle suffit
            à votre situation.
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">Faire le point sur ma prévoyance</Link>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            Les orthophonistes libéraux cotisent à la CARPIMKO pour leur prévoyance et retraite.
            Les risques professionnels incluent la fatigue vocale, les TMS et l&apos;épuisement psychologique.
            Une prévoyance complémentaire permet de combler les lacunes du régime obligatoire et
            de maintenir les revenus pendant un arrêt prolongé.
          </SummaryBox>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>L&apos;orthophoniste libéral : une activité qui repose sur votre présence</h2>
          <p>L'orthophoniste libéral travaille en cabinet, souvent seul. Ses revenus dépendent directement du nombre de séances réalisées. Un arrêt de travail, même court, génère une perte de revenus quasi immédiate, alors que les charges fixes continuent.</p>
          <h2>La CARPIMKO : ce qu'elle couvre</h2>
          <p>La CARPIMKO assure les orthophonistes libéraux pour leur retraite de base et complémentaire, ainsi que des prestations d'invalidité et de décès. Les indemnités journalières en cas d'arrêt de travail sont versées après un délai de carence.</p>
          <h2>Compléter la CARPIMKO</h2>
          <ul>
            <li>Réduire le délai de carence avant indemnisation</li>
            <li>Augmenter le niveau d'indemnités journalières</li>
            <li>Couvrir l'invalidité professionnelle spécifique</li>
            <li>Constituer une retraite complémentaire via PER</li>
          </ul>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/retraite-per" className="badge-blue">Retraite & PER</Link>
            <Link href="/prevoyance-professionnelle" className="badge-blue">Prévoyance pro</Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8">Questions fréquentes – Orthophoniste</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Audit prévoyance gratuit pour orthophoniste libéral" subtitle="CARPIMKO, revenus, charges : 30 minutes pour faire le point et identifier les solutions." ctaPrimary="Demander un audit gratuit" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
