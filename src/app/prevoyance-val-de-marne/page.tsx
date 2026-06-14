import { buildLocationMetadata, LocationPageView } from "@/components/templates"

const slug = "prevoyance-val-de-marne"
export const metadata = buildLocationMetadata(slug)
export default function Page() {
  return <LocationPageView slug={slug} />
}
