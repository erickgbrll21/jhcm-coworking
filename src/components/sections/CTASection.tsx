import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FaIcon } from "@/components/ui/FaIcon";
import { site } from "@/lib/site";

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
};

export function CTASection({
  eyebrow = "Próximo passo",
  title = (
    <>
      Leve sua empresa para um <em className="text-silver not-italic italic font-display">ambiente profissional</em>.
    </>
  ),
  description = "Agende uma visita ou fale agora pelo WhatsApp. Nossa equipe está pronta para apresentar a estrutura ideal para o seu negócio.",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-28 md:py-36">
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-silver/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-silver/5 blur-3xl" />
      </div>
      <div className="relative container max-w-5xl min-w-0 text-center">
        <Reveal>
          <span className="eyebrow justify-center">
            <span className="h-px w-10 bg-silver" />
            {eyebrow}
            <span className="h-px w-10 bg-silver" />
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="heading-display mt-8 text-3xl text-balance sm:text-4xl md:text-6xl lg:text-7xl [overflow-wrap:anywhere]">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-bone-300/75 [overflow-wrap:anywhere] md:text-lg">
            {description}
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="mt-12 flex w-full min-w-0 flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href={site.whatsapp.link} variant="primary" external icon={false}>
              <span className="inline-flex items-center gap-2">
                <FaIcon icon={faWhatsapp} className="h-3.5 w-3.5" />
                Falar no WhatsApp
              </span>
            </Button>
            <Button href="/contato" variant="outline">
              Agendar visita
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
