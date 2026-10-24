import { contact, messages, nav, whatsappLink } from "@/data/fashion-closet";
import EditorialMarquee from "@/components/motion/EditorialMarquee";
import Logo from "./Logo";

const linkCls = "transition-opacity duration-300 hover:opacity-60";

export default function Footer() {
  return (
    <footer className="text-fg">
      <EditorialMarquee duration={70} className="border-t-0" />
      <div className="mx-auto max-w-[1400px] border-t border-neutral-200 px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo className="h-[14px]" />
          </div>

          <nav aria-label="Rodapé" className="md:col-span-3">
            <p className="mb-4 label">Navegação</p>
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
            <p className="mb-4 label">Contato</p>
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

        <p className="mt-16 text-xs leading-relaxed text-neutral-500">
          © 2026 Fashion Closet. Todos os direitos reservados. As marcas citadas pertencem aos
          seus respectivos titulares; a menção não implica parceria oficial.
        </p>
      </div>
    </footer>
  );
}
