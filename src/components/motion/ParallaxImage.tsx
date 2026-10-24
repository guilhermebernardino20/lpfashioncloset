"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Photo from "../landing/Photo";
import { EASE } from "./ease";

type Props = {
  src: string;
  alt: string;
  className?: string; // proporção do quadro, ex.: "aspect-[3/4]"
  priority?: boolean;
  sizes?: string;
  reveal?: boolean; // abre de uma máscara estreita até o quadro completo ao carregar
  revealDelay?: number;
};

// Pan vertical (y: -10% → 10%) e zoom-out suave da imagem interna conforme o scroll.
export default function ParallaxImage({ src, alt, className = "", priority, sizes, reveal, revealDelay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.22, 1.12]);

  return (
    <motion.div
      ref={ref}
      initial={reveal && !reduced ? { clipPath: "inset(0 36% 0 36%)" } : false}
      animate={{ clipPath: "inset(0 0% 0 0%)" }}
      transition={{ duration: 1.4, ease: EASE, delay: revealDelay }}
      className={`relative overflow-hidden bg-neutral-100 ${className}`}
    >
      <motion.div style={reduced ? undefined : { y, scale }} className="absolute inset-0 will-change-transform">
        <Photo src={src} alt={alt} priority={priority} sizes={sizes} className="h-full" />
      </motion.div>
    </motion.div>
  );
}
