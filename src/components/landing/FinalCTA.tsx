import { contact, messages, whatsappLink } from "@/data/fashion-closet";
import Button from "./Button";
import TextReveal from "@/components/motion/TextReveal";
import MagneticButton from "@/components/motion/MagneticButton";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="border-t border-neutral-200 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <TextReveal
          as="h2"
          text="Seu próximo achado começa aqui."
          className="display text-[clamp(3.5rem,13vw,13rem)] md:max-w-[80%]"
        />
        <Reveal delay={0.3}>
          <p className="mt-12 max-w-sm leading-relaxed text-neutral-500">
            Descubra a seleção Fashion Closet e encontre peças que merecem fazer parte do seu guarda-roupa.
          </p>
          <div className="mt-12 flex flex-col items-start gap-3 sm:flex-row">
            <MagneticButton>
              <Button href={whatsappLink(messages.general)} external>
                Falar no WhatsApp
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href="#selecao" variant="secondary">
                Explorar seleção
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href={contact.instagram.url} variant="secondary" external>
                Acompanhar no Instagram
              </Button>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
