const trustItems = [
  {
    icon: "🏆",
    title: "Agent Général AXA",
    text: "Mandaté par AXA Prévoyance & Patrimoine, l'un des leaders français de l'assurance.",
  },
  {
    icon: "📍",
    title: "Ancrage local fort",
    text: "Basé à Paris et Vincennes, je connais les réalités des professions et entreprises de la région.",
  },
  {
    icon: "🎯",
    title: "Expertise ciblée",
    text: "Spécialisé en protection des dirigeants, TNS et professions libérales depuis plus de 10 ans.",
  },
  {
    icon: "🤝",
    title: "Accompagnement personnalisé",
    text: "Chaque situation est unique. Je construis des solutions adaptées à votre statut et vos objectifs.",
  },
];

export default function TrustBlock() {
  return (
    <section className="py-12 bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-3 p-5 rounded-xl bg-brand-gray-50 border border-brand-gray-100">
              <span className="text-2xl">{item.icon}</span>
              <h3 className="font-bold text-brand-blue-dark text-sm">{item.title}</h3>
              <p className="text-brand-gray-600 text-xs leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
