import { buildServiceMetadata, ServicePageView } from "@/components/templates"

const slug = "assurance-emprunteur"
export const metadata = buildServiceMetadata(slug)
export default function Page() {
  return <ServicePageView slug={slug} />
}
