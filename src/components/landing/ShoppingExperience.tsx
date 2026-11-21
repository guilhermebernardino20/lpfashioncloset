"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { messages, whatsappLink } from "@/data/fashion-closet";
import TextReveal from "@/components/motion/TextReveal";
import { EASE } from "@/components/motion/ease";
import Reveal from "./Reveal";

const options = [
  {
    n: "01",
    tag: "À distância",
    title: "Online",
    text: "Descubra a seleção Fashion Closet e encontre peças que combinam com seu estilo. Entre em contato para consultar opções e disponibilidade.",
    cta: "Consultar online",
    href: whatsappLink(messages.online),
    image: "/images/editorial/atendimento-online.jpg",
    alt: "Modelo em preto e branco, de ponta-cabeça, com jeans largo e sandálias de salto",
    position: "50% 45%",
  },
  {
    n: "02",
    tag: "Mediante agendamento",
    title: "Atendimento personalizado",
    text: "Uma experiência mais próxima para conhecer as peças, explorar possibilidades e encontrar novas combinações.",
    cta: "Solicitar agendamento",
    href: whatsappLink(messages.appointment),
    image: "/images/editorial/atendimento-presencial.jpg",
    alt: "Modelo de vestido branco olhando por cima do ombro, com a orla do Rio ao fundo",
    position: "50% 40%",
  },
] as const;

type Option = (typeof options)[number];

// Cartão-foto inteiro clicável.
function Card({ o, i }: { o: Option; i: number }) {
  return (
    <motion.a
      href={o.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: EASE, delay: i * 0.12 }}
      className="group relative block aspect-[5/6] overflow-hidden bg-neutral-900 text-white md:aspect-[4/5]"
    >
      <Image
        src={o.image}
        alt={o.alt}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        style={{ objectPosition: o.position }}
        className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35 transition-opacity duration-700 group-hover:opacity-90" />

      <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
        <div className="flex items-start justify-between text-[10px] font-black uppercase tracking-[0.24em]">
          <span>{o.n}</span>
          <span className="border border-white/40 px-2.5 py-1 text-[9px] text-white/90 backdrop-blur-sm">{o.tag}</span>
        </div>

        <div>
          <h3 className="display text-[clamp(1.5rem,6.5vw,2rem)] leading-[1.05] md:text-[clamp(1.4rem,1.9vw,2rem)]">{o.title}</h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/85">{o.text}</p>
          <span className="mt-5 inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.24em]">
            {o.cta}
            <span aria-hidden className="relative block h-px w-8 bg-white/50 transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-14">
              <span className="absolute -right-px -top-[3px] block h-[7px] w-[7px] rotate-45 border-r border-t border-white" />
            </span>
          </span>
        </div>
      </div>
    </motion.a>
  );
}

// Dois caminhos de atendimento, cada um um cartão-foto inteiro clicável.
export default function ShoppingExperience() {
  return (
    <section id="atendimento" className="section">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4 md:self-start">
            <TextReveal
              as="h2"
              text="Uma experiência que acompanha você."
              className="display text-[clamp(1.75rem,7vw,2.75rem)] md:text-[clamp(1.75rem,2.5vw,2.75rem)]"
            />
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xs leading-relaxed text-neutral-600">
                Escolha como prefere conhecer a seleção: de onde estiver ou de pertinho.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 md:col-span-8 md:grid-cols-2 md:gap-5">
            <Card o={options[0]} i={0} />
            <Card o={options[1]} i={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
