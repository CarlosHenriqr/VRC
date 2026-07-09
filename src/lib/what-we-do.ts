export type WhatWeDoHashLink = {
  kind: "hash";
  label: string;
  hash: string;
};

export type SectorRoute =
  | "/setores/fintech"
  | "/setores/saas-b2b"
  | "/setores/logistica"
  | "/setores/industria"
  | "/setores/saude"
  | "/setores/educacao"
  | "/setores/varejo";

export type ServiceRoute =
  | "/servicos/desenvolvimento-web"
  | "/servicos/mobile"
  | "/servicos/automacao"
  | "/servicos/inteligencia-artificial"
  | "/servicos/consultoria"
  | "/servicos/erp-crm"
  | "/servicos/integracao-de-sistemas";

export type WhatWeDoRouteLink = {
  kind: "route";
  label: string;
  to: "/cases" | "/sobre" | "/contato" | SectorRoute | ServiceRoute;
};

export type WhatWeDoLink = WhatWeDoHashLink | WhatWeDoRouteLink;

export type WhatWeDoSection = {
  title: string;
  links: WhatWeDoLink[];
};

export const WHAT_WE_DO_SECTIONS: WhatWeDoSection[] = [
  {
    title: "Serviços",
    links: [
      { kind: "route", label: "Desenvolvimento Web", to: "/servicos/desenvolvimento-web" },
      { kind: "route", label: "Mobile", to: "/servicos/mobile" },
      { kind: "route", label: "Automação", to: "/servicos/automacao" },
      {
        kind: "route",
        label: "Inteligência Artificial",
        to: "/servicos/inteligencia-artificial",
      },
      { kind: "route", label: "Consultoria", to: "/servicos/consultoria" },
      { kind: "route", label: "ERP / CRM", to: "/servicos/erp-crm" },
      {
        kind: "route",
        label: "Integração de Sistemas",
        to: "/servicos/integracao-de-sistemas",
      },
    ],
  },
  {
    title: "Setores",
    links: [
      { kind: "route", label: "SaaS B2B", to: "/setores/saas-b2b" },
      { kind: "route", label: "Fintech", to: "/setores/fintech" },
      { kind: "route", label: "Logística", to: "/setores/logistica" },
      { kind: "route", label: "Indústria", to: "/setores/industria" },
      { kind: "route", label: "Saúde", to: "/setores/saude" },
      { kind: "route", label: "Educação", to: "/setores/educacao" },
      { kind: "route", label: "Varejo", to: "/setores/varejo" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { kind: "hash", label: "Nosso processo", hash: "processo" },
      { kind: "hash", label: "Por que a VRC", hash: "manifesto" },
      { kind: "route", label: "Cases", to: "/cases" },
      { kind: "route", label: "Sobre a equipe", to: "/sobre" },
    ],
  },
];
