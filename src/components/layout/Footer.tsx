import Link from "next/link";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { nav, site } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { FaIcon } from "@/components/ui/FaIcon";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink-950 noise">
      <div className="absolute inset-x-0 top-0 h-px gradient-line" />
      <div className="container min-w-0 max-w-full py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-6">
            <Logo className="h-[4.5rem] w-auto md:h-20 lg:h-[5.25rem]" />
            <p className="max-w-sm text-sm leading-relaxed text-bone-300/70">
              {site.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bone-300/70 transition-colors hover:border-silver/50 hover:text-silver"
              >
                <FaIcon icon={faInstagram} className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-5">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.32em] text-silver">
              Navegação
            </h4>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-bone-300/80 transition-colors hover:text-bone-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-5">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.32em] text-silver">
              Contato
            </h4>
            <ul className="space-y-4 text-sm text-bone-300/80">
              <li className="flex gap-3">
                <FaIcon icon={faLocationDot} className="mt-0.5 h-4 w-4 shrink-0 text-silver" />
                <span className="min-w-0 break-words">{site.address.full}</span>
              </li>
              <li className="flex gap-3">
                <FaIcon icon={faPhone} className="mt-0.5 h-4 w-4 shrink-0 text-silver" />
                <a href={site.phone.link} className="hover:text-bone-50">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <FaIcon icon={faEnvelope} className="mt-0.5 h-4 w-4 shrink-0 text-silver" />
                <a href={`mailto:${site.email}`} className="hover:text-bone-50">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex min-w-0 flex-col gap-4 border-t border-white/5 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-full text-xs text-bone-300/50 [overflow-wrap:anywhere]">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p className="max-w-full text-xs text-bone-300/50 [overflow-wrap:anywhere]">
            CNPJ disponível mediante solicitação · {site.address.city}/{site.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
