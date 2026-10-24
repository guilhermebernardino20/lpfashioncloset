"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { contact, nav, resellerUrl } from "@/data/fashion-closet";
import Logo from "./Logo";
import { EASE } from "@/components/motion/ease";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  const solid = scrolled || open;
  const linkCls = "text-xs uppercase tracking-[0.25em] text-neutral-500 transition-colors duration-300 hover:text-black";

  return (
    <motion.header
      initial={{ y: -32, opacity: 0, height: 80 }}
      animate={{ y: 0, opacity: 1, height: solid ? 60 : 80 }}
      transition={{ duration: 0.8, ease: EASE, height: { duration: 0.45, ease: EASE } }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        solid ? "border-neutral-200 bg-canvas/80 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a href="#topo" className="shrink-0" aria-label="Fashion Closet — início" onClick={() => setOpen(false)}>
          <motion.div initial={false} animate={{ scale: solid ? 0.82 : 1 }} transition={{ duration: 0.45, ease: EASE }} className="origin-left">
            <Logo />
          </motion.div>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-10 xl:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={linkCls}>
              {item.label}
            </a>
          ))}
          <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer" className={linkCls}>
            Instagram
          </a>
          <a href={resellerUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
            Revendedores
          </a>
        </nav>

        <button
          type="button"
          className="text-xs uppercase tracking-[0.25em] text-neutral-500 xl:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="absolute inset-x-0 top-full border-b border-neutral-200 bg-canvas px-5 pb-6 xl:hidden">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-t border-neutral-200">
                <a href={item.href} onClick={() => setOpen(false)} className="display block py-5 text-3xl">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="border-t border-neutral-200">
              <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer" className="display block py-5 text-3xl">
                Instagram
              </a>
            </li>
            <li className="border-t border-neutral-200">
              <a href={resellerUrl} target="_blank" rel="noopener noreferrer" className="display block py-5 text-3xl">
                Revendedores
              </a>
            </li>
          </ul>
        </nav>
      )}
    </motion.header>
  );
}
