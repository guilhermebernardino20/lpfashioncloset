"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string; // define a proporção, ex.: "aspect-[3/4]"
  priority?: boolean;
  position?: string; // object-position, ex.: "50% 20%"
  zoom?: boolean; // zoom suave no hover (o pai precisa ter a classe `group`)
  sizes?: string;
};

// Imagem com fallback neutro e discreto caso o arquivo não exista ou falhe.
export default function Photo({ src, alt, className = "", priority, zoom, position, sizes = "(min-width: 1024px) 40vw, 100vw" }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative w-full overflow-hidden bg-neutral-100 ${className}`}>
      {failed ? (
        <div role="img" aria-label={alt} className="absolute inset-0 flex items-end p-4">
          <span className="label">Fashion Closet</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={position ? { objectPosition: position } : undefined}
          className={`object-cover ${zoom ? "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" : ""}`}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
