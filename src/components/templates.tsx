import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { siteConfig } from "@/lib/config"
import { getService, getProfession, getLocation, services, professions, locations } from "@/lib/data"
import { Container, ButtonLink } from "@/components/ui"
import { PageHero, Breadcrumb, ContentBlocks, FaqSection, CtaSection } from "@/components/sections"
import { FaqJsonLd } from "@/components/json-ld"
import Link from "next/link"

// --- SERVICE ---------------------------------------------------------------

export function buildServiceMetadata(slug: string): Metadata {
  const s = getService(slug)
  if (!s) return {}
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/${s.slug}` },
  }
}

export function ServicePageView({ slug }: { slug: string }) {
  const s = getService(slug)
  if (!s) notFound()
  return (
    <>
      <FaqJsonLd faqs={s.faqs} />
      <PageHero eyebrow={s.hero.eyebrow} heading={s.hero.heading} intro={s.hero.intro}>
        <ButtonLink href="/contact">Demander un bilan</ButtonLink>
        <ButtonLink href="/audit-prevoyance-gratuit" variant="secondary">
          Audit gratuit
        </ButtonLink>
      </PageHero>
      <Breadcrumb items={[{ label: s.title }]} />
      <Container className="py-12 sm:py-16">
        <ContentBlocks sections={s.sections} />
      </Container>
      <FaqSection faqs={s.faqs} />
      <CtaSection />
    </>
  )
}

// --- PROFESSION ------------------------------------------------------------

export function buildProfessionMetadata(slug: string): Metadata {
  const p = getProfession(slug)
  if (!p) return {}
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/${p.slug}` },
  }
}

export function ProfessionPageView({ slug }: { slug: string }) {
  const p = getProfession(slug)
  if (!p) notFound()
  return (
    <>
      <FaqJsonLd faqs={p.faqs} />
      <PageHero eyebrow={p.hero.eyebrow} heading={p.hero.heading} intro={p.hero.intro}>
        <ButtonLink href="/contact">Demander un bilan</ButtonLink>
        <ButtonLink href="/professions-liberales" variant="secondary">
          Toutes les professions
        </ButtonLink>
      </PageHero>
      <Breadcrumb items={[{ label: "Professions libérales", href: "/professions-liberales" }, { label: p.profession }]} />
      <Container className="py-12 sm:py-16">
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          {p.enjeux.map((e) => (
            <div key={e} className="rounded-xl border border-brand-gray-100 bg-white p-5 shadow-card">
              <p className="text-sm font-medium text-brand-gray-900">{e}</p>
            </div>
          ))}
        </div>
        <ContentBlocks sections={p.sections} />
      </Container>
      <FaqSection faqs={p.faqs} />
      <CtaSection title={`Un bilan adapté à votre exercice`} />
    </>
  )
}

// --- LOCATION --------------------------------------------------------------

export function buildLocationMetadata(slug: string): Metadata {
  const l = getLocation(slug)
  if (!l) return {}
  return {
    title: l.metaTitle,
    description: l.metaDescription,
    alternates: { canonical: `/${l.slug}` },
  }
}

export function LocationPageView({ slug }: { slug: string }) {
  const l = getLocation(slug)
  if (!l) notFound()
  return (
    <>
      <PageHero
        eyebrow="Conseil de proximité"
        heading={`Prévoyance et protection sociale à ${l.city}`}
        intro={l.intro}
      >
        <ButtonLink href="/contact">Prendre rendez-vous</ButtonLink>
      </PageHero>
      <Breadcrumb items={[{ label: l.city }]} />
      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-brand-gray-900 sm:text-3xl">
              Un accompagnement local à {l.city}
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {l.context.map((c) => (
                <li key={c} className="flex items-start gap-3 text-brand-gray-600">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red" aria-hidden />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-brand-gray-600">
              {siteConfig.name}, {siteConfig.role}, propose une analyse personnalisée pour les habitants et
              professionnels de {l.city}. Une étude est nécessaire avant toute recommandation, sous réserve
              d&apos;éligibilité et des conditions contractuelles.
            </p>
          </div>
          <aside className="rounded-2xl border border-brand-gray-100 bg-brand-gray-50 p-6">
            <h3 className="text-lg font-bold text-brand-gray-900">Nos services</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-sm text-brand-blue hover:underline">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
      <CtaSection title={`Échangeons sur votre situation à ${l.city}`} />
    </>
  )
}

// --- STATIC PARAMS ---------------------------------------------------------

export const serviceSlugs = services.map((s) => s.slug)
export const professionSlugs = professions.map((p) => p.slug)
export const locationSlugs = locations.map((l) => l.slug)
