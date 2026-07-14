import type { SectorContent } from "./types";
import { defaultImpactMetrics, defaultMethodologySteps } from "./shared";

export const educacaoSector: SectorContent = {
  slug: "educacao",
  name: "Educação",
  caseSector: "Educação",
  seo: {
    title: "Educação — CORA Soluções Digitais",
    description:
      "Software sob medida para educação: LMS, trilhas de aprendizado, portais acadêmicos, apps e soluções com IA para instituições e edtechs.",
  },
  hero: {
    kicker: "Setor",
    title: "Software sob medida",
    titleAccent: "para Educação",
    subtitle:
      "Plataformas de aprendizado, portais acadêmicos e experiências digitais que aumentam engajamento, conclusão e eficiência operacional.",
    ctaLabel: "Fale conosco",
  },
  domains: {
    kicker: "Domínios",
    title: "Áreas em que atuamos em educação",
    subtitle:
      "Da edtech à instituição — construímos produtos que conectam conteúdo, alunos e gestão acadêmica.",
    items: [
      {
        title: "LMS e trilhas",
        description:
          "Cursos, módulos, progresso, avaliações e trilhas personalizadas para alunos e colaboradores.",
      },
      {
        title: "Portais acadêmicos",
        description:
          "Matrícula, notas, documentos, comunicação e self-service para alunos e responsáveis.",
      },
      {
        title: "Conteúdo e engajamento",
        description:
          "Experiências interativas, gamificação leve e jornadas que aumentam a taxa de conclusão.",
      },
      {
        title: "Gestão educacional",
        description:
          "Turmas, professores, frequência, financeiro escolar e indicadores pedagógicos.",
      },
      {
        title: "Certificações",
        description:
          "Emissão digital, validação e histórico de conquistas para cursos e programas.",
      },
      {
        title: "Integrações edtech",
        description:
          "ERPs acadêmicos, pagamentos, videoconferência e ferramentas de conteúdo.",
      },
    ],
  },
  reasons: {
    kicker: "Por que a CORA",
    title: "Engenharia feita para aprendizado em escala",
    items: [
      {
        title: "Foco em conclusão e engajamento",
        description:
          "Desenhamos jornadas e métricas que mostram se o aluno avança — não só se acessa a plataforma.",
      },
      {
        title: "Personalização com critério",
        description:
          "Trilhas e recomendações alinhadas ao perfil do aluno, sem complexidade desnecessária.",
      },
      {
        title: "Operação acadêmica integrada",
        description:
          "Conectamos LMS, portal e sistemas administrativos para reduzir retrabalho da equipe.",
      },
      {
        title: "Entrega com transparência",
        description:
          "Sprints curtos e validação com pedagogia e operação — produto útil de verdade.",
      },
    ],
  },
  metrics: {
    kicker: "Impacto",
    title: "O que priorizamos em cada entrega de educação",
    items: defaultImpactMetrics,
  },
  services: {
    kicker: "Serviços",
    title: "O que entregamos para educação",
    subtitle:
      "Do LMS ao portal — cobrimos o ciclo com foco em experiência de aprendizado e gestão.",
    items: [
      {
        title: "Plataformas de aprendizado",
        items: [
          "LMS, trilhas e avaliações",
          "Portais para alunos e instituições",
          "Apps mobile de estudo e acompanhamento",
        ],
      },
      {
        title: "APIs e integrações",
        items: [
          "ERPs acadêmicos e pagamentos",
          "Videoconferência e conteúdo",
          "SSO e sincronização de usuários",
        ],
      },
      {
        title: "Automação e dados",
        items: [
          "Relatórios de progresso e conclusão",
          "Alertas de evasão e engajamento",
          "Dashboards para coordenação e CS",
        ],
      },
      {
        title: "IA aplicada à educação",
        items: [
          "Trilhas personalizadas",
          "Tutores e assistentes de estudo",
          "Insights sobre desempenho e conteúdo",
        ],
      },
    ],
  },
  cases: {
    kicker: "Cases",
    title: "Projetos em educação",
    subtitle: "Uma amostra do que já construímos para instituições e edtechs.",
  },
  methodology: {
    kicker: "Metodologia",
    title: "Como conduzimos projetos de educação",
    subtitle: "Quatro etapas claras — do entendimento pedagógico à evolução contínua.",
    steps: defaultMethodologySteps,
  },
  faq: {
    kicker: "FAQ",
    title: "Perguntas frequentes sobre educação",
    items: [
      {
        question: "Vocês constroem LMS do zero ou integram plataformas existentes?",
        answer:
          "Os dois. Podemos criar LMS sob medida, evoluir portais acadêmicos ou integrar ferramentas existentes conforme a estratégia do produto.",
      },
      {
        question: "Dá para personalizar trilhas com IA?",
        answer:
          "Sim. Implementamos recomendações, trilhas adaptativas e assistentes alinhados ao conteúdo e aos objetivos de aprendizado.",
      },
      {
        question: "Como medem engajamento e conclusão?",
        answer:
          "Definimos eventos e dashboards de progresso, conclusão, retenção e pontos de abandono para orientar produto e pedagogia.",
      },
      {
        question: "Quanto tempo leva uma plataforma educacional?",
        answer:
          "MVPs (trilhas + progresso) saem em poucas sprints. Ecossistemas com portal, pagamentos e múltiplos papéis seguem em fases.",
      },
      {
        question: "Vocês fazem manutenção contínua?",
        answer:
          "Sim. Oferecemos suporte e evolução alinhados ao calendário acadêmico e ao roadmap do produto.",
      },
    ],
  },
};
