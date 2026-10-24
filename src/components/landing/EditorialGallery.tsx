import { editorial } from "@/data/fashion-closet";
import Photo from "./Photo";
import Reveal from "./Reveal";

const ratioClass = { portrait: "aspect-[3/4]", landscape: "aspect-[4/3]", square: "aspect-square" } as const;

// Mosaico assimétrico (desktop): posição por índice.
const placement = [
  "md:col-span-5 md:col-start-1",
  "md:col-span-3 md:col-start-7 md:mt-20",
  "md:col-span-4 md:col-start-9 md:-mt-6",
  "md:col-span-4 md:col-start-2 md:-mt-10",
  "md:col-span-3 md:col-start-8 md:mt-10",
];

export default function EditorialGallery() {
  return (
    <section id="editorial" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-16">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gray">Editorial</p>
          <h2 className="font-serif text-5xl uppercase leading-none md:text-7xl">Fashion Closet</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
          {editorial.map((img, i) => (
            <Reveal key={img.id} className={placement[i % placement.length]}>
              <Photo src={img.src} alt={img.alt} className={ratioClass[img.ratio]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
