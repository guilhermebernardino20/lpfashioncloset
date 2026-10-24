"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/components/motion/ease";
import Logo from "./Logo";

// Tela de carregamento falsa: contador de 0 a 100, depois a cortina sobe e revela o hero.
export const INTRO_SECONDS = 2.2; // quando o hero começa a animar

export function useIntroDelay() {
  const reduced = useReducedMotion();
  return reduced ? 0 : INTRO_SECONDS;
}

export default function Preloader() {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) return;
    document.documentElement.style.overflow = "hidden";
    const controls = animate(0, 100, {
      duration: 1.7,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setProgress(Math.round(v)),
      onComplete: () => setTimeout(() => setDone(true), 250),
    });
    return () => {
      controls.stop();
      document.documentElement.style.overflow = "";
    };
  }, [reduced]);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && !reduced && (
        <motion.div
          key="preloader"
          role="status"
          aria-label="Carregando"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="preloader fixed inset-0 z-[100] flex flex-col justify-between bg-canvas px-5 py-6 will-change-transform md:px-10 md:py-8"
        >
          <p className="label">[ Curadoria de peças de outlet ]</p>
          <div className="flex justify-center">
            <Logo className="h-[14px] md:h-[18px]" />
          </div>
          <div>
            <div className="mb-4 flex items-end justify-between">
              <p className="label">Carregando</p>
              <p className="display text-5xl tabular-nums md:text-7xl" aria-hidden>
                {String(progress).padStart(3, "0")}
              </p>
            </div>
            <div className="h-px bg-neutral-200">
              <div className="h-px origin-left bg-fg" style={{ transform: `scaleX(${progress / 100})` }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
