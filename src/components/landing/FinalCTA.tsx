import { contact } from "@/data/fashion-closet";
import Button from "./Button";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="bg-ink py-28 text-paper md:py-44">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <h2 className="max-w-5xl font-serif text-[clamp(2.75rem,8vw,7.5rem)] uppercase leading-[0.95]">
            Seu próximo achado começa aqui.
          </h2>
          <p className="mt-10 max-w-md leading-relaxed text-[#b9b6ae]">
            Descubra a seleção Fashion Closet e encontre peças que merecem fazer parte do seu guarda-roupa.
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button href="#selecao" variant="solid-light">
              Explorar seleção
            </Button>
            <Button href={contact.instagram.url} variant="outline-light" external>
              Acompanhar no Instagram
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
