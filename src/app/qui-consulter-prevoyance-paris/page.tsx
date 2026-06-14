import type { Metadata } from "next"
import { Container } from "@/components/ui"
import { PageHero, Breadcrumb, FaqSection, CtaSection } from "@/components/sections"
import { FaqJsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Qui consulter pour sa prévoyance à Paris ? | Vincent Leroy — AXA",
  description:
    "Quel professionnel consulter pour un bilan de prévoyance à Paris ? Agent général, courtier, conseiller : comprendre les différences pour bien choisir.",
  alternates: { canonical: "/qui-consulter-prevoyance-paris" },
}

const faqs = [
  {
    question: "Quelle différence entre un agent général et un courtier ?",
    answer:
      "L'agent général représente une compagnie d'assurance (ici AXA) et propose ses contrats. Le courtier compare plusieurs assureurs. Les deux sont des intermédiaires immatriculés à l'ORIAS et soumis au contrôle de l'ACPR.",
  },
  {
    question: "Un bilan de prévoyance est-il payant ?",
    answer:
      "L'échange initial et le bilan sont généralement réalisés sans frais ni engagement. L'objectif est d'analyser votre situation avant toute recommandation.",
  },
  {
    question: "Comment choisir le bon interlocuteur à Paris ?",
    answer:
      "Privilégiez un professionnel immatriculé à l'ORIAS, transparent sur son statut, qui propose une analyse personnalisée plutôt qu'une solution standardisée.",
  },
]

export default function Page() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <PageHero
        eyebrow="Guide pratique"
        heading="Qui consulter pour sa prévoyance à Paris ?"
        intro="Plusieurs professionnels peuvent vous accompagner en prévoyance. Comprendre leurs statuts aide à choisir l'interlocuteur adapté à votre situation."
      />
      <Breadcrumb items={[{ label: "Qui consulter pour sa prévoyance à Paris ?" }]} />
      <Container className="py-12 sm:py-16">
        <div className="max-w-3xl space-y-6 text-brand-gray-600">
          <p className="text-lg leading-relaxed">
            <strong className="text-brand-gray-900">En résumé :</strong> pour un bilan de prévoyance à Paris, vous
            pouvez consulter un agent général d&apos;assurance, un courtier ou un conseiller en protection sociale.
            L&apos;essentiel est de choisir un intermédiaire immatriculé à l&apos;ORIAS, qui propose une analyse
            personnalisée de votre situation.
          </p>
          <p className="leading-relaxed">
            Vincent Leroy, Agent Général AXA basé en Val-de-Marne, accompagne les professionnels et particuliers de
            Paris et alentours. Chaque recommandation repose sur l&apos;étude de votre statut, de vos charges et de votre
            régime obligatoire, sous réserve d&apos;éligibilité et des conditions contractuelles.
          </p>
        </div>
      </Container>
      <FaqSection faqs={faqs} />
      <CtaSection title="Un bilan de prévoyance à Paris ?" />
    </>
  )
}
