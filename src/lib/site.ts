export const site = {
  name: "JHCM Coworking",
  shortName: "JHCM",
  tagline: "Coworking executivo no coração de Belo Horizonte",
  description:
    "Espaços corporativos premium em Belo Horizonte. Salas privativas, endereço fiscal, open office e salas de reunião executivas para empresas e profissionais exigentes.",
  url: "https://jhcmcoworking.com.br",
  address: {
    street: "R. Buenos Aires, 10",
    complement: "12º andar",
    district: "Carmo",
    city: "Belo Horizonte",
    state: "MG",
    zip: "30315-570",
    full:
      "R. Buenos Aires, 10 — 12º andar, Carmo, Belo Horizonte/MG, 30315-570",
  },
  whatsapp: {
    raw: "5531985614005",
    display: "(31) 9 8561-4005",
    link: "https://wa.me/5531985614005?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20a%20JHCM%20Coworking.",
  },
  phone: {
    display: "(31) 3295-0497",
    link: "tel:+553132950497",
  },
  email: "contato@jhcmcoworking.com.br",
  hours: {
    week: "Segunda a sexta · 08h às 19h",
    weekend: "Acesso 24h para clientes contratados",
  },
  socials: {
    instagram: "https://instagram.com/jhcmcoworking",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=R.%20Buenos%20Aires%2C%2010%20-%20Carmo%2C%20Belo%20Horizonte%20-%20MG%2C%2030315-570&output=embed",
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Sala Privativa", href: "/servicos/sala-privativa" },
  { label: "Endereço Fiscal", href: "/servicos/endereco-fiscal" },
  { label: "Open Office", href: "/servicos/open-office" },
  { label: "Salas de Reunião", href: "/servicos/salas-de-reuniao" },
  { label: "Contato", href: "/contato" },
];
