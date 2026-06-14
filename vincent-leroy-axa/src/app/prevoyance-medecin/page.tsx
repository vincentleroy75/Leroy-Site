import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";

export const metadata: Metadata = {
  title: "Prévoyance médecin libéral Paris | Vincent Leroy AXA",
  description:
    "Prévoyance médecin libéral : protégez vos revenus en cas d'arrêt de travail ou d'invalidité. Régime CARMF, complémentaire prévoyance, retraite médicale à Paris.",
  alternates: { canonical: "/prevoyance-medecin" },
};

const faqItems = [
  {
    question: "Quelle est la caisse obligatoire des médecins libéraux ?",
    answer:
      "Les médecins libéraux sont affiliés à la CARMF (Caisse Autonome de Retraite des Médecins de France) pour leur retraite et leur prévoyance de base. La CARMF gère notamment les allocations d'invalidité et les prestations de décès. Les niveaux de prestations dépendent des cotisations versées et de l'ancienneté.",
  },
  {
    question: "Qu'est-ce que la prévoyance professionnelle est couverte par la CARMF ?",
    answer:
      "La CARMF verse des indemnités journalières après un délai de carence en cas d'arrêt de travail, ainsi qu'une allocation d'invalidité en cas d'invalidité partielle ou totale. Ces prestations peuvent ne pas couvrir l'intégralité des besoins financiers selon votre niveau de revenus et vos charges. Une analyse personnalisée permet de mesurer l'écart.",
  },
  {
    question: "Un médecin remplaçant a-t-il les mêmes droits ?",
    answer:
      "Les médecins remplaçants ont également des droits auprès de la CARMF, mais leur situation peut différer selon leur mode d'exercice (remplacement régulier, collaboration…). Une analyse de votre situation spécifique est recommandée pour identifier les éventuelles lacunes.",
  },
  {
    question: "Comment fonctionne la prévoyance en cas de spécialité médicale risquée ?",
    answer:
      "Certaines spécialités médicales présentent des risques professionnels spécifiques (chirurgie, anesthésie…). Les contrats de prévoyance individuels peuvent prévoir des clauses adaptées. Il est important de bien déclarer votre spécialité lors de la souscription pour éviter tout problème lors d'un sinistre.",
  },
  {
    question: "Puis-je cumuler prévoyance CARMF et prévoyance individuelle ?",
    answer:
      "Oui, la prévoyance individuelle complémentaire s'ajoute aux prestations de la CARMF. C'est précisément son objet : combler les éventuelles lacunes du régime obligatoire pour atteindre le niveau de protection dont vous avez besoin selon vos charges et votre niveau de vie.",
  },
];

export default function PrevoyanceMedecinPage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[
            { label: "Professions libérales", href: "/professions-liberales" },
            { label: "Médecin libéral" }
          ]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Médecins libéraux</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Prévoyance médecin libéral : protégez vos revenus et votre cabinet
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Vous avez investi des années dans vos études et votre cabinet. En cas d&apos;arrêt de travail
            prolongé ou d&apos;invalidité, la CARMF offre une protection de base — mais est-elle
            suffisante pour maintenir votre niveau de vie et couvrir vos charges ?
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">
            Faire le point sur ma prévoyance
          </Link>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            Les médecins libéraux cotisent à la CARMF pour leur prévoyance et retraite obligatoires.
            Ces prestations constituent une base, mais peuvent ne pas couvrir l&apos;intégralité des
            besoins en cas d&apos;arrêt de travail ou d&apos;invalidité, selon le niveau de revenus et les
            charges du cabinet. Une prévoyance complémentaire individuelle permet de combler
            l&apos;écart selon votre situation.
          </SummaryBox>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>La situation particulière du médecin libéral</h2>
          <p>
            Le médecin libéral exerce généralement en secteur 1, 2 ou 3, en cabinet seul ou
            en groupe. Ses revenus dépendent directement de sa capacité à exercer. En cas
            d&apos;arrêt de travail, les patients partent, les charges du cabinet restent.
          </p>
          <p>
            Cette réalité rend la prévoyance particulièrement importante pour les médecins
            libéraux : un arrêt prolongé de plusieurs mois peut menacer la viabilité même
            du cabinet.
          </p>

          <h2>Le régime CARMF : ce qu&apos;il couvre</h2>
          <p>
            La CARMF gère plusieurs volets de protection pour les médecins libéraux :
          </p>
          <ul>
            <li>La retraite de base et complémentaire</li>
            <li>Les indemnités journalières en cas d&apos;arrêt de travail (après délai de carence)</li>
            <li>Les allocations d&apos;invalidité (partielle ou totale)</li>
            <li>Le capital décès et les allocations orphelin</li>
          </ul>
          <p>
            Le niveau exact de ces prestations dépend de votre ancienneté, de vos cotisations
            et de votre situation. Une étude personnalisée est recommandée pour mesurer
            précisément ce que vous percevriez en cas de sinistre.
          </p>

          <h2>Prévoyance complémentaire : pourquoi et comment ?</h2>
          <p>
            Une prévoyance individuelle complémentaire vous permet de :
          </p>
          <ul>
            <li>Réduire le délai de carence avant indemnisation</li>
            <li>Augmenter le niveau d&apos;indemnisation journalière</li>
            <li>Couvrir l&apos;invalidité professionnelle spécifique à la médecine</li>
            <li>Protéger votre famille avec un capital décès adapté</li>
          </ul>

          <h2>Retraite médicale : anticiper dès maintenant</h2>
          <p>
            Les médecins libéraux qui ont démarré leur activité tardivement (après des études
            longues) peuvent avoir des droits retraite plus faibles que des salariés. Anticiper
            via un PER individuel peut permettre, selon votre situation, de compléter vos
            futures pensions.
          </p>

          <h2>Liens utiles</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/retraite-per" className="badge-blue">Retraite & PER</Link>
            <Link href="/complementaire-sante" className="badge-blue">Complémentaire santé</Link>
            <Link href="/assurance-emprunteur" className="badge-blue">Assurance emprunteur</Link>
            <Link href="/prevoyance-professionnelle" className="badge-blue">Prévoyance professionnelle</Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8">Questions fréquentes – Médecin libéral</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA
            title="Audit prévoyance gratuit pour médecin libéral"
            subtitle="30 à 45 minutes pour analyser votre CARMF, identifier les lacunes et étudier les solutions adaptées."
            ctaPrimary="Demander un audit gratuit"
            ctaSecondary="Être rappelé"
          />
        </div>
      </section>
    </>
  );
}
