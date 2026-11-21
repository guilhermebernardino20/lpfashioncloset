import { contact, messages, nav, whatsappLink } from "@/data/fashion-closet";
import EditorialMarquee from "@/components/motion/EditorialMarquee";
import DeveloperCredit from "./DeveloperCredit";
import Logo from "./Logo";

const linkCls = "inline-block py-1.5 transition-opacity duration-300 hover:opacity-60";

export default function Footer() {
  return (
    <footer className="theme-dark text-fg">
      <EditorialMarquee duration={70} className="border-t-0" />
      <div className="mx-auto max-w-[1400px] border-t border-neutral-200 px-5 pb-28 pt-16 md:px-10 md:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Logo className="h-[19px] md:h-[19px]" />
          </div>

          <nav aria-label="Rodapé" className="md:col-span-3">
            <p className="mb-4 label">Navegação</p>
            <ul className="space-y-0.5 text-sm">
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
            <ul className="space-y-0.5 text-sm">
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

        <div className="mt-14 flex flex-col gap-6 border-t border-neutral-200 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-xs leading-relaxed text-neutral-500">
            © 2026 Fashion Closet. Todos os direitos reservados. As marcas citadas pertencem aos
            seus respectivos titulares; a menção não implica parceria oficial.
          </p>
          <DeveloperCredit />
        </div>
      </div>
    </footer>
  );
}
