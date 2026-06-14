import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";
import AlertBox from "@/components/ui/AlertBox";

export const metadata: Metadata = {
  title: "Prévoyance dirigeant TPE PME Paris | Vincent Leroy AXA",
  description:
    "Gérant, président de SAS, chef d'entreprise : votre protection sociale dépend de votre statut. Vérifiez et optimisez votre prévoyance dirigeant à Paris et Vincennes.",
  alternates: { canonical: "/prevoyance-dirigeant" },
};

const faqItems = [
  {
    question: "Quelle est la différence entre un TNS et un assimilé salarié pour la prévoyance ?",
    answer:
      "Le gérant majoritaire de SARL et l'entrepreneur individuel sont des TNS (Travailleurs Non Salariés) affiliés à la SSI. Le président de SAS/SASU rémunéré est un assimilé salarié affilié au régime général. Ces deux statuts n'ont pas le même niveau de protection sociale de base, ce qui impacte les compléments de prévoyance à mettre en place.",
  },
  {
    question: "Pourquoi parle-t-on de 'dépendance de l'entreprise au dirigeant' ?",
    answer:
      "Dans une TPE ou PME, le dirigeant est souvent la clé de voûte de l'activité : il porte les relations commerciales, la production, le savoir-faire. Son absence prolongée peut menacer la pérennité de l'entreprise. L'assurance homme-clé ou la prévoyance dirigeant permettent de sécuriser l'entreprise face à ce risque.",
  },
  {
    question: "Mes dividendes sont-ils pris en compte dans le calcul des indemnités ?",
    answer:
      "Cela dépend du contrat souscrit. Les contrats de prévoyance se basent généralement sur la rémunération déclarée. Les dividendes perçus par le dirigeant peuvent ne pas entrer dans le calcul. C'est un point essentiel à étudier dans le cadre d'un bilan personnalisé, selon la structure de vos revenus.",
  },
  {
    question: "Qu'est-ce que l'assurance homme-clé ?",
    answer:
      "L'assurance homme-clé est un contrat souscrit par l'entreprise sur la tête du dirigeant ou d'un collaborateur indispensable. Elle verse un capital à l'entreprise en cas de décès ou d'invalidité de cette personne clé, pour couvrir les pertes d'exploitation et financer un remplacement temporaire.",
  },
  {
    question: "Comment arbitrer entre rémunération et cotisations sociales ?",
    answer:
      "Plus votre rémunération est élevée, plus votre protection sociale de base est théoriquement robuste — mais aussi plus vos cotisations sont importantes. La bonne stratégie dépend de votre âge, de vos revenus, de votre situation personnelle et de vos objectifs. Une étude personnalisée permet de trouver le bon équilibre selon votre situation.",
  },
];

export default function PrevoyanceDirigeantPage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Prévoyance professionnelle", href: "/prevoyance-professionnelle" }, { label: "Prévoyance dirigeant" }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Dirigeants</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Prévoyance dirigeant : protéger votre revenu, votre entreprise et votre famille
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Gérant, président de SAS, chef d&apos;entreprise : votre niveau de protection sociale varie
            fortement selon votre statut. Un bilan précis est indispensable pour ne pas laisser de
            lacunes dangereuses.
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">
            Vérifier ma protection de dirigeant
          </Link>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            La prévoyance du dirigeant dépend directement de son statut juridique. Un président de
            SAS/SASU (assimilé salarié) et un gérant majoritaire de SARL (TNS) n&apos;ont pas le même
            régime de base. Dans les deux cas, une complémentaire de prévoyance peut permettre,
            selon votre situation, de maintenir votre niveau de vie et de protéger l&apos;entreprise
            en cas d&apos;arrêt prolongé ou d&apos;invalidité.
          </SummaryBox>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Votre statut de dirigeant conditionne votre protection</h2>
          <p>
            En France, il existe deux grandes catégories de dirigeants du point de vue social :
          </p>
          <ul>
            <li>
              <strong>Les TNS (Travailleurs Non Salariés)</strong> : gérants majoritaires de SARL,
              entrepreneurs individuels, gérants d&apos;EURL. Ils cotisent à la Sécurité Sociale des
              Indépendants (SSI, ex-RSI) et bénéficient d&apos;une protection moins étendue que le
              régime général.
            </li>
            <li>
              <strong>Les assimilés salariés</strong> : présidents de SAS, SASU, directeurs généraux
              rémunérés. Ils sont affiliés au régime général mais ne cotisent pas à l&apos;assurance
              chômage. Leur protection est souvent plus proche de celle des salariés, mais avec
              des particularités.
            </li>
          </ul>
          <AlertBox type="info">
            Identifier votre statut exact est la première étape pour évaluer vos droits réels.
            Chaque situation est différente : type de société, niveau de rémunération, dividendes,
            ancienneté… Une analyse personnalisée est recommandée.
          </AlertBox>

          <h2>La dépendance de l&apos;entreprise au dirigeant</h2>
          <p>
            Dans une TPE ou PME, le dirigeant est souvent irremplaçable à court terme. Son absence
            peut paralyser la prospection, la production, les relations clients ou la signature de
            contrats. Cette dépendance est un risque à part entière.
          </p>
          <p>
            Des solutions existent pour sécuriser l&apos;entreprise face à ce risque :
          </p>
          <ul>
            <li>
              <strong>Prévoyance individuelle du dirigeant</strong> : protège ses revenus personnels
              en cas d&apos;incapacité
            </li>
            <li>
              <strong>Assurance homme-clé</strong> : indemnise l&apos;entreprise pour couvrir ses pertes
              d&apos;exploitation
            </li>
            <li>
              <strong>Assurance croisée entre associés</strong> : protège la continuité de l&apos;activité
              en cas de décès ou d&apos;invalidité d&apos;un associé
            </li>
          </ul>

          <h2>Décès, invalidité et capital à la famille</h2>
          <p>
            En cas de décès du dirigeant, sa famille peut se retrouver dans une situation financière
            difficile si aucune protection n&apos;a été prévue. Un capital décès ou une rente au conjoint
            peuvent permettre de maintenir le niveau de vie et d&apos;honorer les obligations financières
            en cours.
          </p>
          <p>
            De même, une invalidité totale ou partielle peut remettre en question l&apos;ensemble du
            projet de vie professionnel. Anticiper ce risque est essentiel.
          </p>

          <h2>Arbitrage rémunération / protection sociale</h2>
          <p>
            La question de l&apos;optimisation de la rémunération du dirigeant est complexe et
            doit toujours être abordée avec des professionnels compétents (expert-comptable,
            conseiller en gestion de patrimoine). Le niveau de rémunération impacte directement
            la base de calcul des prestations de prévoyance.
          </p>
          <p>
            Mon rôle est de vous aider à comprendre les implications de votre structure de revenus
            sur votre protection sociale, et à identifier les solutions complémentaires les plus
            adaptées à votre situation.
          </p>
        </div>
      </section>

      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8">Questions fréquentes</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl">
          <AuditCTA
            title="Faites le point sur votre protection de dirigeant"
            subtitle="Un bilan gratuit pour analyser votre statut, vos couvertures actuelles et les pistes d'amélioration."
            ctaPrimary="Vérifier ma protection de dirigeant"
            ctaSecondary="Planifier un rendez-vous"
          />
        </div>
      </section>
    </>
  );
}
