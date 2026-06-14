import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";

export const metadata: Metadata = {
  title: "Prévoyance avocat libéral Paris | Vincent Leroy AXA",
  description:
    "Prévoyance avocat : sécurisez vos revenus en cas d'arrêt de travail ou d'invalidité. Régime CNBF, solutions personnalisées pour avocats libéraux à Paris.",
  alternates: { canonical: "/prevoyance-avocat" },
};

const faqItems = [
  {
    question: "Quelle est la caisse de prévoyance des avocats ?",
    answer: "Les avocats inscrits au barreau cotisent à la CNBF (Caisse Nationale des Barreaux Français) pour leur retraite et leur prévoyance de base. La CNBF gère notamment les indemnités journalières et les allocations d'invalidité.",
  },
  {
    question: "Quels sont les risques spécifiques pour un avocat libéral ?",
    answer: "Les avocats libéraux sont exposés à des risques souvent sous-estimés : burn-out, épuisement professionnel, stress chronique lié aux procédures et aux délais. L'invalidité peut résulter d'une pathologie psychique tout autant que physique. Ces risques doivent être pris en compte dans la prévoyance.",
  },
  {
    question: "Un avocat collaborateur est-il couvert différemment ?",
    answer: "Un avocat collaborateur libéral n'est pas salarié. Il cotise à la CNBF comme un avocat associé ou individuel. En revanche, un avocat collaborateur salarié relève du régime général. La différence de statut est importante pour évaluer la couverture.",
  },
  {
    question: "Comment protéger le cabinet en cas d'absence prolongée ?",
    answer: "Pour les avocats qui exercent en structure, une assurance homme-clé ou une garantie frais généraux peut être envisagée pour couvrir les charges fixes du cabinet pendant un arrêt et financer un remplacement ou une réorganisation.",
  },
];

export default function PrevoyanceAvocat() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Professions libérales", href: "/professions-liberales" }, { label: "Avocat" }]} />
        </div>
      </div>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Avocats</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Prévoyance avocat : sécuriser vos revenus en cas d&apos;arrêt ou d&apos;invalidité
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Profession exigeante, revenus variables, charges fixes du cabinet : un arrêt de travail
            prolongé peut rapidement fragiliser votre situation. La CNBF offre une base — mais est-elle
            suffisante ?
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">Faire le point sur ma prévoyance</Link>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            Les avocats libéraux cotisent à la CNBF pour leur retraite et prévoyance obligatoires.
            Les risques liés au burn-out, au stress professionnel et à l&apos;épuisement sont particulièrement
            présents dans cette profession. Une prévoyance complémentaire permet de combler les éventuelles
            lacunes du régime CNBF et de protéger les revenus et le cabinet.
          </SummaryBox>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>La CNBF : couverture des avocats libéraux</h2>
          <p>La Caisse Nationale des Barreaux Français gère les droits retraite et prévoyance des avocats. Les prestations couvrent notamment les indemnités journalières après carence et les allocations en cas d'invalidité partielle ou totale.</p>
          <h2>Les risques sous-estimés dans la profession</h2>
          <p>Au-delà des risques physiques classiques, les avocats font face à des risques spécifiques : surcharge de travail, délais de procédure, conflits avec les clients, pression réglementaire. Ces facteurs peuvent conduire à des pathologies psychiques pouvant générer un arrêt de travail.</p>
          <h2>Prévoyance complémentaire pour avocat</h2>
          <ul>
            <li>Indemnités journalières complémentaires dès l'arrêt de travail</li>
            <li>Rente d'invalidité professionnelle spécifique</li>
            <li>Capital décès pour la protection de la famille</li>
            <li>Garantie frais généraux du cabinet si structure importante</li>
          </ul>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/retraite-per" className="badge-blue">Retraite & PER</Link>
            <Link href="/assurance-emprunteur" className="badge-blue">Assurance emprunteur</Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8">Questions fréquentes – Avocat</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Audit prévoyance gratuit pour avocat libéral" subtitle="CNBF, revenus, charges du cabinet : analysons ensemble votre protection et les pistes d'amélioration." ctaPrimary="Demander un audit gratuit" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
