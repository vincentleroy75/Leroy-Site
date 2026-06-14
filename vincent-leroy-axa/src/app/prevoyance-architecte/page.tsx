import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";

export const metadata: Metadata = {
  title: "Prévoyance architecte indépendant Paris | Vincent Leroy AXA",
  description:
    "Prévoyance architecte indépendant : protégez vos revenus et votre cabinet. Régime CIPAV, prévoyance et retraite pour architectes libéraux à Paris et en Île-de-France.",
  alternates: { canonical: "/prevoyance-architecte" },
};

const faqItems = [
  {
    question: "Les architectes libéraux cotisent-ils à la CIPAV ?",
    answer: "La plupart des architectes libéraux relevant du secteur libéral réglementé cotisent à la CIPAV (Caisse Interprofessionnelle de Prévoyance et d'Assurance Vieillesse). Cependant, certains peuvent relever d'autres régimes selon leur statut exact. Il convient de vérifier votre situation.",
  },
  {
    question: "Quels sont les risques spécifiques pour un architecte indépendant ?",
    answer: "Les architectes peuvent être exposés à des visites de chantier physiquement exigeantes, mais aussi à un stress lié à la gestion de projets complexes, aux délais et aux responsabilités. Un arrêt prolongé peut perturber le suivi des chantiers en cours et engager des responsabilités contractuelles.",
  },
  {
    question: "La prévoyance peut-elle couvrir les charges du cabinet en mon absence ?",
    answer: "Oui, une garantie frais généraux peut prendre en charge les charges fixes du cabinet (loyer, secrétaire, abonnements logiciels…) pendant la durée d'un arrêt de travail, permettant de maintenir la structure opérationnelle le temps du retour.",
  },
  {
    question: "Comment préparer sa retraite quand on est architecte libéral ?",
    answer: "La CIPAV gère la retraite de base et complémentaire des architectes. Selon votre âge de début d'activité et vos revenus, un PER individuel peut permettre de constituer un complément de retraite. Une projection personnalisée est recommandée.",
  },
];

export default function PrevoyanceArchitectePage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Professions libérales", href: "/professions-liberales" }, { label: "Architecte" }]} />
        </div>
      </div>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Architectes</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Prévoyance architecte indépendant : protégez votre cabinet et vos revenus
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Suivi de chantiers, responsabilités contractuelles, revenus liés à votre activité :
            un arrêt prolongé peut avoir des conséquences importantes sur vos projets en cours.
            Êtes-vous suffisamment protégé ?
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">Faire le point sur ma prévoyance</Link>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            Les architectes libéraux relèvent généralement de la CIPAV pour leur retraite et prévoyance
            obligatoires. Un arrêt de travail peut impacter directement les chantiers en cours et les
            engagements contractuels. Une prévoyance complémentaire adaptée protège les revenus et,
            le cas échéant, les charges fixes du cabinet.
          </SummaryBox>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Les enjeux de la prévoyance pour un architecte indépendant</h2>
          <p>L'architecte libéral vend son expertise et son temps. Ses revenus sont directement liés à sa capacité à piloter des projets. Un arrêt imprévu peut bloquer des chantiers, engager des pénalités contractuelles et impacter la réputation du cabinet.</p>
          <h2>La CIPAV : protection de base</h2>
          <p>La CIPAV assure une couverture de base en matière d'invalidité et décès. Les niveaux de prestations sont liés aux cotisations versées. Pour une protection complète, une prévoyance individuelle complémentaire est généralement recommandée.</p>
          <h2>Retraite et PER pour architecte</h2>
          <p>Comme beaucoup de professions libérales, les architectes peuvent avoir intérêt à compléter leur retraite CIPAV via un PER individuel, surtout si les revenus ont été irréguliers en début de carrière.</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/retraite-per" className="badge-blue">Retraite & PER</Link>
            <Link href="/prevoyance-professionnelle" className="badge-blue">Prévoyance pro</Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8">Questions fréquentes – Architecte</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Audit prévoyance gratuit pour architecte libéral" subtitle="CIPAV, revenus, engagements contractuels : analysons ensemble votre protection." ctaPrimary="Demander un audit gratuit" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
