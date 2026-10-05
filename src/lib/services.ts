import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBriefcase,
  faBuilding,
  faChalkboardUser,
  faClock,
  faGrip,
  faShield,
  faSnowflake,
  faUsers,
  faWifi,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

export type Service = {
  slug: string;
  href: string;
  title: string;
  short: string;
  description: string;
  icon: IconDefinition;
  image: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "sala-privativa",
    href: "/servicos/sala-privativa",
    title: "Sala Privativa · 2 Posições",
    short: "Escritório exclusivo, mobiliado e silencioso, pronto para operar.",
    description:
      "Uma sala fechada, climatizada e mobiliada, projetada para até duas pessoas. Ambiente reservado para atender clientes, conduzir reuniões e operar com total privacidade.",
    icon: faBriefcase,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Mesa executiva para 2 pessoas",
      "Internet corporativa de alta velocidade",
      "Ar-condicionado e isolamento acústico",
      "Acesso 24h, 7 dias por semana",
    ],
  },
  {
    slug: "endereco-fiscal",
    href: "/servicos/endereco-fiscal",
    title: "Endereço Fiscal e Comercial",
    short: "Endereço empresarial premium em BH para abrir e operar sua empresa.",
    description:
      "Utilize o endereço da JHCM como sede fiscal e comercial da sua empresa. Receba correspondências, registre sua CNPJ em local prestigiado e ganhe credibilidade imediata.",
    icon: faBuilding,
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Endereço fiscal e comercial em zona nobre",
      "Recebimento e triagem de correspondências",
      "Suporte para abertura e regularização de CNPJ",
      "Imagem corporativa de alto padrão",
    ],
  },
  {
    slug: "open-office",
    href: "/servicos/open-office",
    title: "Open Office Privativo",
    short: "Estação de trabalho dedicada em ambiente compartilhado executivo.",
    description:
      "Uma estação privativa em ambiente compartilhado de alto padrão. Ideal para profissionais que buscam flexibilidade sem abrir mão de estrutura e networking.",
    icon: faGrip,
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Estação dedicada, mobiliada e ergonômica",
      "Acesso 24h com controle individual",
      "Áreas de convivência, café e copa",
      "Ambiente silencioso e profissional",
    ],
  },
  {
    slug: "salas-de-reuniao",
    href: "/servicos/salas-de-reuniao",
    title: "Salas de Reunião",
    short: "Salas executivas para 6 e 8 pessoas, equipadas e por hora.",
    description:
      "Reuniões importantes pedem ambientes à altura. Reserve por hora ou por período salas executivas equipadas com videoconferência, TV 4K e suporte completo.",
    icon: faUsers,
    image:
      "https://images.unsplash.com/photo-1582653291997-079a1c1e8f3c?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Configurações para 6 e 8 pessoas",
      "TV 4K, videoconferência e webcam profissional",
      "Reserva por hora, turno ou dia",
      "Apoio de recepção e copa executiva",
    ],
  },
];

export const meetingRooms = [
  {
    name: "Sala Executiva · 6 Pessoas",
    image: "/assets/coworking/Foto_013.jpg",
    capacity: "Até 6 pessoas",
    features: [
      "Mesa oval executiva",
      "TV 4K 55'' com Miracast",
      "Webcam HD e som ambiente",
      "Iluminação ajustável",
    ],
  },
  {
    name: "Sala Diretiva · 8 Pessoas",
    image: "/assets/coworking/Foto_067.jpg",
    capacity: "Até 8 pessoas",
    features: [
      "Mesa diretiva em madeira nobre",
      "TV 4K 65'' com videoconferência",
      "Sistema de áudio profissional",
      "Espaço para apresentações formais",
    ],
  },
] as const;

export const differentials: {
  title: string;
  desc: string;
  icon: IconDefinition;
}[] = [
  {
    title: "Internet corporativa",
    desc: "Link dedicado de alta velocidade com redundância e Wi-Fi 6 em todo o andar.",
    icon: faWifi,
  },
  {
    title: "Acesso 24 horas",
    desc: "Entre e saia quando precisar, com controle de acesso individual e seguro.",
    icon: faClock,
  },
  {
    title: "Estrutura climatizada",
    desc: "Ambientes climatizados, com iluminação natural e mobiliário executivo.",
    icon: faSnowflake,
  },
  {
    title: "Segurança integrada",
    desc: "Portaria, monitoramento, controle de acesso e prédio comercial premium.",
    icon: faShield,
  },
  {
    title: "Ambiente profissional",
    desc: "Andar inteiro dedicado à JHCM, com identidade visual sóbria e silenciosa.",
    icon: faBriefcase,
  },
  {
    title: "Atendimento premium",
    desc: "Recepção dedicada, café especial e suporte concierge ao longo do dia.",
    icon: faWandMagicSparkles,
  },
];

export const stats = [
  { value: 12, suffix: "º", label: "Andar com vista privilegiada" },
  { value: 24, suffix: "h", label: "Acesso disponível ao cliente" },
  { value: 100, suffix: "+", label: "Empresas atendidas" },
  { value: 1, suffix: "Gbps", label: "Link de internet dedicada" },
];

export const audiences = [
  "Advogados",
  "Contadores",
  "Consultores",
  "Startups",
  "Empresas estabelecidas",
  "Profissionais autônomos",
];

export const timeline = [
  {
    year: "2022",
    title: "Nasce a JHCM",
    text: "Fundada com a proposta de oferecer um coworking executivo verdadeiramente premium em Belo Horizonte.",
  },
  {
    year: "2025",
    title: "Concierge corporativo",
    text: "Lançamento do programa de atendimento concierge para clientes contratados.",
  },
];

export const values = [
  {
    title: "Excelência",
    desc: "Cada detalhe da estrutura é pensado para entregar uma experiência impecável.",
    icon: faChalkboardUser,
  },
  {
    title: "Discrição",
    desc: "Ambiente silencioso, sóbrio e reservado — feito para negócios sérios.",
    icon: faBriefcase,
  },
  {
    title: "Confiança",
    desc: "Relacionamento de longo prazo com cada cliente, baseado em transparência.",
    icon: faBuilding,
  },
];
