import Link from "next/link"
import type { Metadata } from "next"
import { professions } from "@/lib/data"
import { Container } from "@/components/ui"
import { PageHero, Breadcrumb, CtaSection } from "@/components/sections"

export const metadata: Metadata = {
  title: "Prévoyance des professions libérales | Vincent Leroy — Agent Général AXA",
  description:
    "Médecins, dentistes, avocats, vétérinaires, pharmaciens… Découvrez un accompagnement en prévoyance et retraite adapté à chaque profession libérale.",
  alternates: { canonical: "/professions-liberales" },
}

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Professions libérales"
        heading="Une prévoyance adaptée à votre profession"
        intro="Chaque profession libérale dispose d'un régime obligatoire et de charges spécifiques. Découvrez un accompagnement pensé pour la réalité de votre exercice."
      />
      <Breadcrumb items={[{ label: "Professions libérales" }]} />
      <Container className="py-12 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {professions.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-brand-gray-100 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <h2 className="text-lg font-bold text-brand-gray-900 group-hover:text-brand-blue">{p.profession}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-gray-600">{p.hero.intro}</p>
              <span className="mt-4 text-sm font-semibold text-brand-blue">Découvrir →</span>
            </Link>
          ))}
        </div>
      </Container>
      <CtaSection title="Votre profession n'est pas listée ?" text="Quel que soit votre statut, un bilan personnalisé permet d'adapter vos garanties à votre exercice." />
    </>
  )
}
