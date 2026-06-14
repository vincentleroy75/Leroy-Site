import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AuditCTA from "@/components/ui/AuditCTA";
import LocalSEOBlock from "@/components/ui/LocalSEOBlock";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "À propos de Vincent Leroy, Agent AXA Paris | Prévoyance Patrimoine",
  description:
    "Découvrez le parcours et l'approche de Vincent Leroy, Agent Général AXA Prévoyance & Patrimoine, spécialisé en protection des dirigeants et professions libérales à Paris.",
  alternates: { canonical: "/a-propos" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vincent Leroy",
  jobTitle: "Agent Général AXA Prévoyance & Patrimoine",
  description:
    "Expert en prévoyance professionnelle, protection des dirigeants et des professions libérales à Paris et Vincennes.",
  worksFor: {
    "@type": "InsuranceAgency",
    name: "AXA Prévoyance & Patrimoine",
  },
  areaServed: ["Paris", "Vincennes", "Val-de-Marne", "Île-de-France"],
};

const values = [
  { icon: "🎯", title: "Clarté", desc: "Je vous explique votre situation sans jargon. Vous comprenez ce que vous avez, ce qui manque et pourquoi." },
  { icon: "📚", title: "Pédagogie", desc: "Mon rôle est de vous rendre autonome dans la compréhension de votre protection sociale, pas de créer une dépendance." },
  { icon: "🔭", title: "Anticipation", desc: "Les meilleures décisions se prennent avant que le problème n'arrive. Je vous aide à prendre de l'avance." },
  { icon: "🛡️", title: "Protection", desc: "L'objectif final est toujours le même : que vous, votre famille et votre entreprise soient protégés quoi qu'il arrive." },
];

export default function AProposPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "À propos" }]} /></div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Vincent Leroy – Agent Général AXA Prévoyance &amp; Patrimoine à Paris
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Agent Général AXA basé à Paris et Vincennes, spécialisé en protection des dirigeants,
            des travailleurs non salariés et des professions libérales d&apos;Île-de-France.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="prose-custom">
              <h2>Mon parcours et ma spécialisation</h2>
              <p>
                Agent Général AXA Prévoyance &amp; Patrimoine, je suis spécialisé dans
                l&apos;accompagnement des professionnels libéraux, des dirigeants de TPE/PME et des
                travailleurs non salariés d&apos;Île-de-France.
              </p>
              <p>
                Cette spécialisation n&apos;est pas le fruit du hasard. J&apos;ai choisi de concentrer
                mon expertise sur ces profils parce qu&apos;ils sont souvent les plus exposés aux
                risques — et paradoxalement les moins bien protégés. Contrairement aux salariés
                du secteur privé, les indépendants et libéraux doivent construire eux-mêmes
                leur protection sociale.
              </p>
              <p>
                Mon rôle est de les aider à le faire avec clarté, sans jargon et sans
                survente. Un bon conseil, c&apos;est d&apos;abord un diagnostic honnête.
              </p>

              <h2>Mon approche client</h2>
              <p>
                Je commence toujours par écouter. Votre statut, vos revenus, vos charges,
                vos contrats existants, vos craintes et vos projets. Cette phase de
                compréhension est indispensable pour construire une recommandation pertinente.
              </p>
              <p>
                Je ne propose jamais une solution générique. Chaque situation est différente —
                un médecin libéral secteur 2 n&apos;a pas les mêmes besoins qu&apos;un consultant
                indépendant ou qu&apos;un gérant de SARL de 10 salariés.
              </p>
              <p>
                Après l&apos;entrée en relation, je fais des points réguliers avec mes clients pour
                m&apos;assurer que leur protection évolue avec leur situation : changement de
                structure, naissance, acquisition immobilière, recrutement…
              </p>

              <h2>Zone d&apos;intervention</h2>
              <p>
                Mon cabinet est basé à Paris et Vincennes. J&apos;interviens dans tout le
                Val-de-Marne et en Île-de-France. Les rendez-vous peuvent se tenir
                en cabinet, dans vos locaux professionnels ou en visioconférence.
              </p>

              <div className="mt-6 p-4 bg-brand-gray-50 rounded-lg text-sm text-brand-gray-600 border-l-4 border-brand-blue">
                <p><strong>N° ORIAS :</strong> {SITE_CONFIG.orias}</p>
                <p><strong>SIRET :</strong> {SITE_CONFIG.siret}</p>
                <p className="mt-2 text-xs">Agent Général AXA Prévoyance &amp; Patrimoine – Soumis au contrôle de l&apos;ACPR</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-brand-blue-dark">Mes valeurs</h2>
              {values.map((v, i) => (
                <div key={i} className="card flex gap-4">
                  <span className="text-2xl flex-shrink-0">{v.icon}</span>
                  <div>
                    <h3 className="font-bold text-brand-blue-dark mb-1">{v.title}</h3>
                    <p className="text-brand-gray-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <LocalSEOBlock />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA
            title="Rencontrons-nous"
            subtitle="Premier échange gratuit et sans engagement. Venez tel que vous êtes, je m'adapte à votre situation."
            ctaPrimary="Prendre rendez-vous"
            ctaSecondary="Être rappelé"
            variant="light"
          />
        </div>
      </section>
    </>
  );
}
