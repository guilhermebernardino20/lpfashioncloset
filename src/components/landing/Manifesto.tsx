import Reveal from "./Reveal";
import ScrollWords from "./ScrollWords";

export default function Manifesto() {
  return (
    <section id="conceito" className="py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="label mb-12">Conceito</p>
        <ScrollWords as="h2" text="Moda é mais do que vestir." className="display text-[clamp(3.25rem,12vw,12rem)] md:max-w-[66%]" />
        <div className="mt-20 grid gap-12 border-t border-neutral-200 pt-12 md:mt-32 md:grid-cols-12 md:gap-10">
          <ScrollWords
            text="É reconhecer o que faz sentido para você."
            className="display text-3xl md:col-span-6 md:text-5xl md:leading-[1]"
          />
          <Reveal className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="max-w-sm text-base leading-relaxed text-neutral-500">
              O Fashion Closet reúne marcas, estilos e possibilidades em uma seleção pensada para quem encontra na moda
              uma forma de expressão.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
