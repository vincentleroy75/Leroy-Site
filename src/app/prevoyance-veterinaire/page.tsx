import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";

export const metadata: Metadata = {
  title: "Prévoyance vétérinaire libéral Paris | Vincent Leroy AXA",
  description:
    "Prévoyance vétérinaire libéral : protégez vos revenus et votre cabinet en cas d'arrêt de travail ou d'invalidité. Régime CARPV, solutions personnalisées à Paris.",
  alternates: { canonical: "/prevoyance-veterinaire" },
};

const faqItems = [
  {
    question: "Quelle est la caisse de retraite des vétérinaires libéraux ?",
    answer: "Les vétérinaires libéraux cotisent à la CARPV (Caisse Autonome de Retraite et de Prévoyance des Vétérinaires). La CARPV gère les prestations de retraite, d'invalidité et de décès des vétérinaires inscrits à l'Ordre.",
  },
  {
    question: "Quels sont les risques professionnels spécifiques aux vétérinaires ?",
    answer: "Les vétérinaires libéraux sont exposés à des risques physiques particuliers : blessures dues aux animaux (morsures, coups), zoonoses, charge physique lors des actes sur les grands animaux (équins, bovins), risques chimiques et biologiques… Ces risques rendent la protection contre l'invalidité professionnelle particulièrement importante.",
  },
  {
    question: "Est-ce différent pour un vétérinaire canin et un vétérinaire rural ?",
    answer: "Oui. Un vétérinaire rural ou mixte (grands animaux) est exposé à des risques physiques nettement plus importants qu'un praticien canin en clinique. Les contrats de prévoyance peuvent tenir compte de ces spécificités dans l'évaluation du risque et la définition des garanties.",
  },
  {
    question: "La prévoyance peut-elle couvrir les charges de la clinique vétérinaire ?",
    answer: "Oui, une garantie frais généraux peut être souscrite pour couvrir les charges fixes de la structure (personnel, loyers, équipements…) pendant un arrêt de travail. C'est une protection importante pour les vétérinaires qui ont des structures importantes.",
  },
];

export default function PrevoyanceVeterinaireePage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Professions libérales", href: "/professions-liberales" }, { label: "Vétérinaire" }]} />
        </div>
      </div>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Vétérinaires</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Prévoyance vétérinaire libéral : protéger son activité et ses revenus
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Le métier de vétérinaire libéral comporte des risques physiques propres — et votre cabinet
            dépend de votre présence. Quelle est votre protection réelle en cas d&apos;arrêt prolongé ?
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">Faire le point sur ma prévoyance</Link>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            Les vétérinaires libéraux cotisent à la CARPV pour leur prévoyance et retraite obligatoires.
            Les risques physiques propres à la profession (animaux, zoonoses, grande faune) rendent la
            prévoyance professionnelle complémentaire particulièrement pertinente. Une étude personnalisée
            permet de calibrer les garanties selon votre type d&apos;activité.
          </SummaryBox>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Les risques professionnels du vétérinaire libéral</h2>
          <p>La pratique vétérinaire expose à des risques physiques importants : blessures par les animaux, maladies transmissibles, charge physique des interventions. Un arrêt prolongé peut rapidement fragiliser une structure clinique dont les charges fixes sont élevées.</p>
          <h2>La CARPV : couverture de base</h2>
          <p>La Caisse Autonome de Retraite et de Prévoyance des Vétérinaires gère les droits à la retraite, à l'invalidité et les prestations décès des vétérinaires libéraux. Les niveaux de prestations dépendent des cotisations et de l'ancienneté.</p>
          <h2>Prévoyance complémentaire : pour quoi faire ?</h2>
          <ul>
            <li>Augmenter les indemnités journalières pour couvrir vos besoins réels</li>
            <li>Couvrir les frais généraux de la clinique en cas d'arrêt</li>
            <li>Protéger vos associés via une assurance croisée</li>
            <li>Anticiper votre retraite avec un PER individuel</li>
          </ul>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/retraite-per" className="badge-blue">Retraite & PER</Link>
            <Link href="/prevoyance-professionnelle" className="badge-blue">Prévoyance pro</Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8">Questions fréquentes – Vétérinaire</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Audit prévoyance gratuit pour vétérinaire libéral" subtitle="Analysons votre CARPV et construisons une protection adaptée à votre type d'activité." ctaPrimary="Demander un audit gratuit" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
