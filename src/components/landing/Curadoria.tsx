"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/motion/TextReveal";
import { EASE } from "@/components/motion/ease";
import { pillars } from "@/data/fashion-closet";
import Reveal from "./Reveal";

export default function Curadoria() {
  return (
    <section id="curadoria" className="border-t border-neutral-200 py-20 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="label mb-8 md:mb-12">Curadoria</p>
        <TextReveal
          as="h2"
          text="Uma seleção de peças de outlet de marcas reconhecidas."
          className="display text-[clamp(2.25rem,9.5vw,4.5rem)] md:max-w-[85%] md:text-[clamp(3rem,6.5vw,7rem)]"
        />
        <Reveal className="mt-8 md:mt-12">
          <p className="max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Guiada por um olhar atento à estética, à qualidade e à individualidade de cada escolha.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 md:mt-28 md:grid-cols-3 md:gap-10">
          {pillars.map((p, i) => (
            <div key={p.n}>
              <motion.div
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 1.2, ease: EASE, delay: i * 0.15 }}
                className="h-px origin-left bg-fg"
              />
              <Reveal delay={i * 0.15} className="pt-6 md:pt-8">
                <p className="label">{p.n}</p>
                <h3 className="display mt-6 text-3xl md:text-4xl">{p.title}</h3>
                <p className="mt-5 max-w-sm leading-relaxed text-neutral-600">{p.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
