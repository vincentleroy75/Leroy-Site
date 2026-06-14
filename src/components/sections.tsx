import Link from "next/link"
import type { ReactNode } from "react"
import { siteConfig } from "@/lib/config"
import type { ContentSection, FAQ } from "@/lib/data"
import { Container, ButtonLink, Eyebrow } from "@/components/ui"

export function PageHero({
  eyebrow,
  heading,
  intro,
  children,
}: {
  eyebrow?: string
  heading: string
  intro?: string
  children?: ReactNode
}) {
  return (
    <section className="border-b border-brand-gray-100 bg-brand-gray-50">
      <Container className="py-14 sm:py-20">
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand-gray-900 sm:text-5xl">{heading}</h1>
          {intro && <p className="mt-5 text-lg leading-relaxed text-brand-gray-600">{intro}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  )
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <Container>
      <nav aria-label="Fil d'Ariane" className="py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-brand-gray-400">
          <li>
            <Link href="/" className="hover:text-brand-blue">
              Accueil
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span aria-hidden>/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-brand-blue">
                  {item.label}
                </Link>
              ) : (
                <span className="text-brand-gray-600">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </Container>
  )
}

export function ContentBlocks({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="flex flex-col gap-12">
      {sections.map((section, i) => (
        <div key={i} className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-brand-gray-900 sm:text-3xl">{section.title}</h2>
          <div className="mt-4 flex flex-col gap-4">
            {section.paragraphs.map((p, j) => (
              <p key={j} className="text-base leading-relaxed text-brand-gray-600">
                {p}
              </p>
            ))}
          </div>
          {section.bullets && (
            <ul className="mt-6 flex flex-col gap-3">
              {section.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-3 text-brand-gray-600">
                  <CheckIcon />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export function FaqSection({ faqs }: { faqs: FAQ[] }) {
  if (!faqs.length) return null
  return (
    <section className="bg-brand-gray-50">
      <Container className="py-14 sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-brand-gray-900 sm:text-4xl">Questions fréquentes</h2>
        <div className="mt-8 flex max-w-3xl flex-col gap-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-brand-gray-100 bg-white p-5 shadow-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-brand-gray-900">
                {faq.question}
                <span className="text-brand-blue transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-brand-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function CtaSection({
  title = "Faites le point sur votre protection",
  text = "Un échange personnalisé permet d'identifier les garanties adaptées à votre situation, sans engagement.",
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="bg-brand-blue">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
            <p className="mt-3 text-base leading-relaxed text-white/80">{text}</p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <ButtonLink href="/contact" variant="secondary">
              Prendre rendez-vous
            </ButtonLink>
            {siteConfig.phone && (
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/40 transition-colors hover:bg-white/10"
              >
                {siteConfig.phone}
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-blue"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}
