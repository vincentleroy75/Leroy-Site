import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";

export const metadata: Metadata = {
  title: "Prévoyance professions libérales Paris | Vincent Leroy AXA",
  description:
    "Médecin, dentiste, avocat, architecte, vétérinaire, pharmacien : solutions de prévoyance, retraite et santé adaptées à chaque profession libérale à Paris et Vincennes.",
  alternates: { canonical: "/professions-liberales" },
};

const professions = [
  { icon: "🩺", label: "Médecin libéral", href: "/prevoyance-medecin", desc: "Régime CARMF, prévoyance et retraite médicale" },
  { icon: "🦷", label: "Chirurgien-dentiste", href: "/prevoyance-dentiste", desc: "Régime CARCDSF, invalidité et prévoyance dentaire" },
  { icon: "🐾", label: "Vétérinaire", href: "/prevoyance-veterinaire", desc: "CARPV, protection du cabinet et des revenus" },
  { icon: "⚖️", label: "Avocat", href: "/prevoyance-avocat", desc: "CNBF, prévoyance et protection du cabinet" },
  { icon: "📐", label: "Architecte", href: "/prevoyance-architecte", desc: "CIPAV, prévoyance et retraite architecte" },
  { icon: "💊", label: "Pharmacien", href: "/prevoyance-pharmacien", desc: "CAVP, protection de l'officine et des revenus" },
  { icon: "🗣️", label: "Orthophoniste", href: "/prevoyance-orthophoniste", desc: "CARPIMKO, prévoyance et protection du cabinet" },
  { icon: "🧠", label: "Psychologue", href: "/prevoyance-psychologue", desc: "CIPAV, protection du revenu et continuité" },
  { icon: "👓", label: "Opticien", href: "/prevoyance-opticien", desc: "SSI, protection du commerce et des revenus" },
];

export default function ProfessionsLiberalesPage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Professions libérales" }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Prévoyance et protection sociale pour professions libérales
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Chaque profession libérale a ses propres régimes obligatoires, ses spécificités de
            revenus et ses risques particuliers. Je construis des solutions adaptées à votre
            réalité professionnelle, pas des produits génériques.
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">
            Demander un audit gratuit
          </Link>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            Les professions libérales relèvent de régimes obligatoires spécifiques (CARMF, CARCDSF,
            CIPAV, CARPV, CNBF…) qui offrent une protection de base. Selon votre niveau de revenus
            et de charges, cette protection peut ne pas suffire à maintenir votre niveau de vie
            en cas d&apos;arrêt de travail ou d&apos;invalidité. Une analyse personnalisée est recommandée.
          </SummaryBox>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-2 text-center">
            Choisissez votre profession
          </h2>
          <p className="text-brand-gray-600 text-center mb-10 max-w-xl mx-auto">
            Chaque page présente les spécificités de votre régime obligatoire, les risques à
            anticiper et les solutions adaptées à votre situation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {professions.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="card hover:border-brand-blue border-2 border-transparent transition-all group"
              >
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <h3 className="font-bold text-brand-blue-dark mb-1 group-hover:text-brand-blue transition-colors">
                  {p.label}
                </h3>
                <p className="text-brand-gray-400 text-sm">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Les spécificités des professions libérales en matière de protection sociale</h2>
          <p>
            Contrairement aux salariés, les professionnels libéraux gèrent eux-mêmes leur protection
            sociale. Ils cotisent à des caisses propres à leur profession (CARMF, CARCDSF, CIPAV,
            CARPV, CNBF, CARPIMKO, CAVP…) et doivent anticiper les risques que les régimes
            obligatoires ne couvrent pas ou insuffisamment.
          </p>
          <h3>Les principaux risques pour un professionnel libéral</h3>
          <ul>
            <li>
              <strong>Arrêt de travail</strong> : les indemnités journalières des caisses
              obligatoires peuvent représenter une fraction de vos revenus habituels, avec des
              délais de carence variables selon les caisses.
            </li>
            <li>
              <strong>Invalidité</strong> : une invalidité partielle peut empêcher l&apos;exercice
              de votre activité libérale spécifique sans pour autant vous donner droit à une
              rente suffisante des régimes obligatoires.
            </li>
            <li>
              <strong>Retraite</strong> : les droits acquis dans les régimes obligatoires des
              libéraux peuvent être inférieurs aux droits d&apos;un salarié à revenus équivalents,
              notamment en début de carrière.
            </li>
          </ul>
          <p>
            Ces risques méritent une attention particulière et une analyse personnalisée de votre
            situation. C&apos;est l&apos;objet d&apos;un audit prévoyance gratuit.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA
            title="Analysons votre situation de professionnel libéral"
            subtitle="Régime obligatoire, revenus, charges : un bilan complet pour identifier ce qui doit être renforcé."
            ctaPrimary="Demander un audit gratuit"
            ctaSecondary="Être rappelé"
          />
        </div>
      </section>
    </>
  );
}
