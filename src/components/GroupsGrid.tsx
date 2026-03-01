import Link from "next/link";
import { WK_GROUPS } from "@/lib/data";

export function GroupsGrid({ preview = false }: { preview?: boolean }) {
  const groups = preview ? WK_GROUPS.slice(0, 4) : WK_GROUPS;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {groups.map((group) => (
        <Link key={group.id} href={`/groepen#groep-${group.id}`} className="card-hover block rounded-2xl bg-[#111827] border border-white/10 p-5 hover:border-[#C9A227]/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-black text-white">Groep {group.id}</h3>
            <span className="text-[#C9A227] text-xs font-bold uppercase">4 teams</span>
          </div>
          <div className="space-y-2">
            {group.teams.map((team) => (
              <div key={team.name} className="flex items-center gap-3">
                <img
                  src={`https://flagcdn.com/w40/${team.flag}.png`}
                  alt={team.name}
                  width={28}
                  height={20}
                  className="rounded-sm flag-shadow"
                />
                <span className="text-sm font-semibold text-white/90">{team.name}</span>
                <span className="ml-auto text-xs text-white/40">#{team.fifa_rank}</span>
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
