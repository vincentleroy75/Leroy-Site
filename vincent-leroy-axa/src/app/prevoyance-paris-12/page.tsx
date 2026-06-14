import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AuditCTA from "@/components/ui/AuditCTA";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Prévoyance Paris 12e arrondissement | Vincent Leroy AXA",
  description:
    "Conseiller prévoyance dans le 12e arrondissement de Paris (Nation, Bercy, Daumesnil). Agent AXA, accompagnement des professions libérales et dirigeants du 12e.",
  alternates: { canonical: "/prevoyance-paris-12" },
};

const faqItems = [
  { question: "Avez-vous des clients dans le 12e arrondissement ?", answer: "Oui, j'accompagne régulièrement des professionnels libéraux et dirigeants du 12e arrondissement, notamment autour de Nation, Bercy et Daumesnil. La proximité avec Vincennes facilite les rendez-vous dans le 12e." },
  { question: "Quels types de professionnels sont présents dans le 12e ?", answer: "Le 12e est un arrondissement dynamique avec de nombreux cabinets médicaux, paramédicaux, d'avocats, d'architectes et des PME variées autour des zones de Bercy et Nation. C'est un profil typique de mes clients." },
];

export default function PrevoyanceParis12Page() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "Prévoyance Paris", href: "/prevoyance-paris" }, { label: "Paris 12e" }]} /></div>
      </div>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">📍 Paris 12e</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">Prévoyance dans le 12e arrondissement de Paris</h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">Aux portes de Vincennes, le 12e arrondissement (Nation, Bercy, Daumesnil) regroupe de nombreux professionnels libéraux et dirigeants. J&apos;interviens régulièrement dans ce secteur pour les accompagner dans leur protection sociale et patrimoniale.</p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">Demander un audit gratuit</Link>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Le 12e arrondissement : entre Paris et le Val-de-Marne</h2>
          <p>Le 12e arrondissement bénéficie d&apos;une situation stratégique entre le centre de Paris et la proche banlieue du Val-de-Marne. Il accueille des professions libérales de santé (autour de l&apos;hôpital Saint-Antoine), des cabinets d&apos;avocats, des agences d&apos;architecture et des entreprises de taille variée.</p>
          <h2>Mes services dans le 12e</h2>
          <ul>
            <li><Link href="/prevoyance-professionnelle" className="text-brand-blue hover:underline">Prévoyance professionnelle</Link></li>
            <li><Link href="/retraite-per" className="text-brand-blue hover:underline">Retraite & PER</Link></li>
            <li><Link href="/assurance-emprunteur" className="text-brand-blue hover:underline">Assurance emprunteur</Link></li>
            <li><Link href="/protection-sociale-entreprise" className="text-brand-blue hover:underline">Protection sociale entreprise</Link></li>
          </ul>
        </div>
      </section>
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Audit prévoyance gratuit – Paris 12e" subtitle="Rendez-vous dans le 12e, à Vincennes ou en visioconférence. Premier échange sans engagement." ctaPrimary="Demander un audit gratuit" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
