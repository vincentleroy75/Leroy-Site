import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import LocalSEOBlock from "@/components/ui/LocalSEOBlock";

export const metadata: Metadata = {
  title: "Prévoyance Vincennes – Agent AXA | Vincent Leroy",
  description:
    "Conseiller en prévoyance et patrimoine à Vincennes. Vincent Leroy, Agent AXA, accompagne professions libérales, dirigeants et indépendants de Vincennes et du Val-de-Marne.",
  alternates: { canonical: "/prevoyance-vincennes" },
};

const faqItems = [
  {
    question: "Êtes-vous basé à Vincennes ?",
    answer: "Oui, mon cabinet est basé à Vincennes, aux portes de Paris. Cette localisation me permet d'accompagner facilement les professionnels de Vincennes, du 12e arrondissement, de Saint-Mandé et plus largement du Val-de-Marne.",
  },
  {
    question: "Vincennes est-elle une zone particulièrement active pour les professions libérales ?",
    answer: "Vincennes est une ville dynamique avec un tissu dense de professions libérales : médecins, kinésithérapeutes, psychologues, avocats, architectes… La proximité avec Paris attire des professionnels qui apprécient la qualité de vie du Val-de-Marne tout en travaillant sur Paris ou localement.",
  },
  {
    question: "Proposez-vous des rendez-vous le soir ou le week-end ?",
    answer: "Oui, pour m'adapter aux contraintes des professionnels actifs, je propose des rendez-vous en dehors des heures classiques sur demande. Les rendez-vous en visioconférence offrent également plus de flexibilité horaire.",
  },
];

export default function PrevoyanceVincennesPage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Prévoyance Vincennes" }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">📍 Vincennes</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Prévoyance à Vincennes : agent AXA de proximité pour professions libérales et dirigeants
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Basé à Vincennes, j&apos;accompagne les professionnels libéraux, dirigeants et indépendants
            de Vincennes et de l&apos;agglomération parisienne de proximité. Un interlocuteur que vous
            pouvez rencontrer facilement, qui connaît le tissu économique local.
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">Demander un audit gratuit</Link>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Vincennes : un tissu dense de professions libérales et indépendants</h2>
          <p>
            Vincennes est une ville résidentielle et professionnelle à la fois, avec une forte
            présence de professions libérales de santé, de professions juridiques, d&apos;architectes
            et de dirigeants de petites entreprises. Ville aisée et dynamique, elle concentre
            un profil de professionnels qui ont besoin d&apos;une protection sérieuse et personnalisée.
          </p>
          <p>
            Mon cabinet est idéalement situé pour accueillir les professionnels de Vincennes,
            de Saint-Mandé, du 12e arrondissement de Paris et des communes proches du Val-de-Marne.
          </p>

          <h2>Ce que je propose aux professionnels de Vincennes</h2>
          <ul>
            <li>Bilan prévoyance gratuit et sans engagement</li>
            <li>Analyse de votre régime obligatoire (selon votre caisse)</li>
            <li>Solutions de prévoyance professionnelle complémentaire</li>
            <li>Retraite et PER individuel</li>
            <li>Complémentaire santé individuelle</li>
            <li>Assurance emprunteur</li>
            <li>Protection sociale d&apos;entreprise (si vous êtes employeur)</li>
          </ul>
        </div>
      </section>

      <section className="py-10 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <LocalSEOBlock currentCity="Vincennes" />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8">Questions fréquentes – Vincennes</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Rencontrez-moi à Vincennes" subtitle="Cabinet à Vincennes, rendez-vous aussi dans vos locaux ou en visioconférence. Premier échange gratuit." ctaPrimary="Prendre rendez-vous" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
