"use client";

import { motion } from "framer-motion";
import { editorial } from "@/data/fashion-closet";
import { EASE } from "@/components/motion/ease";
import ParallaxImage from "@/components/motion/ParallaxImage";
import TextReveal from "@/components/motion/TextReveal";

function Tile({ src, alt, brand, delay }: { src: string; alt: string; brand?: string; delay: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      <ParallaxImage src={src} alt={alt} className="aspect-[3/4]" sizes="(min-width: 768px) 33vw, 50vw" />
      {brand && <figcaption className="label mt-4">{brand}</figcaption>}
    </motion.figure>
  );
}

export default function EditorialGallery() {
  return (
    <section id="editorial" className="theme-dark section">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <TextReveal as="h2" text="Fashion Closet" className="display mb-14 text-[clamp(3rem,12vw,11rem)] tracking-[0.04em] md:mb-20" />
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-6 md:gap-y-12">
          {editorial.map((img, i) => (
            <Tile key={img.id} src={img.src} alt={img.alt} brand={img.brand} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
