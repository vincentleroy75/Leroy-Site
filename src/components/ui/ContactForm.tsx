"use client";

import { useState } from "react";

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  statut: string;
  sujet: string;
  message: string;
  rgpd: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    statut: "",
    sujet: "",
    message: "",
    rgpd: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Intégrer webhook / email / Brevo / HubSpot
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Message envoyé !</h3>
        <p className="text-green-700 text-sm">
          Merci pour votre demande. Je vous contacte sous 24h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-brand-gray-600 mb-1">
            Prénom <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
            value={formData.prenom}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
            placeholder="Votre prénom"
          />
        </div>
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-brand-gray-600 mb-1">
            Nom <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
            placeholder="Votre nom"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-gray-600 mb-1">
            Email <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
            placeholder="votre@email.fr"
          />
        </div>
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-brand-gray-600 mb-1">
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
            placeholder="06 XX XX XX XX"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="statut" className="block text-sm font-medium text-brand-gray-600 mb-1">
            Votre statut
          </label>
          <select
            id="statut"
            name="statut"
            value={formData.statut}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition bg-white"
          >
            <option value="">Sélectionner…</option>
            <option value="dirigeant">Dirigeant (gérant, président…)</option>
            <option value="independant">Travailleur non salarié (TNS)</option>
            <option value="liberal">Profession libérale</option>
            <option value="salarie">Salarié / Cadre</option>
            <option value="entreprise">Entreprise (DRH, RH…)</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label htmlFor="sujet" className="block text-sm font-medium text-brand-gray-600 mb-1">
            Sujet
          </label>
          <select
            id="sujet"
            name="sujet"
            value={formData.sujet}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition bg-white"
          >
            <option value="">Sélectionner…</option>
            <option value="prevoyance">Prévoyance</option>
            <option value="retraite">Retraite / PER</option>
            <option value="sante">Santé / Mutuelle</option>
            <option value="emprunteur">Assurance emprunteur</option>
            <option value="entreprise">Protection sociale entreprise</option>
            <option value="audit">Audit gratuit</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-gray-600 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition resize-none"
          placeholder="Décrivez votre situation ou votre question…"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="rgpd"
          name="rgpd"
          checked={formData.rgpd}
          onChange={handleChange}
          required
          className="mt-1 w-4 h-4 text-brand-blue border-brand-gray-200 rounded focus:ring-brand-blue"
        />
        <label htmlFor="rgpd" className="text-xs text-brand-gray-400 leading-relaxed">
          J&apos;accepte que mes données soient traitées pour répondre à ma demande, conformément à la{" "}
          <a href="/politique-confidentialite" className="text-brand-blue underline">
            politique de confidentialité
          </a>
          . <span className="text-brand-red">*</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading || !formData.rgpd}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>

      <p className="text-xs text-brand-gray-400 text-center">
        Premier échange sans engagement · Réponse sous 24h ouvrées
      </p>
    </form>
  );
}
