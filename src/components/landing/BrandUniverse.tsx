"use client";

import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import { brands, pieceCount } from "@/data/fashion-closet";
import CursorPreview, { useCursorFollower } from "@/components/motion/CursorPreview";
import { useCatalog } from "./CatalogProvider";

// Brand Matrix: foto editorial segue o cursor; clique filtra a seleção e rola até ela.
export default function BrandUniverse() {
  const { setFilter } = useCatalog();
  const lenis = useLenis();
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const { sx, sy, follow } = useCursorFollower();
  const activeBrand = brands.find((b) => b.id === active);
  const count = activeBrand ? pieceCount(activeBrand.name) : 0;

  const track = (e: React.MouseEvent, jump = false) => {
    const box = sectionRef.current?.getBoundingClientRect();
    if (box) follow(e.clientX, e.clientY, box, jump);
  };

  const choose = (id: string) => {
    setFilter(id);
    if (lenis) lenis.scrollTo("#selecao", { offset: -60, duration: 1.4 });
    else document.getElementById("selecao")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="marcas"
      onMouseMove={(e) => track(e)}
      onMouseLeave={() => setActive(null)}
      className="relative overflow-hidden border-t border-neutral-200 py-28 md:py-40"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-16 flex items-end justify-between gap-6">
          <h2 className="label">Universo de marcas</h2>
          <p className="label hidden sm:block">Clique para filtrar a seleção</p>
        </div>

        <ul>
          {brands.map((brand, i) => {
            const n = pieceCount(brand.name);
            const dim = active !== null && active !== brand.id;
            return (
              <li key={brand.id} className="border-t border-neutral-200 last:border-b">
                <button
                  type="button"
                  onClick={() => choose(brand.id)}
                  onMouseEnter={(e) => {
                    if (active === null) track(e, true);
                    setActive(brand.id);
                  }}
                  onFocus={() => setActive(brand.id)}
                  onBlur={() => setActive(null)}
                  aria-label={`${brand.name} — ver ${n} ${n === 1 ? "peça" : "peças"} na seleção`}
                  className={`group grid w-full items-baseline gap-3 py-8 text-left transition-opacity duration-500 md:grid-cols-12 md:gap-10 md:py-12 ${dim ? "opacity-30" : ""}`}
                >
                  <span className="label md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                  <span className="display text-[clamp(3.25rem,12vw,10.5rem)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform md:col-span-7 md:group-hover:translate-x-4">
                    {brand.name}
                  </span>
                  <span className="md:col-span-4 md:justify-self-end md:text-right">
                    <span className="block max-w-xs text-sm leading-relaxed text-neutral-500 md:ml-auto">{brand.descriptor}</span>
                    <span className="label mt-3 block md:hidden">
                      {n} {n === 1 ? "peça" : "peças"} — Ver seleção
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <CursorPreview
        items={brands.map((b) => ({ id: b.id, src: b.campaign, label: b.name }))}
        activeId={active}
        caption={activeBrand ? `${activeBrand.name} — ${count} ${count === 1 ? "peça" : "peças"} no acervo` : undefined}
        sx={sx}
        sy={sy}
      />
    </section>
  );
}
