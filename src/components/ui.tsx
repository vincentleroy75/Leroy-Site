import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/cn"

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
}

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary" | "ghost"
  className?: string
  external?: boolean
}

export function ButtonLink({ href, children, variant = "primary", className, external }: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-brand-blue-dark",
    secondary: "bg-white text-brand-blue ring-1 ring-inset ring-brand-gray-200 hover:bg-brand-gray-50",
    ghost: "text-brand-blue hover:bg-brand-gray-50",
  }
  const cls = cn(base, variants[variant], className)
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-sm font-semibold uppercase tracking-wide text-brand-red">{children}</span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  centered,
}: {
  eyebrow?: string
  title: string
  intro?: string
  centered?: boolean
}) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-gray-900 sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-brand-gray-600">{intro}</p>}
    </div>
  )
}
