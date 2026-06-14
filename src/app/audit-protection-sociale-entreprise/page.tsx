import type { Metadata } from "next"
import { Container } from "@/components/ui"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Audit de protection sociale entreprise | Vincent Leroy — Agent Général AXA",
  description:
    "Audit gratuit de la protection sociale de votre entreprise : mutuelle collective, prévoyance et conformité. Sans engagement.",
  alternates: { canonical: "/audit-protection-sociale-entreprise" },
}

const benefits = [
  "Une revue de vos contrats collectifs actuels",
  "Une vérification de la conformité réglementaire",
  "L'identification des axes d'optimisation des garanties",
  "Un accompagnement pour vos salariés et dirigeants",
]

export default function Page() {
  return (
    <section className="border-b border-brand-gray-100 bg-brand-gray-50">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wide text-brand-red">
              Audit entreprise
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand-gray-900 sm:text-5xl">
              Auditez la protection sociale de votre entreprise
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-brand-gray-600">
              Mutuelle collective, prévoyance, retraite : un audit gratuit permet de vérifier la conformité de vos
              contrats et d&apos;identifier d&apos;éventuels axes d&apos;amélioration, sous réserve des conditions
              contractuelles.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-brand-gray-600">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-gray-100 bg-white p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-bold text-brand-gray-900">Demander mon audit entreprise</h2>
            <p className="mt-2 text-sm text-brand-gray-600">
              Renseignez vos coordonnées, vous serez recontacté rapidement.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
