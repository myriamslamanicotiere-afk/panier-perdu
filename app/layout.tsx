import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-fraunces",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "Panier Perdu — Récupérez vos paniers abandonnés",
  description:
    "Deux relances automatiques et personnalisées pour récupérer le chiffre d'affaires perdu dans vos paniers abandonnés. 29€/mois, sans engagement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${plexSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
