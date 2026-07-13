import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceFeatures } from "@/components/sections/ServiceFeatures";
import { Gallery } from "@/components/sections/Gallery";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { salaPrivativaFaqs } from "@/lib/faqs";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBriefcase,
  faLock,
  faMugHot,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FaIcon } from "@/components/ui/FaIcon";

export const metadata: Metadata = {
  title: "Sala Privativa · 2 Posições",
  description:
    "Sala privativa para 2 pessoas em coworking executivo no Carmo, Belo Horizonte. Mobiliada, climatizada, com acesso 24h e estrutura premium.",
};

const advantages: { icon: IconDefinition; title: string; desc: string }[] = [
  {
    icon: faLock,
    title: "Privacidade total",
    desc: "Sala fechada e silenciosa, ideal para atender clientes e tratar de assuntos confidenciais.",
  },
  {
    icon: faBriefcase,
    title: "Pronta para operar",
    desc: "Entregue mobiliada, climatizada, com internet corporativa e energia estabilizada.",
  },
  {
    icon: faVolumeHigh,
    title: "Isolamento acústico",
    desc: "Tratamento acústico que permite videoconferências e ligações sem interferências.",
  },
  {
    icon: faMugHot,
    title: "Apoio completo",
    desc: "Recepção, copa executiva, áreas de espera e atendimento concierge inclusos.",
  },
];

const structure = [
  "Mesa executiva para 2 posições",
  "Cadeiras ergonômicas premium",
  "Internet dedicada de alta velocidade",
  "Ar-condicionado individual",
  "Iluminação ajustável",
  "Armário com chave",
  "Acesso biométrico 24h",
  "Recepção com triagem de visitantes",
];

const ideal = [
  "Advogados que recebem clientes regularmente",
  "Contadores com equipe enxuta",
  "Consultores que precisam de discrição",
  "Sócios de pequenas empresas",
  "Profissionais autônomos de alto padrão",
];

const images = [
  {
    src: "/assets/coworking/Foto_090.jpg",
    alt: "Sala de reunião executiva do JHCM Coworking com mesa preta e cadeiras ergonômicas",
  },
  {
    src: "/assets/coworking/Foto_039.jpg",
    alt: "Sala privativa mobiliada com mesa executiva e identidade corporativa",
  },
  {
    src: "/assets/coworking/Foto_013.jpg",
    alt: "Ambiente de sala privativa com TV e estrutura para apresentações",
  },
  {
    src: "/assets/coworking/Foto_067.jpg",
    alt: "Vista ampla da sala privativa executiva JHCM Coworking",
  },
];

export default function SalaPrivativaPage() {
  return (
    <>
      <PageHero
        eyebrow="Sala Privativa · 2 Posições"
        title={
          <>
            Seu escritório <em className="italic text-silver font-display">exclusivo</em> em endereço corporativo premium.
          </>
        }
        description="Um espaço fechado, silencioso e mobiliado para até duas pessoas operarem com total privacidade e estrutura executiva completa."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=80"
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Serviços", href: "/#servicos" },
          { label: "Sala Privativa" },
        ]}
      />

      {/* VANTAGENS */}
      <section className="bg-ink-950 py-28 md:py-36">
        <div className="container">
          <SectionHeading
            eyebrow="Por que escolher"
            title={
              <>
                Mais que uma sala. Um <em className="italic text-silver font-display">posicionamento</em>.
              </>
            }
            description="Uma sala privativa na JHCM comunica seriedade desde o primeiro contato — antes mesmo da primeira palavra."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="h-full bg-ink-950 p-6 sm:p-8 md:p-10">
                  <FaIcon icon={a.icon} className="h-7 w-7 text-silver" />
                  <h3 className="font-display text-xl md:text-2xl font-light text-bone-50 mt-6">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone-300/70">
                    {a.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRUTURA */}
      <section className="bg-ink-900 py-28 md:py-36 noise">
        <div className="container">
          <SectionHeading
            eyebrow="Estrutura disponível"
            title={
              <>
                Tudo <em className="italic text-silver font-display">incluso</em>. Você só traz o notebook.
              </>
            }
          />
          <div className="mt-14">
            <ServiceFeatures items={structure} />
          </div>
        </div>
      </section>

      {/* IDEAL PARA */}
      <section className="bg-ink-950 py-28 md:py-36">
        <div className="container grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Para quem é ideal"
              title="Feita para profissionais que recebem."
              description="Se a sua atividade exige privacidade, silêncio e um ambiente que transmita autoridade, a sala privativa JHCM foi pensada para você."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {ideal.map((it, i) => (
                <Reveal as="li" key={it} delay={i * 0.06}>
                  <div className="flex items-baseline gap-6 border-b border-white/8 pb-5">
                    <span className="font-display text-2xl text-silver w-10">
                      0{i + 1}
                    </span>
                    <span className="font-display text-xl md:text-2xl font-light text-bone-50">
                      {it}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="bg-ink-900 py-28 md:py-36">
        <div className="container">
          <SectionHeading
            eyebrow="Galeria"
            title="Conheça o ambiente."
          />
          <div className="mt-14">
            <Gallery images={images} />
          </div>
        </div>
      </section>

      <FAQSection items={salaPrivativaFaqs} />

      <CTASection
        title={
          <>
            Pronto para ter sua <em className="italic text-silver font-display">sala executiva</em>?
          </>
        }
        description="Agende uma visita para conhecer a estrutura ao vivo e receber uma proposta personalizada."
      />
    </>
  );
}
