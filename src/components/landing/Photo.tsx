"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string; // define a proporção, ex.: "aspect-[3/4]"
  tone?: "light" | "dark";
  priority?: boolean;
  sizes?: string;
};

// Imagem com fallback neutro e discreto caso o arquivo não exista ou falhe.
export default function Photo({ src, alt, className = "", tone = "light", priority, sizes = "(min-width: 1024px) 40vw, 100vw" }: Props) {
  const [failed, setFailed] = useState(false);
  const bg = tone === "dark" ? "bg-[#1a1a19]" : "bg-[#e6e3db]";

  return (
    <div className={`relative w-full overflow-hidden ${bg} ${className}`}>
      {failed ? (
        <div role="img" aria-label={alt} className="absolute inset-0 flex items-end p-4">
          <span className="text-[10px] uppercase tracking-[0.22em] text-gray">Fashion Closet</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          priority={priority}
          sizes={sizes}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
