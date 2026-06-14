import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Prévoyance & Patrimoine à Paris | Vincent Leroy AXA",
    template: "%s | Vincent Leroy AXA",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "prévoyance Paris",
    "conseiller prévoyance Paris",
    "agent AXA prévoyance patrimoine",
    "prévoyance profession libérale",
    "prévoyance dirigeant",
    "retraite TNS",
    "assurance emprunteur Paris",
  ],
  authors: [{ name: "Vincent Leroy" }],
  creator: "Vincent Leroy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Prévoyance & Patrimoine à Paris | Vincent Leroy AXA",
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Prévoyance & Patrimoine à Paris | Vincent Leroy AXA",
    description: SITE_CONFIG.description,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["InsuranceAgency", "ProfessionalService"],
  name: "Vincent Leroy – AXA Prévoyance & Patrimoine",
  description:
    "Agent Général AXA Prévoyance & Patrimoine à Paris et Vincennes. Conseil en prévoyance, retraite, santé, assurance emprunteur et protection sociale pour dirigeants, professions libérales et entreprises.",
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address,
    addressLocality: "Paris",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Paris" },
    { "@type": "City", name: "Vincennes" },
    { "@type": "AdministrativeArea", name: "Val-de-Marne" },
    { "@type": "AdministrativeArea", name: "Île-de-France" },
  ],
  serviceType: [
    "Prévoyance professionnelle",
    "Prévoyance dirigeant",
    "Complémentaire santé",
    "Retraite individuelle",
    "Plan d'Épargne Retraite (PER)",
    "Assurance emprunteur",
    "Protection sociale collective",
  ],
  employee: {
    "@type": "Person",
    name: "Vincent Leroy",
    jobTitle: "Agent Général AXA Prévoyance & Patrimoine",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
