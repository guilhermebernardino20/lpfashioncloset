"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
      {" "}
    </motion.span>
  );
}

// As palavras ganham opacidade total conforme o scroll avança.
export default function ScrollWords({ text, className = "", as: Tag = "p" }: { text: string; className?: string; as?: "h2" | "p" }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = text.split(" ");

  if (reduced) return <Tag className={className}>{text}</Tag>;

  return (
    <Tag ref={ref as React.RefObject<never>} aria-label={text} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, Math.min(1, (i + 1) / words.length)]}>
          {w}
        </Word>
      ))}
    </Tag>
  );
}
