type Variant = "solid" | "outline" | "solid-light" | "outline-light";

const styles: Record<Variant, string> = {
  solid: "bg-ink text-paper border-ink hover:bg-paper hover:text-ink",
  outline: "bg-transparent text-ink border-ink hover:bg-ink hover:text-paper",
  "solid-light": "bg-paper text-ink border-paper hover:bg-transparent hover:text-paper",
  "outline-light": "bg-transparent text-paper border-paper hover:bg-paper hover:text-ink",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

export default function Button({ href, children, variant = "solid", external, className = "" }: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center rounded-none border px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
