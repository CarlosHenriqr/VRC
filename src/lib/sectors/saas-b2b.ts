import type { SectorContent } from "./types";
import { defaultImpactMetrics, defaultMethodologySteps } from "./shared";

export const saasB2bSector: SectorContent = {
  slug: "saas-b2b",
  name: "SaaS B2B",
  caseSector: "SaaS B2B",
  seo: {
    title: "SaaS B2B — VRC Solutions",
    description:
      "Desenvolvimento de plataformas SaaS B2B sob medida: multi-tenant, billing, onboarding, integrações e painéis com foco em retenção e escala.",
  },
  hero: {
    kicker: "Setor",
    title: "Software sob medida",
    titleAccent: "para SaaS B2B",
    subtitle:
      "Construímos produtos SaaS escaláveis — do MVP ao multi-tenant em produção — com arquitetura sólida, onboarding eficiente e integrações que aceleram a adoção.",
    ctaLabel: "Fale conosco",
  },
  domains: {
    kicker: "Domínios",
    title: "Áreas em que atuamos em produtos SaaS",
    subtitle:
      "Da aquisição à retenção — cobrimos o ciclo do produto B2B com engenharia pensada para crescimento recorrente.",
    items: [
      {
        title: "Plataformas multi-tenant",
        description:
          "Isolamento de dados, permissões por organização e arquitetura preparada para milhares de contas.",
      },
      {
        title: "Billing & assinaturas",
        description:
          "Planos, trials, upgrades, cobrança recorrente e integração com gateways de pagamento.",
      },
      {
        title: "Onboarding & ativação",
        description:
          "Fluxos de setup, checklists, empty states e jornadas que reduzem time-to-value.",
      },
      {
        title: "CRM & pipeline",
        description:
          "Gestão de leads, scoring, automações de vendas e painéis para times comerciais.",
      },
      {
        title: "Integrações B2B",
        description:
          "APIs públicas, webhooks, SSO e conectores com ERPs, CRMs e ferramentas do cliente.",
      },
      {
        title: "Analytics de produto",
        description:
          "Métricas de uso, funis de ativação e dashboards para decisões de produto e CS.",
      },
    ],
  },
  reasons: {
    kicker: "Por que a VRC",
    title: "Engenharia feita para produtos que precisam escalar",
    items: [
      {
        title: "Arquitetura multi-tenant de verdade",
        description:
          "Desenhamos isolamento, billing e permissões desde o início — sem remendos quando o produto cresce.",
      },
      {
        title: "Foco em ativação e retenção",
        description:
          "Cada entrega considera a jornada do usuário: onboarding, valor rápido e hábitos de uso.",
      },
      {
        title: "APIs e ecossistema",
        description:
          "Produtos B2B vivem de integrações. Construímos contratos claros, webhooks e documentação utilizável.",
      },
      {
        title: "Entrega com transparência",
        description:
          "Sprints curtos, demos frequentes e roadmap alinhado às métricas do seu SaaS.",
      },
    ],
  },
  metrics: {
    kicker: "Impacto",
    title: "O que priorizamos em cada entrega SaaS",
    items: defaultImpactMetrics,
  },
  services: {
    kicker: "Serviços",
    title: "O que entregamos para SaaS B2B",
    subtitle:
      "Do discovery ao produto em escala — cobrimos o ciclo de engenharia com foco em crescimento recorrente.",
    items: [
      {
        title: "Produto e plataforma",
        items: [
          "Apps web responsivos e painéis administrativos",
          "Multi-tenant, roles e permissões granulares",
          "Billing, trials e gestão de planos",
        ],
      },
      {
        title: "APIs e integrações",
        items: [
          "APIs REST/GraphQL versionadas",
          "Webhooks, SSO e conectores",
          "Documentação e sandbox para parceiros",
        ],
      },
      {
        title: "Automação e dados",
        items: [
          "Workflows de vendas e CS",
          "Pipelines de métricas de produto",
          "Alertas e monitoramento operacional",
        ],
      },
      {
        title: "IA aplicada ao SaaS",
        items: [
          "Scoring e priorização de leads",
          "Assistentes no produto",
          "Insights e recomendações para o usuário",
        ],
      },
    ],
  },
  cases: {
    kicker: "Cases",
    title: "Projetos em SaaS B2B",
    subtitle: "Uma amostra do que já construímos para produtos B2B.",
  },
  methodology: {
    kicker: "Metodologia",
    title: "Como conduzimos projetos SaaS",
    subtitle: "Quatro etapas claras — do entendimento do negócio à evolução contínua.",
    steps: defaultMethodologySteps,
  },
  faq: {
    kicker: "FAQ",
    title: "Perguntas frequentes sobre SaaS B2B",
    items: [
      {
        question: "Vocês constroem SaaS do zero ou evoluem produtos existentes?",
        answer:
          "Os dois. Criamos MVPs e plataformas novas, e também modernizamos produtos existentes — refatorando arquitetura, multi-tenant e integrações sem parar a operação.",
      },
      {
        question: "Como tratam multi-tenant e segurança entre contas?",
        answer:
          "Definimos o modelo de isolamento (schema, row-level ou híbrido), permissões por organização e auditoria. Segurança e segregação de dados entram no desenho, não depois.",
      },
      {
        question: "Dá para integrar billing e assinaturas?",
        answer:
          "Sim. Integramos gateways, gerenciamos planos, trials, upgrades e webhooks de cobrança alinhados ao modelo comercial do produto.",
      },
      {
        question: "Quanto tempo leva um MVP SaaS?",
        answer:
          "MVPs enxutos ficam tipicamente entre 8 e 16 semanas. Produtos com billing, SSO e várias integrações seguem em sprints contínuos com entregas incrementais.",
      },
      {
        question: "Vocês fazem manutenção e evolução pós-lançamento?",
        answer:
          "Sim. Oferecemos suporte e evolução contínua, com priorização alinhada ao roadmap e às métricas de ativação e retenção.",
      },
    ],
  },
};
