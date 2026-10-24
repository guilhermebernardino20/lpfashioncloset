"use client";

import { motion, type Variants } from "framer-motion";
import { EASE } from "./ease";

const tags = { h1: motion.h1, h2: motion.h2, h3: motion.h3, p: motion.p };

const container: Variants = {
  hidden: {},
  visible: (c: { stagger: number; delay: number }) => ({
    transition: { staggerChildren: c.stagger, delayChildren: c.delay },
  }),
};
const unit: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

type Props = {
  text: string;
  as?: keyof typeof tags;
  className?: string;
  by?: "word" | "char";
  delay?: number;
  stagger?: number; // atraso progressivo por unidade (padrão 0.03s)
};

// Palavras (ou letras) sobem de dentro de uma máscara (overflow-hidden) com stagger.
export default function TextReveal({ text, as = "h2", className = "", by = "word", delay = 0, stagger = 0.03 }: Props) {
  const Tag = tags[as];
  const words = text.split(" ");
  return (
    <Tag
      aria-label={text}
      className={className}
      variants={container}
      custom={{ stagger, delay }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden className="-mb-[0.06em] -mt-[0.16em] inline-block overflow-hidden pb-[0.06em] pt-[0.16em] align-top">
          {by === "char" ? (
            Array.from(w).map((ch, j) => (
              <motion.span key={j} variants={unit} className="inline-block will-change-transform">
                {ch}
              </motion.span>
            ))
          ) : (
            <motion.span variants={unit} className="inline-block will-change-transform">
              {w}
            </motion.span>
          )}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
