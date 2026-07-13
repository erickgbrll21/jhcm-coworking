import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import sobreHeroPhoto from "../../../assets/coworking/Foto_090.jpg";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { stats, timeline, values, audiences } from "@/lib/services";
import { sobreFaqs } from "@/lib/faqs";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FaIcon } from "@/components/ui/FaIcon";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "Conheça a JHCM Coworking — coworking executivo premium no Carmo, em Belo Horizonte. Estrutura, história, valores e diferenciais.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title={
          <>
            Um <em className="italic text-silver font-display">coworking executivo</em> pensado para empresas sérias.
          </>
        }
        description="Desde a fundação, a JHCM existe para oferecer um ambiente onde profissionais e empresas possam operar com a credibilidade, a discrição e a estrutura que o mercado corporativo exige."
        image={sobreHeroPhoto}
        imageAlt="Sala de reuniões executiva do JHCM Coworking em Belo Horizonte"
        crumbs={[{ label: "Início", href: "/" }, { label: "Sobre" }]}
      />

      {/* MISSÃO / VISÃO */}
      <section className="bg-ink-950 py-20 sm:py-28 md:py-36">
        <div className="container grid min-w-0 max-w-full items-start gap-10 sm:gap-16 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeading
              eyebrow="Missão"
              title={
                <>
                  Estrutura premium para
                  <br />
                  decisões importantes.
                </>
              }
            />
          </div>
          <div className="min-w-0 space-y-6 lg:col-span-7 lg:pt-8">
            <Reveal>
              <p className="text-base leading-relaxed text-bone-300/85 [overflow-wrap:anywhere] sm:text-lg">
                A JHCM Coworking nasceu da observação de uma necessidade clara
                no mercado mineiro: profissionais e empresas precisavam de um
                espaço executivo verdadeiramente premium — não um coworking
                qualquer, mas um endereço empresarial à altura de suas
                operações.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm leading-relaxed text-bone-300/70 [overflow-wrap:anywhere] sm:text-base">
                Ocupamos o 12º andar de um prédio comercial nobre no Carmo, em
                Belo Horizonte. Aqui, advogados recebem clientes em salas
                silenciosas, contadores operam com infraestrutura corporativa,
                consultores conduzem reuniões com videoconferência profissional
                e startups encontram a credibilidade que precisam para crescer.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-sm leading-relaxed text-bone-300/70 [overflow-wrap:anywhere] sm:text-base">
                Cada espaço, cada material, cada elemento da decoração foi
                escolhido com a mesma intenção: comunicar seriedade, autoridade
                e profissionalismo desde o primeiro contato.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/5 bg-ink-900 py-16 sm:py-24">
        <div className="container grid min-w-0 grid-cols-2 gap-6 sm:gap-10 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="text-center lg:text-left">
                <div className="font-display text-4xl text-bone-50 sm:text-5xl md:text-6xl">
                  <NumberTicker value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-[10px] uppercase leading-snug tracking-[0.16em] text-bone-300/60 sm:text-xs sm:tracking-[0.22em]">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-ink-950 py-20 sm:py-28 md:py-36">
        <div className="container">
          <SectionHeading
            eyebrow="Nossos valores"
            title={
              <>
                Os pilares que <em className="italic text-silver font-display">nos definem</em>.
              </>
            }
          />
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden">
            {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="h-full min-w-0 bg-ink-950 p-6 sm:p-8 md:p-12">
                    <FaIcon icon={v.icon} className="h-8 w-8 text-silver" />
                    <h3 className="mt-8 font-display text-2xl font-light text-bone-50 [overflow-wrap:anywhere] sm:text-3xl">
                      {v.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-bone-300/75 [overflow-wrap:anywhere]">
                      {v.desc}
                    </p>
                  </div>
                </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-ink-900 py-20 sm:py-28 md:py-36 noise">
        <div className="container">
          <SectionHeading
            eyebrow="Nossa trajetória"
            title="Construída com consistência."
          />
          <div className="mt-20 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-16">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <div
                    className={`relative grid md:grid-cols-2 gap-6 ${
                      i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    <div className="min-w-0 pl-10 md:px-12">
                      <div className="font-display text-5xl md:text-6xl text-silver">
                        {t.year}
                      </div>
                      <h4 className="font-display text-2xl text-bone-50 mt-3">
                        {t.title}
                      </h4>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-bone-300/70 [overflow-wrap:anywhere]">
                        {t.text}
                      </p>
                    </div>
                    <div className="hidden md:block" />
                    <span className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-silver shadow-glow" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PÚBLICO */}
      <section className="bg-ink-950 py-20 sm:py-28 md:py-36">
        <div className="container grid min-w-0 max-w-full items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-6">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/8">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
                  alt="Reunião executiva JHCM"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="min-w-0 lg:col-span-6">
            <SectionHeading
              eyebrow="Para quem é a JHCM"
              title={
                <>
                  Quem se sente em <em className="italic text-silver font-display">casa</em> aqui.
                </>
              }
              description="A JHCM atende profissionais e empresas que prezam por excelência, discrição e profissionalismo em cada detalhe."
            />
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {audiences.map((a, i) => (
                <Reveal as="li" key={a} delay={i * 0.04} className="flex items-start gap-3">
                  <FaIcon icon={faCheck} className="h-5 w-5 text-silver mt-0.5" />
                  <span className="min-w-0 text-base text-bone-50 [overflow-wrap:anywhere]">{a}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQSection items={sobreFaqs} className="bg-ink-900 noise" />

      <CTASection
        eyebrow="Conheça pessoalmente"
        title={
          <>
            Visite o espaço.
            <br />
            <em className="italic text-silver font-display">Sinta a diferença.</em>
          </>
        }
        description="A melhor forma de entender o padrão JHCM é vivenciá-lo. Agende uma visita guiada com nossa equipe."
      />
    </>
  );
}
