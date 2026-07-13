import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceFeatures } from "@/components/sections/ServiceFeatures";
import { Gallery } from "@/components/sections/Gallery";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { openOfficeFaqs } from "@/lib/faqs";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faClock,
  faUsers,
  faWifi,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FaIcon } from "@/components/ui/FaIcon";

export const metadata: Metadata = {
  title: "Open Office Privativo",
  description:
    "Estação privativa em open office executivo no Carmo, Belo Horizonte. Acesso 24h, estrutura compartilhada premium e ambiente profissional.",
};

const benefits: { icon: IconDefinition; title: string; desc: string }[] = [
  { icon: faClock, title: "Acesso 24 horas", desc: "Trabalhe quando precisar — madrugada, fins de semana, feriados. O andar está sempre disponível." },
  { icon: faWifi, title: "Internet corporativa", desc: "Link dedicado, Wi-Fi 6 e cabo de rede em cada estação. Estabilidade para o seu trabalho crítico." },
  { icon: faUsers, title: "Networking executivo", desc: "Conviva com profissionais e empresas alinhadas a um padrão executivo de operação." },
  { icon: faWandMagicSparkles, title: "Áreas de apoio", desc: "Copa executiva, lounge, cabines de ligação e salas de reunião com condições especiais." },
];

const structure = [
  "Estação dedicada com mesa ampla",
  "Cadeira ergonômica premium",
  "Internet dedicada de alta velocidade",
  "Wi-Fi 6 em todo o andar",
  "Tomadas e USB de fácil acesso",
  "Armário individual com chave",
  "Cabines fechadas para ligações",
  "Copa executiva com café especial",
  "Lounge e área de descompressão",
];

const images = [
  {
    src: "/assets/coworking/Foto_090.jpg",
    alt: "Sala de reunião executiva do JHCM Coworking com mesa preta e cadeiras ergonômicas",
  },
  {
    src: "/assets/coworking/Foto_080.jpg",
    alt: "Detalhe da mesa de reunião executiva com cadeiras e material corporativo",
  },
  {
    src: "/assets/coworking/open-office-01.jpg",
    alt: "Ambiente do open office privativo JHCM Coworking em Belo Horizonte",
  },
  {
    src: "/assets/coworking/open-office-02.jpg",
    alt: "Estações de trabalho no open office executivo da JHCM",
  },
  {
    src: "/assets/coworking/open-office-03.jpg",
    alt: "Espaço compartilhado premium do open office JHCM Coworking",
  },
];

export default function OpenOfficePage() {
  return (
    <>
      <PageHero
        eyebrow="Open Office Privativo"
        title={
          <>
            Flexibilidade. Estrutura. <em className="italic text-silver font-display">Padrão executivo</em>.
          </>
        }
        description="Uma estação privativa em ambiente compartilhado de alto padrão. Ideal para quem busca flexibilidade sem abrir mão de estrutura, silêncio e profissionalismo."
        image="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=2400&q=80"
        crumbs={[{ label: "Início", href: "/" }, { label: "Serviços" }, { label: "Open Office" }]}
      />

      {/* BENEFÍCIOS */}
      <section className="bg-ink-950 py-28 md:py-36">
        <div className="container">
          <SectionHeading
            eyebrow="Diferenciais"
            title={
              <>
                Mais que uma <em className="italic text-silver font-display">mesa compartilhada</em>.
              </>
            }
            description="O Open Office da JHCM foi pensado para profissionais autônomos, equipes pequenas e consultores que precisam de uma estrutura corporativa séria."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="h-full bg-ink-950 p-6 sm:p-8 md:p-10">
                  <FaIcon icon={b.icon} className="h-7 w-7 text-silver" />
                  <h3 className="font-display text-xl md:text-2xl font-light text-bone-50 mt-6">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone-300/70">
                    {b.desc}
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
            eyebrow="Estrutura compartilhada"
            title="O melhor da estrutura corporativa, sem o custo de um escritório."
          />
          <div className="mt-14">
            <ServiceFeatures items={structure} columns={3} />
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="bg-ink-950 py-28 md:py-36">
        <div className="container">
          <SectionHeading eyebrow="Galeria" title="Veja o ambiente." />
          <div className="mt-14">
            <Gallery images={images} />
          </div>
        </div>
      </section>

      <FAQSection items={openOfficeFaqs} className="bg-ink-900 noise" />

      <CTASection
        title={
          <>
            Sua nova <em className="italic text-silver font-display">estação executiva</em> aguarda.
          </>
        }
        description="Faça uma visita, conheça o espaço e teste por um dia antes de contratar."
      />
    </>
  );
}
