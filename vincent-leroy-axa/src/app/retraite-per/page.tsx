import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";
import AlertBox from "@/components/ui/AlertBox";

export const metadata: Metadata = {
  title: "Retraite PER indépendant libéral Paris | Vincent Leroy AXA",
  description:
    "Préparez votre retraite avec un Plan d'Épargne Retraite adapté à votre statut de TNS ou profession libérale. Projection retraite gratuite à Paris et Vincennes.",
  alternates: { canonical: "/retraite-per" },
};

const faqItems = [
  {
    question: "Qu'est-ce que le PER individuel ?",
    answer:
      "Le Plan d'Épargne Retraite individuel (PERin) est un produit d'épargne longue durée créé par la loi PACTE en 2019. Il permet de constituer un capital ou une rente pour la retraite, avec la possibilité de déduire les versements de son revenu imposable dans certaines limites. À la retraite, le capital peut être sorti en rente, en capital ou partiellement en capital.",
  },
  {
    question: "Les versements sur un PER sont-ils déductibles des impôts ?",
    answer:
      "Les versements volontaires sur un PER individuel peuvent être déductibles du revenu imposable, dans la limite d'un plafond annuel. Ce plafond dépend de votre statut (salarié, TNS, professionnel libéral) et de vos revenus. Les conditions et limites évoluent chaque année — une analyse personnalisée est recommandée pour évaluer l'intérêt fiscal selon votre situation spécifique.",
  },
  {
    question: "Quelle différence entre PER et ancien contrat Madelin ?",
    answer:
      "Depuis 2020, les anciens contrats Madelin ne sont plus commercialisés et ont été remplacés par le PER individuel. Les principaux avantages du PER par rapport au Madelin : possibilité de sortie en capital (et pas uniquement en rente), cas de déblocage anticipé plus nombreux (achat de résidence principale, décès du conjoint…), et portabilité entre contrats.",
  },
  {
    question: "À quel âge est-il trop tard pour ouvrir un PER ?",
    answer:
      "Il n'est jamais formellement trop tard pour ouvrir un PER, même si les avantages de la constitution d'un capital sont naturellement plus importants avec une longue durée d'épargne. À partir de 50 ans, l'horizon se raccourcit, mais une stratégie adaptée peut encore être pertinente selon votre situation fiscale et vos autres revenus de retraite attendus.",
  },
  {
    question: "Comment connaître mon niveau de retraite obligatoire prévu ?",
    answer:
      "Vous pouvez consulter votre relevé de carrière et une estimation de votre pension sur le site info-retraite.fr (service public commun à toutes les caisses). Cette simulation donne une projection, mais dépend de nombreux paramètres qui peuvent évoluer. Je peux vous aider à interpréter ces données dans le cadre d'un bilan retraite complet.",
  },
];

export default function RetraitePERPage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Retraite & PER" }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Retraite & PER</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Retraite et PER pour indépendants, libéraux et dirigeants
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Les professions libérales et TNS accumulent souvent moins de droits retraite que les
            salariés. Anticiper aujourd&apos;hui avec un Plan d&apos;Épargne Retraite adapté, c&apos;est préserver
            votre niveau de vie demain.
          </p>
          <Link href="/audit-prevoyance-gratuit" className="btn-red">
            Demander une projection retraite
          </Link>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            Le Plan d&apos;Épargne Retraite individuel (PERin) permet aux TNS et professions libérales
            de compléter leurs droits retraite obligatoires en constituant un capital ou une rente.
            Les versements volontaires peuvent être déductibles du revenu imposable dans certaines
            limites selon votre statut. Une analyse personnalisée est recommandée pour évaluer
            l&apos;intérêt selon votre situation.
          </SummaryBox>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Comprendre vos droits retraite en tant qu&apos;indépendant</h2>
          <p>
            Chaque profession libérale et chaque statut d&apos;indépendant relève d&apos;un régime de
            retraite obligatoire spécifique : CARMF pour les médecins, CARCDSF pour les dentistes,
            CAVP pour les pharmaciens, CIPAV pour de nombreuses professions libérales réglementées,
            SSI pour les TNS commerçants et artisans…
          </p>
          <p>
            Ces régimes offrent une retraite de base et souvent une retraite complémentaire. Mais
            les niveaux de pension à attendre peuvent être inférieurs aux revenus d&apos;activité,
            notamment si vous avez démarré votre activité tardivement ou connu des années de
            revenus irréguliers.
          </p>

          <h2>Le PER individuel : fonctionnement et avantages</h2>
          <p>
            Le Plan d&apos;Épargne Retraite individuel (PERin) est un contrat d&apos;épargne long terme
            permettant de constituer un complément de retraite. Ses caractéristiques principales :
          </p>
          <ul>
            <li>Versements libres (programmés ou ponctuels)</li>
            <li>Possibilité de déduction des versements du revenu imposable (dans certaines limites)</li>
            <li>Épargne investie selon votre profil de risque (fonds sécurisés, unités de compte…)</li>
            <li>Sortie possible en capital, en rente ou en combinaison des deux à la retraite</li>
            <li>Déblocage anticipé possible dans certains cas (achat résidence principale, décès du conjoint, invalidité…)</li>
          </ul>

          <AlertBox type="info">
            Les avantages fiscaux du PER dépendent de votre situation personnelle : taux d&apos;imposition,
            revenus, plafonds disponibles. Une analyse personnalisée est nécessaire avant toute décision.
            Ces informations sont générales et ne constituent pas un conseil fiscal.
          </AlertBox>

          <h2>Stratégie retraite personnalisée</h2>
          <p>
            Construire une stratégie retraite efficace, c&apos;est :
          </p>
          <ul>
            <li>Estimer vos droits obligatoires (bilan de carrière)</li>
            <li>Identifier l&apos;écart entre vos droits estimés et votre niveau de vie cible</li>
            <li>Déterminer l&apos;effort d&apos;épargne nécessaire pour combler cet écart</li>
            <li>Choisir les supports d&apos;épargne adaptés (PER, assurance-vie, immobilier locatif…)</li>
            <li>Réviser régulièrement le plan en fonction de l&apos;évolution de votre situation</li>
          </ul>

          <h2>PER et professions libérales : quelles spécificités ?</h2>
          <p>
            Les professions libérales peuvent, selon leur statut, bénéficier de plafonds de
            déduction plus élevés que les salariés, notamment via le plafond TNS pour les
            professions libérales affiliées à la SSI. Les médecins, dentistes, vétérinaires
            et autres professionnels libéraux ont chacun leurs particularités.
          </p>
          <p>
            Je travaille avec votre expert-comptable pour m&apos;assurer que les solutions proposées
            sont cohérentes avec votre situation fiscale globale.
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
            title="Obtenez une projection retraite personnalisée"
            subtitle="Analysons ensemble vos droits acquis et les compléments à mettre en place pour atteindre vos objectifs."
            ctaPrimary="Demander une projection retraite"
            ctaSecondary="Être rappelé"
          />
        </div>
      </section>
    </>
  );
}
