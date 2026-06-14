import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AuditCTA from "@/components/ui/AuditCTA";
import LocalSEOBlock from "@/components/ui/LocalSEOBlock";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Prévoyance Val-de-Marne (94) | Vincent Leroy AXA",
  description:
    "Conseiller prévoyance dans le Val-de-Marne (94). Vincent Leroy, Agent AXA, accompagne dirigeants et professions libérales de Vincennes, Charenton, Nogent, Montreuil et tout le 94.",
  alternates: { canonical: "/prevoyance-val-de-marne" },
};

const faqItems = [
  {
    question: "Intervenez-vous dans tout le Val-de-Marne ?",
    answer: "Oui, j'interviens dans l'ensemble du département du Val-de-Marne (94) : Vincennes, Saint-Mandé, Charenton-le-Pont, Nogent-sur-Marne, Joinville-le-Pont, Champigny-sur-Marne, Créteil, Vitry-sur-Seine… Les rendez-vous peuvent se tenir en cabinet, dans vos locaux ou en visioconférence.",
  },
  {
    question: "Le Val-de-Marne a-t-il des caractéristiques économiques particulières ?",
    answer: "Le Val-de-Marne est un département dynamique avec des zones économiques variées : secteur tertiaire à Vincennes et Charenton, zones industrielles à Vitry, tissu de PME diversifié dans tout le département. Cette diversité se retrouve dans les profils de mes clients.",
  },
  {
    question: "Proposez-vous des rendez-vous dans les locaux de mes clients ?",
    answer: "Oui, je peux me déplacer dans vos locaux professionnels dans tout le Val-de-Marne pour les entretiens. C'est souvent plus pratique pour les dirigeants et professionnels libéraux dont l'emploi du temps est chargé.",
  },
];

export default function PrevoyanceValDeMarnePage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "Prévoyance Val-de-Marne" }]} /></div>
      </div>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">📍 Val-de-Marne (94)</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Prévoyance dans le Val-de-Marne : conseiller AXA de proximité
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Agent Général AXA Prévoyance &amp; Patrimoine basé à Vincennes, j&apos;accompagne dirigeants,
            professions libérales et indépendants dans tout le Val-de-Marne pour construire une
            protection adaptée à leur situation professionnelle et familiale.
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">Demander un audit gratuit</Link>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Le Val-de-Marne : un territoire à l&apos;économie diversifiée</h2>
          <p>Le département du Val-de-Marne (94) est l&apos;un des plus dynamiques d&apos;Île-de-France. Il abrite des zones résidentielles prisées (Vincennes, Saint-Mandé, Nogent…) et un tissu économique varié : professions libérales de santé, cabinets d&apos;avocats, agences, PME industrielles et de services.</p>
          <h2>Mes zones d&apos;intervention dans le 94</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Vincennes","Saint-Mandé","Charenton-le-Pont","Nogent-sur-Marne","Joinville-le-Pont","Champigny-sur-Marne","Créteil","Vitry-sur-Seine","Ivry-sur-Seine","Alfortville","Maisons-Alfort","Bry-sur-Marne"].map(c => (
              <span key={c} className="badge-blue">{c}</span>
            ))}
          </div>
          <h2 className="mt-6">Services proposés dans le Val-de-Marne</h2>
          <ul>
            <li><Link href="/prevoyance-professionnelle" className="text-brand-blue hover:underline">Prévoyance professionnelle</Link></li>
            <li><Link href="/prevoyance-dirigeant" className="text-brand-blue hover:underline">Protection du dirigeant</Link></li>
            <li><Link href="/retraite-per" className="text-brand-blue hover:underline">Retraite & PER</Link></li>
            <li><Link href="/complementaire-sante" className="text-brand-blue hover:underline">Complémentaire santé</Link></li>
            <li><Link href="/assurance-emprunteur" className="text-brand-blue hover:underline">Assurance emprunteur</Link></li>
            <li><Link href="/protection-sociale-entreprise" className="text-brand-blue hover:underline">Protection sociale entreprise</Link></li>
          </ul>
        </div>
      </section>
      <section className="py-10 bg-brand-gray-50">
        <div className="container-wide max-w-3xl"><LocalSEOBlock currentCity="Val-de-Marne" /></div>
      </section>
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8">Questions fréquentes – Val-de-Marne</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Audit prévoyance gratuit dans le Val-de-Marne" subtitle="En cabinet à Vincennes, dans vos locaux ou en visioconférence. Premier échange sans engagement." ctaPrimary="Demander un audit gratuit" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
