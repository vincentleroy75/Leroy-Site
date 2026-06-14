import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactForm from "@/components/ui/ContactForm";
import LocalSEOBlock from "@/components/ui/LocalSEOBlock";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact – Vincent Leroy AXA Prévoyance & Patrimoine Paris",
  description:
    "Contactez Vincent Leroy, Agent AXA à Paris et Vincennes. Premier échange gratuit et sans engagement. Formulaire de contact, téléphone, email, prise de rendez-vous.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "Contact" }]} /></div>
      </div>

      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white py-12 md:py-16">
        <div className="container-wide max-w-2xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Contactez Vincent Leroy
          </h1>
          <p className="text-blue-100 text-lg">
            Agent AXA Prévoyance &amp; Patrimoine à Paris et Vincennes.
            Premier échange gratuit, sans engagement, sous 24h ouvrées.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div>
              <h2 className="text-xl font-bold text-brand-blue-dark mb-6">Envoyer un message</h2>
              <ContactForm />
            </div>

            {/* Coordonnées */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-brand-blue-dark">Coordonnées</h2>

              <div className="card space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-semibold text-brand-blue-dark text-sm">Adresse</p>
                    <p className="text-brand-gray-600 text-sm">{SITE_CONFIG.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-semibold text-brand-blue-dark text-sm">Téléphone</p>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-brand-blue hover:underline text-sm">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">✉️</span>
                  <div>
                    <p className="font-semibold text-brand-blue-dark text-sm">Email</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-brand-blue hover:underline text-sm">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-bold text-brand-blue-dark mb-3 text-sm">Prise de rendez-vous</h3>
                <p className="text-brand-gray-600 text-sm leading-relaxed mb-4">
                  Pour planifier un rendez-vous directement dans mon agenda, vous pouvez
                  utiliser mon outil de réservation en ligne :
                </p>
                <a
                  href={SITE_CONFIG.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm w-full text-center"
                >
                  Réserver un créneau en ligne
                </a>
              </div>

              <div className="card bg-blue-50 border-brand-blue border">
                <h3 className="font-bold text-brand-blue mb-2 text-sm">Premier échange</h3>
                <ul className="text-brand-gray-600 text-sm space-y-2">
                  <li>✓ Gratuit et sans engagement</li>
                  <li>✓ 30 à 45 minutes</li>
                  <li>✓ En cabinet, dans vos locaux ou en visioconférence</li>
                  <li>✓ Réponse sous 24h ouvrées</li>
                </ul>
              </div>

              <LocalSEOBlock />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
