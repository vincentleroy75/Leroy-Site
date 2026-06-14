import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AuditCTA from "@/components/ui/AuditCTA";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SummaryBox from "@/components/ui/SummaryBox";

export const metadata: Metadata = {
  title: "Qui consulter pour une prévoyance à Paris ? | Vincent Leroy AXA",
  description:
    "Qui consulter pour une prévoyance professionnelle à Paris ? Agent général, courtier, banque : les différences, les critères de choix et comment trouver le bon interlocuteur.",
  alternates: { canonical: "/qui-consulter-prevoyance-paris" },
};

const faqItems = [
  {
    question: "Qui peut vendre de l'assurance prévoyance à Paris ?",
    answer: "Plusieurs types d'intermédiaires peuvent distribuer des contrats de prévoyance : les agents généraux d'assurance (mandataires d'une compagnie), les courtiers (indépendants multi-compagnies), les conseillers en gestion de patrimoine (CGP), et les banques. Chacun a ses avantages selon votre situation.",
  },
  {
    question: "Quelle est la différence entre un agent général et un courtier ?",
    answer: "Un agent général représente une seule compagnie (comme AXA) et connaît très bien ses produits. Un courtier travaille avec plusieurs compagnies et peut comparer les offres du marché. Pour la prévoyance individuelle, l'expertise de l'interlocuteur sur votre situation compte souvent autant que le nombre de compagnies représentées.",
  },
  {
    question: "Faut-il un conseiller spécialisé selon sa profession ?",
    answer: "Il est préférable de travailler avec un conseiller qui connaît les régimes obligatoires de votre profession (CARMF pour les médecins, CIPAV pour les architectes…). Cette connaissance est essentielle pour bien évaluer les lacunes à combler et vous proposer une solution adaptée.",
  },
  {
    question: "Comment vérifier les compétences d'un intermédiaire en assurance ?",
    answer: "Vérifiez son numéro d'immatriculation à l'ORIAS (www.orias.fr), qui garantit qu'il est autorisé à exercer. Assurez-vous qu'il prend le temps de comprendre votre situation avant de vous proposer quoi que ce soit, et qu'il vous explique clairement les garanties et les exclusions.",
  },
];

export default function QuiConsulterPrevoyanceParis() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "Qui consulter pour une prévoyance à Paris ?" }]} /></div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Qui consulter pour une prévoyance à Paris ?
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Médecin, avocat, dirigeant, freelance : si vous cherchez un conseil en prévoyance
            à Paris, voici comment identifier le bon interlocuteur et ce que vous devez attendre
            d&apos;un premier rendez-vous.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox title="Réponse directe">
            Pour une prévoyance professionnelle à Paris, consultez un intermédiaire en assurance
            immatriculé à l&apos;ORIAS (agent général, courtier ou CGP) spécialisé dans les professions
            libérales et les travailleurs non salariés. L&apos;idéal est un conseiller qui connaît
            votre régime obligatoire spécifique, prend le temps d&apos;analyser votre situation avant
            de proposer, et vous offre un premier entretien sans engagement.
          </SummaryBox>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Les différents types d&apos;interlocuteurs</h2>
          <h3>L&apos;agent général d&apos;assurance</h3>
          <p>
            Mandataire d&apos;une compagnie d&apos;assurance (AXA, MAIF, Allianz…), l&apos;agent général représente
            les produits de sa compagnie. Il a une connaissance approfondie de la gamme qu&apos;il
            distribue et peut offrir un suivi de proximité sur le long terme.
          </p>
          <h3>Le courtier en assurance</h3>
          <p>
            Le courtier est indépendant et peut comparer les offres de plusieurs compagnies.
            Il est rémunéré par les compagnies via des commissions. Son avantage principal
            est la comparaison multi-acteurs.
          </p>
          <h3>Le conseiller en gestion de patrimoine (CGP)</h3>
          <p>
            Certains CGP proposent également des solutions de prévoyance dans une approche
            patrimoniale globale. Ils peuvent être rémunérés en honoraires ou en commissions.
          </p>

          <h2>Critères pour choisir le bon conseiller à Paris</h2>
          <ul>
            <li><strong>Immatriculation ORIAS</strong> : vérifiez sur www.orias.fr qu&apos;il est autorisé à exercer</li>
            <li><strong>Spécialisation</strong> : connaît-il votre régime obligatoire spécifique ?</li>
            <li><strong>Premier échange</strong> : propose-t-il un bilan sans engagement avant toute proposition ?</li>
            <li><strong>Pédagogie</strong> : explique-t-il clairement les garanties, les exclusions et le coût ?</li>
            <li><strong>Suivi</strong> : propose-t-il un suivi annuel pour adapter la couverture à votre évolution ?</li>
            <li><strong>Disponibilité locale</strong> : peut-il vous rencontrer facilement à Paris ou en Île-de-France ?</li>
          </ul>

          <h2>Comment se déroule un premier entretien prévoyance ?</h2>
          <p>
            Un bon premier entretien prévoyance commence par une phase d&apos;écoute : votre statut,
            vos revenus, vos charges, vos contrats existants, votre situation familiale.
            Ce n&apos;est qu&apos;après cette analyse que des solutions peuvent être proposées.
          </p>
          <p>
            Méfiez-vous d&apos;un conseiller qui vous propose un contrat dès le premier entretien,
            sans avoir pris le temps de comprendre votre situation.
          </p>

          <h2>Vincent Leroy : Agent AXA à Paris et Vincennes</h2>
          <p>
            Vincent Leroy est Agent Général AXA Prévoyance &amp; Patrimoine, immatriculé à l&apos;ORIAS,
            spécialisé dans la protection des professions libérales, des dirigeants et des
            travailleurs non salariés d&apos;Île-de-France. Il propose un audit prévoyance gratuit
            et sans engagement pour établir un diagnostic clair de votre situation.
          </p>
          <p>
            <Link href="/audit-prevoyance-gratuit" className="text-brand-blue font-medium hover:underline">
              → Demander un audit prévoyance gratuit
            </Link>
          </p>
        </div>
      </section>

      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA title="Premier échange gratuit à Paris" subtitle="Audit de votre situation, sans engagement, en 30 à 45 minutes. En cabinet, sur place ou en visioconférence." ctaPrimary="Demander un audit gratuit" ctaSecondary="Être rappelé" />
        </div>
      </section>
    </>
  );
}
