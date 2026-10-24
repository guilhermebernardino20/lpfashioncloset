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
  "Fashion Closet: uma história que começou em casa. Hoje, uma seleção de peças de outlet de marcas reconhecidas, guiada por um olhar atento à estética, à qualidade e à individualidade.";

export const metadata: Metadata = {
  title: "Fashion Closet — Curadoria de peças de marcas reconhecidas",
  description,
  openGraph: {
    title: "Fashion Closet — Curadoria de peças de marcas reconhecidas",
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
