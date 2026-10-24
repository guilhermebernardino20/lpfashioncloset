import type { Metadata } from "next";
import { Inconsolata, Manrope } from "next/font/google";
import "./globals.css";

const serif = Inconsolata({
  variable: "--font-serif-display", // títulos (nome da variável mantido; a fonte é monoespaçada)
  subsets: ["latin"],
});

const sans = Manrope({
  variable: "--font-sans-ui",
  subsets: ["latin"],
});

const description =
  "Fashion Closet — Brands Hub: uma seleção de marcas reconhecidas, escolhida para acompanhar diferentes versões de você.";

export const metadata: Metadata = {
  title: "Fashion Closet — Brands Hub",
  description,
  openGraph: {
    title: "Fashion Closet — Brands Hub",
    description,
    type: "website",
    locale: "pt_BR",
    siteName: "Fashion Closet",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
