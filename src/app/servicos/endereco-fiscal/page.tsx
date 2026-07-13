import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import enderecoFiscalHeroPhoto from "../../../../assets/coworking/ISAAK3-min.png";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceFeatures } from "@/components/sections/ServiceFeatures";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { enderecoFiscalFaqs } from "@/lib/faqs";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAward,
  faBuilding,
  faEnvelope,
  faFileCircleCheck,
  faLocationDot,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FaIcon } from "@/components/ui/FaIcon";

export const metadata: Metadata = {
  title: "Endereço Fiscal e Comercial",
  description:
    "Endereço fiscal e comercial em Belo Horizonte para abrir, regularizar e operar sua empresa com credibilidade. JHCM Coworking, Carmo.",
};

const benefits: { icon: IconDefinition; title: string; desc: string }[] = [
  { icon: faLocationDot, title: "Endereço em região nobre", desc: "Sua empresa registrada em um dos endereços corporativos mais valorizados de Belo Horizonte." },
  { icon: faBuilding, title: "CNPJ regularizado", desc: "Endereço aceito pela Junta Comercial e Receita Federal para registro e operação da sua CNPJ." },
  { icon: faEnvelope, title: "Triagem de correspondências", desc: "Recebemos suas correspondências, notificações e encomendas com triagem e aviso digital." },
  { icon: faAward, title: "Credibilidade imediata", desc: "Um endereço sério muda a percepção de clientes, fornecedores e investidores sobre sua empresa." },
  { icon: faShieldHalved, title: "Discrição garantida", desc: "Atendimento profissional e sigiloso em todas as etapas do processo." },
  { icon: faFileCircleCheck, title: "Documentação facilitada", desc: "Suporte para envio de comprovantes de endereço, declarações e relatórios fiscais." },
];

const steps = [
  { n: "01", title: "Contato inicial", text: "Entre em contato pelo WhatsApp ou agende uma visita. Entendemos sua necessidade e apresentamos o plano ideal." },
  { n: "02", title: "Contrato e documentação", text: "Formalizamos o contrato e emitimos os comprovantes necessários para registro do endereço junto à Junta Comercial." },
  { n: "03", title: "Ativação do serviço", text: "Em poucos dias úteis, seu endereço fiscal está ativo e você já pode receber correspondências em nome da empresa." },
  { n: "04", title: "Gestão contínua", text: "Você recebe avisos digitais de cada correspondência. Pode retirar pessoalmente ou solicitar envio." },
];

const includes = [
  "Endereço fiscal para registro de CNPJ",
  "Endereço comercial para uso institucional",
  "Recebimento e triagem de correspondências",
  "Aviso digital a cada correspondência recebida",
  "Suporte para abertura e regularização",
  "Comprovante de endereço sob demanda",
  "Acesso à recepção em horário comercial",
  "Uso preferencial das salas de reunião (sob reserva)",
];

export default function EnderecoFiscalPage() {
  return (
    <>
      <PageHero
        eyebrow="Endereço Fiscal e Comercial"
        title={
          <>
            Um endereço empresarial à altura da sua <em className="italic text-silver font-display">marca</em>.
          </>
        }
        description="Registre sua empresa em um dos endereços corporativos mais nobres de Belo Horizonte e ganhe credibilidade imediata diante de clientes, fornecedores e parceiros."
        image={enderecoFiscalHeroPhoto}
        imageAlt="Edifício corporativo em Belo Horizonte — endereço fiscal JHCM Coworking"
        crumbs={[{ label: "Início", href: "/" }, { label: "Serviços" }, { label: "Endereço Fiscal" }]}
      />

      {/* O QUE É */}
      <section className="bg-ink-950 py-28 md:py-36">
        <div className="container grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="O que é"
              title={
                <>
                  Endereço fiscal,
                  <br />
                  <em className="italic text-silver font-display">explicado</em>.
                </>
              }
            />
          </div>
          <div className="lg:col-span-7 lg:pt-8 space-y-5">
            <Reveal>
              <p className="text-lg leading-relaxed text-bone-300/85">
                Endereço fiscal é o endereço oficial registrado em seu CNPJ
                junto à Receita Federal. É o endereço que aparece em notas
                fiscais, contratos, propostas e documentos oficiais.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-base leading-relaxed text-bone-300/70">
                Já o endereço comercial é como sua empresa se apresenta ao
                mercado. Cartões, site, assinatura de e-mail, perfis em redes
                sociais e materiais institucionais — tudo se beneficia de um
                endereço corporativo sério.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-base leading-relaxed text-bone-300/70">
                Na JHCM, oferecemos os dois serviços em um único plano, com a
                conveniência de ter sua correspondência recebida, triada e
                disponibilizada digitalmente — sem que você precise estar
                fisicamente presente.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-ink-900 py-28 md:py-36 noise">
        <div className="container">
          <SectionHeading
            eyebrow="Benefícios"
            title="Por que escolher um endereço fiscal premium."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="h-full bg-ink-900 p-6 transition-colors duration-500 hover:bg-ink-800 sm:p-8 md:p-10">
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

      {/* PROCESSO */}
      <section className="bg-ink-950 py-28 md:py-36">
        <div className="container">
          <SectionHeading
            eyebrow="Como funciona"
            title={
              <>
                Processo <em className="italic text-silver font-display">simples</em>, ágil e transparente.
              </>
            }
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-white/8 bg-ink-900/40 p-8">
                  <div className="font-display text-5xl text-silver/80">{s.n}</div>
                  <h4 className="font-display text-xl text-bone-50 mt-6">{s.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-bone-300/70">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUSO */}
      <section className="bg-ink-900 py-28 md:py-36">
        <div className="container">
          <SectionHeading
            eyebrow="O que está incluso"
            title="Tudo o que sua empresa precisa."
          />
          <div className="mt-14">
            <ServiceFeatures items={includes} />
          </div>
        </div>
      </section>

      <FAQSection items={enderecoFiscalFaqs} />

      <CTASection
        title={
          <>
            Posicione sua empresa em um <em className="italic text-silver font-display">endereço de prestígio</em>.
          </>
        }
        description="Fale com a equipe JHCM e descubra como ativar seu endereço fiscal em poucos dias úteis."
      />
    </>
  );
}
