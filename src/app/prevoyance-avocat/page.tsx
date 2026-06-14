import { buildProfessionMetadata, ProfessionPageView } from "@/components/templates"

const slug = "prevoyance-avocat"
export const metadata = buildProfessionMetadata(slug)
export default function Page() {
  return <ProfessionPageView slug={slug} />
}
