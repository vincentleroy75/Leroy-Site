interface SummaryBoxProps {
  children: React.ReactNode;
  title?: string;
}

export default function SummaryBox({ children, title = "En résumé" }: SummaryBoxProps) {
  return (
    <div className="bg-blue-50 border-l-4 border-brand-blue rounded-r-lg p-5 my-6">
      <p className="font-semibold text-brand-blue mb-2">{title}</p>
      <div className="text-brand-gray-600 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
