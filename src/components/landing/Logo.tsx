import Image from "next/image";

// Logo oficial (public/brand/logo.png): só o wordmark "Fashion Closet", em tom escuro para fundo claro.
export default function Logo({ className = "h-[11px]" }: { className?: string }) {
  return (
    <Image
      src="/brand/logo.png"
      alt="Fashion Closet"
      width={1211}
      height={64}
      unoptimized
      priority
      className={`w-auto ${className}`}
    />
  );
}
