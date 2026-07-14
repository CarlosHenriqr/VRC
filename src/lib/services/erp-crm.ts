import type { ServiceContent } from "./types";
import { defaultImpactMetrics, defaultMethodologySteps } from "./shared";

export const erpCrmService: ServiceContent = {
  slug: "erp-crm",
  name: "ERP / CRM",
  caseSolution: "Desenvolvimento Web",
  seo: {
    title: "ERP / CRM — CORA Soluções Digitais",
    description:
      "ERP e CRM sob medida: módulos de vendas, estoque, operações e relacionamento com clientes — integrados ao seu negócio.",
  },
  hero: {
    kicker: "Serviço",
    title: "ERP e CRM",
    titleAccent: "sob medida",
    subtitle:
      "Sistemas de gestão e relacionamento desenhados para o seu processo — sem forçar o negócio a caber em um pacote genérico.",
    ctaLabel: "Fale conosco",
  },
  capabilities: {
    kicker: "Capacidades",
    title: "O que entregamos em ERP e CRM",
    subtitle:
      "Do pipeline comercial ao estoque — módulos que conversam entre si e com o restante da operação.",
    items: [
      {
        title: "CRM e pipeline",
        description:
          "Leads, oportunidades, automações de follow-up e painéis para times comerciais.",
      },
      {
        title: "ERP modular",
        description:
          "Estoque, compras, vendas, financeiro e operações sob medida para o seu fluxo.",
      },
      {
        title: "Atendimento e CS",
        description:
          "Tickets, histórico do cliente e visão 360 para suporte e sucesso do cliente.",
      },
      {
        title: "Permissões e multi-empresa",
        description:
          "Papéis, unidades e isolamento de dados alinhados à estrutura da organização.",
      },
      {
        title: "Integrações",
        description:
          "E-mail, WhatsApp, gateways, marketplaces e sistemas legados conectados.",
      },
      {
        title: "Relatórios e BI",
        description:
          "Indicadores de vendas, operação e financeiro para decisão no dia a dia.",
      },
    ],
  },
  reasons: {
    kicker: "Por que a CORA",
    title: "Gestão feita para o seu processo",
    items: [
      {
        title: "Sob medida, sem reinventar tudo",
        description:
          "Construímos o que diferencia o seu negócio e integramos o que já funciona bem.",
      },
      {
        title: "Adoção pela operação",
        description:
          "Telas e fluxos validados com quem usa — CRM e ERP só geram valor se forem usados.",
      },
      {
        title: "Dados consistentes",
        description:
          "Uma fonte de verdade entre comercial, operação e financeiro — menos planilha paralela.",
      },
      {
        title: "Evolução contínua",
        description:
          "Módulos novos entram sem travar o que já está em produção.",
      },
    ],
  },
  metrics: {
    kicker: "Impacto",
    title: "O que priorizamos em cada entrega de ERP/CRM",
    items: defaultImpactMetrics,
  },
  offers: {
    kicker: "Entregáveis",
    title: "Como estruturamos o projeto",
    subtitle: "Do mapeamento de processos aos módulos em produção.",
    items: [
      {
        title: "Discovery operacional",
        items: [
          "Mapeamento de processos atuais",
          "Definição de módulos prioritários",
          "Modelo de dados e permissões",
        ],
      },
      {
        title: "CRM",
        items: [
          "Pipeline e automações",
          "Cadastro e histórico do cliente",
          "Painéis comerciais",
        ],
      },
      {
        title: "ERP",
        items: [
          "Estoque, vendas e operações",
          "Financeiro e conciliação",
          "Relatórios gerenciais",
        ],
      },
      {
        title: "Integração e evolução",
        items: [
          "Conectores com sistemas existentes",
          "Treinamento e go-live",
          "Melhorias contínuas",
        ],
      },
    ],
  },
  cases: {
    kicker: "Cases",
    title: "Projetos de ERP e CRM",
    subtitle: "Uma amostra de sistemas de gestão e relacionamento que entregamos.",
  },
  methodology: {
    kicker: "Metodologia",
    title: "Como conduzimos projetos de ERP/CRM",
    subtitle: "Quatro etapas claras — do processo atual à evolução contínua.",
    steps: defaultMethodologySteps,
  },
  faq: {
    kicker: "FAQ",
    title: "Perguntas frequentes sobre ERP / CRM",
    items: [
      {
        question: "Por que não usar um ERP de prateleira?",
        answer:
          "Pacotes genéricos funcionam até o processo ser o diferencial. Quando o fluxo é específico, sob medida evita customizações caras e frágeis em cima de produto fechado.",
      },
      {
        question: "Dá para começar só com CRM ou só estoque?",
        answer:
          "Sim. Entregamos por módulos — começamos pelo que gera mais valor e expandimos com a operação estável.",
      },
      {
        question: "Vocês migram dados do sistema antigo?",
        answer:
          "Sim. Planejamos migração, limpeza e coexistência para não perder histórico crítico.",
      },
      {
        question: "Quanto tempo leva?",
        answer:
          "Um módulo focado (ex.: pipeline) sai em poucas sprints. ERP completo segue em fases.",
      },
      {
        question: "Incluem treinamento da equipe?",
        answer:
          "Sim. Go-live inclui alinhamento com usuários-chave e materiais de apoio à adoção.",
      },
    ],
  },
};
