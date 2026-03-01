import { STADIUMS } from "@/lib/data";

export function StadiumsSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {STADIUMS.map((s) => (
        <div key={s.name} className="card-hover rounded-2xl bg-[#111827] border border-white/10 p-5 hover:border-[#C9A227]/30">
          <div className="text-3xl mb-3">{s.emoji}</div>
          <h3 className="font-black text-white">{s.name}</h3>
          <p className="text-sm text-white/50 mt-1">{s.city}, {s.country}</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-white/30">Capaciteit:</span>
            <span className="text-sm font-bold text-[#C9A227]">{s.capacity}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
