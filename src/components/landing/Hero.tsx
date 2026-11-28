"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroImage } from "@/data/fashion-closet";
import { EASE } from "@/components/motion/ease";
import Photo from "./Photo";
import { useIntroDelay } from "./Preloader";

const WORDMARK = "Fashion Closet";

// Linhas que sobem de dentro de uma máscara (revelação editorial).
function MaskLines({ lines, delay, className }: { lines: string[]; delay: number; className: string }) {
  return (
    <p className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden py-[1px]">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease: EASE, delay: delay + i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </p>
  );
}

// Primeira dobra: a foto "revela" por trás do corte da abertura (clareia e assenta),
// o wordmark sobe letra a letra enquanto o espaçamento se fecha, e um filete se desenha acima.
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const intro = useIntroDelay();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="topo" className="theme-dark relative h-[100svh] min-h-[600px] overflow-hidden">
      {/* Foto: começa escura e ampliada, e assenta enquanto as metades da abertura se afastam */}
      <motion.div style={{ y: photoY }} className="absolute inset-0 will-change-transform">
        <motion.div
          initial={{ scale: 1.2, filter: "brightness(0.45)" }}
          animate={{ scale: 1.04, filter: "brightness(1)" }}
          transition={{
            scale: { duration: 3, ease: EASE, delay: Math.max(0, intro - 0.5) },
            filter: { duration: 1.8, ease: "easeOut", delay: Math.max(0, intro - 0.45) },
          }}
          className="absolute inset-0"
        >
          <Photo src={heroImage.src} alt={heroImage.alt} priority sizes="100vw" position="50% 40%" className="h-full" />
        </motion.div>
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/55" />

      <motion.div style={{ y: textY, opacity: textOpacity }} className="absolute inset-0">
        <MaskLines
          lines={["Peças que merecem", "ser descobertas"]}
          delay={intro + 0.9}
          className="micro absolute left-5 top-24 text-white md:left-10"
        />
        <MaskLines
          lines={["Vestir com calma.", "Escolher com olhar."]}
          delay={intro + 1.0}
          className="micro absolute right-5 top-24 hidden text-right text-white sm:block md:right-10"
        />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] md:px-10 md:pb-10">
          {/* Filete que se desenha da esquerda para a direita acima do wordmark */}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, ease: EASE, delay: intro + 0.35 }}
            className="mb-3 block h-px origin-left bg-white/60 md:mb-5"
          />
          <motion.h1
            aria-label={WORDMARK}
            initial={{ letterSpacing: "0.09em" }}
            animate={{ letterSpacing: "0.02em" }}
            transition={{ duration: 2.4, ease: EASE, delay: intro + 0.1 }}
            className="display whitespace-nowrap text-center text-[clamp(2.2rem,9.6vw,10.5rem)] font-extralight uppercase leading-[0.9] text-white"
          >
            {WORDMARK.split("").map((ch, i) =>
              ch === " " ? (
                <span key={i} aria-hidden className="inline-block w-[0.28em]" />
              ) : (
                <span key={i} aria-hidden className="inline-block overflow-hidden py-[0.06em] align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "108%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1.35, ease: EASE, delay: intro + 0.15 + i * 0.05 }}
                  >
                    {ch}
                  </motion.span>
                </span>
              ),
            )}
          </motion.h1>
        </div>
      </motion.div>
    </section>
  );
}
