import { buildServiceMetadata, ServicePageView } from "@/components/templates"

const slug = "protection-sociale-entreprise"
export const metadata = buildServiceMetadata(slug)
export default function Page() {
  return <ServicePageView slug={slug} />
}
