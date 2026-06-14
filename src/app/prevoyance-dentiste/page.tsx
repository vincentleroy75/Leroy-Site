import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";

export const metadata: Metadata = {
  title: "Prévoyance chirurgien-dentiste libéral Paris | Vincent Leroy AXA",
  description:
    "Prévoyance dentiste : protégez vos revenus en cas d'arrêt de travail ou d'invalidité. Régime CARCDSF, prévoyance complémentaire et retraite pour chirurgiens-dentistes libéraux.",
  alternates: { canonical: "/prevoyance-dentiste" },
};

const faqItems = [
  {
    question: "Quelle est la caisse obligatoire des chirurgiens-dentistes libéraux ?",
    answer:
      "Les chirurgiens-dentistes libéraux sont affiliés à la CARCDSF (Caisse Autonome de Retraite des Chirurgiens-Dentistes et des Sages-Femmes) pour leur retraite et leur prévoyance de base. La CARCDSF gère les indemnités journalières, les allocations d'invalidité et les prestations décès.",
  },
  {
    question: "Pourquoi l'invalidité est-elle un risque particulier pour un dentiste ?",
    answer:
      "La pratique dentaire est physiquement exigeante : travail en position courbée, gestes précis, utilisation d'instruments vibrants… Les troubles musculo-squelettiques, les problèmes de dos ou d'épaule peuvent impacter directement la capacité à exercer. Une invalidité professionnelle, même partielle, peut remettre en cause l'ensemble de l'activité du cabinet.",
  },
  {
    question: "Puis-je couvrir les charges fixes de mon cabinet en cas d'arrêt ?",
    answer:
      "Oui, certains contrats de prévoyance professionnelle peuvent inclure une garantie frais généraux qui prend en charge les charges fixes du cabinet (loyer, salaires du personnel, charges…) pendant un arrêt de travail. C'est une garantie particulièrement utile pour les dentistes qui ont des structures de charges importantes.",
  },
  {
    question: "Quelle est la spécificité de la définition d'invalidité pour un dentiste ?",
    answer:
      "Certains contrats définissent l'invalidité comme l'impossibilité d'exercer toute activité professionnelle, d'autres comme l'impossibilité d'exercer votre profession spécifique de dentiste. La seconde définition est plus protectrice pour un professionnel libéral et doit être vérifiée lors de la comparaison des contrats.",
  },
  {
    question: "Comment anticiper sa retraite quand on est chirurgien-dentiste ?",
    answer:
      "Les dentistes libéraux accumulent des droits retraite auprès de la CARCDSF. Selon votre âge de début d'activité et votre niveau de revenus, ces droits peuvent être complétés par un PER individuel pour atteindre le niveau de pension souhaité à la retraite.",
  },
];

export default function PrevoyanceDentistePage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[
            { label: "Professions libérales", href: "/professions-liberales" },
            { label: "Chirurgien-dentiste" }
          ]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Chirurgiens-dentistes</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Prévoyance chirurgien-dentiste : anticiper l&apos;arrêt de travail et l&apos;invalidité
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            La pratique dentaire est physiquement exigeante. Un trouble musculo-squelettique,
            un problème de dos ou d&apos;épaule peut mettre fin prématurément à votre activité.
            Êtes-vous suffisamment protégé ?
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">
            Faire le point sur ma prévoyance
          </Link>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            Les chirurgiens-dentistes libéraux sont affiliés à la CARCDSF pour leur prévoyance
            et retraite obligatoires. Le risque d&apos;invalidité professionnelle est particulièrement
            important dans cette profession en raison des contraintes physiques de l&apos;exercice.
            Une prévoyance complémentaire bien calibrée permet de couvrir les revenus et les
            charges fixes du cabinet en cas d&apos;incapacité.
          </SummaryBox>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Les risques spécifiques du chirurgien-dentiste libéral</h2>
          <p>
            La pratique de la chirurgie dentaire impose des contraintes physiques importantes :
            posture courbée prolongée, travail en espace réduit, vibrations des instruments…
            Ces conditions d&apos;exercice exposent les praticiens à des risques de troubles
            musculo-squelettiques (TMS), de pathologies du dos, des épaules et des mains.
          </p>
          <p>
            Une incapacité à exercer, même partielle, peut avoir des conséquences immédiates
            sur votre activité et les revenus du cabinet.
          </p>

          <h2>Le régime CARCDSF</h2>
          <p>
            La CARCDSF assure aux dentistes libéraux une couverture de base en matière de
            prévoyance : indemnités journalières en arrêt de travail, rente d&apos;invalidité et
            prestations décès. Comme pour tous les régimes des professions libérales, les
            niveaux de prestations dépendent des cotisations versées et de l&apos;ancienneté.
          </p>

          <h2>Frais généraux du cabinet : une garantie à ne pas négliger</h2>
          <p>
            Un dentiste libéral supporte des charges importantes : salaires de l&apos;assistante
            dentaire, loyer du cabinet, charges d&apos;équipement, abonnements… En cas d&apos;arrêt
            de travail, ces charges continuent tandis que les actes cessent. Une garantie
            frais généraux complémentaire peut couvrir ces charges pendant la durée de l&apos;arrêt.
          </p>

          <h2>Liens utiles</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/retraite-per" className="badge-blue">Retraite & PER</Link>
            <Link href="/prevoyance-professionnelle" className="badge-blue">Prévoyance pro</Link>
            <Link href="/assurance-emprunteur" className="badge-blue">Assurance emprunteur</Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8">Questions fréquentes – Chirurgien-dentiste</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA
            title="Audit prévoyance gratuit pour dentiste libéral"
            subtitle="Analysons ensemble votre CARCDSF, votre exposition aux risques et les solutions adaptées."
            ctaPrimary="Demander un audit gratuit"
            ctaSecondary="Être rappelé"
          />
        </div>
      </section>
    </>
  );
}
