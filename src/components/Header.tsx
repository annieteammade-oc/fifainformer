"use client";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/groepen", label: "Groepen" },
  { href: "/schema", label: "Schema" },
  { href: "/teams", label: "Teams" },
  { href: "/belgie", label: "🇧🇪 België" },
  { href: "/fanshop", label: "Fanshop" },
  { href: "/nieuws", label: "Nieuws" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">⚽</span>
          <span className="font-black text-white text-xl tracking-tight">
            FIFA<span className="text-[#C9A227]">Informer</span>
            <span className="ml-2 text-xs font-bold bg-[#C9A227] text-black px-2 py-0.5 rounded-full">WK 2026</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="px-3 py-2 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
              {n.label}
            </Link>
          ))}
          <Link href="/fanshop" className="ml-2 rounded-full bg-[#C9A227] px-4 py-2 text-sm font-bold text-black hover:bg-yellow-400 transition-colors">
            🛒 Shop
          </Link>
        </nav>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#111827] border-t border-white/10 px-4 py-4 space-y-2">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block px-4 py-2 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded-lg">
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
