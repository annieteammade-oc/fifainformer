import type { Metadata } from "next";
import Link from "next/link";
import { Countdown } from "@/components/Countdown";
import { GroupsGrid } from "@/components/GroupsGrid";
import { MerchandiseSection } from "@/components/MerchandiseSection";
import { BettingSection } from "@/components/BettingSection";
import { NewsSection } from "@/components/NewsSection";
import { StadiumsSection } from "@/components/StadiumsSection";

export const metadata: Metadata = {
  title: "WK 2026 — Groepen, Schema, Teams & Meer",
};

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#006633] via-[#004d26] to-[#0a0a0a] pt-16 pb-20">
        {/* Decoratieve voetballen */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-white/5" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/3" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
            <span>🏆</span> FIFA WERELDKAMPIOENSCHAP VOETBAL
          </div>

          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-white leading-none">
            <span className="gold-shimmer">WK 2026</span>
          </h1>
          <p className="mt-4 text-xl text-white/70 max-w-2xl mx-auto">
            11 juni – 19 juli 2026 · USA · Canada · Mexico<br/>
            48 landen · 104 wedstrijden · 1 kampioen
          </p>

          {/* Countdown */}
          <div className="mt-10">
            <Countdown targetDate="2026-06-11T18:00:00Z" />
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/groepen" className="rounded-full bg-[#C9A227] px-8 py-3 text-sm font-bold text-black hover:bg-yellow-400 transition-colors">
              📋 Bekijk alle groepen
            </Link>
            <Link href="/schema" className="rounded-full border border-white/30 px-8 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
              📅 Wedstrijdschema
            </Link>
            <Link href="/belgie" className="rounded-full border border-red-500/50 bg-red-500/10 px-8 py-3 text-sm font-bold text-red-400 hover:bg-red-500/20 transition-colors">
              🇧🇪 België op het WK
            </Link>
          </div>
        </div>
      </section>

      {/* SNELLE FEITEN */}
      <section className="bg-[#111827] border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { icon: "🌍", label: "Gastheerslanden", value: "3" },
              { icon: "🏟️", label: "Stadions", value: "16" },
              { icon: "⚽", label: "Teams", value: "48" },
              { icon: "🎯", label: "Wedstrijden", value: "104" },
            ].map((f) => (
              <div key={f.label} className="p-4">
                <div className="text-3xl">{f.icon}</div>
                <div className="mt-1 text-2xl font-black text-[#C9A227]">{f.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wide">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NIEUWS */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">Laatste nieuws</h2>
            <p className="text-white/50 text-sm mt-1">Alles over WK 2026</p>
          </div>
          <Link href="/nieuws" className="text-sm font-semibold text-[#C9A227] hover:underline">Alle artikelen →</Link>
        </div>
        <NewsSection />
      </section>

      {/* GROEPEN */}
      <section className="bg-[#0d1117] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white">WK 2026 Groepen</h2>
              <p className="text-white/50 text-sm mt-1">12 poules · 4 teams per poule</p>
            </div>
            <Link href="/groepen" className="text-sm font-semibold text-[#C9A227] hover:underline">Alle groepen →</Link>
          </div>
          <GroupsGrid preview />
        </div>
      </section>

      {/* STADIONS */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-8">
          🏟️ Gastheersstadions
        </h2>
        <StadiumsSection />
      </section>

      {/* MERCHANDISE — AFFILIATE */}
      <section className="bg-gradient-to-b from-[#0d1117] to-[#0a0a0a] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8">
            <div className="inline-block rounded-full bg-[#C9A227]/20 border border-[#C9A227]/30 px-4 py-1 text-xs font-bold text-[#C9A227] uppercase tracking-wide mb-3">
              ⚽ Official Merchandise
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">WK 2026 Fanshop</h2>
            <p className="text-white/50 text-sm mt-1">Shirts, vlaggen, ballen en meer — direct bestellen</p>
          </div>
          <MerchandiseSection />
        </div>
      </section>

      {/* BETTING — AFFILIATE */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <BettingSection />
      </section>

      {/* NEWSLETTER */}
      <section className="bg-gradient-to-r from-[#006633] to-[#004d26] py-14">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl font-black uppercase text-white">Mis geen enkele wedstrijd</h2>
          <p className="mt-3 text-white/70">Schrijf je in en krijg het WK-schema, nieuws en exclusieve tips direct in je mailbox.</p>
          <form action="#" method="post" className="mt-6 flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              name="email"
              placeholder="jouw@email.be"
              className="flex-1 rounded-full bg-white/10 border border-white/20 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#C9A227]"
            />
            <button type="submit" className="rounded-full bg-[#C9A227] px-6 py-3 text-sm font-bold text-black hover:bg-yellow-400 transition-colors whitespace-nowrap">
              Inschrijven →
            </button>
          </form>
          <p className="mt-3 text-xs text-white/40">Geen spam. Uitschrijven kan altijd.</p>
        </div>
      </section>
    </div>
  );
}
