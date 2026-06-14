"use client"

import Link from "next/link"
import { useState } from "react"
import { siteConfig } from "@/lib/config"
import { services, professions } from "@/lib/data"
import { Container, ButtonLink } from "@/components/ui"
import { cn } from "@/lib/cn"

const mainNav = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Ressources", href: "/ressources" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-gray-100 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-base font-bold text-brand-blue">{siteConfig.name}</span>
            <span className="text-xs text-brand-gray-600">Agent Général AXA</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
            <DropdownNav label="Services" items={services.map((s) => ({ label: s.navLabel, href: `/${s.slug}` }))} />
            <DropdownNav
              label="Professions"
              items={[
                { label: "Toutes les professions", href: "/professions-liberales" },
                ...professions.map((p) => ({ label: p.profession, href: `/${p.slug}` })),
              ]}
            />
            {mainNav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-brand-gray-600 transition-colors hover:bg-brand-gray-50 hover:text-brand-blue"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/audit-prevoyance-gratuit">Audit gratuit</ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-gray-600 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Ouvrir le menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-brand-gray-100 bg-white lg:hidden">
          <Container>
            <div className="flex flex-col gap-1 py-4">
              <MobileGroup label="Services" items={services.map((s) => ({ label: s.navLabel, href: `/${s.slug}` }))} />
              <MobileGroup
                label="Professions"
                items={[
                  { label: "Toutes les professions", href: "/professions-liberales" },
                  ...professions.map((p) => ({ label: p.profession, href: `/${p.slug}` })),
                ]}
              />
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-brand-gray-900 hover:bg-brand-gray-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2">
                <ButtonLink href="/audit-prevoyance-gratuit" className="w-full">
                  Audit gratuit
                </ButtonLink>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}

function DropdownNav({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-brand-gray-600 transition-colors hover:bg-brand-gray-50 hover:text-brand-blue">
        {label}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-64 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        <div className="rounded-xl border border-brand-gray-100 bg-white p-2 shadow-card-hover">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block rounded-lg px-3 py-2 text-sm text-brand-gray-600 transition-colors hover:bg-brand-gray-50 hover:text-brand-blue",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileGroup({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  return (
    <details className="rounded-md">
      <summary className="cursor-pointer list-none rounded-md px-3 py-2 text-sm font-semibold text-brand-gray-900 hover:bg-brand-gray-50">
        {label}
      </summary>
      <div className="ml-3 flex flex-col border-l border-brand-gray-100 pl-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm text-brand-gray-600 hover:bg-brand-gray-50">
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  )
}
