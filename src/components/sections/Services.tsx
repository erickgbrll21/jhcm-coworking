import Link from "next/link";
import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { services } from "@/lib/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagicCard } from "@/components/ui/MagicCard";
import { Reveal } from "@/components/ui/Reveal";
import { FaIcon } from "@/components/ui/FaIcon";

export function Services() {
  return (
    <section className="relative bg-ink-950 py-20 sm:py-28 md:py-40">
      <div className="container">
        <SectionHeading
          eyebrow="Nossos serviços"
          title={
            <>
              Soluções <em className="italic text-silver font-display">sob medida</em> para
              o seu negócio.
            </>
          }
          description="Escolha o formato que melhor se ajusta à sua operação. Todos os serviços incluem nossa infraestrutura executiva completa."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <MagicCard className="h-full">
                  <Link href={s.href} className="flex h-full min-w-0 flex-col p-6 sm:p-8 md:p-10">
                    <div className="flex items-start justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-silver transition-colors group-hover:border-silver/40">
                        <FaIcon icon={s.icon} className="h-5 w-5" />
                      </span>
                      <FaIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-5 w-5 text-bone-300/40 transition-all duration-500 group-hover:text-silver group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                    <h3 className="mt-8 font-display text-xl font-light leading-tight text-bone-50 sm:text-2xl md:text-3xl [overflow-wrap:anywhere]">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-bone-300/70 grow">
                      {s.short}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-silver">
                      Saiba mais
                      <FaIcon
                        icon={faArrowRight}
                        className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </MagicCard>
              </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
