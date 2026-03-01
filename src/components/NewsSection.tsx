import Link from "next/link";
import { NEWS_ARTICLES } from "@/lib/data";

const CATEGORY_COLORS: Record<string, string> = {
  "België": "bg-red-500/20 text-red-400 border-red-500/30",
  "WK 2026": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Analyse": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Tickets": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Tech": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "Reizen": "bg-green-500/20 text-green-400 border-green-500/30",
};

const FLAG_MAP: Record<string, string> = {
  be: "🇧🇪", ar: "🇦🇷", fr: "🇫🇷", us: "🇺🇸", trophy: "🏆",
};

export function NewsSection() {
  const [featured, ...rest] = NEWS_ARTICLES;
  return (
    <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
      {/* Featured */}
      <Link href={`/nieuws/${featured.slug}`} className="card-hover group block rounded-2xl bg-[#111827] border border-white/10 overflow-hidden hover:border-[#C9A227]/50">
        <div className="flex items-center justify-center h-48 bg-gradient-to-br from-[#006633] to-[#004d26] text-7xl">
          {FLAG_MAP[featured.image] ?? "⚽"}
        </div>
        <div className="p-6">
          <span className={`inline-block rounded-full border px-3 py-1 text-xs font-bold ${CATEGORY_COLORS[featured.category] ?? "bg-white/10 text-white/60 border-white/20"}`}>
            {featured.category}
          </span>
          <h3 className="mt-3 text-xl font-black text-white leading-tight group-hover:text-[#C9A227] transition-colors">{featured.title}</h3>
          <p className="mt-2 text-sm text-white/60">{featured.excerpt}</p>
          <div className="mt-4 flex items-center gap-3 text-xs text-white/40">
            <span>{featured.date}</span>
            <span>·</span>
            <span>{featured.readTime} min leestijd</span>
          </div>
        </div>
      </Link>

      {/* Sidebar articles */}
      <div className="space-y-4">
        {rest.slice(0, 4).map((article) => (
          <Link key={article.slug} href={`/nieuws/${article.slug}`} className="card-hover flex gap-4 rounded-xl bg-[#111827] border border-white/10 p-4 hover:border-[#C9A227]/50 group">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#0d1117] text-2xl">
              {FLAG_MAP[article.image] ?? "⚽"}
            </div>
            <div className="min-w-0">
              <span className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-bold ${CATEGORY_COLORS[article.category] ?? "bg-white/10 text-white/60 border-white/20"}`}>
                {article.category}
              </span>
              <p className="mt-1 text-xs font-bold text-white leading-tight line-clamp-2 group-hover:text-[#C9A227] transition-colors">{article.title}</p>
              <p className="mt-1 text-[10px] text-white/40">{article.readTime} min</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
