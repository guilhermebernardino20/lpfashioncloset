import { formatPrice, messages, products, whatsappLink } from "@/data/fashion-closet";
import Photo from "./Photo";
import Reveal from "./Reveal";

// Posições do grid editorial (desktop): larguras e deslocamentos variados.
const layout = [
  "lg:col-span-5 lg:col-start-1",
  "lg:col-span-4 lg:col-start-7 lg:mt-24",
  "lg:col-span-3 lg:col-start-10",
  "lg:col-span-3 lg:col-start-2 lg:-mt-8",
  "lg:col-span-5 lg:col-start-6 lg:mt-12",
  "lg:col-span-4 lg:col-start-9 lg:-mt-12",
];
const ratios = ["aspect-[4/5]", "aspect-[3/4]", "aspect-[3/4]", "aspect-[4/5]", "aspect-[4/5]", "aspect-[3/4]"];

export default function ProductSelection() {
  return (
    <section id="selecao" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-16 grid gap-6 md:grid-cols-12">
          <h2 className="font-serif text-5xl uppercase leading-none md:col-span-7 md:text-7xl">Seleção</h2>
          <p className="max-w-sm text-sm leading-relaxed text-gray md:col-span-4 md:col-start-9 md:self-end">
            Peças em destaque. Itens demonstrativos — a disponibilidade real é confirmada no atendimento.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-12">
          {products.map((p, i) => (
            <Reveal key={p.id} className={layout[i % layout.length]}>
              <article>
                <Photo src={p.image} alt={`${p.name} — ${p.brand}`} className={ratios[i % ratios.length]} />
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gray">
                      {p.brand} · {p.category}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl leading-tight">{p.name}</h3>
                  </div>
                  {p.price !== undefined && <p className="pt-1 text-sm tabular-nums">{formatPrice(p.price)}</p>}
                </div>
                <a
                  href={whatsappLink(messages.product(p.name, p.brand))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60"
                >
                  Consultar disponibilidade
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
