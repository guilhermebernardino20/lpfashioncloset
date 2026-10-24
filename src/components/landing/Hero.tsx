"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroImage } from "@/data/fashion-closet";
import { EASE } from "@/components/motion/ease";
import MagneticButton from "@/components/motion/MagneticButton";
import ParallaxImage from "@/components/motion/ParallaxImage";
import TextReveal from "@/components/motion/TextReveal";
import Button from "./Button";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section ref={ref} id="topo" className="pt-32 pb-28 md:pt-44 md:pb-40">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 md:px-10 lg:grid-cols-12 lg:items-end lg:gap-10">
        <motion.div style={{ y: textY }} className="will-change-transform lg:col-span-7">
          {/* 1. label em fade → 2. título linha a linha → 3. apoio e CTAs */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="label mb-10">
            [ Brands Hub — Curatorial Selection ]
          </motion.p>
          <TextReveal as="h1" text="Marcas que traduzem o seu estilo." delay={0.5} className="display text-[clamp(3rem,8vw,8.5rem)]" />
          <motion.p {...fade(1.4)} className="mt-10 max-w-sm text-base leading-relaxed text-neutral-500">
            Uma seleção de marcas reconhecidas, escolhida para acompanhar diferentes versões de você.
          </motion.p>
          <motion.div {...fade(1.55)} className="mt-12 flex flex-col items-start gap-3 sm:flex-row">
            <MagneticButton>
              <Button href="#editorial">Explorar editorial</Button>
            </MagneticButton>
            <MagneticButton>
              <Button href="#conceito" variant="secondary">
                Conhecer o Fashion Closet
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-5">
          <ParallaxImage
            src={heroImage.src}
            alt={heroImage.alt}
            priority
            reveal
            revealDelay={0.9}
            className="aspect-[3/4]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <motion.p {...fade(1.6)} className="label mt-4">
            Editorial — Coleção atual
          </motion.p>
        </div>
      </div>
    </section>
  );
}
