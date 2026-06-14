import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactForm from "@/components/ui/ContactForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SummaryBox from "@/components/ui/SummaryBox";
import AlertBox from "@/components/ui/AlertBox";

export const metadata: Metadata = {
  title: "Audit protection sociale entreprise Paris | Vincent Leroy AXA",
  description:
    "Audit gratuit de vos contrats santé et prévoyance collective, convention collective et obligations sociales d'employeur. TPE PME à Paris et en Île-de-France.",
  alternates: { canonical: "/audit-protection-sociale-entreprise" },
};

const faqItems = [
  {
    question: "Que comprend l'audit de protection sociale entreprise ?",
    answer: "L'audit comprend : l'identification de votre convention collective applicable, la vérification de vos contrats de santé et prévoyance collective au regard de vos obligations, une analyse de vos contrats en termes de garanties et de tarifs, et des recommandations pour améliorer votre conformité et optimiser les contrats existants.",
  },
  {
    question: "L'audit est-il gratuit ?",
    answer: "Oui, l'audit initial est gratuit et sans engagement. Il permet d'établir un diagnostic de votre situation. Des recommandations concrètes sont formulées à l'issue de l'audit.",
  },
  {
    question: "Que se passe-t-il si je ne suis pas conforme ?",
    answer: "Si des non-conformités sont identifiées, des recommandations concrètes sont formulées pour y remédier. Le risque de ne pas être conforme peut varier selon les situations — raison pour laquelle il est préférable d'agir de manière préventive. Les risques potentiels sont expliqués de manière factuelle et sans dramatisation.",
  },
  {
    question: "L'audit est-il pertinent pour une entreprise de 2-3 salariés ?",
    answer: "Oui, même pour une très petite entreprise (TPE), les obligations sociales existent. La mutuelle obligatoire s'applique dès le premier salarié. Un audit permet de s'assurer que vous êtes en règle et d'identifier les éventuelles opportunités d'optimisation.",
  },
];

export default function AuditProtectionSocialeEntreprisePage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "Entreprises", href: "/protection-sociale-entreprise" }, { label: "Audit protection sociale" }]} /></div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-14 md:py-20">
        <div className="container-wide max-w-3xl">
          <p className="badge bg-white/10 text-white border border-white/20 mb-4">Entreprises · Gratuit · Sans engagement</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Audit protection sociale entreprise : vérifiez votre conformité
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Santé collective, prévoyance collective, convention collective, épargne salariale :
            vos obligations d&apos;employeur sont-elles respectées ? Un audit gratuit pour en avoir
            la certitude et optimiser vos contrats.
          </p>
          <Link href="#formulaire" className="btn-red">Demander un audit entreprise</Link>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-wide max-w-3xl">
          <SummaryBox>
            L&apos;audit de protection sociale entreprise permet de vérifier que les contrats de santé
            et prévoyance collective en place respectent les obligations légales et conventionnelles
            de l&apos;employeur. Il identifie également les opportunités d&apos;optimisation des contrats
            existants et les dispositifs d&apos;épargne salariale potentiellement intéressants.
          </SummaryBox>
        </div>
      </section>

      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl prose-custom">
          <h2>Vos obligations d&apos;employeur</h2>
          <AlertBox type="info">
            Les informations suivantes sont générales. Vos obligations précises dépendent de votre
            convention collective, de vos accords d&apos;entreprise et de la réglementation en vigueur.
            Un audit personnalisé est nécessaire pour valider votre situation spécifique.
          </AlertBox>
          <h3>La complémentaire santé collective</h3>
          <p>Depuis 2016, toute entreprise du secteur privé doit proposer à ses salariés une complémentaire santé collective, avec une participation employeur minimale et dans le respect du cahier des charges du contrat responsable.</p>
          <h3>La prévoyance collective</h3>
          <p>Selon votre convention collective et les accords de branche applicables, vous pouvez être dans l&apos;obligation de mettre en place une prévoyance collective (couverture décès, invalidité, arrêt de travail) pour vos salariés.</p>
          <h3>L&apos;épargne salariale</h3>
          <p>L&apos;intéressement, la participation et les plans d&apos;épargne salariale (PEE, PERCOL) sont des dispositifs qui permettent d&apos;associer les salariés aux résultats de l&apos;entreprise dans un cadre fiscal et social avantageux. Ils constituent également un levier d&apos;attractivité.</p>

          <h2>Ce que comprend l&apos;audit</h2>
          <ul>
            <li>Identification de votre convention collective applicable</li>
            <li>Analyse de vos contrats santé et prévoyance collectifs existants</li>
            <li>Comparaison avec les minima conventionnels</li>
            <li>Audit du rapport qualité/prix de vos contrats actuels</li>
            <li>Recommandations pour corriger les éventuelles non-conformités</li>
            <li>Présentation des dispositifs d&apos;épargne salariale adaptés à votre taille</li>
          </ul>
        </div>
      </section>

      <section id="formulaire" className="py-14 bg-white">
        <div className="container-wide max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark text-center mb-3">Demander l&apos;audit entreprise</h2>
          <p className="text-brand-gray-600 text-center mb-8 text-sm">Gratuit et sans engagement. Réponse sous 24h ouvrées.</p>
          <div className="card">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-blue-dark mb-8">Questions sur l&apos;audit entreprise</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
