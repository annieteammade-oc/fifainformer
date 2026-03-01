import { BETTING_PARTNERS } from "@/lib/data";

export function BettingSection() {
  return (
    <div>
      <div className="mb-8">
        <div className="inline-block rounded-full bg-green-500/20 border border-green-500/30 px-4 py-1 text-xs font-bold text-green-400 uppercase tracking-wide mb-3">
          🎰 Sportweddenschappen
        </div>
        <h2 className="text-3xl font-black uppercase tracking-tight text-white">WK 2026 Odds &amp; Bonussen</h2>
        <p className="text-white/50 text-sm mt-1">Vergelijk de beste WK-bonussen van erkende Belgische bookmakers</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {BETTING_PARTNERS.map((partner) => (
          <div key={partner.name} className="card-hover rounded-2xl bg-[#111827] border border-white/10 overflow-hidden hover:border-green-500/30">
            {/* Header */}
            <div className="p-5 border-b border-white/10" style={{ background: `${partner.color}20` }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{partner.logo}</span>
                <div>
                  <h3 className="text-lg font-black text-white">{partner.name}</h3>
                  <span className="text-xs font-bold text-green-400">{partner.highlight}</span>
                </div>
              </div>
              <p className="text-sm font-semibold text-[#C9A227]">{partner.offer}</p>
            </div>

            {/* Odds */}
            <div className="p-5">
              <p className="text-xs uppercase tracking-wide text-white/40 mb-3">WK 2026 Winnaar odds</p>
              <div className="space-y-2">
                {[
                  { flag: "be", team: "België", odds: partner.odds.belgie },
                  { flag: "ar", team: "Argentinië", odds: partner.odds.argentinie },
                  { flag: "fr", team: "Frankrijk", odds: partner.odds.frankrijk },
                ].map(({ flag, team, odds }) => (
                  <div key={team} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={`https://flagcdn.com/w40/${flag}.png`} alt={team} width={20} height={14} className="rounded-sm" />
                      <span className="text-sm text-white/80">{team}</span>
                    </div>
                    <span className="font-black text-[#C9A227] text-sm">{odds}</span>
                  </div>
                ))}
              </div>

              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-5 block w-full rounded-full bg-green-600 py-3 text-center text-sm font-bold text-white hover:bg-green-500 transition-colors"
              >
                Claim bonus bij {partner.name} →
              </a>
              <p className="mt-2 text-center text-[10px] text-white/30">{partner.disclaimer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Verantwoord gokken disclaimer */}
      <div className="mt-6 rounded-xl border border-orange-500/20 bg-orange-500/5 p-4">
        <p className="text-xs text-orange-300/70 text-center">
          ⚠️ <strong>Speel verantwoord.</strong> Gokken kan verslavend zijn. 18+ enkel toegestaan. Hulp nodig? Bel de Gokkloof Hulplijn: <strong>0800 35 777</strong> (gratis, anoniem).
        </p>
      </div>
    </div>
  );
}
