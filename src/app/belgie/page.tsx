import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "België op het WK 2026 — Rode Duivels",
  description: "Alles over de Belgische nationale ploeg op het FIFA WK 2026. Groep, schema, spelers, kansen.",
};

const PLAYERS = [
  { name: "Romelu Lukaku", pos: "Aanvaller", club: "Napoli", age: 32, goals: 14 },
  { name: "Kevin De Bruyne", pos: "Middenvelder", club: "Man City", age: 34, goals: 28 },
  { name: "Thibaut Courtois", pos: "Doelman", club: "Real Madrid", age: 33, goals: 0 },
  { name: "Axel Witsel", pos: "Middenvelder", club: "Atlético Madrid", age: 37, goals: 11 },
  { name: "Toby Alderweireld", pos: "Verdediger", club: "Beerschot", age: 37, goals: 5 },
  { name: "Dries Mertens", pos: "Aanvaller", club: "Galatasaray", age: 37, goals: 21 },
];

const MATCHES = [
  { date: "14 jun 2026", opponent: "Argentinië", venue: "New York", time: "21:00" },
  { date: "19 jun 2026", opponent: "Australië", venue: "Los Angeles", time: "18:00" },
  { date: "24 jun 2026", opponent: "Marokko", venue: "Dallas", time: "21:00" },
];

export default function BelgiePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1a0000] via-[#2d0000] to-[#0a0a0a] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="text-8xl mb-4">🇧🇪</div>
          <h1 className="text-5xl font-black uppercase text-white">Rode Duivels</h1>
          <p className="mt-3 text-xl text-white/60">België op het FIFA WK 2026</p>
          <div className="mt-6 grid grid-cols-3 gap-4 max-w-sm mx-auto">
            <div className="bg-black/40 rounded-xl p-3">
              <div className="text-2xl font-black text-[#C9A227]">Gr. A</div>
              <div className="text-xs text-white/50">Poule</div>
            </div>
            <div className="bg-black/40 rounded-xl p-3">
              <div className="text-2xl font-black text-[#C9A227]">#3</div>
              <div className="text-xs text-white/50">FIFA rang</div>
            </div>
            <div className="bg-black/40 rounded-xl p-3">
              <div className="text-2xl font-black text-[#C9A227]">12/1</div>
              <div className="text-xs text-white/50">Odds winnaar</div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 space-y-12">
        {/* Wedstrijden */}
        <section>
          <h2 className="text-2xl font-black text-white mb-5">📅 WK-wedstrijden België</h2>
          <div className="space-y-3">
            {MATCHES.map((m) => (
              <div key={m.date} className="flex items-center gap-4 bg-[#111827] rounded-xl border border-white/10 p-4">
                <div className="text-center min-w-[70px]">
                  <div className="text-xs text-white/40">{m.date}</div>
                  <div className="text-sm font-bold text-[#C9A227]">{m.time}</div>
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-2xl">🇧🇪</span>
                  <span className="font-bold text-white">België</span>
                  <span className="text-white/40 mx-2">vs</span>
                  <span className="font-bold text-white">{m.opponent}</span>
                </div>
                <span className="text-xs text-white/40">📍 {m.venue}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Kern */}
        <section>
          <h2 className="text-2xl font-black text-white mb-5">👕 Selectie Rode Duivels</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {PLAYERS.map((p) => (
              <div key={p.name} className="flex items-center gap-4 bg-[#111827] rounded-xl border border-white/10 p-4">
                <div className="text-3xl">⚽</div>
                <div className="flex-1">
                  <div className="font-bold text-white">{p.name}</div>
                  <div className="text-xs text-white/50">{p.pos} · {p.club}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#C9A227] font-bold">{p.goals} goals</div>
                  <div className="text-xs text-white/40">{p.age} jaar</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Merchandise */}
        <section className="bg-[#111827] rounded-2xl border border-white/10 p-6 text-center">
          <div className="text-5xl mb-3">🇧🇪</div>
          <h3 className="text-xl font-black text-white">Support de Rode Duivels!</h3>
          <p className="text-white/50 text-sm mt-2">Officiële shirts, sjaals, vlaggen en meer</p>
          <Link href="/fanshop" className="mt-4 inline-block rounded-full bg-[#C9A227] px-8 py-3 text-sm font-bold text-black hover:bg-yellow-400 transition-colors">
            🛒 Naar de fanshop →
          </Link>
        </section>
      </div>
    </div>
  );
}
