import { siteConfig } from "@/lib/config"
import type { FAQ } from "@/lib/data"

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function FaqJsonLd({ faqs }: { faqs: FAQ[] }) {
  if (!faqs.length) return null
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }}
    />
  )
}

export function LocalBusinessJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "InsuranceAgency",
        name: siteConfig.fullName,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: { "@type": "PostalAddress", streetAddress: siteConfig.address, addressCountry: "FR" },
        areaServed: siteConfig.zones,
      }}
    />
  )
}
