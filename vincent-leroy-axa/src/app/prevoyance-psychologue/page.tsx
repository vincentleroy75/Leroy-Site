import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";

export const metadata: Metadata = {
  title: "Prévoyance psychologue libéral Paris | Vincent Leroy AXA",
  description:
    "Prévoyance psychologue libéral : protection du revenu et continuité d'activité. Régime CIPAV, prévoyance complémentaire pour psychologues à Paris et Val-de-Marne.",
  alternates: { canonical: "/prevoyance-psychologue" },
};

const faqItems = [
  {
    question: "Quelle caisse obligatoire pour les psychologues libéraux ?",
    answer: "Les psychologues libéraux relèvent généralement de la CIPAV (Caisse Interprofessionnelle de Prévoyance et d'Assurance Vieillesse) pour leur retraite et prévoyance de base. Cependant, leur situation peut varier selon le mode d'exercice et les éventuels changements réglementaires récents.",
  },
  {
    question: "Quels sont les risques spécifiques d'un psychologue libéral ?",
    answer: "Le psychologue libéral est exposé à une charge émotionnelle importante : écoute de situations difficiles, stress vicariant, risque de burn-out par exposition à la souffrance des patients. Ces risques peuvent générer des arrêts de travail d'origine psychique, souvent prolongés.",
  },
  {
    question: "Comment fonctionne l'arrêt de travail pour un psychologue libéral ?",
    answer: "En cas d'arrêt de travail, le psychologue libéral perçoit des indemnités de la CIPAV après le délai de carence prévu. Ses revenus de séances cessent immédiatement. Une prévoyance complémentaire permet de percevoir des indemnités supplémentaires et de réduire le délai de carence.",
  },
  {
    question: "Peut-on continuer à voir ses patients pendant un arrêt de travail ?",
    answer: "En cas d'arrêt de travail prescrit médicalement, le psychologue est généralement tenu de cesser toute activité professionnelle. Il peut s'organiser pour orienter ses patients vers un confrère ou les informer de son indisponibilité temporaire.",
  },
];

export default function PrevoyancePsychologuePage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Professions libérales", href: "/professions-liberales" }, { label: "Psychologue" }]} />
        </div>
      </div>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Psychologues</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Prévoyance psychologue libéral : protection du revenu et continuité d&apos;activité
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Profession d&apos;écoute et d&apos;accompagnement, la psychologie libérale expose à une charge
            émotionnelle intense. Votre protection financière en cas d&apos;arrêt est-elle à la
            hauteur de ce risque spécifique ?
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">Faire le point sur ma prévoyance</Link>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            Les psychologues libéraux relèvent généralement de la CIPAV pour leur retraite et prévoyance.
            La charge émotionnelle de la profession expose à un risque de burn-out et d&apos;épuisement
            psychologique souvent sous-estimé. Une prévoyance complémentaire bien calibrée protège
            les revenus en cas d&apos;arrêt, y compris d&apos;origine psychique.
          </SummaryBox>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Le psychologue libéral : un risque de burn-out à ne pas négliger</h2>
          <p>L'écoute quotidienne de souffrance, les situations difficiles, la gestion de crises : la profession de psychologue est exposée à une fatigue émotionnelle qui peut générer des arrêts de travail prolongés d'origine psychique. Ce risque est souvent sous-estimé dans les stratégies de protection.</p>
          <h2>La CIPAV : couverture de base</h2>
          <p>La CIPAV assure les psychologues libéraux pour leur retraite et leurs droits de base en matière d'invalidité et décès. Les prestations en cas d'arrêt de travail dépendent des cotisations versées et de la durée de carence.</p>
          <h2>Prévoyance complémentaire pour psychologue</h2>
          <ul>
            <li>Indemnités journalières complémentaires dès l'arrêt</li>
            <li>Couverture des arrêts d'origine psychique</li>
            <li>Rente d'invalidité professionnelle adaptée</li>
            <li>Retraite complémentaire via PER</li>
          </ul>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/retraite-per" className="badge-blue">Retraite & PER</Link>
            <Link href="/prevoyance-professionnelle" className="badge-blue">Prévoyance pro</Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8">Questions fréquentes – Psychologue</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Audit prévoyance gratuit pour psychologue libéral" subtitle="CIPAV, revenus, risques professionnels : analysons ensemble votre protection." ctaPrimary="Demander un audit gratuit" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
