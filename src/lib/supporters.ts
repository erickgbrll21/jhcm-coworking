export type Supporter = {
  name: string;
  logo: string;
  logoAlt: string;
  href: string;
};

export const supporters: Supporter[] = [
  {
    name: "Botelho e Castro Advogados",
    logo: "/assets/coworking/BCA3.png",
    logoAlt: "Logo Botelho e Castro Advogados",
    href: "https://www.bcadvogados.adv.br/",
  },
  {
    name: "Botelho e Castro Consultores",
    logo: "/assets/coworking/logo.svg",
    logoAlt: "Logo BC Consultores — Botelho e Castro Consultores",
    href: "https://bcconsultores.adv.br/",
  },
];
