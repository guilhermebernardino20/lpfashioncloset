import Reveal from "./Reveal";

export default function Manifesto() {
  return (
    <section id="conceito" className="bg-ink py-28 text-paper md:py-48">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="mb-10 text-[11px] uppercase tracking-[0.28em] text-[#9a978f]">Conceito</p>
          <h2 className="max-w-5xl font-serif text-[clamp(2.75rem,8vw,7.5rem)] uppercase leading-[0.95]">
            Moda é mais do que vestir.
          </h2>
        </Reveal>
        <Reveal className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12">
          <p className="font-serif text-3xl italic leading-tight md:col-span-6 md:col-start-1 md:text-5xl">
            É reconhecer o que faz sentido para você.
          </p>
          <p className="max-w-md text-base leading-relaxed text-[#b9b6ae] md:col-span-4 md:col-start-9 md:self-end">
            O Fashion Closet reúne marcas, estilos e possibilidades em uma seleção pensada para quem encontra na moda
            uma forma de expressão.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
