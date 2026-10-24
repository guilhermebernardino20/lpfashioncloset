"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { EASE } from "./ease";

export type PreviewItem = { id: string; src: string; label: string };

// Foto editorial que segue o cursor com mola. A troca entre fotos é instantânea (todas pré-carregadas, empilhadas).
export function useCursorFollower() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 26, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 26, mass: 0.5 });
  return {
    sx,
    sy,
    follow: (clientX: number, clientY: number, box: DOMRect, jump = false) => {
      const nx = clientX - box.left + 28;
      const ny = clientY - box.top - 110;
      if (jump) {
        sx.jump(nx);
        sy.jump(ny);
      }
      x.set(nx);
      y.set(ny);
    },
  };
}

export default function CursorPreview({
  items,
  activeId,
  caption,
  sx,
  sy,
}: {
  items: PreviewItem[];
  activeId: string | null;
  caption?: string;
  sx: ReturnType<typeof useCursorFollower>["sx"];
  sy: ReturnType<typeof useCursorFollower>["sy"];
}) {
  return (
    <AnimatePresence>
      {activeId && (
        <motion.div
          key="cursor-preview"
          aria-hidden
          style={{ x: sx, y: sy }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="pointer-events-none absolute left-0 top-0 z-20 hidden w-56 will-change-transform md:block"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
            {items.map((it) => (
              <Image key={it.id} src={it.src} alt="" fill sizes="224px" className="object-cover" style={{ opacity: it.id === activeId ? 1 : 0 }} />
            ))}
          </div>
          {caption && <p className="label mt-3 bg-canvas py-1">{caption}</p>}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
