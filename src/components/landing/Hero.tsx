"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroImage } from "@/data/fashion-closet";
import { EASE } from "@/components/motion/ease";
import MagneticButton from "@/components/motion/MagneticButton";
import ParallaxImage from "@/components/motion/ParallaxImage";
import TextReveal from "@/components/motion/TextReveal";
import Button from "./Button";
import { useIntroDelay } from "./Preloader";

// Primeira dobra: tudo cabe em 100svh (notebook e celular).
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const intro = useIntroDelay();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay: intro + delay },
  });

  return (
    <section ref={ref} id="topo" className="h-[100svh] min-h-[600px] pb-5 pt-[76px] md:pb-8">
      <div className="mx-auto flex h-full max-w-[1400px] flex-col gap-5 px-5 md:px-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
        <motion.div style={{ y: textY }} className="shrink-0 will-change-transform lg:col-span-7">
          {/* 1. label em fade → 2. título linha a linha → 3. apoio e CTAs */}
          <motion.p {...fade(0)} className="label mb-4 md:mb-6">
            [ Fashion Closet — Curadoria de outlet ]
          </motion.p>
          <TextReveal
            as="h1"
            text="Peças que merecem ser descobertas."
            delay={intro + 0.2}
            className="display text-[clamp(2.25rem,12.5vw,4.75rem)] lg:text-[clamp(2.75rem,min(7vw,12svh),8rem)]"
          />
          <motion.p {...fade(0.9)} className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500 md:mt-8 md:text-base">
            Uma seleção de peças de outlet de marcas reconhecidas, guiada por um olhar atento à estética, à qualidade e à individualidade de cada escolha.
          </motion.p>
          <motion.div {...fade(1.05)} className="mt-5 flex flex-col items-start gap-2.5 sm:flex-row sm:gap-3 md:mt-10">
            <MagneticButton>
              <Button href="#historia" className="!py-3.5 md:!py-4">
                Conhecer nossa história
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href="#editorial" variant="secondary" className="!py-3.5 md:!py-4">
                Ver o editorial
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <div className="flex min-h-0 flex-1 flex-col lg:col-span-5 lg:h-full lg:flex-none lg:items-end lg:justify-center">
          <ParallaxImage
            src={heroImage.src}
            alt={heroImage.alt}
            priority
            reveal
            revealDelay={intro + 0.4}
            position="50% 25%"
            className="min-h-0 flex-1 lg:h-[calc(100svh-11rem)] lg:w-[calc((100svh-11rem)*0.75)] lg:max-w-full lg:flex-none"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <motion.p {...fade(1.1)} className="label mt-3 hidden lg:block">
            Editorial — Fashion Closet
          </motion.p>
        </div>
      </div>
    </section>
  );
}
