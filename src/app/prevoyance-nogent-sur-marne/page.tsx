import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AuditCTA from "@/components/ui/AuditCTA";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Prévoyance Nogent-sur-Marne | Vincent Leroy AXA",
  description: "Conseiller prévoyance à Nogent-sur-Marne (94130). Agent AXA, accompagnement des professions libérales, dirigeants et indépendants de Nogent et du Val-de-Marne.",
  alternates: { canonical: "/prevoyance-nogent-sur-marne" },
};

const faqItems = [
  { question: "Êtes-vous disponible pour des clients à Nogent-sur-Marne ?", answer: "Oui, Nogent-sur-Marne fait partie de ma zone d'intervention. La ville est accessible facilement depuis Vincennes et je me déplace régulièrement dans ce secteur." },
  { question: "Nogent-sur-Marne a-t-il des particularités pour les professionnels ?", answer: "Nogent-sur-Marne est une commune résidentielle et dynamique avec un bon tissu de professions libérales, notamment de santé, et des indépendants. Les familles de cadres sont nombreuses et ont souvent des besoins combinés en prévoyance individuelle et assurance emprunteur." },
];

export default function PrevoyanceNogentPage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "Prévoyance Val-de-Marne", href: "/prevoyance-val-de-marne" }, { label: "Nogent-sur-Marne" }]} /></div>
      </div>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">📍 Nogent-sur-Marne</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">Prévoyance à Nogent-sur-Marne : protection des revenus et du patrimoine</h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">Nogent-sur-Marne est une ville à la fois résidentielle et active, avec de nombreuses familles de cadres et de professionnels libéraux. J&apos;accompagne ces professionnels dans leur prévoyance individuelle, leur retraite et leur assurance emprunteur.</p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">Demander un audit gratuit</Link>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Nogent-sur-Marne : des familles et des professionnels à bien protéger</h2>
          <p>Les résidents de Nogent-sur-Marne sont souvent des propriétaires ou accédants à la propriété, avec des projets immobiliers et des crédits en cours. Ils ont besoin d&apos;une protection cohérente qui couvre à la fois leurs revenus professionnels et leurs engagements financiers.</p>
          <h2>Mes services à Nogent-sur-Marne</h2>
          <ul>
            <li><Link href="/prevoyance-professionnelle" className="text-brand-blue hover:underline">Prévoyance professionnelle</Link></li>
            <li><Link href="/retraite-per" className="text-brand-blue hover:underline">Retraite & PER</Link></li>
            <li><Link href="/assurance-emprunteur" className="text-brand-blue hover:underline">Assurance emprunteur</Link></li>
            <li><Link href="/complementaire-sante" className="text-brand-blue hover:underline">Complémentaire santé</Link></li>
          </ul>
        </div>
      </section>
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl"><FAQAccordion items={faqItems} /></div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Audit prévoyance gratuit à Nogent-sur-Marne" subtitle="Rendez-vous à domicile, en cabinet ou en visioconférence. Premier échange sans engagement." ctaPrimary="Demander un audit gratuit" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
