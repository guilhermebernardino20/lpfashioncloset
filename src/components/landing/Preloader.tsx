"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/components/motion/ease";
import Logo from "./Logo";

// Tela de carregamento falsa: logo revelado por máscara, palavras que alternam, linha e contador de progresso.
// Ao fim, o conteúdo se dissolve e a cortina sobe revelando o hero.
export const INTRO_SECONDS = 2.2; // quando o hero começa a animar

export function useIntroDelay() {
  const reduced = useReducedMotion();
  return reduced ? 0 : INTRO_SECONDS;
}

const WORDS = ["Curadoria", "Qualidade", "Descoberta"];

export default function Preloader() {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) return;
    document.documentElement.style.overflow = "hidden";
    let t: ReturnType<typeof setTimeout>;
    const controls = animate(0, 100, {
      duration: 1.6,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setProgress(Math.round(v)),
      onComplete: () => {
        setLeaving(true);
        t = setTimeout(() => setDone(true), 350);
      },
    });
    return () => {
      controls.stop();
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, [reduced]);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  const word = WORDS[Math.min(WORDS.length - 1, Math.floor((progress / 100) * WORDS.length))];

  return (
    <AnimatePresence>
      {!done && !reduced && (
        <motion.div
          key="preloader"
          role="status"
          aria-label="Carregando"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="preloader fixed inset-0 z-[100] flex flex-col bg-canvas will-change-transform"
        >
          <motion.div
            animate={{ opacity: leaving ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-1 flex-col items-center justify-center gap-7 px-5"
          >
            <div className="overflow-hidden py-1">
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease: EASE, delay: 0.15 }}
                className="will-change-transform"
              >
                <Logo className="h-[16px] md:h-[22px]" />
              </motion.div>
            </div>
            <div className="h-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={word}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="label"
                >
                  {word}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div animate={{ opacity: leaving ? 0 : 1 }} transition={{ duration: 0.3 }} className="px-5 pb-6 md:px-10 md:pb-8">
            <div className="mb-3 flex justify-end">
              <p className="label tabular-nums" aria-hidden>
                {String(progress).padStart(3, "0")}
              </p>
            </div>
            <div className="h-px bg-neutral-200">
              <div className="h-px origin-left bg-fg will-change-transform" style={{ transform: `scaleX(${progress / 100})` }} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
