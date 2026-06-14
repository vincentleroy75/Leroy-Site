import Link from "next/link";
import { SITE_CONFIG, DISCLAIMER } from "@/lib/config";

const services = [
  { label: "Prévoyance professionnelle", href: "/prevoyance-professionnelle" },
  { label: "Prévoyance dirigeant", href: "/prevoyance-dirigeant" },
  { label: "Retraite & PER", href: "/retraite-per" },
  { label: "Complémentaire santé", href: "/complementaire-sante" },
  { label: "Assurance emprunteur", href: "/assurance-emprunteur" },
  { label: "Protection sociale entreprise", href: "/protection-sociale-entreprise" },
];

const professions = [
  { label: "Médecins", href: "/prevoyance-medecin" },
  { label: "Chirurgiens-dentistes", href: "/prevoyance-dentiste" },
  { label: "Vétérinaires", href: "/prevoyance-veterinaire" },
  { label: "Avocats", href: "/prevoyance-avocat" },
  { label: "Architectes", href: "/prevoyance-architecte" },
  { label: "Pharmaciens", href: "/prevoyance-pharmacien" },
  { label: "Orthophonistes", href: "/prevoyance-orthophoniste" },
  { label: "Psychologues", href: "/prevoyance-psychologue" },
  { label: "Opticiens", href: "/prevoyance-opticien" },
];

const zones = [
  { label: "Prévoyance Paris", href: "/prevoyance-paris" },
  { label: "Prévoyance Vincennes", href: "/prevoyance-vincennes" },
  { label: "Prévoyance Val-de-Marne", href: "/prevoyance-val-de-marne" },
  { label: "Paris 12e", href: "/prevoyance-paris-12" },
  { label: "Saint-Mandé", href: "/prevoyance-saint-mande" },
  { label: "Charenton-le-Pont", href: "/prevoyance-charenton" },
  { label: "Nogent-sur-Marne", href: "/prevoyance-nogent-sur-marne" },
  { label: "Montreuil", href: "/prevoyance-montreuil" },
];

const ressources = [
  { label: "Blog & Ressources", href: "/ressources" },
  { label: "Audit prévoyance gratuit", href: "/audit-prevoyance-gratuit" },
  { label: "Audit protection sociale", href: "/audit-protection-sociale-entreprise" },
  { label: "Plan du site", href: "/plan-du-site" },
];

const legal = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="container-wide py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <p className="font-bold text-xl">Vincent Leroy</p>
              <p className="text-blue-200 text-sm">AXA Prévoyance &amp; Patrimoine</p>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Agent Général AXA, accompagne dirigeants, travailleurs indépendants et professions
              libérales en prévoyance, retraite, santé et protection patrimoniale à Paris,
              Vincennes et dans le Val-de-Marne.
            </p>
            <div className="space-y-2 text-sm text-blue-100">
              <p>📍 {SITE_CONFIG.address}</p>
              <p>
                📞{" "}
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </p>
              <p>
                ✉️{" "}
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </p>
            </div>
            <div className="mt-6">
              <Link href="/audit-prevoyance-gratuit" className="btn-red text-sm">
                Audit gratuit
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Professions */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Professions</h3>
            <ul className="space-y-2">
              {professions.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones + Ressources + Légal */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Zones</h3>
              <ul className="space-y-2">
                {zones.slice(0, 4).map((z) => (
                  <li key={z.href}>
                    <Link href={z.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                      {z.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Ressources</h3>
              <ul className="space-y-2">
                {ressources.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="text-blue-200 text-xs space-y-1">
              <p>© {new Date().getFullYear()} Vincent Leroy – AXA Prévoyance &amp; Patrimoine. Tous droits réservés.</p>
              <p>Agent Général AXA – N° ORIAS : {SITE_CONFIG.orias} – SIRET : {SITE_CONFIG.siret}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {legal.map((l) => (
                <Link key={l.href} href={l.href} className="text-blue-200 hover:text-white text-xs transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-4 text-blue-300 text-xs leading-relaxed max-w-3xl">
            {DISCLAIMER}
          </p>
        </div>
      </div>
    </footer>
  );
}
