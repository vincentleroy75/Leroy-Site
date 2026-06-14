import { buildServiceMetadata, ServicePageView } from "@/components/templates"

const slug = "complementaire-sante"
export const metadata = buildServiceMetadata(slug)
export default function Page() {
  return <ServicePageView slug={slug} />
}
