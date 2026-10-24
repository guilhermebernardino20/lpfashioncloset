// Fonte única de dados da landing page Fashion Closet — Brands Hub.
// As peças são demonstrativas (demo: true) — substituir pelo catálogo real.

export const contact = {
  instagram: {
    handle: "@fashionclosetsb",
    url: "https://www.instagram.com/fashionclosetsb/",
  },
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5541987747456", // (41) 98774-7456
  },
} as const;

// Área de revendedores (sistema de estoque).
export const resellerUrl = "https://fashion-closet-estoque.vercel.app/login";

export function whatsappLink(message: string): string {
  return `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const messages = {
  general: "Olá! Gostaria de conhecer a seleção do Fashion Closet.",
  online: "Olá! Gostaria de consultar opções e disponibilidade da seleção Fashion Closet.",
  appointment:
    "Olá! Gostaria de solicitar um agendamento para o atendimento personalizado do Fashion Closet.",
};

export type Brand = {
  id: string;
  name: string;
  descriptor: string;
  logo: string; // PNG monocromático em public/brand/marcas
  logoHeight: number; // altura de exibição (px) para equilibrar o peso óptico
  campaign: string; // foto de campanha usada no Brand Matrix (provisória: foto da seleção)
};

// Expansível: basta adicionar novos itens ao array.
export const brands: Brand[] = [
  { id: "farm", logo: "/brand/marcas/farm.png", campaign: "/images/editorial/hero.jpg", logoHeight: 52, name: "Farm", descriptor: "Estampa, cor e leveza brasileira." },
  { id: "zara", logo: "/brand/marcas/zara.png", campaign: "/images/editorial/look-2.jpg", logoHeight: 34, name: "Zara", descriptor: "Tendência com ritmo de passarela." },
  { id: "animale", logo: "/brand/marcas/animale.png", campaign: "/images/editorial/look-5.webp", logoHeight: 36, name: "Animale", descriptor: "Sofisticação em corte e silhueta." },
  { id: "dimy", logo: "/brand/marcas/dimy.png", campaign: "/images/editorial/look-3.webp", logoHeight: 30, name: "Dimy", descriptor: "Feminilidade em tecidos fluidos." },
  { id: "nati-vozza", logo: "/brand/marcas/nati-vozza.png", campaign: "/images/editorial/look-6.webp", logoHeight: 34, name: "Nati Vozza", descriptor: "Peças de atitude, prontas para combinar." },
];

export type EditorialImage = {
  id: string;
  src: string;
  alt: string;
  brand?: string; // crédito exibido como legenda
  ratio: "portrait" | "landscape" | "square";
};

export const heroImage: EditorialImage = {
  id: "hero",
  src: "/images/editorial/hero.jpg",
  alt: "Duas modelos sorrindo em movimento, com vestidos estampados em verde e amarelo, em um parque urbano",
  ratio: "portrait",
};

export const editorial: EditorialImage[] = [
  { id: "e1", src: "/images/editorial/look-1.jpg", brand: "Farm", alt: "Modelo com vestido bordado azul e branco carregando uma bolsa em forma de margarida, junto ao mar", ratio: "portrait" },
  { id: "e2", src: "/images/editorial/look-2.jpg", brand: "Zara", alt: "Modelo com vestido assimétrico rosé sobre fundo branco", ratio: "portrait" },
  { id: "e3", src: "/images/editorial/look-3.webp", brand: "Dimy", alt: "Modelo com vestido longo cinza fluido sobre fundo dourado", ratio: "portrait" },
  { id: "e4", src: "/images/editorial/look-4.webp", brand: "Farm", alt: "Modelo com vestido branco de estampa floral e bolsa laranja diante de um coco pintado", ratio: "portrait" },
  { id: "e5", src: "/images/editorial/look-5.webp", brand: "Animale", alt: "Modelo com vestido de tricô bege com franjas na barra e bolsa marrom", ratio: "portrait" },
  { id: "e6", src: "/images/editorial/look-6.webp", brand: "Nati Vozza", alt: "Modelo com blazer cinza, top e short jeans claro", ratio: "portrait" },
];

export const nav = [
  { label: "Conceito", href: "#conceito" },
  { label: "Marcas", href: "#marcas" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Editorial", href: "#editorial" },
] as const;
