import { buildServiceMetadata, ServicePageView } from "@/components/templates"

const slug = "prevoyance-dirigeant"
export const metadata = buildServiceMetadata(slug)
export default function Page() {
  return <ServicePageView slug={slug} />
}
