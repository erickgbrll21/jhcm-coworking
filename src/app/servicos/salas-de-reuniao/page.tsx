import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { meetingRooms } from "@/lib/services";
import { salasReuniaoFaqs } from "@/lib/faqs";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendar,
  faCheck,
  faClock,
  faMugHot,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FaIcon } from "@/components/ui/FaIcon";

export const metadata: Metadata = {
  title: "Salas de Reunião · 6 e 8 pessoas",
  description:
    "Salas de reunião executivas para 6 e 8 pessoas em Belo Horizonte. Reserva por hora, videoconferência, TV 4K e atendimento premium.",
};

const featuresLine: { icon: IconDefinition; label: string }[] = [
  { icon: faClock, label: "Reserva por hora" },
  { icon: faVideo, label: "Videoconferência HD" },
  { icon: faMugHot, label: "Apoio de copa" },
  { icon: faCalendar, label: "Disponibilidade online" },
];

export default function SalasReuniaoPage() {
  return (
    <>
      <PageHero
        eyebrow="Salas de Reunião"
        title={
          <>
            Reuniões à altura das suas <em className="italic text-silver font-display">decisões</em>.
          </>
        }
        description="Duas salas executivas — 6 e 8 pessoas — equipadas com tudo o que uma reunião importante exige. Reserve por hora, turno ou dia."
        image="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=2400&q=80"
        crumbs={[{ label: "Início", href: "/" }, { label: "Serviços" }, { label: "Salas de Reunião" }]}
      />

      {/* FEATURES LINE */}
      <section className="bg-ink-900 border-y border-white/5 py-10">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuresLine.map((f) => (
            <div key={f.label} className="flex min-w-0 items-center gap-3 sm:gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-silver/30 bg-silver/10 text-silver sm:h-11 sm:w-11">
                <FaIcon icon={f.icon} className="h-4 w-4" />
              </span>
              <span className="min-w-0 text-sm text-bone-50 [overflow-wrap:anywhere] md:text-base">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SALAS */}
      <section className="bg-ink-950 py-28 md:py-36">
        <div className="container">
          <SectionHeading
            eyebrow="Nossas salas"
            title={
              <>
                Escolha o <em className="italic text-silver font-display">formato</em> ideal.
              </>
            }
            description="Dois ambientes pensados para reuniões executivas, com configurações distintas para atender diferentes momentos."
          />

          <div className="mt-16 space-y-20">
            {meetingRooms.map((room, i) => (
              <div
                key={room.name}
                className={`grid lg:grid-cols-12 gap-10 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="lg:col-span-7">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/8">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent" />
                  </div>
                </Reveal>
                <div className="lg:col-span-5">
                  <Reveal>
                    <span className="eyebrow">
                      <span className="h-px w-8 bg-silver" />
                      {room.capacity}
                    </span>
                    <h3 className="heading-display text-4xl md:text-5xl mt-5">
                      {room.name}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <ul className="mt-8 space-y-3">
                      {room.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <FaIcon icon={faCheck} className="h-5 w-5 text-silver mt-0.5 shrink-0" />
                          <span className="text-base text-bone-300/85">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        items={salasReuniaoFaqs}
        title="Tudo o que você precisa saber."
      />

      <CTASection
        title={
          <>
            Reserve sua <em className="italic text-silver font-display">próxima reunião</em>.
          </>
        }
        description="Confirme a disponibilidade pelo WhatsApp em poucos minutos e tenha tudo pronto para o seu encontro."
      />
    </>
  );
}
