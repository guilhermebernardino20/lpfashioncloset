"use client";

import { motion } from "framer-motion";
import { messages, whatsappLink } from "@/data/fashion-closet";
import Button from "./Button";
import TextReveal from "@/components/motion/TextReveal";
import MagneticButton from "@/components/motion/MagneticButton";
import Reveal from "./Reveal";
import { EASE } from "@/components/motion/ease";

// Linha-guia que se desenha (scaleX) ao entrar na viewport.
function Rule({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 1.2, ease: EASE, delay }}
      className="h-px origin-left bg-neutral-200"
    />
  );
}

export default function ShoppingExperience() {
  return (
    <section id="atendimento" className="border-t border-neutral-200 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <TextReveal as="h2" text="Uma experiência que acompanha você." className="display text-[clamp(3rem,9.5vw,9rem)] md:max-w-[75%]" />

        <div className="mt-20 grid md:mt-28 md:grid-cols-[5fr_7fr]">
          <div className="md:border-r md:border-neutral-200 md:pr-16">
            <Rule />
            <div className="py-12 md:py-16">
              <Reveal>
                <p className="label">01</p>
                <h3 className="display mt-8 text-[clamp(1.875rem,4vw,3.75rem)] [overflow-wrap:anywhere]">Online</h3>
                <p className="mt-8 max-w-md leading-relaxed text-neutral-500">
                  Descubra a seleção Fashion Closet e encontre peças que combinam com seu estilo. Entre em contato para
                  consultar opções e disponibilidade.
                </p>
                <div className="mt-10">
                  <MagneticButton>
                    <Button href={whatsappLink(messages.online)} external>
                      Consultar online
                    </Button>
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="md:pl-16 md:pt-24">
            <Rule delay={0.3} />
            <div className="py-12 md:py-16">
              <Reveal delay={0.3}>
                <p className="label">02</p>
                <h3 className="display mt-8 text-[clamp(1.875rem,4vw,3.75rem)] [overflow-wrap:anywhere]">Atendimento personalizado</h3>
                <p className="mt-8 max-w-md leading-relaxed text-neutral-500">
                  Uma experiência mais próxima para conhecer as peças, explorar possibilidades e encontrar novas
                  combinações, mediante agendamento.
                </p>
                <div className="mt-10">
                  <MagneticButton>
                    <Button href={whatsappLink(messages.appointment)} external variant="secondary">
                      Solicitar agendamento
                    </Button>
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
