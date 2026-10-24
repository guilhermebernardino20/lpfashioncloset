"use client";

import { AnimatePresence, motion } from "framer-motion";
import { brands, pieceCount, productsFor } from "@/data/fashion-closet";
import { EASE } from "@/components/motion/ease";
import ProductCard from "@/components/motion/ProductCard";
import TextReveal from "@/components/motion/TextReveal";
import { useCatalog } from "./CatalogProvider";
import Reveal from "./Reveal";

const tabs = [
  { id: "all", label: "Todas" },
  ...brands.filter((b) => pieceCount(b.name) > 0).map((b) => ({ id: b.id, label: b.name })),
  { id: "featured", label: "Destaques" },
];

export default function ProductSelection() {
  const { filter, setFilter } = useCatalog();
  const list = productsFor(filter);

  return (
    <section id="selecao" className="border-t border-neutral-200 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-14 grid gap-8 md:grid-cols-12">
          <TextReveal as="h2" text="Seleção" className="display text-5xl md:col-span-7 md:text-8xl" />
          <Reveal className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="max-w-xs text-sm leading-relaxed text-neutral-500">
              Peças em destaque. Itens demonstrativos — a disponibilidade real é confirmada no atendimento.
            </p>
          </Reveal>
        </div>

        <div role="group" aria-label="Filtrar peças" className="mb-14 flex gap-8 overflow-x-auto border-b border-neutral-200">
          {tabs.map((t) => {
            const on = filter === t.id;
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(t.id)}
                className={`relative shrink-0 pb-4 text-xs uppercase tracking-[0.25em] transition-colors duration-300 ${on ? "text-fg" : "text-neutral-500 hover:text-black"}`}
              >
                {t.label}
                {on && <motion.span layoutId="tab-underline" transition={{ duration: 0.5, ease: EASE }} className="absolute inset-x-0 -bottom-px h-px bg-fg" />}
              </button>
            );
          })}
        </div>

        <motion.div layout transition={{ duration: 0.6, ease: EASE }} className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {list.map((p, i) => (
              <ProductCard key={p.id} product={p} cover={list.length >= 3 && i === 0} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
