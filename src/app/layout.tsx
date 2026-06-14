import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/lib/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocalBusinessJsonLd } from "@/components/json-ld"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName}`,
    template: `%s | ${siteConfig.name} — AXA`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: siteConfig.fullName,
    description: siteConfig.description,
    siteName: siteConfig.fullName,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#00308F",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} bg-white antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
