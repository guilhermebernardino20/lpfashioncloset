"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { developer } from "@/data/fashion-closet";
import { EASE } from "@/components/motion/ease";

// Assinatura "Desenvolvido por" com o monograma; ao clicar abre um pop-up sobre o desenvolvedor.
export default function DeveloperCredit() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Trava a rolagem, fecha com Esc, foca o botão de fechar e devolve o foco ao fechar.
  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="group inline-flex items-center gap-3 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-white/60 transition-colors duration-500 hover:text-white"
      >
        <span>Desenvolvido por</span>
        <Image
          src="/brand/dev/gb-paper.png"
          alt="GB — Guilherme Bernardino"
          width={900}
          height={901}
          className="h-6 w-6 object-contain opacity-80 transition-[opacity,transform] duration-500 group-hover:rotate-[8deg] group-hover:opacity-100"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-end justify-center md:items-center md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <button type="button" aria-label="Fechar" tabIndex={-1} onClick={() => setOpen(false)} className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm" />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="dev-title"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="theme-dark relative z-10 flex max-h-[92svh] w-full flex-col overflow-y-auto border border-white/15 bg-[#0b0b0b] text-white md:max-w-md"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center bg-black/40 text-white backdrop-blur-sm"
              >
                <span aria-hidden className="relative block h-3 w-3">
                  <i className="absolute left-0 top-1/2 block h-px w-full rotate-45 bg-current" />
                  <i className="absolute left-0 top-1/2 block h-px w-full -rotate-45 bg-current" />
                </span>
              </button>

              <div className="flex flex-1 flex-col p-7 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-12 md:p-10">
                <Image src="/brand/dev/gb-paper.png" alt="" width={900} height={901} className="h-16 w-16 object-contain md:h-20 md:w-20" />
                <p className="label mt-8">Desenvolvido por</p>
                <h2 id="dev-title" className="display mt-3 text-[clamp(1.75rem,7vw,2.25rem)] leading-[1.05]">
                  {developer.name}
                </h2>
                <p className="mt-3 text-[10px] font-black uppercase leading-relaxed tracking-[0.2em] text-white/60">
                  {developer.roles.join(" · ")}
                </p>

                <p className="mt-6 text-[15px] leading-relaxed text-white/80">{developer.about}</p>
                <p className="mt-4 text-sm text-white/55">
                  {developer.institution} — {developer.location}
                </p>

                <a
                  href={developer.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta relative mt-8 flex h-14 items-center justify-center overflow-hidden border border-white/40 text-[10.5px] font-black uppercase tracking-[0.26em] text-white transition-colors duration-500 hover:text-black"
                >
                  <span aria-hidden className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:translate-y-0" />
                  <span className="relative">Ver portfólio</span>
                </a>

                <ul className="mt-6 flex flex-wrap gap-x-6 text-[10px] font-black uppercase tracking-[0.22em] text-white/55">
                  {developer.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-block py-2 transition-colors hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
