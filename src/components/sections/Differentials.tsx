import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FaIcon } from "@/components/ui/FaIcon";
import { differentials } from "@/lib/services";

export function Differentials() {
  return (
    <section className="relative bg-ink-950 py-20 sm:py-28 md:py-40">
      <div className="container">
        <SectionHeading
          eyebrow="Diferenciais"
          title={
            <>
              Tudo o que sua operação <em className="italic text-silver font-display">precisa</em>.
            </>
          }
          description="Uma estrutura premium pensada para que você se preocupe apenas com o que importa: o seu negócio."
        />

        <div className="mt-16 grid gap-px bg-white/8 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.04}>
                <div className="group relative h-full min-w-0 bg-ink-950 p-6 transition-colors duration-500 hover:bg-ink-900 sm:p-8 md:p-10">
                  <FaIcon icon={d.icon} className="h-7 w-7 text-silver" />
                  <h3 className="mt-6 font-display text-xl font-light text-bone-50 [overflow-wrap:anywhere] sm:text-2xl">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone-300/70 [overflow-wrap:anywhere]">
                    {d.desc}
                  </p>
                </div>
              </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
