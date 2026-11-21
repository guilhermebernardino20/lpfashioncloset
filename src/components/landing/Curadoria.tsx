"use client";

import { motion } from "framer-motion";
import ParallaxImage from "@/components/motion/ParallaxImage";
import TextReveal from "@/components/motion/TextReveal";
import { EASE } from "@/components/motion/ease";
import { pillars } from "@/data/fashion-closet";
import Reveal from "./Reveal";

// Deslocamentos verticais e proporções variadas dão ritmo editorial ao trio.
const rhythm = ["", "", ""];
const ratios = ["aspect-[3/4]", "aspect-[3/4]", "aspect-[3/4]"];

export default function Curadoria() {
  return (
    <section id="curadoria" className="section">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
          <TextReveal
            as="h2"
            text="Uma seleção de peças de outlet de marcas reconhecidas."
            className="display text-[clamp(1.75rem,7vw,2.75rem)] md:col-span-7 md:text-[clamp(2rem,3.6vw,3.75rem)]"
          />
          <Reveal className="md:col-span-3 md:col-start-10">
            <p className="leading-relaxed text-neutral-600">
              Guiada por um olhar atento à estética, à qualidade e à individualidade de cada escolha.
            </p>
          </Reveal>
        </div>

        <div className="no-scrollbar -mx-5 mt-14 flex scroll-px-5 snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:mt-20 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0">
          {pillars.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: EASE, delay: i * 0.12 }}
              className={`group w-[78%] shrink-0 snap-start md:w-auto ${rhythm[i]}`}
            >
              <ParallaxImage src={p.image} alt={p.alt} className={ratios[i]} sizes="(min-width: 768px) 33vw, 100vw" position={p.position} />
              <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-neutral-200 pb-5">
                <h3 className="display text-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:translate-x-2 md:text-4xl">
                  {p.title}
                </h3>
                <span className="label">{p.n}</span>
              </div>
              <p className="mt-5 max-w-sm leading-relaxed text-neutral-600">{p.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
