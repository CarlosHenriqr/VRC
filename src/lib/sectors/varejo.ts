import type { SectorContent } from "./types";
import { defaultImpactMetrics, defaultMethodologySteps } from "./shared";

export const varejoSector: SectorContent = {
  slug: "varejo",
  name: "Varejo",
  caseSector: "Varejo",
  seo: {
    title: "Varejo — VRC Solutions",
    description:
      "Software sob medida para varejo: e-commerce, OMS, precificação, estoque, automações e integrações com marketplaces e ERPs.",
  },
  hero: {
    kicker: "Setor",
    title: "Software sob medida",
    titleAccent: "para Varejo",
    subtitle:
      "Do estoque ao checkout — sistemas que unem canais, reduzem ruptura e aceleram a operação omnichannel.",
    ctaLabel: "Fale conosco",
  },
  domains: {
    kicker: "Domínios",
    title: "Áreas em que atuamos no varejo",
    subtitle:
      "Da loja ao marketplace — construímos soluções para venda, estoque, precificação e experiência do cliente.",
    items: [
      {
        title: "E-commerce e catálogo",
        description:
          "Vitrines, busca, carrinho, checkout e gestão de catálogo para marcas e varejistas.",
      },
      {
        title: "OMS e pedidos",
        description:
          "Orquestração de pedidos, split de estoque, fulfillment e status omnichannel.",
      },
      {
        title: "Estoque e reposição",
        description:
          "Visibilidade de estoque, reposição automática e redução de ruptura entre canais.",
      },
      {
        title: "Precificação dinâmica",
        description:
          "Regras de preço, promoções, margem e sincronização com marketplaces.",
      },
      {
        title: "Marketplaces",
        description:
          "Integração de anúncios, pedidos, estoque e financeiro com os principais marketplaces.",
      },
      {
        title: "CRM e fidelidade",
        description:
          "Jornadas de cliente, cupons, programas de fidelidade e comunicação pós-compra.",
      },
    ],
  },
  reasons: {
    kicker: "Por que a VRC",
    title: "Engenharia feita para o ritmo do varejo",
    items: [
      {
        title: "Omnichannel de verdade",
        description:
          "Pedidos, estoque e status sincronizados entre loja, site e marketplaces.",
      },
      {
        title: "Automação que reduz ruptura",
        description:
          "Reposição, precificação e alertas pensados para margem e disponibilidade.",
      },
      {
        title: "Integrações no ecossistema",
        description:
          "ERPs, gateways, marketplaces e operadores logísticos com monitoramento contínuo.",
      },
      {
        title: "Entrega com transparência",
        description:
          "Sprints curtos alinhados a datas comerciais — você evolui o sistema sem travar a operação.",
      },
    ],
  },
  metrics: {
    kicker: "Impacto",
    title: "O que priorizamos em cada entrega de varejo",
    items: defaultImpactMetrics,
  },
  services: {
    kicker: "Serviços",
    title: "O que entregamos para varejo",
    subtitle:
      "Do e-commerce à automação de estoque — cobrimos o ciclo com foco em conversão e operação.",
    items: [
      {
        title: "Comércio digital",
        items: [
          "E-commerce e experiências de compra",
          "OMS e orquestração de pedidos",
          "Portais B2B e apps de loja",
        ],
      },
      {
        title: "APIs e integrações",
        items: [
          "Marketplaces e ERPs",
          "Pagamentos e antifraude",
          "Logística e fulfillment",
        ],
      },
      {
        title: "Automação e dados",
        items: [
          "Reposição e precificação",
          "Dashboards de sell-out e ruptura",
          "Alertas operacionais e de margem",
        ],
      },
      {
        title: "IA aplicada ao varejo",
        items: [
          "Recomendações de produto",
          "Previsão de demanda",
          "Otimização de preço e sortimento",
        ],
      },
    ],
  },
  cases: {
    kicker: "Cases",
    title: "Projetos em varejo",
    subtitle: "Uma amostra do que já construímos para operações de varejo.",
  },
  methodology: {
    kicker: "Metodologia",
    title: "Como conduzimos projetos de varejo",
    subtitle: "Quatro etapas claras — do entendimento comercial à evolução contínua.",
    steps: defaultMethodologySteps,
  },
  faq: {
    kicker: "FAQ",
    title: "Perguntas frequentes sobre varejo",
    items: [
      {
        question: "Vocês integram marketplaces e ERP?",
        answer:
          "Sim. Integramos anúncios, estoque, pedidos e financeiro com marketplaces e ERPs, com monitoramento dos fluxos críticos.",
      },
      {
        question: "Dá para automatizar reposição e precificação?",
        answer:
          "Sim. Implementamos regras e automações de reposição, precificação dinâmica e alertas de ruptura alinhados à margem.",
      },
      {
        question: "Vocês constroem e-commerce do zero?",
        answer:
          "Sim. Criamos vitrines e checkouts sob medida ou evoluímos plataformas existentes, conforme a estratégia da marca.",
      },
      {
        question: "Como lidam com picos de datas comerciais?",
        answer:
          "Arquitetamos para escala com filas, cache e observabilidade — especialmente em campanhas e sazonalidade.",
      },
      {
        question: "Vocês fazem suporte contínuo?",
        answer:
          "Sim. Oferecemos manutenção e evolução com priorização alinhada ao calendário comercial e ao roadmap do negócio.",
      },
    ],
  },
};
