import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";
import AlertBox from "@/components/ui/AlertBox";

export const metadata: Metadata = {
  title: "Prévoyance professionnelle TNS et libérale | Vincent Leroy AXA",
  description:
    "Arrêt de travail, invalidité, décès : protégez vos revenus avec une prévoyance professionnelle adaptée à votre statut d'indépendant ou de profession libérale. Audit gratuit Paris.",
  alternates: { canonical: "/prevoyance-professionnelle" },
  openGraph: {
    title: "Prévoyance professionnelle TNS et libérale | Vincent Leroy AXA",
    description:
      "Protégez vos revenus en cas d'arrêt de travail ou d'invalidité. Prévoyance professionnelle pour indépendants et professions libérales à Paris et Vincennes.",
  },
};

const faqItems = [
  {
    question: "Qu'est-ce que la prévoyance professionnelle ?",
    answer:
      "La prévoyance professionnelle est un contrat d'assurance qui protège vos revenus professionnels en cas d'arrêt de travail (maladie ou accident), d'invalidité partielle ou totale, et peut verser un capital ou une rente à vos proches en cas de décès. Elle complète les couvertures de base de vos régimes obligatoires.",
  },
  {
    question: "Mon régime obligatoire (CIPAV, CARMF, RSI…) me couvre-t-il suffisamment ?",
    answer:
      "Les régimes obligatoires des indépendants et professions libérales offrent une protection de base, mais leurs niveaux de prestations varient selon les caisses et ne correspondent pas toujours au niveau de revenus que vous maintenez. Une analyse personnalisée de votre situation permet d'identifier précisément les lacunes et d'y remédier.",
  },
  {
    question: "Quel est le délai de carence dans une prévoyance pro ?",
    answer:
      "Le délai de carence est la période durant laquelle les indemnités journalières ne sont pas versées après le début d'un arrêt de travail. Il varie selon les contrats, généralement de 30 à 90 jours. Plus le délai est court, plus la cotisation est élevée. Il convient de l'ajuster en fonction de votre épargne disponible et de vos charges fixes.",
  },
  {
    question: "Quelle différence entre invalidité partielle et totale ?",
    answer:
      "L'invalidité totale correspond à l'incapacité permanente d'exercer toute activité professionnelle. L'invalidité partielle correspond à une réduction durable de votre capacité de travail, vous permettant encore d'exercer partiellement. Les contrats de prévoyance peuvent couvrir les deux catégories, avec des taux d'indemnisation variables selon le taux d'invalidité reconnu.",
  },
  {
    question: "Puis-je souscrire une prévoyance pro si j'ai déjà des problèmes de santé ?",
    answer:
      "Oui, dans la plupart des cas, une souscription est possible mais peut nécessiter de remplir un questionnaire médical. Selon votre situation, certaines garanties peuvent être assorties d'exclusions ou de surprimes. Un accompagnement personnalisé est recommandé pour trouver la meilleure solution selon votre historique médical.",
  },
];

export default function PrevoyanceProfessionnellePage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Prévoyance professionnelle" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Prévoyance professionnelle</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Prévoyance professionnelle pour indépendants et professions libérales
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            En cas d&apos;arrêt de travail ou d&apos;invalidité, vos charges continuent — vos revenus, eux,
            peuvent s&apos;effondrer. Une prévoyance professionnelle bien calibrée vous protège vraiment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/audit-prevoyance-gratuit" className="btn-red">
              Demander un audit gratuit
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all">
              Être rappelé
            </Link>
          </div>
        </div>
      </section>

      {/* Résumé GEO/AEO */}
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox title="En résumé">
            La prévoyance professionnelle est un contrat d&apos;assurance complémentaire qui protège les
            indépendants, TNS et professions libérales en cas d&apos;arrêt de travail, d&apos;invalidité ou de
            décès. Elle complète les garanties des régimes obligatoires (CIPAV, CARMF, CARCDSF…) dont
            les niveaux de prestations peuvent ne pas couvrir l&apos;intégralité du manque à gagner.
          </SummaryBox>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Qu&apos;est-ce que la prévoyance professionnelle ?</h2>
          <p>
            La prévoyance professionnelle est un contrat d&apos;assurance souscrit à titre individuel
            par un travailleur non salarié (TNS), un professionnel libéral ou un dirigeant pour
            se protéger contre les risques qui pèsent sur son activité et ses revenus.
          </p>
          <p>
            Elle recouvre trois grandes garanties :
          </p>
          <ul>
            <li><strong>Les indemnités journalières</strong> en cas d&apos;arrêt de travail (maladie ou accident)</li>
            <li><strong>La rente ou le capital invalidité</strong> en cas d&apos;incapacité durable partielle ou totale</li>
            <li><strong>Le capital décès</strong> versé à vos bénéficiaires en cas de décès</li>
          </ul>

          <h2>Pourquoi le régime obligatoire ne suffit-il souvent pas ?</h2>
          <p>
            Les caisses de retraite et de prévoyance obligatoires des indépendants et professions
            libérales assurent une couverture de base. Cependant, le niveau de prestations varie
            considérablement selon les caisses — et selon votre niveau de revenus, ces prestations
            peuvent représenter une fraction significativement inférieure à votre revenu habituel.
          </p>
          <AlertBox type="warning">
            Une analyse personnalisée de votre caisse obligatoire et de vos revenus est nécessaire
            pour mesurer précisément l&apos;écart entre ce que vous percevriez en cas d&apos;arrêt et ce
            dont vous avez réellement besoin pour maintenir votre niveau de vie.
          </AlertBox>

          <h2>Arrêt de travail : protéger ses revenus</h2>
          <p>
            Un arrêt de travail prolongé — maladie grave, accident, burn-out — peut avoir des
            conséquences financières importantes pour un indépendant. Vos charges fixes (loyer du
            cabinet, personnel, remboursements de prêt…) continuent de courir, indépendamment
            de votre capacité à travailler.
          </p>
          <p>
            Une garantie indemnités journalières (IJ) complémentaire vous permet de percevoir
            un revenu de substitution durant votre arrêt, après le délai de carence prévu au contrat.
            L&apos;objectif est de maintenir votre niveau de vie sans devoir puiser dans vos réserves.
          </p>

          <h2>Invalidité : préserver son niveau de vie sur le long terme</h2>
          <p>
            L&apos;invalidité est souvent le risque le moins anticipé — et pourtant l&apos;un des plus
            lourds de conséquences. Une invalidité partielle peut vous empêcher d&apos;exercer votre
            activité à plein régime, voire vous contraindre à reconvertir ou fermer votre cabinet.
          </p>
          <p>
            Une garantie invalidité professionnelle peut prévoir le versement d&apos;une rente mensuelle
            en proportion du taux d&apos;invalidité reconnu, vous permettant de continuer à faire face
            à vos obligations financières.
          </p>

          <h2>Décès : protéger votre famille</h2>
          <p>
            En cas de décès, un capital décès permet à vos proches de faire face aux premières
            échéances financières sans avoir à liquider des actifs dans l&apos;urgence. Il peut aussi
            être utilisé pour rembourser des dettes professionnelles ou un crédit immobilier.
          </p>
          <p>
            Certains contrats prévoient également une garantie PTIA (Perte Totale et Irréversible
            d&apos;Autonomie), assimilée au décès.
          </p>

          <h2>À qui s&apos;adresse la prévoyance professionnelle ?</h2>
          <ul>
            <li>Médecins, dentistes, vétérinaires, pharmaciens</li>
            <li>Avocats, architectes, notaires, experts-comptables</li>
            <li>Orthophonistes, psychologues, kinésithérapeutes</li>
            <li>Consultants et coaches indépendants</li>
            <li>Artisans et commerçants (TNS)</li>
            <li>Gérants de EURL, SARL, SASU non assimilés salariés</li>
          </ul>
        </div>
      </section>

      {/* Liens métiers */}
      <section className="py-10 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-xl font-bold text-brand-blue-dark mb-6">Prévoyance par profession</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Médecin libéral", href: "/prevoyance-medecin" },
              { label: "Chirurgien-dentiste", href: "/prevoyance-dentiste" },
              { label: "Vétérinaire", href: "/prevoyance-veterinaire" },
              { label: "Avocat", href: "/prevoyance-avocat" },
              { label: "Architecte", href: "/prevoyance-architecte" },
              { label: "Pharmacien", href: "/prevoyance-pharmacien" },
              { label: "Orthophoniste", href: "/prevoyance-orthophoniste" },
              { label: "Psychologue", href: "/prevoyance-psychologue" },
              { label: "Opticien", href: "/prevoyance-opticien" },
            ].map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="card text-center text-sm font-medium text-brand-blue hover:bg-blue-50 transition-colors"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8">Questions fréquentes</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <AuditCTA
            title="Analysons ensemble votre prévoyance professionnelle"
            subtitle="Audit gratuit de votre situation : régime obligatoire, lacunes, options. Premier échange sans engagement."
            ctaPrimary="Demander un audit gratuit"
            ctaSecondary="Être rappelé"
          />
        </div>
      </section>
    </>
  );
}
