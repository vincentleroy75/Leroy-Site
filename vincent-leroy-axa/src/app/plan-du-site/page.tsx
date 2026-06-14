import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Plan du site | Vincent Leroy AXA Prévoyance & Patrimoine",
  description: "Plan du site de Vincent Leroy, Agent AXA Prévoyance & Patrimoine. Retrouvez toutes les pages : prévoyance, retraite, santé, professions libérales, localités.",
  alternates: { canonical: "/plan-du-site" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Services principaux",
    links: [
      { label: "Prévoyance professionnelle", href: "/prevoyance-professionnelle" },
      { label: "Prévoyance dirigeant", href: "/prevoyance-dirigeant" },
      { label: "Retraite & PER", href: "/retraite-per" },
      { label: "Complémentaire santé", href: "/complementaire-sante" },
      { label: "Assurance emprunteur", href: "/assurance-emprunteur" },
      { label: "Protection sociale entreprise", href: "/protection-sociale-entreprise" },
    ],
  },
  {
    title: "Professions libérales",
    links: [
      { label: "Hub professions libérales", href: "/professions-liberales" },
      { label: "Prévoyance médecin libéral", href: "/prevoyance-medecin" },
      { label: "Prévoyance chirurgien-dentiste", href: "/prevoyance-dentiste" },
      { label: "Prévoyance vétérinaire", href: "/prevoyance-veterinaire" },
      { label: "Prévoyance avocat", href: "/prevoyance-avocat" },
      { label: "Prévoyance architecte", href: "/prevoyance-architecte" },
      { label: "Prévoyance pharmacien", href: "/prevoyance-pharmacien" },
      { label: "Prévoyance orthophoniste", href: "/prevoyance-orthophoniste" },
      { label: "Prévoyance psychologue", href: "/prevoyance-psychologue" },
      { label: "Prévoyance opticien", href: "/prevoyance-opticien" },
    ],
  },
  {
    title: "Zones géographiques",
    links: [
      { label: "Prévoyance Paris", href: "/prevoyance-paris" },
      { label: "Prévoyance Vincennes", href: "/prevoyance-vincennes" },
      { label: "Prévoyance Val-de-Marne", href: "/prevoyance-val-de-marne" },
      { label: "Prévoyance Paris 12e", href: "/prevoyance-paris-12" },
      { label: "Prévoyance Saint-Mandé", href: "/prevoyance-saint-mande" },
      { label: "Prévoyance Charenton-le-Pont", href: "/prevoyance-charenton" },
      { label: "Prévoyance Nogent-sur-Marne", href: "/prevoyance-nogent-sur-marne" },
      { label: "Prévoyance Montreuil", href: "/prevoyance-montreuil" },
    ],
  },
  {
    title: "Ressources & Blog",
    links: [
      { label: "Toutes les ressources", href: "/ressources" },
      { label: "Bilan prévoyance indépendant", href: "/ressources/bilan-prevoyance-independant" },
      { label: "Arrêt de travail professionnel libéral", href: "/ressources/arret-travail-professionnel-liberal" },
      { label: "Erreurs prévoyance dirigeant", href: "/ressources/erreurs-prevoyance-dirigeant" },
      { label: "PER retraite TNS", href: "/ressources/per-retraite-tns" },
      { label: "Comparer assurance emprunteur", href: "/ressources/comparer-assurance-emprunteur" },
      { label: "Choisir sa mutuelle santé", href: "/ressources/choisir-mutuelle-sante" },
      { label: "Prévoyance collective employeur", href: "/ressources/prevoyance-collective-obligations-employeur" },
      { label: "Médecin libéral : protéger ses revenus", href: "/ressources/medecin-liberal-proteger-revenus" },
      { label: "Dentiste : invalidité professionnelle", href: "/ressources/dentiste-invalidite-professionnelle" },
      { label: "Vétérinaire : arrêt de travail", href: "/ressources/veterinaire-arret-travail" },
      { label: "Architecte : prévoyance et retraite", href: "/ressources/architecte-prevoyance-retraite" },
      { label: "Dirigeant SASU : bien protégé ?", href: "/ressources/dirigeant-sasu-protection" },
    ],
  },
  {
    title: "Pages de conversion",
    links: [
      { label: "Audit prévoyance gratuit", href: "/audit-prevoyance-gratuit" },
      { label: "Audit protection sociale entreprise", href: "/audit-protection-sociale-entreprise" },
      { label: "Qui consulter pour une prévoyance à Paris ?", href: "/qui-consulter-prevoyance-paris" },
      { label: "Choisir un conseiller en prévoyance à Paris", href: "/meilleur-conseiller-prevoyance-paris" },
    ],
  },
  {
    title: "À propos & Contact",
    links: [
      { label: "À propos de Vincent Leroy", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/politique-confidentialite" },
    ],
  },
];

export default function PlanDuSitePage() {
  return (
    <>
      <div className="bg-brand-gray-50 border-b border-brand-gray-100">
        <div className="container-wide"><Breadcrumb items={[{ label: "Plan du site" }]} /></div>
      </div>

      <section className="py-12 bg-white">
        <div className="container-wide">
          <h1 className="text-2xl font-bold text-brand-blue-dark mb-10">Plan du site</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-bold text-brand-blue text-sm uppercase tracking-wider mb-3 border-b border-brand-gray-100 pb-2">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-brand-gray-600 hover:text-brand-blue transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
