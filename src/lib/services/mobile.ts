import type { ServiceContent } from "./types";
import { defaultImpactMetrics, defaultMethodologySteps } from "./shared";

export const mobileService: ServiceContent = {
  slug: "mobile",
  name: "Mobile",
  caseSolution: "Mobile",
  seo: {
    title: "Mobile — CORA Soluções Digitais",
    description:
      "Apps nativos e híbridos para Android e iOS — experiência premium, performance e integração com backends e APIs.",
  },
  hero: {
    kicker: "Serviço",
    title: "Aplicativos mobile",
    titleAccent: "que performam",
    subtitle:
      "Desenvolvemos apps para Android e iOS com foco em experiência, estabilidade e integração com o restante do seu produto digital.",
    ctaLabel: "Fale conosco",
  },
  capabilities: {
    kicker: "Capacidades",
    title: "O que entregamos em mobile",
    subtitle:
      "Do protótipo à loja — cobrimos o ciclo de apps com engenharia e cuidado com a experiência.",
    items: [
      {
        title: "Apps nativos e híbridos",
        description:
          "React Native, Kotlin e Swift conforme o caso — performance e time-to-market no equilíbrio certo.",
      },
      {
        title: "Experiência do usuário",
        description:
          "Fluxos claros, offline quando necessário e interfaces alinhadas às guidelines de cada plataforma.",
      },
      {
        title: "Integração com APIs",
        description:
          "Consumo de backends, autenticação, push notifications e sincronização de dados.",
      },
      {
        title: "Apps de campo e operação",
        description:
          "Ferramentas para motoristas, equipes clínicas, vendas e operação em movimento.",
      },
      {
        title: "Publicação nas lojas",
        description:
          "Preparação para App Store e Google Play, builds, certificados e políticas de review.",
      },
      {
        title: "Evolução contínua",
        description:
          "Novas features, correções e acompanhamento de métricas de crash e engajamento.",
      },
    ],
  },
  reasons: {
    kicker: "Por que a CORA",
    title: "Mobile com engenharia de produto",
    items: [
      {
        title: "Performance de verdade",
        description:
          "Otimizamos startup, listas e animações — app rápido é requisito, não detalhe.",
      },
      {
        title: "Backend e app juntos",
        description:
          "Desenhamos contratos de API com o mobile em mente: paginação, cache e estados de erro.",
      },
      {
        title: "UX para o contexto real",
        description:
          "Telas pensadas para uso com uma mão, conexão instável e jornadas curtas.",
      },
      {
        title: "Entrega com transparência",
        description:
          "Builds de teste, demos em device e sprints alinhados ao roadmap do produto.",
      },
    ],
  },
  metrics: {
    kicker: "Impacto",
    title: "O que priorizamos em cada entrega mobile",
    items: defaultImpactMetrics,
  },
  offers: {
    kicker: "Entregáveis",
    title: "Como estruturamos o projeto mobile",
    subtitle: "Do discovery à publicação e evolução.",
    items: [
      {
        title: "Discovery e UX",
        items: [
          "Mapa de jornadas e protótipos",
          "Definição de stack (nativo/híbrido)",
          "Escopo de MVP e fases",
        ],
      },
      {
        title: "Desenvolvimento",
        items: [
          "App iOS e Android",
          "Integração com APIs e push",
          "Testes em devices reais",
        ],
      },
      {
        title: "Publicação",
        items: [
          "Builds de produção",
          "Submissão nas lojas",
          "Monitoramento inicial pós-lançamento",
        ],
      },
      {
        title: "Evolução",
        items: [
          "Novas features e correções",
          "Melhoria de performance",
          "Suporte contínuo",
        ],
      },
    ],
  },
  cases: {
    kicker: "Cases",
    title: "Projetos mobile",
    subtitle: "Uma amostra do que já construímos em aplicativos.",
  },
  methodology: {
    kicker: "Metodologia",
    title: "Como conduzimos projetos mobile",
    subtitle: "Quatro etapas claras — do entendimento do usuário à evolução contínua.",
    steps: defaultMethodologySteps,
  },
  faq: {
    kicker: "FAQ",
    title: "Perguntas frequentes sobre mobile",
    items: [
      {
        question: "Nativo ou React Native?",
        answer:
          "Depende do produto. Avaliamos performance, time-to-market, time interno e features específicas de plataforma para recomendar a melhor opção.",
      },
      {
        question: "Vocês publicam nas lojas?",
        answer:
          "Sim. Cuidamos de certificados, builds, assets e submissão na App Store e Google Play.",
      },
      {
        question: "O app funciona offline?",
        answer:
          "Quando o caso exige, implementamos cache, filas locais e sincronização — comum em apps de campo e operação.",
      },
      {
        question: "Quanto tempo leva um MVP mobile?",
        answer:
          "MVPs focados costumam sair entre 8 e 16 semanas, dependendo de integrações e complexidade de UX.",
      },
      {
        question: "Fazem manutenção após o lançamento?",
        answer:
          "Sim. Oferecemos evolução contínua, correções e acompanhamento de estabilidade.",
      },
    ],
  },
};
