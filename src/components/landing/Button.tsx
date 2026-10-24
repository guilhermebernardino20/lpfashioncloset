type Variant = "primary" | "secondary";

// Preenchimento fluido: uma camada sobe do rodapé do botão no hover.
const styles: Record<Variant, { base: string; fill: string }> = {
  primary: { base: "border-fg bg-fg text-canvas hover:text-fg", fill: "bg-canvas" },
  secondary: { base: "border-neutral-300 bg-transparent text-fg hover:border-fg hover:text-canvas", fill: "bg-fg" },
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

export default function Button({ href, children, variant = "primary", external, className = "" }: Props) {
  const s = styles[variant];
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-none border px-7 py-4 text-[11px] font-medium uppercase tracking-[0.25em] transition-colors duration-500 ${s.base} ${className}`}
    >
      <span
        aria-hidden
        className={`absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 ${s.fill}`}
      />
      <span className="relative">{children}</span>
    </a>
  );
}
