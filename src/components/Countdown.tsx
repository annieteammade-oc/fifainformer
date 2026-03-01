"use client";
import { useEffect, useState } from "react";

export function Countdown({ targetDate }: { targetDate: string }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <div className="inline-flex flex-wrap gap-3 justify-center">
      {[
        { value: time.days, label: "Dagen" },
        { value: time.hours, label: "Uren" },
        { value: time.minutes, label: "Minuten" },
        { value: time.seconds, label: "Seconden" },
      ].map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center bg-black/40 border border-white/20 rounded-2xl px-6 py-4 min-w-[80px]">
          <span className="text-4xl sm:text-5xl font-black text-[#C9A227] tabular-nums leading-none">
            {String(value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-xs uppercase tracking-widest text-white/50">{label}</span>
        </div>
      ))}
    </div>
  );
}
