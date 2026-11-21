"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { messages, whatsappLink } from "@/data/fashion-closet";
import { EASE } from "@/components/motion/ease";

// Atalho de contato sempre à mão no celular: aparece depois do hero.
export default function WhatsAppFab() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > window.innerHeight * 0.9));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappLink(messages.general)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a gente no WhatsApp"
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-black text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] md:hidden"
          style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.6-4.2A8.5 8.5 0 1 1 20.5 11.5Z" />
            <path d="M9 8.8c.3 2.7 2.6 5 5.3 5.4l1-1.1-1.9-1-.8.7a3.6 3.6 0 0 1-1.7-1.7l.7-.8-1-1.9-1.6.4Z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
