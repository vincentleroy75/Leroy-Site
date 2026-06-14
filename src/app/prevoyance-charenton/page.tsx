import { buildLocationMetadata, LocationPageView } from "@/components/templates"

const slug = "prevoyance-charenton"
export const metadata = buildLocationMetadata(slug)
export default function Page() {
  return <LocationPageView slug={slug} />
}
