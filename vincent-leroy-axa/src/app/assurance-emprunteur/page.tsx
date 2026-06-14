import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AuditCTA from "@/components/ui/AuditCTA";
import SummaryBox from "@/components/ui/SummaryBox";

export const metadata: Metadata = {
  title: "Assurance emprunteur Paris délégation | Vincent Leroy AXA",
  description:
    "Comparez et optimisez votre assurance de prêt immobilier. Délégation d'assurance, garanties, quotités : étude comparative gratuite à Paris et en Île-de-France.",
  alternates: { canonical: "/assurance-emprunteur" },
};

const faqItems = [
  {
    question: "Qu'est-ce que la délégation d'assurance emprunteur ?",
    answer:
      "La délégation d'assurance permet de souscrire une assurance emprunteur auprès d'un assureur différent de la banque qui vous accorde le prêt. Depuis la loi Lagarde (2010), renforcée par les lois Hamon et Bourquin, puis la loi Lemoine (2022), vous pouvez choisir librement votre assurance à condition qu'elle présente un niveau de garanties au moins équivalent à celui proposé par la banque.",
  },
  {
    question: "Qu'est-ce que la quotité en assurance emprunteur ?",
    answer:
      "La quotité représente la part du capital emprunté couverte par l'assurance pour chaque co-emprunteur. Pour un couple, la quotité peut être de 100% sur chaque tête (protection maximale) ou répartie différemment (ex : 70%/30%). En cas de décès ou d'invalidité, seule la quotité couverte est prise en charge.",
  },
  {
    question: "Quelles sont les garanties d'une assurance emprunteur ?",
    answer:
      "Une assurance emprunteur peut inclure : DC (décès), PTIA (Perte Totale et Irréversible d'Autonomie), ITT (Incapacité Temporaire Totale de travail), IPT (Invalidité Permanente Totale), IPP (Invalidité Permanente Partielle), et parfois PE (Perte d'Emploi). Les garanties obligatoires varient selon le type de prêt.",
  },
  {
    question: "Puis-je changer d'assurance emprunteur en cours de prêt ?",
    answer:
      "Oui, depuis la loi Lemoine de 2022, vous pouvez résilier et changer d'assurance emprunteur à tout moment, sans attendre de date anniversaire, à condition que le nouveau contrat présente un niveau de garanties au moins équivalent. Cette possibilité peut permettre de réaliser des économies sur la durée du prêt.",
  },
  {
    question: "Puis-je obtenir une assurance emprunteur si j'ai des problèmes de santé ?",
    answer:
      "C'est possible dans de nombreux cas, mais les conditions varient. Certains profils peuvent bénéficier de la convention AERAS (s'Assurer et Emprunter avec un Risque Aggravé de Santé) qui facilite l'accès à l'assurance pour les personnes ayant eu un problème de santé grave. Une étude personnalisée est recommandée.",
  },
];

export default function AssuranceEmprunteurPage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Assurance emprunteur" }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Assurance emprunteur</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Assurance emprunteur : réduire le coût et sécuriser votre prêt immobilier
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            L&apos;assurance emprunteur représente souvent le 2e coût d&apos;un crédit immobilier après les
            intérêts. Comparer et choisir le bon contrat peut générer des économies significatives
            sur la durée de votre prêt.
          </p>
          <Link href="/contact" className="btn-red">
            Étude comparative gratuite
          </Link>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            L&apos;assurance emprunteur garantit le remboursement de votre prêt immobilier en cas de décès,
            d&apos;invalidité ou d&apos;incapacité de travail. Depuis la loi Lemoine (2022), vous pouvez changer
            d&apos;assurance à tout moment si le nouveau contrat présente des garanties équivalentes.
            Une délégation d&apos;assurance peut vous permettre, selon votre profil, d&apos;optimiser votre
            couverture et son coût.
          </SummaryBox>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Banque vs délégation : quelle différence ?</h2>
          <p>
            Lorsque vous contractez un prêt immobilier, votre banque vous propose systématiquement
            son propre contrat d&apos;assurance (contrat groupe). Ce contrat mutualise les risques et
            peut être moins adapté à votre profil personnel (âge, profession, état de santé).
          </p>
          <p>
            La délégation d&apos;assurance vous permet de choisir un contrat individuel auprès d&apos;un
            assureur tiers. Ces contrats individuels sont souvent mieux calibrés sur votre profil
            et peuvent proposer des tarifs différents selon les cas.
          </p>

          <h2>Les garanties à comparer</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-brand-gray-200 text-sm mt-4">
              <thead>
                <tr className="bg-brand-blue text-white">
                  <th className="border border-brand-gray-200 p-3 text-left">Garantie</th>
                  <th className="border border-brand-gray-200 p-3 text-left">Ce qu&apos;elle couvre</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["DC – Décès", "Remboursement du capital restant dû en cas de décès"],
                  ["PTIA", "Perte Totale et Irréversible d'Autonomie (besoin d'aide pour les actes de la vie)"],
                  ["ITT", "Incapacité Temporaire Totale : arrêt de travail complet"],
                  ["IPT", "Invalidité Permanente Totale : incapacité > 66%"],
                  ["IPP", "Invalidité Permanente Partielle : incapacité entre 33% et 66%"],
                ].map(([g, d], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-brand-gray-50"}>
                    <td className="border border-brand-gray-200 p-3 font-medium">{g}</td>
                    <td className="border border-brand-gray-200 p-3 text-brand-gray-600">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Cas particuliers : professions libérales et dirigeants</h2>
          <p>
            Pour les professions libérales, la définition de l&apos;incapacité de travail est un point
            clé à vérifier. Certains contrats prévoient une définition de l&apos;invalidité basée sur
            votre profession spécifique (impossibilité d&apos;exercer votre métier), d&apos;autres sur
            la capacité à exercer n&apos;importe quelle activité rémunérée.
          </p>
          <p>
            La première définition est généralement plus protectrice pour les professions libérales
            comme les médecins, dentistes, vétérinaires ou avocats.
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
            title="Obtenez une étude comparative gratuite"
            subtitle="Analysons votre contrat actuel et voyons ensemble les alternatives disponibles selon votre profil."
            ctaPrimary="Étude comparative gratuite"
            ctaSecondary="Planifier un rendez-vous"
            variant="light"
          />
        </div>
      </section>
    </>
  );
}
