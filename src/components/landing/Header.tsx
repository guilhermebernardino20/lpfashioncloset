"use client";

import { useEffect, useState } from "react";
import { contact, nav } from "@/data/fashion-closet";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;
  const linkCls = "text-[11px] uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-ink text-paper" : "bg-transparent text-ink"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a href="#topo" aria-label="Fashion Closet — início" onClick={() => setOpen(false)}>
          <Logo tone={solid ? "paper" : "ink"} />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={linkCls}>
              {item.label}
            </a>
          ))}
          <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer" className={linkCls}>
            Instagram
          </a>
        </nav>

        <button
          type="button"
          className="text-[11px] uppercase tracking-[0.2em] md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="border-t border-white/15 px-5 pb-6 md:hidden">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-white/15">
                <a href={item.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-2xl">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 font-serif text-2xl"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
