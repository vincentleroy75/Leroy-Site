import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";
import AlertBox from "@/components/ui/AlertBox";

export const metadata: Metadata = {
  title: "Protection sociale entreprise TPE PME Paris | Vincent Leroy AXA",
  description:
    "Obligations sociales employeur, santé collective, prévoyance collective, épargne salariale : audit et accompagnement pour TPE et PME de 1 à 50 salariés à Paris.",
  alternates: { canonical: "/protection-sociale-entreprise" },
};

const faqItems = [
  {
    question: "Toutes les entreprises sont-elles obligées de proposer une mutuelle à leurs salariés ?",
    answer:
      "Depuis le 1er janvier 2016, toutes les entreprises du secteur privé sont tenues de proposer une complémentaire santé collective à leurs salariés, avec une participation employeur d'au moins 50% de la cotisation. Des dispenses d'adhésion existent dans certains cas (salarié déjà couvert par ailleurs, temps partiel…). Les conditions précises dépendent de votre secteur d'activité et de votre convention collective.",
  },
  {
    question: "La prévoyance collective est-elle obligatoire pour l'employeur ?",
    answer:
      "L'obligation de prévoyance collective dépend de votre convention collective et des accords de branche. Certaines conventions imposent la mise en place de garanties minimales de prévoyance pour les cadres (depuis 1947) et pour les non-cadres (selon les accords de branche). Il est important de vérifier les obligations spécifiques à votre secteur.",
  },
  {
    question: "Qu'est-ce qu'un audit de convention collective ?",
    answer:
      "Un audit de convention collective consiste à vérifier que les contrats de santé et prévoyance en place dans votre entreprise respectent les dispositions obligatoires de votre convention collective applicable. Certaines conventions imposent des garanties minimales, des niveaux de cotisations ou des modalités particulières. Un audit permet de détecter et corriger les éventuelles non-conformités.",
  },
  {
    question: "Qu'est-ce que l'épargne salariale ?",
    answer:
      "L'épargne salariale désigne les dispositifs permettant aux salariés de participer aux résultats de l'entreprise et d'épargner collectivement : intéressement, participation, PEE (Plan d'Épargne Entreprise), PERCO/PERCOL (Plan d'Épargne Retraite Collectif). Ces dispositifs bénéficient d'avantages fiscaux et sociaux sous certaines conditions.",
  },
  {
    question: "Qu'est-ce que les Indemnités de Fin de Carrière (IFC) ?",
    answer:
      "Les Indemnités de Fin de Carrière (IFC), aussi appelées indemnités de départ en retraite, sont des sommes dues par l'employeur au salarié lorsqu'il part en retraite. Leur montant dépend de l'ancienneté et de la convention collective. L'employeur doit provisionner ces engagements, ce qui peut représenter un risque financier non anticipé, notamment dans les PME.",
  },
];

export default function ProtectionSocialeEntreprisePage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Protection sociale entreprise" }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Entreprises</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Protection sociale collective pour TPE et PME : santé, prévoyance et épargne salariale
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            En tant qu&apos;employeur, vous avez des obligations sociales à respecter. Un audit complet
            de votre situation permet de vous assurer de votre conformité et d&apos;identifier les
            opportunités d&apos;amélioration pour vous et vos équipes.
          </p>
          <Link href="/audit-protection-sociale-entreprise" className="btn-red">
            Auditer mes obligations sociales
          </Link>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            Les employeurs ont des obligations en matière de santé collective et, selon leur convention
            collective, de prévoyance collective. Au-delà des obligations légales, des dispositifs comme
            l&apos;épargne salariale et la retraite collective permettent d&apos;optimiser la rémunération globale
            des équipes. Un audit permet de vérifier la conformité et d&apos;identifier les pistes d&apos;amélioration.
          </SummaryBox>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Vos obligations sociales en tant qu&apos;employeur</h2>
          <AlertBox type="info">
            Les informations qui suivent sont générales. Vos obligations précises dépendent de votre
            convention collective, de vos accords d&apos;entreprise et des textes législatifs en vigueur.
            Un audit personnalisé est nécessaire pour valider votre situation.
          </AlertBox>

          <h3>Complémentaire santé collective</h3>
          <p>
            Toutes les entreprises du secteur privé sont tenues depuis 2016 de proposer une
            complémentaire santé à leurs salariés, avec une contribution employeur minimale.
            Le contrat doit respecter le cahier des charges du contrat responsable.
          </p>

          <h3>Prévoyance collective</h3>
          <p>
            La prévoyance collective (arrêt de travail, invalidité, décès) peut être obligatoire
            selon votre convention collective. Les accords de branche définissent les garanties
            minimales à mettre en place. Ne pas se conformer expose l&apos;employeur à des risques.
          </p>

          <h2>Audit de convention collective</h2>
          <p>
            Chaque secteur d&apos;activité a ses propres obligations définies par la convention
            collective applicable. Un audit permet de :
          </p>
          <ul>
            <li>Identifier la convention collective applicable à votre entreprise</li>
            <li>Vérifier que vos contrats de santé et prévoyance respectent les minima imposés</li>
            <li>Détecter les éventuelles lacunes et proposer des corrections adaptées</li>
          </ul>

          <h2>Épargne salariale</h2>
          <p>
            L&apos;intéressement, la participation et le Plan d&apos;Épargne Entreprise permettent d&apos;associer
            les salariés aux résultats de l&apos;entreprise dans un cadre fiscal et social avantageux.
            Ces dispositifs sont un levier d&apos;attractivité et de fidélisation des équipes.
          </p>

          <h2>Retraite collective et IFC</h2>
          <p>
            Un Plan d&apos;Épargne Retraite Collectif (PERCOL) peut compléter les droits retraite
            des salariés. Par ailleurs, les Indemnités de Fin de Carrière (IFC) représentent
            un engagement financier de l&apos;entreprise qui peut être provisionné et sécurisé
            via un contrat dédié.
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
            title="Audit conformité protection sociale entreprise"
            subtitle="Vérifiez vos obligations, optimisez vos contrats et valorisez votre politique sociale auprès de vos équipes."
            ctaPrimary="Auditer mes obligations sociales"
            ctaSecondary="Planifier un rendez-vous"
          />
        </div>
      </section>
    </>
  );
}
