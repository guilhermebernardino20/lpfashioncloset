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

export function whatsappLink(message: string): string {
  return `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const messages = {
  general: "Olá! Gostaria de conhecer a seleção do Fashion Closet.",
  online: "Olá! Gostaria de consultar opções e disponibilidade da seleção Fashion Closet.",
  appointment:
    "Olá! Gostaria de solicitar um agendamento para o atendimento personalizado do Fashion Closet.",
  product: (name: string, brand: string) =>
    `Olá! Gostaria de consultar a disponibilidade da peça "${name}" (${brand}).`,
};

export type Brand = {
  id: string;
  name: string;
  descriptor: string;
  logo: string; // PNG monocromático em public/brand/marcas
  logoHeight: number; // altura de exibição (px) para equilibrar o peso óptico
};

// Expansível: basta adicionar novos itens ao array.
export const brands: Brand[] = [
  { id: "farm", logo: "/brand/marcas/farm.png", logoHeight: 52, name: "Farm", descriptor: "Estampa, cor e leveza brasileira." },
  { id: "zara", logo: "/brand/marcas/zara.png", logoHeight: 34, name: "Zara", descriptor: "Tendência com ritmo de passarela." },
  { id: "animale", logo: "/brand/marcas/animale.png", logoHeight: 36, name: "Animale", descriptor: "Sofisticação em corte e silhueta." },
  { id: "dimy", logo: "/brand/marcas/dimy.png", logoHeight: 30, name: "Dimy", descriptor: "Feminilidade em tecidos fluidos." },
  { id: "nati-vozza", logo: "/brand/marcas/nati-vozza.png", logoHeight: 34, name: "Nati Vozza", descriptor: "Peças de atitude, prontas para combinar." },
];

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price?: number;
  image: string;
  demo: true; // dados demonstrativos — substituir pelo catálogo real
};

export const products: Product[] = [
  { id: "p01", name: "Vestido midi bordado", brand: "Farm", category: "Vestidos", image: "/images/produtos/p01.jpg", demo: true },
  { id: "p02", name: "Vestido assimétrico rosé", brand: "Zara", category: "Vestidos", image: "/images/produtos/p02.jpg", demo: true },
  { id: "p03", name: "Vestido longo fluido", brand: "Dimy", category: "Vestidos", image: "/images/produtos/p03.webp", demo: true },
  { id: "p04", name: "Vestido branco estampado", brand: "Farm", category: "Vestidos", image: "/images/produtos/p04.webp", demo: true },
  { id: "p05", name: "Vestido tricô com franjas", brand: "Animale", category: "Vestidos", image: "/images/produtos/p05.webp", demo: true },
  { id: "p06", name: "Blazer e short jeans", brand: "Nati Vozza", category: "Looks", image: "/images/produtos/p06.webp", demo: true },
];

export type EditorialImage = {
  id: string;
  src: string;
  alt: string;
  ratio: "portrait" | "landscape" | "square";
};

export const heroImage: EditorialImage = {
  id: "hero",
  src: "/images/editorial/hero.jpg",
  alt: "Duas modelos sorrindo em movimento, com vestidos estampados em verde e amarelo, em um parque urbano",
  ratio: "portrait",
};

// Provisório: reaproveita fotos da seleção até haver imagens editoriais próprias.
export const editorial: EditorialImage[] = [
  { id: "e1", src: "/images/produtos/p04.webp", alt: "Modelo com vestido branco de estampa floral e bolsa laranja diante de um coco pintado", ratio: "portrait" },
  { id: "e2", src: "/images/produtos/p01.jpg", alt: "Modelo com vestido bordado azul e branco carregando uma bolsa em forma de margarida, junto ao mar", ratio: "portrait" },
  { id: "e3", src: "/images/produtos/p05.webp", alt: "Modelo com vestido de tricô bege com franjas na barra e bolsa marrom", ratio: "portrait" },
  { id: "e4", src: "/images/produtos/p03.webp", alt: "Modelo com vestido longo cinza fluido sobre fundo dourado", ratio: "portrait" },
];

export const nav = [
  { label: "Conceito", href: "#conceito" },
  { label: "Marcas", href: "#marcas" },
  { label: "Seleção", href: "#selecao" },
  { label: "Atendimento", href: "#atendimento" },
] as const;

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);
}
