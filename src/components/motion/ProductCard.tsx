"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { messages, whatsappLink, type Product } from "@/data/fashion-closet";
import { EASE } from "./ease";

// Look completo → detalhe em crossfade no hover; botão flutuante sobe do rodapé da foto.
export default function ProductCard({ product: p, cover }: { product: Product; cover: boolean }) {
  const sizes = cover ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw";
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`group ${cover ? "lg:col-span-2 lg:row-span-2" : ""}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
        <Image
          src={p.image}
          alt={`${p.name} — ${p.brand}`}
          fill
          sizes={sizes}
          className="object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-0 group-focus-within:opacity-0"
        />
        <Image
          src={p.image}
          alt=""
          aria-hidden
          fill
          sizes={sizes}
          style={{ transformOrigin: p.detailOrigin }}
          className="scale-[1.9] object-cover opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-focus-within:opacity-100"
        />
        <a
          href={whatsappLink(messages.product(p.name, p.brand))}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-x-0 bottom-0 bg-[#F4F2ED] px-5 py-4 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-fg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform max-lg:translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 lg:focus-visible:translate-y-0"
        >
          Consultar disponibilidade
        </a>
      </div>
      <div className="mt-5">
        <p className="text-[10px] uppercase tracking-widest text-neutral-500">
          {p.brand} — {p.category}
        </p>
        <h3 className={`display mt-3 leading-[1] ${cover ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"}`}>{p.name}</h3>
      </div>
    </motion.article>
  );
}
