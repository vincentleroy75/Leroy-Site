import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";

export const metadata: Metadata = {
  title: "Prévoyance pharmacien titulaire Paris | Vincent Leroy AXA",
  description:
    "Prévoyance pharmacien titulaire d'officine : protégez votre officine et vos revenus en cas d'arrêt de travail. Régime CAVP, solutions personnalisées à Paris.",
  alternates: { canonical: "/prevoyance-pharmacien" },
};

const faqItems = [
  {
    question: "Quelle est la caisse de prévoyance des pharmaciens ?",
    answer: "Les pharmaciens libéraux titulaires cotisent à la CAVP (Caisse d'Assurance Vieillesse des Pharmaciens) pour leur retraite et prévoyance de base. La CAVP gère les indemnités journalières et les prestations invalidité et décès.",
  },
  {
    question: "Comment continuer à faire fonctionner l'officine si je suis en arrêt ?",
    answer: "Un pharmacien titulaire peut faire appel à un pharmacien remplaçant ou gérant. Cependant, les coûts associés (rémunération du remplaçant, continuité des charges…) peuvent s'avérer importants. Une garantie frais généraux dans votre prévoyance peut aider à financer cette continuité.",
  },
  {
    question: "La valeur de l'officine est-elle protégée ?",
    answer: "La valeur patrimoniale de l'officine n'est pas directement protégée par une prévoyance classique. En revanche, un contrat d'assurance spécifique peut protéger l'outil de travail (cession, continuité). Ce point mérite d'être abordé dans le cadre d'un bilan patrimonial plus large.",
  },
  {
    question: "Quelles sont les spécificités de l'assurance emprunteur pour un pharmacien ?",
    answer: "Si vous avez emprunté pour acquérir votre officine, l'assurance emprunteur est un point clé. Les garanties doivent couvrir spécifiquement le risque d'invalidité professionnelle en tant que pharmacien titulaire. La définition de l'invalidité dans le contrat est un point crucial à vérifier.",
  },
];

export default function PrevoyancePharmacienPage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Professions libérales", href: "/professions-liberales" }, { label: "Pharmacien" }]} />
        </div>
      </div>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Pharmaciens titulaires</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Prévoyance pharmacien titulaire : protéger son officine et ses revenus
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            L&apos;officine ne s&apos;arrête pas parce que vous êtes absent. Entre les charges, le personnel
            et la continuité d&apos;activité, votre prévoyance doit être à la hauteur des enjeux.
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">Faire le point sur ma prévoyance</Link>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            Les pharmaciens titulaires cotisent à la CAVP pour leur prévoyance et retraite obligatoires.
            En cas d&apos;arrêt, les charges de l&apos;officine continuent : personnel, loyer, stocks. Une prévoyance
            complémentaire bien calibrée doit tenir compte de cette réalité et, si possible, inclure
            une garantie frais généraux pour couvrir la continuité d&apos;activité.
          </SummaryBox>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Les spécificités du pharmacien titulaire</h2>
          <p>Le pharmacien titulaire est à la fois professionnel de santé et chef d'entreprise. Il porte la responsabilité de l'officine, du personnel et de la continuité des soins aux patients. Son absence peut rapidement mettre en difficulté une structure qui tourne 7 jours sur 7.</p>
          <h2>La CAVP : protection de base</h2>
          <p>La Caisse d'Assurance Vieillesse des Pharmaciens assure les droits de retraite et les prestations d'invalidité et décès des pharmaciens libéraux. Les indemnités journalières et rentes d'invalidité dépendent des cotisations versées.</p>
          <h2>Prévoyance complémentaire : points clés</h2>
          <ul>
            <li>Garantie frais généraux pour couvrir les charges de l'officine</li>
            <li>Indemnisation du coût d'un pharmacien remplaçant</li>
            <li>Invalidité professionnelle spécifique à la pharmacie</li>
            <li>Capital décès pour protéger la famille et les associés</li>
          </ul>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/retraite-per" className="badge-blue">Retraite & PER</Link>
            <Link href="/assurance-emprunteur" className="badge-blue">Assurance emprunteur officine</Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8">Questions fréquentes – Pharmacien</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Audit prévoyance gratuit pour pharmacien titulaire" subtitle="CAVP, charges de l'officine, continuité d'activité : construisons une protection adaptée à votre réalité." ctaPrimary="Demander un audit gratuit" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
