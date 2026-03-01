import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "FIFAInformer.com — WK 2026 | Alles over het Wereldkampioenschap Voetbal", template: "%s | FIFAInformer" },
  description: "Alles over het FIFA WK 2026 in USA, Canada & Mexico. Groepen, schema, teams, spelers, tickets, merchandise en meer.",
  keywords: ["WK 2026", "FIFA WK 2026", "wereldkampioenschap voetbal 2026", "World Cup 2026", "Belgie WK 2026"],
  openGraph: {
    siteName: "FIFAInformer.com",
    type: "website",
    locale: "nl_BE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen bg-[#0a0a0a]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
