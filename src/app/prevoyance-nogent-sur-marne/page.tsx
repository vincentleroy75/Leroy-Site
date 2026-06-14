import { buildLocationMetadata, LocationPageView } from "@/components/templates"

const slug = "prevoyance-nogent-sur-marne"
export const metadata = buildLocationMetadata(slug)
export default function Page() {
  return <LocationPageView slug={slug} />
}
