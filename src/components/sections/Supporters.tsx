import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { supporters } from "@/lib/supporters";

export function Supporters() {
  return (
    <section className="relative border-y border-white/5 bg-ink-950 py-20 sm:py-28 md:py-36">
      <div className="container">
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Apoiadores"
          title={
            <>
              Parceiros que compartilham o mesmo{" "}
              <em className="italic text-silver font-display">endereço</em> de excelência.
            </>
          }
          description="No mesmo prédio do Carmo, a JHCM Coworking conta com a estrutura e a credibilidade de referências em advocacia e assessoria contábil."
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 sm:gap-8">
          {supporters.map((supporter, i) => (
            <Reveal key={supporter.name} delay={i * 0.08}>
              <Link
                href={supporter.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex h-full min-h-[140px] flex-col items-center justify-center rounded-2xl border border-white/8 bg-ink-900/50 px-8 py-10 transition-colors duration-500 hover:border-silver/30 hover:bg-ink-900"
                aria-label={`Visitar o site de ${supporter.name}`}
              >
                <div className="relative flex h-16 w-full max-w-[280px] items-center justify-center sm:h-20">
                  <Image
                    src={supporter.logo}
                    alt={supporter.logoAlt}
                    width={560}
                    height={160}
                    unoptimized={supporter.logo.endsWith(".svg")}
                    sizes="(max-width: 640px) 80vw, 280px"
                    className="max-h-full w-auto object-contain opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
