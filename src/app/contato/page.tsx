import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { contatoFaqs } from "@/lib/faqs";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FaIcon } from "@/components/ui/FaIcon";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a JHCM Coworking. Telefone, WhatsApp, e-mail e endereço no Carmo, Belo Horizonte.",
};

const cards: {
  icon: IconDefinition;
  label: string;
  value: string;
  href: string;
  cta: string;
}[] = [
  {
    icon: faWhatsapp,
    label: "WhatsApp",
    value: site.whatsapp.display,
    href: site.whatsapp.link,
    cta: "Conversar agora",
  },
  {
    icon: faPhone,
    label: "Telefone",
    value: site.phone.display,
    href: site.phone.link,
    cta: "Ligar",
  },
  {
    icon: faEnvelope,
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
    cta: "Enviar e-mail",
  },
  {
    icon: faLocationDot,
    label: "Endereço",
    value: `${site.address.street}, ${site.address.complement}`,
    href: `https://maps.google.com/?q=${encodeURIComponent(site.address.full)}`,
    cta: "Ver no mapa",
  },
];

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Fale com a JHCM"
        title={
          <>
            Vamos <em className="italic text-silver font-display">conversar</em>.
          </>
        }
        description="Agende uma visita, peça uma proposta ou tire suas dúvidas. Respondemos com agilidade e cuidado."
        image="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=2400&q=80"
        crumbs={[{ label: "Início", href: "/" }, { label: "Contato" }]}
      />

      {/* CARDS DE CONTATO */}
      <section className="bg-ink-950 py-16 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex h-full min-w-0 flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:border-silver/40 hover:bg-white/[0.04] sm:p-7"
                >
                  <FaIcon icon={c.icon} className="h-7 w-7 text-silver" />
                  <div className="text-[11px] uppercase tracking-[0.24em] text-bone-300/60 mt-6">
                    {c.label}
                  </div>
                  <div className="mt-2 min-w-0 font-display text-lg leading-snug text-bone-50 break-words sm:text-xl">
                    {c.value}
                  </div>
                  <span className="mt-auto pt-6 text-[11px] uppercase tracking-[0.22em] text-silver inline-flex items-center gap-2">
                    {c.cta}
                    <FaIcon
                      icon={faArrowRight}
                      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="bg-ink-900 py-20 md:py-36 noise">
        <div className="container grid min-w-0 max-w-full gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-10 bg-silver" />
                Formulário
              </span>
              <h2 className="heading-display text-4xl md:text-5xl mt-5">
                Envie sua mensagem.
              </h2>
              <p className="mt-5 text-base text-bone-300/75 max-w-xl leading-relaxed">
                Preencha o formulário abaixo. Ao enviar, você será direcionado
                ao WhatsApp com sua mensagem pré-formatada para confirmação.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-12">
                <ContactForm />
              </div>
            </Reveal>
          </div>

          <aside className="min-w-0 space-y-8 lg:col-span-5">
            <Reveal>
              <div className="rounded-2xl border border-white/8 bg-ink-950 p-8">
                <FaIcon icon={faClock} className="h-6 w-6 text-silver" />
                <h3 className="font-display text-2xl text-bone-50 mt-5">
                  Horário de funcionamento
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-bone-300/80">
                  <li className="flex flex-col gap-1 border-b border-white/5 pb-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="shrink-0">Recepção</span>
                    <span className="min-w-0 text-bone-50 [overflow-wrap:anywhere] sm:text-right">{site.hours.week}</span>
                  </li>
                  <li className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <span>Acesso clientes</span>
                    <span className="text-silver">24 horas</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/8 bg-ink-950 p-8">
                <FaIcon icon={faLocationDot} className="h-6 w-6 text-silver" />
                <h3 className="font-display text-2xl text-bone-50 mt-5">
                  Onde estamos
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-bone-300/80 [overflow-wrap:anywhere]">
                  {site.address.full}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(site.address.full)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-silver"
                >
                  Abrir no Google Maps
                  <FaIcon icon={faArrowRight} className="h-3 w-3" />
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <FAQSection items={contatoFaqs} />

      {/* MAPA */}
      <section className="bg-ink-950">
        <div className="relative h-[42svh] min-h-[260px] w-full overflow-hidden border-t border-white/5 sm:h-[420px] md:h-[520px]">
          <iframe
            src={site.mapsEmbed}
            className="map-frame absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa ${site.name}`}
          />
        </div>
      </section>
    </>
  );
}
