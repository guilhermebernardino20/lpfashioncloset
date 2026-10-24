import { brands } from "@/data/fashion-closet";
import Reveal from "./Reveal";

export default function BrandUniverse() {
  return (
    <section id="marcas" className="bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-14 flex items-end justify-between gap-6">
          <h2 className="text-[11px] uppercase tracking-[0.28em] text-gray">Universo de marcas</h2>
          <p className="hidden text-[11px] uppercase tracking-[0.22em] text-gray sm:block">
            {String(brands.length).padStart(2, "0")} marcas na seleção
          </p>
        </Reveal>

        <ul className="border-t border-ink">
          {brands.map((brand, i) => (
            <li key={brand.id} className="group border-b border-line">
              <Reveal className="grid items-baseline gap-2 py-8 transition-colors duration-500 md:grid-cols-12 md:gap-8 md:py-12">
                <span className="text-[11px] tracking-[0.2em] text-gray md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-[clamp(3.5rem,12vw,10rem)] uppercase leading-[0.9] transition-transform duration-500 md:col-span-7 md:group-hover:translate-x-3">
                  {brand.name}
                </span>
                <span className="max-w-xs text-sm leading-relaxed text-gray md:col-span-4 md:justify-self-end">
                  {brand.descriptor}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
