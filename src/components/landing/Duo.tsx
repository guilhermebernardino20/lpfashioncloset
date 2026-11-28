import Image from "next/image";

// Grade de duas fotos lado a lado, com legenda central e link, logo após o hero.
const tiles = [
  { src: "/images/editorial/silhueta-calma.jpg", alt: "Modelo sorrindo com vestido estampado diante de um carrinho de frutas na praia", position: "70% 55%", text: ["Uma silhueta que", "pede calma"], cta: "Ver editorial", href: "#editorial" },
  { src: "/images/editorial/nada-alto.jpg", alt: "Modelo com conjunto de estampa de onça posando sobre fundo geométrico branco", position: "50% 35%", text: ["Nada alto.", "Tudo intencional"], cta: "Ver curadoria", href: "#curadoria" },
];

export default function Duo() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {tiles.map((t) => (
        <a key={t.src} href={t.href} className="group relative block aspect-[4/5] overflow-hidden active:opacity-90 md:aspect-square">
          <Image
            src={t.src}
            alt={t.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            style={{ objectPosition: t.position }}
            className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          <div aria-hidden className="absolute inset-0 bg-black/25" />
          <p className="absolute left-1/2 top-1/2 w-[85%] -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(15px,1.7vw,26px)] font-black uppercase leading-snug tracking-[0.16em] text-white">
            {t.text[0]}
            <br />
            {t.text[1]}
            <span className="mt-5 block text-[clamp(11px,1vw,14px)] underline underline-offset-[6px]">{t.cta}</span>
          </p>
        </a>
      ))}
    </section>
  );
}
