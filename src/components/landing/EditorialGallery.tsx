"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { editorial } from "@/data/fashion-closet";
import { EASE } from "@/components/motion/ease";
import ParallaxImage from "@/components/motion/ParallaxImage";
import TextReveal from "@/components/motion/TextReveal";

// Mosaico assimétrico: proporções 3:4 e 4:5, larguras e deslocamentos variados.
const tiles = [
  { place: "md:col-span-5 md:col-start-1", ratio: "aspect-[3/4]", delay: 0 },
  { place: "md:col-span-3 md:col-start-7 md:mt-32", ratio: "aspect-[4/5]", delay: 0.35 },
  { place: "md:col-span-4 md:col-start-9 md:-mt-4", ratio: "aspect-[3/4]", delay: 0.15 },
  { place: "md:col-span-4 md:col-start-2 md:-mt-16", ratio: "aspect-[4/5]", delay: 0.5 },
  { place: "md:col-span-3 md:col-start-8 md:mt-12", ratio: "aspect-[3/4]", delay: 0.25 },
  { place: "md:col-span-5 md:col-start-1 md:-mt-8", ratio: "aspect-[4/5]", delay: 0.4 },
];

const item: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: (delay: number) => ({ opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE, delay } }),
};

// Colunas ímpares sobem mais rápido que as pares (parallax diferencial).
function Tile({ index, src, alt, brand, ratio, place, delay }: { index: number; src: string; alt: string; brand?: string; ratio: string; place: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const odd = index % 2 === 0; // 1ª, 3ª, 5ª…
  const y = useTransform(scrollYProgress, [0, 1], odd ? [80, -80] : [24, -24]);

  return (
    <motion.div custom={delay} variants={item} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className={place}>
      <motion.div ref={ref} style={reduced ? undefined : { y }} className="will-change-transform">
        <ParallaxImage src={src} alt={alt} className={ratio} />
        {brand && <p className="label mt-4">{brand}</p>}
      </motion.div>
    </motion.div>
  );
}

export default function EditorialGallery() {
  return (
    <section id="editorial" className="border-t border-neutral-200 py-20 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="label mb-6">Editorial</p>
        <TextReveal as="h2" text="Fashion Closet" className="display mb-20 text-5xl md:text-8xl" />
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-12">
          {editorial.map((img, i) => {
            const t = tiles[i % tiles.length];
            return <Tile key={img.id} index={i} src={img.src} alt={img.alt} brand={img.brand} ratio={t.ratio} place={t.place} delay={t.delay} />;
          })}
        </div>
      </div>
    </section>
  );
}
