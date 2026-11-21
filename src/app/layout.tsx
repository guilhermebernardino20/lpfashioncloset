import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Nexa (fonte da marca): ExtraLight para títulos e texto corrido, Heavy para rótulos e botões.
const nexa = localFont({
  src: [
    { path: "./fonts/Nexa-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./fonts/Nexa-Heavy.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-nexa",
  display: "swap",
});

const description =
  "Fashion Closet: uma história que começou em casa. Hoje, uma seleção de peças de outlet de marcas reconhecidas, guiada por um olhar atento à estética, à qualidade e à individualidade.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b0b",
};

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
    <html lang="pt-BR" className={nexa.variable}>
      <body>{children}</body>
    </html>
  );
}
