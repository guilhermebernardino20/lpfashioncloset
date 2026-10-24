"use client";

import { useRef, useState } from "react";
import { brands } from "@/data/fashion-closet";
import CursorPreview, { useCursorFollower } from "@/components/motion/CursorPreview";

// Brand Matrix: a foto editorial da marca segue o cursor.
export default function BrandUniverse() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const { sx, sy, follow } = useCursorFollower();
  const activeBrand = brands.find((b) => b.id === active);

  const track = (e: React.MouseEvent, jump = false) => {
    const box = sectionRef.current?.getBoundingClientRect();
    if (box) follow(e.clientX, e.clientY, box, jump);
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
        <div className="mb-16">
          <h2 className="label">Universo de marcas</h2>
        </div>

        <ul>
          {brands.map((brand, i) => {
            const dim = active !== null && active !== brand.id;
            return (
              <li key={brand.id} className="border-t border-neutral-200 last:border-b">
                <div
                  onMouseEnter={(e) => {
                    if (active === null) track(e, true);
                    setActive(brand.id);
                  }}
                  className={`group grid w-full items-baseline gap-3 py-8 text-left transition-opacity duration-500 md:grid-cols-12 md:gap-10 md:py-12 ${dim ? "opacity-30" : ""}`}
                >
                  <span className="label md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                  <span className="display text-[clamp(3.25rem,12vw,10.5rem)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform md:col-span-7 md:group-hover:translate-x-4">
                    {brand.name}
                  </span>
                  <span className="md:col-span-4 md:justify-self-end md:text-right">
                    <span className="block max-w-xs text-sm leading-relaxed text-neutral-500 md:ml-auto">{brand.descriptor}</span>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <CursorPreview
        items={brands.map((b) => ({ id: b.id, src: b.campaign, label: b.name }))}
        activeId={active}
        caption={activeBrand?.name}
        sx={sx}
        sy={sy}
      />
    </section>
  );
}
