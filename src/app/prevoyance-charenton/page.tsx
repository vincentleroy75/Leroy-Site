import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AuditCTA from "@/components/ui/AuditCTA";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Prévoyance Charenton-le-Pont | Vincent Leroy AXA",
  description: "Conseiller prévoyance à Charenton-le-Pont (94220). Agent AXA, accompagnement des entreprises, professions libérales et dirigeants de Charenton et du Val-de-Marne.",
  alternates: { canonical: "/prevoyance-charenton" },
};

const faqItems = [
  { question: "Intervenez-vous à Charenton-le-Pont ?", answer: "Oui, Charenton-le-Pont fait partie de ma zone d'intervention naturelle. La ville est facilement accessible depuis Vincennes. Je me déplace dans vos locaux ou vous reçois en cabinet." },
  { question: "Charenton a-t-il un tissu économique particulier ?", answer: "Charenton-le-Pont est connue pour son dynamisme économique et son tissu de TPE/PME diversifiées, notamment dans les secteurs du service, du commerce et des nouvelles technologies. Elle accueille aussi de nombreux professionnels libéraux et indépendants." },
];

export default function PrevoyanceCharentonPage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "Prévoyance Val-de-Marne", href: "/prevoyance-val-de-marne" }, { label: "Charenton-le-Pont" }]} /></div>
      </div>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">📍 Charenton-le-Pont</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">Prévoyance à Charenton-le-Pont : accompagnement des entreprises et professions libérales</h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">Charenton-le-Pont, commune dynamique aux portes de Paris, accueille de nombreuses TPE/PME et professionnels libéraux. Je les accompagne dans leur protection sociale, prévoyance professionnelle et retraite.</p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">Demander un audit gratuit</Link>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Un tissu économique dense et varié</h2>
          <p>Charenton-le-Pont est l&apos;une des communes les plus denses économiquement du Val-de-Marne, avec des entreprises de taille variée, des freelances, des professions libérales et des commerçants. Ces professionnels ont des besoins spécifiques en matière de prévoyance et de protection sociale collective.</p>
          <h2>Prévoyance individuelle et collective à Charenton</h2>
          <ul>
            <li><Link href="/prevoyance-professionnelle" className="text-brand-blue hover:underline">Prévoyance professionnelle individuelle</Link></li>
            <li><Link href="/protection-sociale-entreprise" className="text-brand-blue hover:underline">Protection sociale collective pour les entreprises</Link></li>
            <li><Link href="/prevoyance-dirigeant" className="text-brand-blue hover:underline">Protection du dirigeant</Link></li>
            <li><Link href="/retraite-per" className="text-brand-blue hover:underline">Retraite & PER</Link></li>
          </ul>
        </div>
      </section>
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl"><FAQAccordion items={faqItems} /></div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Audit prévoyance gratuit à Charenton-le-Pont" subtitle="Rendez-vous dans vos locaux ou en cabinet à Vincennes. Premier échange sans engagement." ctaPrimary="Demander un audit gratuit" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
