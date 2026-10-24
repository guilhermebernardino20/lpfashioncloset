import { messages, whatsappLink } from "@/data/fashion-closet";
import Button from "./Button";
import Reveal from "./Reveal";

export default function ShoppingExperience() {
  return (
    <section id="atendimento" className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 pt-24 md:px-10 md:pt-36">
        <Reveal>
          <h2 className="max-w-4xl font-serif text-[clamp(2.5rem,7vw,6.5rem)] uppercase leading-[0.95]">
            Uma experiência que acompanha você.
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 grid md:mt-24 md:grid-cols-2">
        <div className="border-t border-ink px-5 py-14 md:px-10 md:py-24 md:pl-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))]">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-gray">01</p>
            <h3 className="mt-6 font-serif text-4xl uppercase md:text-5xl">Online</h3>
            <p className="mt-6 max-w-md leading-relaxed text-gray">
              Descubra a seleção Fashion Closet e encontre peças que combinam com seu estilo. Entre em contato para
              consultar opções e disponibilidade.
            </p>
            <div className="mt-10">
              <Button href={whatsappLink(messages.online)} external>
                Consultar online
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="bg-ink px-5 py-14 text-paper md:px-10 md:py-24 md:pr-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))]">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#9a978f]">02</p>
            <h3 className="mt-6 font-serif text-4xl uppercase md:text-5xl">Atendimento personalizado</h3>
            <p className="mt-6 max-w-md leading-relaxed text-[#b9b6ae]">
              Uma experiência mais próxima para conhecer as peças, explorar possibilidades e encontrar novas
              combinações, mediante agendamento.
            </p>
            <div className="mt-10">
              <Button href={whatsappLink(messages.appointment)} external variant="solid-light">
                Solicitar agendamento
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
