// Fonte única de dados da landing page Fashion Closet.
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
  general: "Olá! Gostaria de conhecer melhor o Fashion Closet.",
  online: "Olá! Gostaria de consultar opções e disponibilidade da seleção Fashion Closet.",
  appointment:
    "Olá! Gostaria de solicitar um agendamento para o atendimento personalizado do Fashion Closet.",
};

export type Brand = {
  id: string;
  name: string;
  logo: string; // PNG monocromático em public/brand/marcas
  logoHeight: number; // altura de exibição (px) para equilibrar o peso óptico
};

// Expansível: basta adicionar novos itens ao array.
export const brands: Brand[] = [
  { id: "farm", logo: "/brand/marcas/farm.png", logoHeight: 52, name: "Farm" },
  { id: "zara", logo: "/brand/marcas/zara.png", logoHeight: 34, name: "Zara" },
  { id: "animale", logo: "/brand/marcas/animale.png", logoHeight: 36, name: "Animale" },
  { id: "dimy", logo: "/brand/marcas/dimy.png", logoHeight: 30, name: "Dimy" },
  { id: "nati-vozza", logo: "/brand/marcas/nati-vozza.png", logoHeight: 34, name: "Nati Vozza" },
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
  { label: "História", href: "#historia" },
  { label: "Curadoria", href: "#curadoria" },
  { label: "Editorial", href: "#editorial" },
  { label: "Atendimento", href: "#atendimento" },
] as const;

// Nossa história — texto institucional, dividido em capítulos.
export const story = {
  title: "Tudo começou com um olhar diferente para o que já existia.",
  chapters: [
    {
      n: "01",
      title: "Em casa",
      paragraphs: [
        "O Fashion Closet nasceu dentro de casa, a partir de uma observação simples: minha mãe tinha diversas peças no guarda-roupa que já não usava. Foi dela a sugestão de transformar aquelas roupas em uma oportunidade. E foi assim que tudo começou.",
        "O que inicialmente surgiu como uma ideia despretensiosa logo despertou em mim um interesse maior pelo universo da moda, pela descoberta de boas peças e pelas possibilidades que existem por trás de cada escolha.",
      ],
    },
    {
      n: "02",
      title: "O olhar",
      paragraphs: [
        "Com o tempo, aquela primeira experiência deu espaço a algo maior. Desenvolvi um olhar mais atento para marcas, tecidos, modelagens e estilos, entendendo que encontrar uma boa peça vai muito além de simplesmente gostar de uma roupa. É reconhecer seu potencial, sua qualidade e a maneira como ela pode fazer parte da história de alguém.",
      ],
    },
    {
      n: "03",
      title: "Identidade própria",
      paragraphs: [
        "O Fashion Closet cresceu junto com essa percepção. A iniciativa inicial se transformou em um projeto com identidade própria, movido pela curadoria e pelo desejo de aproximar pessoas de peças que realmente valem a pena ser descobertas.",
      ],
    },
    {
      n: "04",
      title: "Um novo capítulo",
      paragraphs: [
        "Hoje, iniciamos um novo capítulo. Evoluímos nosso posicionamento para traduzir com mais precisão aquilo que queremos oferecer: uma seleção de peças de outlet de marcas reconhecidas, guiada por um olhar atento à estética, à qualidade e à individualidade de cada escolha.",
      ],
    },
  ],
  essence: "Nossa essência, porém, permanece a mesma: a de enxergar possibilidades onde antes existia apenas uma peça esquecida no guarda-roupa.",
  signature: "Fashion Closet. Uma história que começou em casa e continua sendo escrita a cada nova descoberta.",
} as const;

// Curadoria — o que guia a seleção (derivado do texto institucional).
export const pillars = [
  {
    n: "01",
    title: "Estética",
    text: "Marcas, tecidos, modelagens e estilos observados com atenção, peça a peça.",
    image: "/images/editorial/look-1.jpg",
    alt: "Vestido bordado azul e branco com bolsa em forma de margarida, junto ao mar",
    position: "50% 35%",
  },
  {
    n: "02",
    title: "Qualidade",
    text: "Encontrar uma boa peça vai além de gostar de uma roupa: é reconhecer o seu potencial e a sua qualidade.",
    image: "/images/editorial/look-5.webp",
    alt: "Vestido de tricô bege com franjas na barra",
    position: "50% 60%",
  },
  {
    n: "03",
    title: "Individualidade",
    text: "Cada escolha é única, assim como a maneira como uma peça pode fazer parte da história de alguém.",
    image: "/images/editorial/look-4.webp",
    alt: "Vestido branco de estampa floral e bolsa laranja diante de um coco pintado",
    position: "50% 40%",
  },
] as const;
