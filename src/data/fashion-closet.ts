// Fonte única de dados da landing page Fashion Closet — Brands Hub.
// ATENÇÃO: valores marcados com "CONFIRMAR" são provisórios e devem ser
// substituídos pelos oficiais antes da publicação.

export const contact = {
  instagram: {
    handle: "@fashioncloset", // CONFIRMAR handle oficial
    url: "https://www.instagram.com/fashioncloset", // CONFIRMAR URL oficial
  },
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5500000000000", // CONFIRMAR (DDI+DDD+número)
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
};

// Expansível: basta adicionar novos itens ao array.
export const brands: Brand[] = [
  { id: "farm", name: "Farm", descriptor: "Estampa, cor e leveza brasileira." },
  { id: "zara", name: "Zara", descriptor: "Tendência com ritmo de passarela." },
  { id: "animale", name: "Animale", descriptor: "Sofisticação em corte e silhueta." },
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
  { id: "p01", name: "Vestido midi estampado", brand: "Farm", category: "Vestidos", price: 690, image: "/images/produtos/p01.jpg", demo: true },
  { id: "p02", name: "Blazer alfaiataria", brand: "Zara", category: "Alfaiataria", price: 459, image: "/images/produtos/p02.jpg", demo: true },
  { id: "p03", name: "Camisa de seda", brand: "Animale", category: "Blusas", price: 890, image: "/images/produtos/p03.jpg", demo: true },
  { id: "p04", name: "Calça wide leg", brand: "Zara", category: "Calças", price: 299, image: "/images/produtos/p04.jpg", demo: true },
  { id: "p05", name: "Saia plissada", brand: "Farm", category: "Saias", image: "/images/produtos/p05.jpg", demo: true },
  { id: "p06", name: "Vestido slip", brand: "Animale", category: "Vestidos", price: 1190, image: "/images/produtos/p06.jpg", demo: true },
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
  alt: "Imagem editorial Fashion Closet — look da seleção",
  ratio: "portrait",
};

export const editorial: EditorialImage[] = [
  { id: "e1", src: "/images/editorial/e1.jpg", alt: "Editorial Fashion Closet — look 1", ratio: "portrait" },
  { id: "e2", src: "/images/editorial/e2.jpg", alt: "Editorial Fashion Closet — detalhe de tecido", ratio: "square" },
  { id: "e3", src: "/images/editorial/e3.jpg", alt: "Editorial Fashion Closet — look 2", ratio: "landscape" },
  { id: "e4", src: "/images/editorial/e4.jpg", alt: "Editorial Fashion Closet — look 3", ratio: "portrait" },
  { id: "e5", src: "/images/editorial/e5.jpg", alt: "Editorial Fashion Closet — acessórios", ratio: "square" },
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
