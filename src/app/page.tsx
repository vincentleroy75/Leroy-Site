import Link from "next/link"
import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { services, professions, articles } from "@/lib/data"
import { Container, ButtonLink, SectionHeading } from "@/components/ui"
import { CtaSection } from "@/components/sections"

export const metadata: Metadata = {
  title: `${siteConfig.role} à Paris & Val-de-Marne`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
}

const valueProps = [
  {
    title: "Un interlocuteur unique",
    text: "Agent Général AXA, votre conseiller suit votre dossier dans la durée, du premier bilan au suivi régulier.",
  },
  {
    title: "Une analyse personnalisée",
    text: "Chaque recommandation repose sur l'étude de votre statut, de vos charges et de votre régime obligatoire.",
  },
  {
    title: "Un conseil de proximité",
    text: "Basé en Val-de-Marne, votre conseiller intervient à Paris et alentours, en rendez-vous sur site ou à distance.",
  },
]

const steps = [
  { n: "01", title: "Échange initial", text: "Nous faisons le point sur votre situation et vos objectifs, sans engagement." },
  { n: "02", title: "Bilan personnalisé", text: "Une analyse de vos garanties actuelles et des écarts éventuels avec vos besoins." },
  { n: "03", title: "Recommandations", text: "Des solutions adaptées, expliquées clairement, sous réserve d'éligibilité." },
  { n: "04", title: "Suivi dans la durée", text: "Un accompagnement régulier pour ajuster vos garanties à l'évolution de votre vie." },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-brand-gray-100 bg-gradient-to-b from-brand-gray-50 to-white">
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/5 px-3 py-1 text-sm font-semibold text-brand-blue">
              {siteConfig.role}
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-brand-gray-900 sm:text-5xl lg:text-6xl">
              Protégez vos revenus, votre famille et votre activité
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-brand-gray-600 sm:text-xl">
              {siteConfig.name} vous accompagne en prévoyance, retraite, santé et protection sociale à Paris et dans le
              Val-de-Marne. Chaque solution part d&apos;une analyse personnalisée de votre situation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/audit-prevoyance-gratuit">Demander un audit gratuit</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Prendre rendez-vous
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* VALUE PROPS */}
      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {valueProps.map((v) => (
            <div key={v.title} className="rounded-2xl border border-brand-gray-100 bg-white p-6 shadow-card">
              <h2 className="text-lg font-bold text-brand-gray-900">{v.title}</h2>
              <p className="mt-3 leading-relaxed text-brand-gray-600">{v.text}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* SERVICES */}
      <section className="bg-brand-gray-50">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Nos domaines d'intervention"
            title="Des solutions adaptées à chaque situation"
            intro="Particuliers, indépendants, dirigeants et entreprises : découvrez les domaines dans lesquels vous pouvez être accompagné."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-brand-gray-100 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <h3 className="text-lg font-bold text-brand-gray-900 group-hover:text-brand-blue">{s.navLabel}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-gray-600">{s.metaDescription}</p>
                <span className="mt-4 text-sm font-semibold text-brand-blue">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* PROFESSIONS */}
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Professions libérales"
          title="Une expertise dédiée à votre profession"
          intro="Chaque profession dispose d'un régime obligatoire et de charges spécifiques. Découvrez un accompagnement pensé pour votre exercice."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {professions.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="rounded-full border border-brand-gray-200 bg-white px-4 py-2 text-sm font-medium text-brand-gray-600 transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              {p.profession}
            </Link>
          ))}
          <Link
            href="/professions-liberales"
            className="rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
          >
            Toutes les professions →
          </Link>
        </div>
      </Container>

      {/* STEPS */}
      <section className="bg-brand-blue-dark">
        <Container className="py-16 sm:py-20">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Comment se déroule l&apos;accompagnement ?
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n}>
                <span className="text-3xl font-bold text-brand-red">{s.n}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* RESSOURCES */}
      <Container className="py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Ressources" title="Comprendre pour mieux décider" />
          <Link href="/ressources" className="hidden flex-shrink-0 text-sm font-semibold text-brand-blue hover:underline sm:block">
            Tous les articles →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.slice(0, 3).map((a) => (
            <Link
              key={a.slug}
              href={`/ressources/${a.slug}`}
              className="group flex flex-col rounded-2xl border border-brand-gray-100 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-red">{a.category}</span>
              <h3 className="mt-2 text-lg font-bold text-brand-gray-900 group-hover:text-brand-blue">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-gray-600">{a.excerpt}</p>
              <span className="mt-4 text-sm font-semibold text-brand-blue">Lire l&apos;article →</span>
            </Link>
          ))}
        </div>
      </Container>

      <CtaSection />
    </>
  )
}
