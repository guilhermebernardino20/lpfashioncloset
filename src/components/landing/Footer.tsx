import { contact, messages, nav, whatsappLink } from "@/data/fashion-closet";
import Logo from "./Logo";

const linkCls = "transition-opacity duration-300 hover:opacity-60";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] border-t border-white/15 px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[#9a978f]">Brands Hub</p>
          </div>

          <nav aria-label="Rodapé" className="md:col-span-3">
            <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#9a978f]">Navegação</p>
            <ul className="space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkCls}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#9a978f]">Contato</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={whatsappLink(messages.general)} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  WhatsApp — atendimento
                </a>
              </li>
              <li>
                <a href={contact.instagram.url} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  Instagram {contact.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-16 text-xs leading-relaxed text-[#9a978f]">
          © 2026 Fashion Closet. Todos os direitos reservados. Farm, Zara e Animale são marcas de
          seus respectivos titulares; a menção não implica parceria oficial. Peças, preços e disponibilidade sujeitos a
          confirmação no atendimento.
        </p>
      </div>
    </footer>
  );
}
