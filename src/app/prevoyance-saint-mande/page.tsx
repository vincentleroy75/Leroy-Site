import { buildLocationMetadata, LocationPageView } from "@/components/templates"

const slug = "prevoyance-saint-mande"
export const metadata = buildLocationMetadata(slug)
export default function Page() {
  return <LocationPageView slug={slug} />
}
