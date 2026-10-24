import Image from "next/image";

// Logo oficial (public/brand). "ink" = texto escuro (fundos claros); "paper" = texto claro (fundos escuros).
export default function Logo({ tone = "ink", className = "h-9" }: { tone?: "ink" | "paper"; className?: string }) {
  return (
    <Image
      src={tone === "ink" ? "/brand/logo-ink.svg" : "/brand/logo-paper.svg"}
      alt="Fashion Closet — Brands Hub"
      width={302}
      height={72}
      unoptimized
      priority
      className={`w-auto ${className}`}
    />
  );
}
