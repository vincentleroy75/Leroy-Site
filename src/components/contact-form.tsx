"use client"

import { useState } from "react"
import { siteConfig } from "@/lib/config"

const subjects = [
  "Prévoyance professionnelle",
  "Prévoyance du dirigeant",
  "Retraite & PER",
  "Complémentaire santé",
  "Assurance emprunteur",
  "Protection sociale entreprise",
  "Autre demande",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [rgpd, setRgpd] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!rgpd) return
    // Le traitement réel (envoi email / API) doit être branché ici.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-brand-gray-100 bg-brand-gray-50 p-8 text-center">
        <h3 className="text-xl font-bold text-brand-gray-900">Merci pour votre message</h3>
        <p className="mt-2 text-brand-gray-600">
          Votre demande a bien été prise en compte. Vous serez recontacté dans les meilleurs délais.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom et prénom" htmlFor="name">
          <input id="name" name="name" type="text" required className={inputCls} autoComplete="name" />
        </Field>
        <Field label="Profession (optionnel)" htmlFor="job">
          <input id="job" name="job" type="text" className={inputCls} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required className={inputCls} autoComplete="email" />
        </Field>
        <Field label="Téléphone" htmlFor="phone">
          <input id="phone" name="phone" type="tel" className={inputCls} autoComplete="tel" />
        </Field>
      </div>

      <Field label="Sujet" htmlFor="subject">
        <select id="subject" name="subject" className={inputCls} defaultValue="">
          <option value="" disabled>
            Choisissez un sujet
          </option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Votre message" htmlFor="message">
        <textarea id="message" name="message" rows={5} required className={inputCls} />
      </Field>

      <label className="flex items-start gap-3 text-sm text-brand-gray-600">
        <input
          type="checkbox"
          checked={rgpd}
          onChange={(e) => setRgpd(e.target.checked)}
          required
          className="mt-1 h-4 w-4 rounded border-brand-gray-200 text-brand-blue focus:ring-brand-blue"
        />
        <span>
          J&apos;accepte que mes données soient utilisées pour traiter ma demande, conformément à la{" "}
          <a href="/politique-confidentialite" className="text-brand-blue underline">
            politique de confidentialité
          </a>
          . Elles ne seront ni cédées ni revendues.
        </span>
      </label>

      <button
        type="submit"
        disabled={!rgpd}
        className="inline-flex items-center justify-center rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark disabled:cursor-not-allowed disabled:opacity-50"
      >
        Envoyer ma demande
      </button>

      <p className="text-xs text-brand-gray-400">
        Vous pouvez également joindre {siteConfig.name} par téléphone ou par email.
      </p>
    </form>
  )
}

const inputCls =
  "w-full rounded-lg border border-brand-gray-200 bg-white px-4 py-3 text-sm text-brand-gray-900 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-sm font-medium text-brand-gray-900">{label}</span>
      {children}
    </label>
  )
}
