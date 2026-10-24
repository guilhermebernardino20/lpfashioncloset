// Marca tipográfica provisória (não há logo oficial em public/).
// Para usar o logo oficial, adicione-o em public/ e troque este componente por <Image>.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-2 font-serif uppercase leading-none ${className}`}>
      <span className="text-[22px] tracking-[0.14em]">Fashion Closet</span>
    </span>
  );
}
