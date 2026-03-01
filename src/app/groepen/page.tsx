import type { Metadata } from "next";
import { WK_GROUPS } from "@/lib/data";

export const metadata: Metadata = { title: "WK 2026 Groepen — Alle 12 Poules" };

export default function GroupsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-black uppercase text-white mb-2">WK 2026 Groepen</h1>
      <p className="text-white/50 mb-10">48 landen verdeeld over 12 poules van 4 teams. De top 2 van elke poule + 8 beste nummers 3 gaan door.</p>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WK_GROUPS.map((group) => (
          <div key={group.id} id={`groep-${group.id}`} className="rounded-2xl bg-[#111827] border border-white/10 overflow-hidden">
            <div className="bg-[#C9A227]/20 border-b border-[#C9A227]/30 px-5 py-3 flex items-center justify-between">
              <h2 className="text-lg font-black text-[#C9A227]">Groep {group.id}</h2>
              <span className="text-xs text-white/40">4 teams</span>
            </div>
            <div className="p-5 space-y-3">
              {group.teams.map((team, i) => (
                <div key={team.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <span className="text-white/30 text-sm font-bold w-4">{i+1}</span>
                  <img src={`https://flagcdn.com/w40/${team.flag}.png`} alt={team.name} width={32} height={22} className="rounded-sm" />
                  <span className="font-semibold text-white flex-1">{team.name}</span>
                  <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded-full">FIFA #{team.fifa_rank}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
