import { MERCHANDISE } from "@/lib/data";

export function MerchandiseSection() {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MERCHANDISE.map((item) => (
          <a
            key={item.name}
            href={item.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="card-hover block rounded-2xl bg-[#111827] border border-white/10 p-5 hover:border-[#C9A227]/50 group"
          >
            {/* Badge */}
            <div className="mb-3">
              <span className="inline-block rounded-full bg-[#C9A227]/20 border border-[#C9A227]/30 px-3 py-1 text-xs font-bold text-[#C9A227]">
                {item.badge}
              </span>
            </div>

            {/* Emoji/Image placeholder */}
            <div className="text-5xl mb-3">{item.emoji}</div>

            <h3 className="text-sm font-bold text-white leading-tight">{item.name}</h3>

            {/* Rating */}
            <div className="mt-2 flex items-center gap-2">
              <div className="flex text-yellow-400 text-xs">
                {"★".repeat(Math.round(item.rating))}
              </div>
              <span className="text-xs text-white/40">({item.reviews})</span>
            </div>

            {/* Price */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xl font-black text-[#C9A227]">{item.price}</span>
              {item.originalPrice && (
                <span className="text-sm text-white/40 line-through">{item.originalPrice}</span>
              )}
            </div>

            <div className="mt-4 w-full rounded-full bg-[#C9A227] py-2 text-center text-sm font-bold text-black group-hover:bg-yellow-400 transition-colors">
              Bekijk op bol.com →
            </div>
          </a>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-white/30">
        * Affiliate links — FIFAInformer ontvangt een kleine commissie bij aankoop, zonder meerkosten voor jou.
      </p>
    </>
  );
}
