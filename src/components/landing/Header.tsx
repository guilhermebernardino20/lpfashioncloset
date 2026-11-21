"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { contact, heroImage, messages, nav, resellerUrl, whatsappLink } from "@/data/fashion-closet";
import Logo from "./Logo";
import { useIntroDelay } from "./Preloader";
import { EASE } from "@/components/motion/ease";

// Link com filete que se desenha no hover e permanece na seção ativa.
function NavLink({ href, label, i, external, active, intro, pill }: { href: string; label: string; i: number; external?: boolean; active: string; intro: number; pill?: boolean }) {
  const on = active === href;
  if (pill) {
    return (
      <motion.a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: intro + 0.5 + i * 0.06 }}
        className="group relative flex h-8 items-center overflow-hidden border border-white/35 px-4 text-[10px] font-black uppercase tracking-[0.24em] whitespace-nowrap text-white transition-colors duration-500 hover:text-black"
      >
        <span aria-hidden className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
        <span className="relative">{label}</span>
      </motion.a>
    );
  }
  return (
    <motion.a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-current={on ? "true" : undefined}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE, delay: intro + 0.5 + i * 0.06 }}
      className={`group relative py-2 text-[10.5px] font-black uppercase tracking-[0.24em] whitespace-nowrap transition-colors duration-500 ${
        on ? "text-white" : "text-white/65 hover:text-white"
      }`}
    >
      {label}
      <span
        aria-hidden
        className={`absolute inset-x-0 bottom-0 h-px origin-left bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          on ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </motion.a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const intro = useIntroDelay();
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 50);
    // Some ao rolar para baixo e volta ao rolar para cima (só depois da primeira dobra).
    const prev = scrollY.getPrevious() ?? 0;
    const delta = v - prev;
    if (v < 240) setHidden(false);
    else if (delta > 6) setHidden(true);
    else if (delta < -6) setHidden(false);

    // Seção ativa: a última cujo topo já passou de 40% da tela.
    const line = window.innerHeight * 0.4;
    let current = "";
    for (const item of nav) {
      const el = document.querySelector(item.href);
      if (el && el.getBoundingClientRect().top <= line) current = item.href;
    }
    setActive(current);
  });

  // Menu aberto: trava a rolagem e fecha com Esc.
  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;
  const items = [...nav.map((n) => ({ label: n.label, href: n.href as string, ext: false })), { label: "Portal revendedor", href: resellerUrl as string, ext: true }];

  return (
    <>
    <motion.header
      initial={{ y: -32, opacity: 0, height: 80 }}
      animate={{ y: hidden && !open ? "-100%" : 0, opacity: 1, height: solid ? 56 : 84 }}
      transition={{ duration: 0.8, ease: EASE, delay: intro, y: { duration: 0.6, ease: EASE, delay: 0 }, height: { duration: 0.45, ease: EASE, delay: 0 } }}
      className={`fixed inset-x-0 top-0 z-50 border-b text-white transition-[background-color,border-color,backdrop-filter] duration-300 ${
        open ? "border-white/20 bg-black" : solid ? "border-white/10 bg-black/60 backdrop-blur-xl backdrop-saturate-150" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-5 md:px-10">
        <nav aria-label="Principal" className="hidden flex-1 items-center gap-9 xl:flex [&:hover_a:not(:hover)]:!text-white/35">
          {nav.slice(0, 3).map((item, i) => (
            <NavLink key={item.href} href={item.href} label={item.label} i={i} active={active} intro={intro} />
          ))}
        </nav>

        <a href="#topo" className="shrink-0 xl:flex-none xl:px-10 2xl:px-16" aria-label="Fashion Closet — início" onClick={() => setOpen(false)}>
          <motion.div initial={false} animate={{ scale: solid ? 0.82 : 1 }} transition={{ duration: 0.45, ease: EASE }} className="origin-center invert">
            <Logo />
          </motion.div>
        </a>

        <nav aria-label="Secundária" className="hidden flex-1 items-center justify-end gap-9 xl:flex [&:hover_a:not(:hover):not(:last-child)]:!text-white/35">
          {nav.slice(3).map((item, i) => (
            <NavLink key={item.href} href={item.href} label={item.label} i={i + 3} active={active} intro={intro} />
          ))}
          <NavLink href={resellerUrl} label="Revendedor" i={5} external pill active={active} intro={intro} />
        </nav>

        <button
          type="button"
          className="-mr-3 flex h-11 items-center gap-3 px-3 text-[10.5px] font-black uppercase tracking-[0.24em] text-white xl:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{open ? "Fechar" : "Menu"}</span>
          <span aria-hidden className="relative block h-2.5 w-5">
            <motion.i
              animate={{ y: open ? 4.5 : 0, rotate: open ? 45 : 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="absolute left-0 top-0 block h-px w-full origin-center bg-current"
            />
            <motion.i
              animate={{ y: open ? -4.5 : 0, rotate: open ? -45 : 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="absolute bottom-0 left-0 block h-px w-full origin-center bg-current"
            />
          </span>
        </button>
      </div>

          {/* Véu sutil no topo para garantir leitura sobre qualquer foto */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-[140%] bg-gradient-to-b from-black/45 to-transparent transition-opacity duration-500 ${solid ? "opacity-0" : "opacity-100"}`}
      />
      <motion.span
        aria-hidden
        style={{ scaleX: progress, opacity: solid && !open ? 1 : 0 }}
        className="absolute inset-x-0 -bottom-px h-px origin-left bg-white/80 transition-opacity duration-300"
      />
    </motion.header>

    <AnimatePresence>
      {open && (
        <motion.nav
          id="menu-mobile"
          aria-label="Menu mobile"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.6, ease: EASE, delay: 0.05 } }}
          transition={{ duration: 0.8, ease: EASE }}
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#0b0b0b] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[88px] text-white xl:hidden"
        >
          {/* Foto ao fundo, bem suave, para dar profundidade */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 0.22, scale: 1 }}
            transition={{ duration: 1.6, ease: EASE }}
            className="pointer-events-none absolute inset-0"
          >
            <Image src={heroImage.src} alt="" fill sizes="100vw" className="object-cover" style={{ objectPosition: "50% 40%" }} />
          </motion.div>
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b0b] via-[#0b0b0b]/70 to-[#0b0b0b]" />

          <ul className="relative flex-1">
            {items.map((item, i) => {
              const on = item.href === active;
              return (
                <li key={item.href} className="relative">
                  <motion.span
                    aria-hidden
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.1, ease: EASE, delay: 0.25 + i * 0.07 }}
                    className="absolute inset-x-0 top-0 h-px origin-left bg-white/15"
                  />
                  <div className="overflow-hidden">
                    <motion.a
                      href={item.href}
                      {...(item.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      aria-current={on ? "true" : undefined}
                      onClick={() => setOpen(false)}
                      initial={{ y: "105%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.9, ease: EASE, delay: 0.2 + i * 0.07 }}
                      className={`flex min-h-[68px] items-baseline gap-5 py-4 transition-opacity duration-300 active:opacity-50 ${
                        on ? "opacity-100" : "opacity-85"
                      }`}
                    >
                      <span aria-hidden className="w-6 shrink-0 text-[10px] font-black tracking-[0.2em] text-white/45">
                        {item.ext ? "↗" : String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="display text-[clamp(1.75rem,8.4vw,2.5rem)] leading-none">{item.label}</span>
                      {on && <span aria-hidden className="ml-auto self-center h-1 w-1 rounded-full bg-white" />}
                    </motion.a>
                  </div>
                </li>
              );
            })}
            <li aria-hidden className="relative h-px">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.25 + items.length * 0.07 }}
                className="absolute inset-0 origin-left bg-white/15"
              />
            </li>
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.65 }}
            className="relative mt-10"
          >
            <a
              href={whatsappLink(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center border border-white/40 text-[10.5px] font-black uppercase tracking-[0.28em] text-white transition-colors duration-300 active:bg-white active:text-black"
            >
              Falar no WhatsApp
            </a>
            <div className="mt-6 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.22em] text-white/50">
              <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer" className="py-2 text-white/80">
                {contact.instagram.handle}
              </a>
              <span>Curitiba</span>
            </div>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
    </>
  );
}
