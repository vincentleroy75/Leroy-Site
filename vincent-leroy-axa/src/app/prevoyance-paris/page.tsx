import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import LocalSEOBlock from "@/components/ui/LocalSEOBlock";

export const metadata: Metadata = {
  title: "Prévoyance Paris – Conseiller AXA | Vincent Leroy",
  description:
    "Conseiller en prévoyance, retraite et santé à Paris. Vincent Leroy, Agent AXA Prévoyance & Patrimoine, accompagne dirigeants, libéraux et indépendants parisiens.",
  alternates: { canonical: "/prevoyance-paris" },
};

const faqItems = [
  {
    question: "Existe-t-il des spécificités pour les professionnels libéraux parisiens ?",
    answer: "Paris concentre une forte densité de professions libérales (médecins, avocats, architectes, consultants…). Les loyers de cabinets sont souvent élevés, ce qui rend les charges fixes importantes. En cas d'arrêt de travail, ces charges continuent — rendant la prévoyance professionnelle d'autant plus stratégique dans la capitale.",
  },
  {
    question: "Comment se déroule un rendez-vous à Paris ?",
    answer: "Les rendez-vous peuvent se tenir en cabinet (Paris ou Vincennes), dans vos locaux professionnels ou en visioconférence selon votre préférence. Le premier entretien dure généralement 45 minutes à 1 heure.",
  },
  {
    question: "Intervenez-vous dans tous les arrondissements de Paris ?",
    answer: "Oui, j'interviens dans tous les arrondissements parisiens, avec une connaissance particulière des arrondissements de l'Est parisien (12e, 11e, 20e) et des communes limitrophes du Val-de-Marne.",
  },
];

export default function PrevoyanceParis() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Prévoyance Paris" }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">📍 Paris</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Prévoyance à Paris : conseiller AXA pour dirigeants et professions libérales
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Paris concentre une très forte densité de professionnels libéraux, de dirigeants de TPE/PME
            et de travailleurs indépendants. Agent AXA Prévoyance &amp; Patrimoine basé dans l&apos;Est
            parisien, je les accompagne dans la construction d&apos;une protection adaptée à leur réalité.
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">Demander un audit gratuit</Link>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Pourquoi la prévoyance est-elle particulièrement importante à Paris ?</h2>
          <p>
            Les professionnels parisiens font face à des charges fixes souvent plus élevées que
            la moyenne nationale : loyers de cabinets et bureaux, personnel, transport…
            En cas d&apos;arrêt de travail prolongé, ces charges continuent tandis que les revenus
            s&apos;arrêtent — rendant une prévoyance bien calibrée indispensable.
          </p>
          <p>
            Paris est également une ville où la concurrence entre professionnels libéraux est forte.
            Un arrêt prolongé sans protection adaptée peut conduire à une perte de clientèle
            difficile à récupérer au retour.
          </p>

          <h2>Les profils que j&apos;accompagne à Paris</h2>
          <ul>
            <li><Link href="/prevoyance-medecin" className="text-brand-blue hover:underline">Médecins libéraux</Link> et spécialistes</li>
            <li><Link href="/prevoyance-avocat" className="text-brand-blue hover:underline">Avocats</Link> des barreaux de Paris</li>
            <li><Link href="/prevoyance-architecte" className="text-brand-blue hover:underline">Architectes</Link> et cabinets d&apos;architecture</li>
            <li><Link href="/prevoyance-dentiste" className="text-brand-blue hover:underline">Chirurgiens-dentistes</Link> libéraux</li>
            <li><Link href="/prevoyance-dirigeant" className="text-brand-blue hover:underline">Dirigeants</Link> de TPE/PME parisiennes</li>
            <li>Consultants et freelances</li>
            <li>Cadres et professions intellectuelles supérieures</li>
          </ul>

          <h2>Mes services à Paris</h2>
          <ul>
            <li><Link href="/prevoyance-professionnelle" className="text-brand-blue hover:underline">Prévoyance professionnelle</Link> individuelle</li>
            <li><Link href="/prevoyance-dirigeant" className="text-brand-blue hover:underline">Protection du dirigeant</Link></li>
            <li><Link href="/retraite-per" className="text-brand-blue hover:underline">Retraite et PER individuel</Link></li>
            <li><Link href="/complementaire-sante" className="text-brand-blue hover:underline">Complémentaire santé</Link></li>
            <li><Link href="/assurance-emprunteur" className="text-brand-blue hover:underline">Assurance emprunteur</Link></li>
            <li><Link href="/protection-sociale-entreprise" className="text-brand-blue hover:underline">Protection sociale collective</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <LocalSEOBlock currentCity="Paris" />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8">Questions fréquentes – Paris</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Audit prévoyance gratuit à Paris" subtitle="Premier échange sans engagement. En cabinet, dans vos locaux ou en visioconférence." ctaPrimary="Demander un audit gratuit" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
