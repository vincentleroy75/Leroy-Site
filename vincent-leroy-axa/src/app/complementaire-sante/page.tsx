import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";

export const metadata: Metadata = {
  title: "Mutuelle santé libéral dirigeant Paris | Vincent Leroy AXA",
  description:
    "Choisissez une complémentaire santé adaptée à votre profil : dentaire, optique, hospitalisation. Mutuelle individuelle ou collective pour libéraux et entreprises à Paris.",
  alternates: { canonical: "/complementaire-sante" },
};

const faqItems = [
  {
    question: "Quelle différence entre une mutuelle individuelle et une mutuelle collective ?",
    answer:
      "La mutuelle individuelle est souscrite à titre personnel, au nom du professionnel ou du particulier. La mutuelle collective est mise en place par l'employeur pour ses salariés et doit répondre à des exigences légales (contrat responsable). En tant que dirigeant ou professionnel libéral non salarié, vous pouvez choisir librement votre complémentaire santé individuelle.",
  },
  {
    question: "Comment choisir son niveau de garanties ?",
    answer:
      "Le bon niveau de garanties dépend de vos besoins de santé réels : fréquence chez le dentiste, port de lunettes ou de lentilles, antécédents médicaux, besoin de médecines douces… Il faut aussi tenir compte du secteur de conventionnement de vos praticiens habituels (secteur 1, 2 ou 3) qui influe directement sur les dépassements d'honoraires.",
  },
  {
    question: "Puis-je déduire ma mutuelle de mes revenus professionnels ?",
    answer:
      "Selon votre statut, les cotisations d'une complémentaire santé peuvent être déductibles de votre bénéfice imposable dans certaines conditions. Les règles varient selon que vous êtes TNS, profession libérale ou dirigeant assimilé salarié. Il est recommandé de vérifier avec votre expert-comptable les modalités applicables à votre situation.",
  },
  {
    question: "Les médecines douces sont-elles remboursées ?",
    answer:
      "Certaines complémentaires santé incluent le remboursement partiel de médecines alternatives : ostéopathie, acupuncture, homéopathie, diététique… Le niveau de prise en charge dépend du contrat choisi. C'est un critère de plus en plus demandé, notamment par les professions libérales soucieuses de leur bien-être au travail.",
  },
];

export default function ComplementaireSantePage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Complémentaire santé" }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Santé</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Complémentaire santé pour professions libérales et dirigeants
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Choisir une mutuelle adaptée à votre profil, c&apos;est trouver le bon équilibre entre
            le niveau de garanties dont vous avez réellement besoin et le coût des cotisations.
          </p>
          <Link href="/contact" className="btn-red">
            Comparer mon contrat actuel
          </Link>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            La complémentaire santé complète les remboursements de l&apos;Assurance Maladie. Pour les
            professions libérales et dirigeants non couverts par une mutuelle d&apos;entreprise, une
            mutuelle individuelle bien calibrée est essentielle — notamment pour les soins dentaires,
            l&apos;optique et l&apos;hospitalisation où les restes à charge peuvent être significatifs.
          </SummaryBox>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Les garanties essentielles à regarder</h2>
          <h3>Soins dentaires</h3>
          <p>
            Les prothèses dentaires et l&apos;orthodontie représentent souvent les postes de dépenses
            les plus importants. Les réformes du 100% Santé ont amélioré la prise en charge sur
            certains équipements, mais les soins hors panier restent avec des restes à charge
            significatifs selon les praticiens.
          </p>
          <h3>Optique</h3>
          <p>
            Montures, verres progressifs, lentilles… Les équipements optiques de qualité dépassent
            souvent les plafonds du 100% Santé. Une bonne complémentaire permet de limiter les
            reste à charge sur les équipements de votre choix.
          </p>
          <h3>Hospitalisation</h3>
          <p>
            En cas d&apos;hospitalisation, les frais de chambre particulière, d&apos;accompagnant et de
            dépassements d&apos;honoraires du chirurgien peuvent s&apos;accumuler rapidement. Une garantie
            hospitalisation solide permet de rester serein.
          </p>
          <h3>Médecines douces</h3>
          <p>
            Ostéopathie, acupuncture, psychologie : de nombreuses professions libérales ont des
            besoins spécifiques en matière de suivi de leur santé. Vérifiez les plafonds de
            remboursement sur ces postes dans votre contrat.
          </p>

          <h2>Mutuelle individuelle pour libéraux et TNS</h2>
          <p>
            En tant que professionnel libéral ou TNS, vous n&apos;êtes pas couvert par une mutuelle
            d&apos;entreprise. Vous devez souscrire une complémentaire santé individuelle. Certains
            contrats proposent des niveaux de couverture renforcés pour les professions exposées
            à une usure physique ou mentale plus importante.
          </p>

          <h2>Mutuelle collective pour l&apos;entreprise</h2>
          <p>
            Si vous êtes employeur, vous avez des obligations légales de mise en place d&apos;une
            complémentaire santé pour vos salariés. Le contrat doit respecter le cahier des charges
            du contrat responsable et couvrir a minima les garanties obligatoires.
          </p>
          <p>
            <Link href="/protection-sociale-entreprise" className="text-brand-blue font-medium hover:underline">
              En savoir plus sur la protection sociale collective →
            </Link>
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
            title="Comparez votre mutuelle actuelle"
            subtitle="Analyse gratuite de votre contrat de santé : niveau de garanties, rapport qualité/prix, alternatives."
            ctaPrimary="Comparer mon contrat actuel"
            ctaSecondary="Être rappelé"
            variant="light"
          />
        </div>
      </section>
    </>
  );
}
