import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AuditCTA from "@/components/ui/AuditCTA";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Prévoyance Saint-Mandé – Agent AXA | Vincent Leroy",
  description: "Conseiller prévoyance à Saint-Mandé (94160). Agent AXA Prévoyance & Patrimoine, accompagnement des professions libérales et dirigeants de Saint-Mandé et Vincennes.",
  alternates: { canonical: "/prevoyance-saint-mande" },
};

const faqItems = [
  { question: "Saint-Mandé est-il dans votre zone d'intervention ?", answer: "Oui, Saint-Mandé est au cœur de ma zone d'intervention. La ville est adjacente à Vincennes où est basé mon cabinet. Je connais bien le tissu de professionnels libéraux et d'indépendants de Saint-Mandé." },
  { question: "Quels types de clients avez-vous à Saint-Mandé ?", answer: "Saint-Mandé est une commune résidentielle avec de nombreux professionnels de santé, cadres, consultants indépendants et dirigeants de PME. Ce sont précisément les profils que j'accompagne le plus souvent." },
];

export default function PrevoyanceSaintMandePage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "Prévoyance Val-de-Marne", href: "/prevoyance-val-de-marne" }, { label: "Saint-Mandé" }]} /></div>
      </div>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">📍 Saint-Mandé</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">Prévoyance à Saint-Mandé : conseiller de proximité pour libéraux et indépendants</h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">Situé juste à côté de Vincennes, Saint-Mandé est une commune résidentielle et professionnelle avec un tissu dense de professionnels libéraux. Je suis votre interlocuteur de proximité pour toute question de prévoyance, retraite ou protection patrimoniale.</p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">Demander un audit gratuit</Link>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Saint-Mandé : une commune résidentielle avec des professionnels exigeants</h2>
          <p>Saint-Mandé est reconnue pour la qualité de ses professionnels de santé, ses cadres dirigeants et ses indépendants actifs. Ces professionnels ont besoin d&apos;un conseiller sérieux, disponible et qui comprend leurs contraintes spécifiques.</p>
          <h2>Services disponibles à Saint-Mandé</h2>
          <ul>
            <li><Link href="/prevoyance-professionnelle" className="text-brand-blue hover:underline">Prévoyance professionnelle</Link></li>
            <li><Link href="/prevoyance-dirigeant" className="text-brand-blue hover:underline">Protection du dirigeant</Link></li>
            <li><Link href="/retraite-per" className="text-brand-blue hover:underline">Retraite & PER</Link></li>
            <li><Link href="/complementaire-sante" className="text-brand-blue hover:underline">Complémentaire santé</Link></li>
          </ul>
        </div>
      </section>
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl"><FAQAccordion items={faqItems} /></div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Audit prévoyance gratuit à Saint-Mandé" subtitle="À deux pas de Vincennes. Rendez-vous en cabinet ou dans vos locaux. Premier échange sans engagement." ctaPrimary="Demander un audit gratuit" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
