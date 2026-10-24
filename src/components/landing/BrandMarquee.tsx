import Image from "next/image";
import { brands } from "@/data/fashion-closet";

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 items-center gap-16 pr-16 md:gap-24 md:pr-24 ${hidden ? "marquee-dup" : ""}`}
    >
      {brands.map((b) => (
        <li key={b.id} className="flex shrink-0 items-center">
          <Image
            src={b.logo}
            alt={hidden ? "" : b.name}
            width={b.logoHeight * 4}
            height={b.logoHeight}
            unoptimized
            style={{ height: b.logoHeight, width: "auto" }}
          />
        </li>
      ))}
    </ul>
  );
}

export default function BrandMarquee() {
  return (
    <section aria-labelledby="curadoria" className="border-y border-neutral-200 py-14 md:py-20">
      <h2 id="curadoria" className="label mb-10 px-5 text-center md:mb-14">
        Nossa curadoria de marcas
      </h2>
      <div className="marquee overflow-hidden">
        <div className="marquee-track">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
