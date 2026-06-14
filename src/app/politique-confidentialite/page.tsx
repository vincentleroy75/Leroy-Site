import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Vincent Leroy AXA",
  description: "Politique de confidentialité et gestion des données personnelles du site de Vincent Leroy, Agent AXA Prévoyance & Patrimoine.",
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "Politique de confidentialité" }]} /></div>
      </div>

      <section className="py-12 bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <h1 className="text-2xl font-bold text-brand-blue-dark mb-2">Politique de confidentialité</h1>
          <p className="text-brand-gray-400 text-sm mb-8">Dernière mise à jour : Juin 2025</p>

          <h2>Responsable du traitement</h2>
          <p>
            Vincent Leroy, Agent Général AXA Prévoyance &amp; Patrimoine<br />
            Adresse : {SITE_CONFIG.address}<br />
            Email : {SITE_CONFIG.email}<br />
            Téléphone : {SITE_CONFIG.phone}
          </p>

          <h2>Données collectées</h2>
          <p>Dans le cadre de l&apos;utilisation du formulaire de contact de ce site, les données suivantes peuvent être collectées :</p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (facultatif)</li>
            <li>Statut professionnel</li>
            <li>Sujet de la demande</li>
            <li>Message libre</li>
          </ul>

          <h2>Finalités du traitement</h2>
          <p>Les données collectées sont utilisées pour :</p>
          <ul>
            <li>Répondre à vos demandes de contact et de renseignements</li>
            <li>Organiser des rendez-vous à votre demande</li>
            <li>Vous recontacter suite à une demande d&apos;audit ou de rappel</li>
          </ul>
          <p>Ces données ne sont pas utilisées à des fins de prospection commerciale non sollicitée.</p>

          <h2>Base légale</h2>
          <p>
            Le traitement de vos données repose sur votre consentement explicite donné au moment
            de la soumission du formulaire de contact (case à cocher obligatoire).
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Les données collectées via le formulaire de contact sont conservées pour une durée
            maximale de 3 ans à compter du dernier contact, sauf obligation légale contraire
            ou demande de suppression de votre part.
          </p>

          <h2>Destinataires des données</h2>
          <p>
            Vos données sont destinées exclusivement à Vincent Leroy, Agent Général AXA,
            et ne sont pas transmises à des tiers à des fins commerciales.
          </p>
          <p>
            Dans le cadre d&apos;une proposition contractuelle souscrite, les données nécessaires
            peuvent être transmises à AXA Prévoyance &amp; Patrimoine dans le cadre du contrat
            de mandat d&apos;agent général.
          </p>

          <h2>Vos droits</h2>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d&apos;accès</strong> : obtenir une copie des données vous concernant</li>
            <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
            <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
            <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement</li>
            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
          </ul>
          <p>
            Pour exercer ces droits, adressez votre demande par email à {SITE_CONFIG.email}
            ou par courrier à l&apos;adresse ci-dessus. Vous pouvez également adresser une réclamation
            à la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) sur <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">www.cnil.fr</a>.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site peut utiliser des cookies techniques nécessaires au bon fonctionnement
            du site (cookies de session, préférences). Ces cookies ne collectent pas de
            données personnelles et ne nécessitent pas de consentement selon la réglementation
            en vigueur.
          </p>
          <p>
            Aucun cookie de traçage ou de publicité ciblée n&apos;est utilisé sur ce site.
          </p>

          <h2>Sécurité</h2>
          <p>
            Des mesures techniques et organisationnelles appropriées sont mises en place
            pour protéger vos données contre tout accès non autorisé, toute modification,
            divulgation ou destruction non autorisée.
          </p>
        </div>
      </section>
    </>
  );
}
