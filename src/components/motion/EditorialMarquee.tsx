"use client";

import { motion, useReducedMotion } from "framer-motion";

const PHRASE = "Curadoria — Peças de outlet — Marcas reconhecidas — Curitiba — ";

// Letreiro infinito em baixa velocidade (loop contínuo por translateX).
export default function EditorialMarquee({ className = "", duration = 60 }: { className?: string; duration?: number }) {
  const reduced = useReducedMotion();
  const row = Array.from({ length: 4 }, () => PHRASE).join("");

  if (reduced) {
    return (
      <div className={`overflow-hidden border-y border-neutral-200 py-5 ${className}`}>
        <p className="label px-5 text-center">{PHRASE.replace(/ — $/, "")}</p>
      </div>
    );
  }

  return (
    <div aria-hidden className={`overflow-hidden border-y border-neutral-200 py-5 ${className}`}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
        className="flex w-max will-change-transform"
      >
        {[0, 1].map((k) => (
          <span key={k} className="label shrink-0 whitespace-nowrap tracking-[0.35em]">
            {row}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
