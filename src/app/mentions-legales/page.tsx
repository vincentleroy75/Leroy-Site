import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Mentions légales | Vincent Leroy AXA Prévoyance & Patrimoine",
  description: "Mentions légales du site de Vincent Leroy, Agent Général AXA Prévoyance & Patrimoine à Paris.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "Mentions légales" }]} /></div>
      </div>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h1 className="text-2xl font-bold text-brand-blue-dark mb-8">Mentions légales</h1>

          <h2>Identité de l&apos;éditeur</h2>
          <p>Le présent site est édité par :</p>
          <ul>
            <li><strong>Nom :</strong> Vincent Leroy</li>
            <li><strong>Qualité :</strong> Agent Général AXA Prévoyance &amp; Patrimoine</li>
            <li><strong>Adresse :</strong> {SITE_CONFIG.address}</li>
            <li><strong>Téléphone :</strong> {SITE_CONFIG.phone}</li>
            <li><strong>Email :</strong> {SITE_CONFIG.email}</li>
            <li><strong>SIRET :</strong> {SITE_CONFIG.siret}</li>
            <li><strong>N° ORIAS :</strong> {SITE_CONFIG.orias}</li>
          </ul>

          <h2>Statut professionnel</h2>
          <p>
            Vincent Leroy exerce en qualité d&apos;Agent Général AXA Prévoyance &amp; Patrimoine.
            À ce titre, il est mandaté par AXA pour la distribution de produits d&apos;assurance.
          </p>
          <p>
            Immatriculé à l&apos;ORIAS (Organisme pour le Registre des Intermédiaires en Assurance)
            sous le numéro {SITE_CONFIG.orias}, consultable sur <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">www.orias.fr</a>.
          </p>
          <p>
            Activité soumise au contrôle de l&apos;Autorité de Contrôle Prudentiel et de Résolution
            (ACPR) – 4 place de Budapest, CS 92459, 75436 Paris Cedex 09.
          </p>

          <h2>Hébergeur</h2>
          <p>
            Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, USA.
            Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">vercel.com</a>.
          </p>

          <h2>Médiation</h2>
          <p>
            En cas de litige avec un professionnel de l&apos;assurance, le client peut recourir
            à la médiation. Le médiateur d&apos;AXA est :
          </p>
          <p>
            <strong>La Médiation de l&apos;Assurance</strong><br />
            TSA 50110 – 75441 Paris Cedex 09<br />
            <a href="https://www.mediation-assurance.org" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">www.mediation-assurance.org</a>
          </p>
          <p>
            Ce recours n&apos;est possible qu&apos;après avoir adressé une réclamation écrite à l&apos;agence,
            sans avoir obtenu de réponse satisfaisante dans un délai de deux mois.
          </p>

          <h2>Réclamations</h2>
          <p>
            Pour toute réclamation, vous pouvez contacter l&apos;agence par écrit à l&apos;adresse
            ci-dessus ou par email à {SITE_CONFIG.email}. Une réponse sera apportée dans
            les meilleurs délais et au plus tard dans les 10 jours ouvrables.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, structure, code) est protégé
            par le droit de la propriété intellectuelle et reste la propriété de Vincent Leroy
            ou de ses concédants. Toute reproduction, même partielle, est soumise à autorisation
            préalable.
          </p>

          <h2>Limitation de responsabilité</h2>
          <p>
            Les informations présentées sur ce site sont à caractère général et informatif.
            Elles ne constituent pas un conseil personnalisé et ne sauraient engager la
            responsabilité de l&apos;éditeur. Toute décision de souscription doit être précédée
            d&apos;une analyse personnalisée de votre situation.
          </p>
        </div>
      </section>
    </>
  );
}
