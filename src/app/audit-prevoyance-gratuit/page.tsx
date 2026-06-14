import type { Metadata } from "next"
import { Container } from "@/components/ui"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Audit de prévoyance gratuit | Vincent Leroy — Agent Général AXA",
  description:
    "Bénéficiez d'un audit de prévoyance gratuit et sans engagement. Identifiez les écarts entre votre protection actuelle et vos besoins réels.",
  alternates: { canonical: "/audit-prevoyance-gratuit" },
}

const benefits = [
  "Une analyse de votre protection sociale actuelle",
  "L'identification des écarts avec vos besoins réels",
  "Des recommandations personnalisées et expliquées",
  "Un échange sans engagement, à votre rythme",
]

export default function Page() {
  return (
    <section className="border-b border-brand-gray-100 bg-brand-gray-50">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wide text-brand-red">
              Audit gratuit
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand-gray-900 sm:text-5xl">
              Faites le point sur votre prévoyance
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-brand-gray-600">
              Un audit gratuit et sans engagement permet d&apos;identifier si votre protection actuelle correspond à
              votre situation. Une analyse personnalisée est nécessaire avant toute recommandation.
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
            <h2 className="text-xl font-bold text-brand-gray-900">Demander mon audit gratuit</h2>
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
