import Link from "next/link";

interface AuditCTAProps {
  title?: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  variant?: "blue" | "light";
}

export default function AuditCTA({
  title = "Faites le point sur votre protection",
  subtitle = "Premier échange sans engagement. Analyse claire de votre situation. Réponse sous 24h ouvrées.",
  ctaPrimary = "Demander un audit gratuit",
  ctaSecondary = "Être rappelé",
  variant = "blue",
}: AuditCTAProps) {
  const wrapperClass =
    variant === "blue"
      ? "bg-brand-blue text-white"
      : "bg-brand-gray-50 border border-brand-gray-200";

  const titleClass = variant === "blue" ? "text-white" : "text-brand-blue-dark";
  const subtitleClass = variant === "blue" ? "text-blue-100" : "text-brand-gray-600";

  return (
    <section className={`rounded-2xl p-8 md:p-12 text-center ${wrapperClass}`}>
      <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${titleClass}`}>{title}</h2>
      <p className={`text-sm md:text-base mb-8 max-w-xl mx-auto ${subtitleClass}`}>{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/audit-prevoyance-gratuit"
          className={variant === "blue" ? "btn-red" : "btn-primary"}
        >
          {ctaPrimary}
        </Link>
        <Link
          href="/contact"
          className={
            variant === "blue"
              ? "inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-200"
              : "btn-secondary"
          }
        >
          {ctaSecondary}
        </Link>
      </div>
      <p className={`mt-4 text-xs ${variant === "blue" ? "text-blue-200" : "text-brand-gray-400"}`}>
        Accompagnement à Paris, Vincennes et en Île-de-France
      </p>
    </section>
  );
}
