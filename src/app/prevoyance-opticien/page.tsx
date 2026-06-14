import { buildProfessionMetadata, ProfessionPageView } from "@/components/templates"

const slug = "prevoyance-opticien"
export const metadata = buildProfessionMetadata(slug)
export default function Page() {
  return <ProfessionPageView slug={slug} />
}
