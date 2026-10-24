import { heroImage } from "@/data/fashion-closet";
import Button from "./Button";
import Photo from "./Photo";

export default function Hero() {
  return (
    <section id="topo" className="bg-paper pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-7 lg:pb-6">
          <p className="mb-8 text-[11px] uppercase tracking-[0.28em] text-gray">Fashion Closet — Brands Hub</p>
          <h1 className="font-serif text-[clamp(3rem,9.5vw,8.5rem)] uppercase leading-[0.92] tracking-[-0.01em]">
            Marcas que traduzem o seu <em className="italic">estilo.</em>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-gray">
            Uma seleção de marcas reconhecidas, escolhida para acompanhar diferentes versões de você.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#selecao">Explorar seleção</Button>
            <Button href="#conceito" variant="outline">
              Conhecer o Fashion Closet
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Photo
            src={heroImage.src}
            alt={heroImage.alt}
            priority
            className="aspect-[4/5]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-gray">Seleção · Coleção atual</p>
        </div>
      </div>
    </section>
  );
}
