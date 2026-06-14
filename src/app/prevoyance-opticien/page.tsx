import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";

export const metadata: Metadata = {
  title: "Prévoyance opticien indépendant Paris | Vincent Leroy AXA",
  description:
    "Prévoyance opticien indépendant : protégez votre commerce et vos revenus en cas d'arrêt de travail. SSI, prévoyance complémentaire pour opticiens à Paris.",
  alternates: { canonical: "/prevoyance-opticien" },
};

const faqItems = [
  {
    question: "Quel régime social pour un opticien indépendant ?",
    answer: "Un opticien indépendant qui exerce en tant que commerçant (propriétaire de son magasin) relève de la Sécurité Sociale des Indépendants (SSI, ex-RSI) pour sa protection sociale de base. Sa couverture en arrêt de travail peut être inférieure à celle d'un salarié.",
  },
  {
    question: "Comment protéger mon magasin si je suis en arrêt ?",
    answer: "En cas d'arrêt de travail, un opticien indépendant peut avoir besoin de faire appel à du personnel remplaçant ou de réduire l'activité. Les charges du magasin (loyer, salaires, stocks) continuent. Une garantie frais généraux peut aider à couvrir ces coûts pendant l'arrêt.",
  },
  {
    question: "L'assurance emprunteur est-elle pertinente pour un opticien ?",
    answer: "Si vous avez contracté un emprunt pour acquérir votre fonds de commerce ou votre local, l'assurance emprunteur est essentielle. En cas d'invalidité ou de décès, elle garantit le remboursement du prêt. Il est important de vérifier la définition de l'invalidité dans le contrat.",
  },
  {
    question: "Un salarié optique et un patron d'une franchise ont-ils les mêmes besoins ?",
    answer: "Non. Un salarié est couvert par la protection sociale du régime général. Un patron d'une franchise ou d'un magasin indépendant est un travailleur non salarié (commerçant) avec une protection de base souvent moins étendue. Ses besoins en complémentaire prévoyance sont généralement plus importants.",
  },
];

export default function PrevoyanceOpticienPage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Professions libérales", href: "/professions-liberales" }, { label: "Opticien" }]} />
        </div>
      </div>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Opticiens indépendants</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Prévoyance opticien indépendant : protéger son commerce et ses revenus
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            En tant qu&apos;opticien indépendant, votre magasin tourne grâce à vous. Un arrêt de travail
            prolongé peut peser lourdement sur vos finances. Quelle est votre protection réelle ?
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">Faire le point sur ma prévoyance</Link>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            L&apos;opticien indépendant relève de la SSI (Sécurité Sociale des Indépendants) pour sa
            protection de base. Ses charges fixes (loyer, personnel, stocks) continuent pendant
            un arrêt de travail. Une prévoyance complémentaire permet de maintenir les revenus
            et, avec une garantie frais généraux, de couvrir les charges du magasin pendant l&apos;arrêt.
          </SummaryBox>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>L&apos;opticien indépendant : une activité commerciale et un métier de santé</h2>
          <p>L'opticien indépendant est à la fois commerçant et professionnel de santé. Il gère un magasin avec ses contraintes (stocks, personnel, loyer) tout en exercant une activité de conseil et d'appareillage. Son absence directe impacte l'ensemble de la structure.</p>
          <h2>Régime SSI : couverture de base du commerçant</h2>
          <p>La SSI assure une couverture en maladie, maternité et invalidité pour les travailleurs non salariés commerçants. Les niveaux de prestations peuvent être inférieurs à ceux du régime général en cas d'arrêt de travail.</p>
          <h2>Prévoyance complémentaire : indispensable</h2>
          <ul>
            <li>Complément d'indemnités journalières dès le premier arrêt</li>
            <li>Garantie frais généraux du magasin</li>
            <li>Rente d'invalidité professionnelle</li>
            <li>Capital décès pour protéger la famille</li>
          </ul>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/retraite-per" className="badge-blue">Retraite & PER</Link>
            <Link href="/assurance-emprunteur" className="badge-blue">Assurance emprunteur</Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8">Questions fréquentes – Opticien</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Audit prévoyance gratuit pour opticien indépendant" subtitle="SSI, charges du magasin, revenus : construisons une protection adaptée à votre commerce." ctaPrimary="Demander un audit gratuit" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
