import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-white/10 mt-0">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚽</span>
              <span className="font-black text-white">FIFA<span className="text-[#C9A227]">Informer</span></span>
            </div>
            <p className="text-sm text-white/50">Dé Nederlandstalige bron voor alles over het FIFA WK 2026 in USA, Canada &amp; Mexico.</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">WK 2026</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {["Groepen", "Schema", "Teams", "Stadions", "Tickets"].map(l => (
                <li key={l}><Link href={`/${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Landen</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {[["🇧🇪 België", "/belgie"], ["🇦🇷 Argentinië", "/teams/argentinie"], ["🇫🇷 Frankrijk", "/teams/frankrijk"], ["🇧🇷 Brazilië", "/teams/brazilie"], ["🇳🇱 Nederland", "/teams/nederland"]].map(([l, h]) => (
                <li key={l}><Link href={h} className="hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Shop &amp; Winnen</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {[["Fanshop", "/fanshop"], ["Merchandise", "/fanshop"], ["Weddenschappen", "/betting"], ["Nieuws", "/nieuws"]].map(([l, h]) => (
                <li key={l}><Link href={h} className="hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© 2026 FIFAInformer.com — Niet officieel gelieerd aan FIFA.</p>
          <div className="flex gap-4 text-xs text-white/30">
            <Link href="/disclaimer" className="hover:text-white/60">Disclaimer</Link>
            <Link href="/privacy" className="hover:text-white/60">Privacy</Link>
            <Link href="/contact" className="hover:text-white/60">Contact</Link>
          </div>
        </div>
        <p className="mt-3 text-[10px] text-white/20 text-center">
          FIFAInformer.com bevat affiliate links en gesponsorde content. Weddenschappen: 18+ | Speel verantwoord | Gokkloof Hulplijn: 0800 35 777
        </p>
      </div>
    </footer>
  );
}
