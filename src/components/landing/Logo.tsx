import Image from "next/image";

// Logo oficial em vetor (public/brand/logo.svg): só o wordmark "Fashion Closet", em tom escuro para fundo claro.
export default function Logo({ className = "h-[15px] 2xl:h-[18px]" }: { className?: string }) {
  return (
    <Image
      src="/brand/logo.svg"
      alt="Fashion Closet"
      width={1216}
      height={88}
      unoptimized
      priority
      className={`w-auto ${className}`}
    />
  );
}
