import Link from "next/link";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  href: string;
  date?: string;
  readTime?: string;
}

export default function ArticleCard({ title, excerpt, category, href, date, readTime }: ArticleCardProps) {
  return (
    <article className="card flex flex-col h-full">
      <div className="badge-blue mb-3 self-start">{category}</div>
      <h3 className="font-bold text-brand-blue-dark text-base mb-2 leading-snug">
        <Link href={href} className="hover:text-brand-blue transition-colors">
          {title}
        </Link>
      </h3>
      <p className="text-brand-gray-600 text-sm leading-relaxed flex-1 mb-4">{excerpt}</p>
      <div className="flex items-center justify-between text-xs text-brand-gray-400">
        {date && <span>{date}</span>}
        {readTime && <span>{readTime}</span>}
      </div>
    </article>
  );
}
