import Link from "next/link"
import { siteConfig } from "@/lib/config"
import { services } from "@/lib/data"
import { Container } from "@/components/ui"

const ressourcesLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Ressources", href: "/ressources" },
  { label: "Contact", href: "/contact" },
  { label: "Professions libérales", href: "/professions-liberales" },
  { label: "Plan du site", href: "/plan-du-site" },
]

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
]

export function Footer() {
  return (
    <footer className="border-t border-brand-gray-100 bg-brand-gray-50">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-base font-bold text-brand-blue">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-brand-gray-600">{siteConfig.role}</p>
            <address className="mt-4 not-italic text-sm text-brand-gray-600">
              <p>{siteConfig.address}</p>
              <p className="mt-2">
                <a href={siteConfig.phoneHref} className="hover:text-brand-blue">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-blue">
                  {siteConfig.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-gray-900">Services</p>
            <ul className="mt-4 flex flex-col gap-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-sm text-brand-gray-600 hover:text-brand-blue">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-gray-900">Ressources</p>
            <ul className="mt-4 flex flex-col gap-2">
              {ressourcesLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-brand-gray-600 hover:text-brand-blue">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-gray-900">Informations légales</p>
            <ul className="mt-4 flex flex-col gap-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-brand-gray-600 hover:text-brand-blue">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-brand-gray-400">ORIAS : {siteConfig.orias}</p>
            <p className="text-xs text-brand-gray-400">SIRET : {siteConfig.siret}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-gray-200 pt-6">
          <p className="text-xs leading-relaxed text-brand-gray-400">
            {siteConfig.name} — {siteConfig.role}. Intermédiaire en assurance immatriculé à l&apos;ORIAS, soumis au
            contrôle de l&apos;ACPR (Autorité de Contrôle Prudentiel et de Résolution). Les informations présentes sur ce
            site n&apos;ont pas de valeur contractuelle et ne constituent pas un conseil personnalisé. Toute
            recommandation nécessite une analyse personnalisée, sous réserve d&apos;éligibilité et des conditions
            contractuelles.
          </p>
          <p className="mt-4 text-xs text-brand-gray-400">
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  )
}
