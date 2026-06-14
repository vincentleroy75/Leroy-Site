import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AuditCTA from "@/components/ui/AuditCTA";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SummaryBox from "@/components/ui/SummaryBox";

export const metadata: Metadata = {
  title: "Comment choisir un bon conseiller en prévoyance à Paris ? | Vincent Leroy AXA",
  description:
    "Critères pour choisir un conseiller en prévoyance à Paris : spécialisation, immatriculation ORIAS, méthode de travail, suivi. Guide pratique pour professions libérales et dirigeants.",
  alternates: { canonical: "/meilleur-conseiller-prevoyance-paris" },
};

const faqItems = [
  {
    question: "Comment évaluer la qualité d'un conseiller en assurance prévoyance ?",
    answer: "Évaluez sa capacité à comprendre votre situation avant de proposer : un bon conseiller pose des questions sur votre régime, vos revenus, vos charges, vos contrats existants. Il explique les garanties ET les exclusions, et propose un premier échange sans engagement.",
  },
  {
    question: "Un conseiller spécialisé libéraux est-il vraiment indispensable ?",
    answer: "C'est un vrai avantage. Les professions libérales ont des régimes obligatoires très différents (CARMF, CIPAV, CARCDSF, CARPIMKO…). Un conseiller qui maîtrise ces spécificités peut identifier précisément les lacunes à combler, évitant les doublons inutiles ou les sous-couvertures.",
  },
  {
    question: "Quelle différence entre un conseiller indépendant et un agent de compagnie ?",
    answer: "Un agent représente les produits d'une compagnie et en est le spécialiste. Un conseiller indépendant (courtier) peut comparer plusieurs compagnies. Dans les deux cas, ce qui compte est la rigueur du diagnostic initial et la qualité du suivi dans le temps.",
  },
  {
    question: "Comment se passe un premier rendez-vous prévoyance ?",
    answer: "Un premier rendez-vous sérieux dure 30 à 60 minutes. Le conseiller recueille votre situation (statut, revenus, charges, situation familiale, contrats existants), explique les garanties pertinentes pour votre cas, et vous présente une proposition chiffrée lors d'un second échange.",
  },
];

const criteria = [
  {
    title: "1. Immatriculation ORIAS vérifiable",
    body: "Tout intermédiaire en assurance doit être immatriculé à l'ORIAS. Vérifiez sur www.orias.fr avant tout engagement. C'est une obligation légale, pas une option.",
  },
  {
    title: "2. Connaissance de votre régime obligatoire",
    body: "Médecin, avocat, architecte, dirigeant : chaque statut a un régime spécifique. Votre conseiller doit connaître la caisse dont vous relevez et les garanties qu'elle offre, pour combler exactement ce qui manque.",
  },
  {
    title: "3. Diagnostic avant proposition",
    body: "Un bon conseiller ne propose rien avant d'avoir compris votre situation. Si l'on vous soumet un devis dès le premier contact, sans analyse préalable, c'est un signal d'alerte.",
  },
  {
    title: "4. Transparence sur les exclusions",
    body: "Les contrats de prévoyance comportent des exclusions (délais de carence, définitions de l'invalidité, maladies non couvertes). Un conseiller sérieux vous les explique clairement, sans les minimiser.",
  },
  {
    title: "5. Suivi annuel proposé",
    body: "Votre situation évolue : revenus, charges, situation familiale, statut juridique. Un conseiller engagé propose un point annuel pour adapter la couverture à la réalité du moment.",
  },
  {
    title: "6. Disponibilité locale",
    body: "Pour un conseil en prévoyance, la proximité géographique facilite les échanges. Un conseiller basé à Paris ou en Île-de-France peut vous recevoir facilement, en présentiel ou en visioconférence.",
  },
];

export default function MeilleurConseillerPrevoyanceParis() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "Choisir un conseiller en prévoyance à Paris" }]} /></div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Comment choisir un bon conseiller en prévoyance à Paris ?
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            6 critères concrets pour évaluer un intermédiaire en assurance — et éviter
            les conseils trop rapides, les contrats inadaptés et les promesses creuses.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox title="En résumé">
            Un bon conseiller en prévoyance à Paris est immatriculé à l&apos;ORIAS, connaît votre
            régime obligatoire spécifique, réalise un diagnostic de votre situation avant toute
            proposition, explique clairement les exclusions, et propose un suivi régulier.
            La spécialisation dans les professions libérales et les TNS est un avantage
            déterminant.
          </SummaryBox>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="section-title mb-8">6 critères pour évaluer un conseiller</h2>
          <div className="space-y-6">
            {criteria.map((c) => (
              <div key={c.title} className="card p-6">
                <h3 className="font-bold text-brand-blue-dark mb-2">{c.title}</h3>
                <p className="text-brand-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Pourquoi la spécialisation libéraux fait la différence</h2>
          <p>
            À Paris et en Île-de-France, une grande partie des professionnels indépendants
            relèvent de régimes très différents : CARMF pour les médecins, CARCDSF pour
            les chirurgiens-dentistes, CIPAV pour les architectes et psychologues, CARPIMKO
            pour les orthophonistes, CNBF pour les avocats, CARPV pour les vétérinaires…
          </p>
          <p>
            Chaque régime a ses propres niveaux de protection en cas d&apos;arrêt de travail,
            d&apos;invalidité ou de décès. Un conseiller qui ne maîtrise pas ces spécificités
            risque soit de vous sur-assurer (doublon inutile avec votre régime obligatoire),
            soit de laisser des lacunes dangereuses dans votre couverture.
          </p>
          <p>
            Un conseiller spécialisé commence par cartographier ce que votre caisse garantit,
            dans quelles conditions, avec quels délais — avant même de vous proposer quoi que
            ce soit.
          </p>

          <h2>Les signaux d&apos;alerte à surveiller</h2>
          <ul>
            <li>Proposition chiffrée dès le premier échange, sans connaissance de votre situation</li>
            <li>Pas de question sur vos contrats existants ou votre régime obligatoire</li>
            <li>Garanties présentées sans mention des exclusions</li>
            <li>Promesses de performance ou d&apos;économies fiscales "garanties"</li>
            <li>Absence d&apos;immatriculation vérifiable à l&apos;ORIAS</li>
          </ul>

          <p>
            <Link href="/audit-prevoyance-gratuit" className="text-brand-blue font-medium hover:underline">
              → Demander un audit prévoyance gratuit, sans engagement
            </Link>
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Audit prévoyance gratuit — Paris & Vincennes" subtitle="Premier échange de 30 à 45 minutes : diagnostic de votre situation, analyse de votre régime, identification des lacunes. Sans engagement." ctaPrimary="Demander mon audit" ctaSecondary="Prendre rendez-vous" />
        </div>
      </section>
    </>
  );
}
