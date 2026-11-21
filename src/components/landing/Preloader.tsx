"use client";

import { useEffect, useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/components/motion/ease";
import { LOGO_GLYPHS, LOGO_VIEWBOX } from "./logoGlyphs";

// Abertura: o wordmark vetorial se desenha letra a letra (traço), as letras convergem do centro
// para a posição final enquanto o preenchimento entra, filetes se abrem e, no fim, a tela se parte
// ao meio — a logo é cortada na linha central e as duas metades se afastam revelando o hero.
export const INTRO_SECONDS = 3.8; // quando o hero começa a animar

export function useIntroDelay() {
  const reduced = useReducedMotion();
  return reduced ? 0 : INTRO_SECONDS;
}

const HOLD_UNTIL = 3.4; // s: início da abertura
const SPLIT_DURATION = 1.15; // s
const [VB_X, , VB_W] = LOGO_VIEWBOX.split(" ").map(Number);
const CENTER_X = VB_X + VB_W / 2;

function Mark({ leaving }: { leaving: boolean }) {
  const uid = useId().replace(/:/g, "");
  const clipId = `pl-clip-${uid}`;
  const gradId = `pl-shine-${uid}`;
  const [, VB_Y, , VB_H] = LOGO_VIEWBOX.split(" ").map(Number);

  return (
    <motion.div
      initial={false}
      animate={{ scale: leaving ? 1.05 : 1, opacity: leaving ? 0.9 : 1 }}
      transition={{ duration: SPLIT_DURATION, ease: EASE }}
      className="relative w-[min(80vw,1000px)]"
    >
      {/* Filetes que se abrem a partir do centro, com marcas nas pontas */}
      {[-1, 1].map((side) => (
        <motion.span
          key={side}
          aria-hidden
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, ease: EASE, delay: 0.1 }}
          className="absolute left-0 right-0 h-px origin-center bg-fg/60"
          style={{ top: side === -1 ? "-2.6rem" : "auto", bottom: side === 1 ? "-2.6rem" : "auto" }}
        >
          {[0, 1].map((e) => (
            <motion.i
              key={e}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className={`absolute h-2 w-px bg-fg/60 ${side === -1 ? "top-0" : "bottom-0"} ${e === 0 ? "left-0" : "right-0"}`}
            />
          ))}
        </motion.span>
      ))}

      <svg viewBox={LOGO_VIEWBOX} className="block h-auto w-full overflow-visible" role="img" aria-label="Fashion Closet">
        <defs>
          <clipPath id={clipId}>
            {LOGO_GLYPHS.map((g, i) => (
              <path key={i} d={g.d} transform={`translate(${g.x} ${g.y})`} />
            ))}
          </clipPath>
          <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#f3efe8" stopOpacity="0" />
            <stop offset="0.5" stopColor="#f3efe8" stopOpacity="0.95" />
            <stop offset="1" stopColor="#f3efe8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {LOGO_GLYPHS.map((g, i) => {
          const dx = (CENTER_X - (g.x + 7)) * 0.55; // converge para o centro
          const dy = i % 2 === 0 ? -5 : 5;
          const start = 0.25 + i * 0.075;
          return (
            <g key={i} transform={`translate(${g.x} ${g.y})`}>
              <motion.g
                initial={{ x: dx, y: dy, opacity: 0, scaleY: 1.5, filter: "blur(2.2px)" }}
                animate={{ x: 0, y: 0, opacity: 1, scaleY: 1, filter: "blur(0px)" }}
                transition={{
                  x: { duration: 1.7, ease: EASE, delay: 0.2 + i * 0.03 },
                  y: { duration: 1.7, ease: EASE, delay: 0.2 + i * 0.03 },
                  scaleY: { duration: 1.7, ease: EASE, delay: 0.2 + i * 0.03 },
                  opacity: { duration: 0.6, delay: 0.2 + i * 0.03 },
                  filter: { duration: 1.3, ease: "easeOut", delay: 0.3 + i * 0.04 },
                }}
                style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
              >
                <motion.path
                  d={g.d}
                  stroke="currentColor"
                  strokeWidth={0.28}
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, fillOpacity: 0, strokeOpacity: 1 }}
                  animate={{ pathLength: 1, fillOpacity: 1, strokeOpacity: 0 }}
                  transition={{
                    pathLength: { duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: start },
                    fillOpacity: { duration: 0.7, ease: "easeOut", delay: start + 0.95 },
                    strokeOpacity: { duration: 0.5, ease: "easeOut", delay: start + 1.25 },
                  }}
                  fill="currentColor"
                />
              </motion.g>
            </g>
          );
        })}

        {/* Reflexo de luz que atravessa as letras já preenchidas */}
        <g clipPath={`url(#${clipId})`}>
          <motion.rect
            y={VB_Y}
            width={70}
            height={VB_H}
            fill={`url(#${gradId})`}
            initial={{ x: VB_X - 90 }}
            animate={{ x: VB_X + VB_W + 20 }}
            transition={{ duration: 1.25, ease: [0.45, 0, 0.25, 1], delay: 2.15 }}
            style={{ skewX: -18 }}
          />
        </g>
      </svg>
    </motion.div>
  );
}

// Cada metade carrega uma cópia sincronizada da logo; o corte passa exatamente pelo centro.
function Half({ side, leaving }: { side: "top" | "bottom"; leaving: boolean }) {
  const top = side === "top";
  return (
    <motion.div
      initial={false}
      animate={{ y: leaving ? (top ? "-101%" : "101%") : "0%" }}
      transition={{ duration: SPLIT_DURATION, ease: EASE }}
      className={`absolute inset-x-0 h-1/2 overflow-hidden bg-canvas text-fg will-change-transform ${top ? "top-0" : "bottom-0"}`}
    >
      <div className={`absolute inset-x-0 flex h-[200%] items-center justify-center ${top ? "top-0" : "bottom-0"}`}>
        <Mark leaving={leaving} />
      </div>
      {/* Sombra na borda do corte */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: leaving ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className={`absolute inset-x-0 h-24 ${top ? "bottom-0 bg-gradient-to-t" : "top-0 bg-gradient-to-b"} from-black/20 to-transparent`}
      />
      {/* Linha de corte */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: leaving ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={`absolute inset-x-0 h-px bg-fg ${top ? "bottom-0" : "top-0"}`}
      />
    </motion.div>
  );
}

export default function Preloader() {
  const reduced = useReducedMotion();
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) return;
    document.documentElement.style.overflow = "hidden";
    const t1 = setTimeout(() => setLeaving(true), HOLD_UNTIL * 1000);
    const t2 = setTimeout(() => setDone(true), (HOLD_UNTIL + SPLIT_DURATION) * 1000 + 100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.documentElement.style.overflow = "";
    };
  }, [reduced]);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  if (done || reduced) return null;

  return (
    <div role="status" aria-label="Carregando" className="preloader pointer-events-none fixed inset-0 z-[100]">
      <Half side="top" leaving={leaving} />
      <Half side="bottom" leaving={leaving} />
    </div>
  );
}
