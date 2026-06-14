import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container-narrow">
        <p className="text-brand-blue font-bold text-6xl mb-4">404</p>
        <h1 className="text-2xl font-bold text-brand-blue-dark mb-4">Page introuvable</h1>
        <p className="text-brand-gray-600 mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Retour à l&apos;accueil</Link>
          <Link href="/contact" className="btn-secondary">Nous contacter</Link>
        </div>
      </div>
    </section>
  );
}
