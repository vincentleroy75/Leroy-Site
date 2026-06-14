import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AuditCTA from "@/components/ui/AuditCTA";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Prévoyance Montreuil (93) | Vincent Leroy AXA",
  description: "Conseiller prévoyance à Montreuil (93100). Agent AXA, accompagnement des dirigeants, indépendants et professions libérales de Montreuil et de la Seine-Saint-Denis.",
  alternates: { canonical: "/prevoyance-montreuil" },
};

const faqItems = [
  { question: "Intervenez-vous à Montreuil ?", answer: "Oui, même si Montreuil est en Seine-Saint-Denis (93), j'accompagne des clients dans ce secteur, notamment les entreprises et indépendants qui se situent à cheval entre l'Est parisien et la première couronne." },
  { question: "Montreuil est-elle différente du Val-de-Marne pour mes besoins ?", answer: "Montreuil est une ville très dynamique avec un tissu de startups, studios créatifs, artisans et professions libérales important. Les profils y sont souvent plus jeunes et en début de constitution patrimoniale, ce qui en fait une excellente période pour structurer une protection." },
];

export default function PrevoyanceMontreuilPage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "Prévoyance Montreuil" }]} /></div>
      </div>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">📍 Montreuil</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">Prévoyance à Montreuil : protection des indépendants, dirigeants et professions libérales</h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">Montreuil est une ville en plein essor avec un tissu d&apos;entrepreneurs, de créatifs et de professions libérales dynamiques. J&apos;interviens dans ce secteur pour accompagner ces professionnels dans la construction d&apos;une protection adaptée à leur réalité.</p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">Demander un audit gratuit</Link>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Montreuil : une ville d&apos;entrepreneurs</h2>
          <p>Montreuil est l&apos;une des villes les plus dynamiques de la première couronne parisienne. Son tissu économique regroupe des startups, des agences de communication, des studios créatifs, des artisans et des professions libérales de santé et paramédicales.</p>
          <p>Ces professionnels ont souvent des revenus en croissance et des besoins de protection qui évoluent rapidement. Un bilan régulier permet de s&apos;assurer que la couverture est toujours adaptée à la situation.</p>
          <h2>Services disponibles à Montreuil</h2>
          <ul>
            <li><Link href="/prevoyance-professionnelle" className="text-brand-blue hover:underline">Prévoyance professionnelle pour indépendants</Link></li>
            <li><Link href="/prevoyance-dirigeant" className="text-brand-blue hover:underline">Protection du dirigeant</Link></li>
            <li><Link href="/retraite-per" className="text-brand-blue hover:underline">Retraite & PER</Link></li>
            <li><Link href="/protection-sociale-entreprise" className="text-brand-blue hover:underline">Protection sociale collective pour les PME</Link></li>
          </ul>
        </div>
      </section>
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl"><FAQAccordion items={faqItems} /></div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Audit prévoyance gratuit à Montreuil" subtitle="Rendez-vous dans vos locaux ou en visioconférence. Premier échange sans engagement." ctaPrimary="Demander un audit gratuit" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
