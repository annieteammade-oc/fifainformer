import type { Metadata } from "next";
import { MerchandiseSection } from "@/components/MerchandiseSection";

export const metadata: Metadata = {
  title: "WK 2026 Fanshop — Shirts, Vlaggen & Merchandise",
  description: "Koop officiële WK 2026 merchandise: shirts, vlaggen, ballen en meer. Snel geleverd via bol.com.",
};

export default function FanshopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="text-4xl font-black uppercase text-white">WK 2026 Fanshop</h1>
        <p className="mt-3 text-white/60 max-w-xl mx-auto">
          Alles voor de echte fan — officiële shirts, vlaggen, ballen en accessoires voor elk WK-land.
          Bestel via bol.com, snel geleverd in België en Nederland.
        </p>
      </div>

      <MerchandiseSection />

      <div className="mt-12 rounded-2xl bg-[#111827] border border-white/10 p-8 text-center">
        <h2 className="text-2xl font-black text-white">Jouw land zoeken?</h2>
        <p className="text-white/50 mt-2">We hebben merchandise voor alle 48 WK-landen beschikbaar via bol.com.</p>
        <a href="https://www.bol.com/nl/nl/s/?searchtext=wk+2026+shirt" target="_blank" rel="noopener nofollow"
          className="mt-4 inline-block rounded-full bg-[#C9A227] px-8 py-3 text-sm font-bold text-black hover:bg-yellow-400 transition-colors">
          Alle WK merchandise op bol.com →
        </a>
      </div>
    </div>
  );
}
