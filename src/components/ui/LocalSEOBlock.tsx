import Link from "next/link";

const zones = [
  { city: "Paris", href: "/prevoyance-paris" },
  { city: "Vincennes", href: "/prevoyance-vincennes" },
  { city: "Val-de-Marne", href: "/prevoyance-val-de-marne" },
  { city: "Paris 12e", href: "/prevoyance-paris-12" },
  { city: "Saint-Mandé", href: "/prevoyance-saint-mande" },
  { city: "Charenton-le-Pont", href: "/prevoyance-charenton" },
  { city: "Nogent-sur-Marne", href: "/prevoyance-nogent-sur-marne" },
  { city: "Montreuil", href: "/prevoyance-montreuil" },
];

interface LocalSEOBlockProps {
  currentCity?: string;
}

export default function LocalSEOBlock({ currentCity }: LocalSEOBlockProps) {
  return (
    <div className="bg-brand-gray-50 rounded-xl p-6 border border-brand-gray-100">
      <h3 className="font-bold text-brand-blue-dark mb-2 text-sm">Zone d&apos;intervention</h3>
      <p className="text-brand-gray-600 text-xs leading-relaxed mb-4">
        Basé à Paris et Vincennes, j&apos;interviens sur l&apos;ensemble du Val-de-Marne et de l&apos;Île-de-France.
        Les rendez-vous peuvent se tenir en cabinet, en visioconférence ou à votre bureau.
      </p>
      <div className="flex flex-wrap gap-2">
        {zones.map((zone) => (
          <Link
            key={zone.href}
            href={zone.href}
            className={`badge ${
              currentCity === zone.city
                ? "bg-brand-blue text-white"
                : "badge-blue hover:bg-brand-blue hover:text-white"
            } transition-colors`}
          >
            {zone.city}
          </Link>
        ))}
      </div>
    </div>
  );
}
