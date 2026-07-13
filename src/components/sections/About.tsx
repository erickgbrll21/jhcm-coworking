import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { stats } from "@/lib/services";
import aboutPhoto from "../../../assets/coworking/Foto_110.jpg";

export function About() {
  return (
    <section className="relative bg-ink-900 py-20 sm:py-28 md:py-40 noise">
      <div className="container grid min-w-0 max-w-full gap-12 items-center sm:gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="min-w-0 lg:col-span-6">
          <SectionHeading
            eyebrow="Sobre a JHCM"
            title={
              <>
                Um <em className="italic text-silver font-display">endereço</em> à altura do
                seu negócio.
              </>
            }
            description="A JHCM Coworking ocupa o 12º andar de um dos prédios mais prestigiados do Carmo, em Belo Horizonte. Aqui, advogados, contadores, consultores e empresas encontram a estrutura executiva, a discrição e a credibilidade que o mercado exige."
          />

          <Reveal delay={0.15}>
            <div className="mt-10 grid max-w-md grid-cols-2 gap-4 sm:gap-8">
              {stats.map((s) => (
                <div key={s.label} className="min-w-0 border-l border-silver/30 pl-3 sm:pl-5">
                  <div className="font-display text-4xl md:text-5xl text-bone-50">
                    <NumberTicker value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-[10px] uppercase leading-snug tracking-[0.14em] text-bone-300/60 sm:text-xs sm:tracking-[0.18em]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-12">
              <Button href="/sobre" variant="outline">
                Conheça a JHCM
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="min-w-0 lg:col-span-6">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/8 shadow-elev">
              <Image
                src={aboutPhoto}
                alt="Mesa de reunião e ambiente corporativo do JHCM Coworking em Belo Horizonte"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
                <p className="font-display text-lg italic leading-snug text-bone-50 sm:text-2xl [overflow-wrap:anywhere]">
                  &ldquo;Cada detalhe pensado para que sua empresa transmita a
                  imagem de autoridade que merece.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
