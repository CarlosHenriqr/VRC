import type { ServiceContent } from "./types";
import { defaultImpactMetrics, defaultMethodologySteps } from "./shared";

export const integracaoSistemasService: ServiceContent = {
  slug: "integracao-de-sistemas",
  name: "Integração de Sistemas",
  caseSolution: "Automação",
  seo: {
    title: "Integração de Sistemas — VRC Solutions",
    description:
      "Integração de sistemas via APIs, filas, webhooks e conectores — ERPs, CRMs, gateways e legados falando a mesma língua.",
  },
  hero: {
    kicker: "Serviço",
    title: "Integração de sistemas",
    titleAccent: "sem atrito",
    subtitle:
      "Conectamos ERPs, CRMs, gateways, marketplaces e legados com contratos claros, monitoramento e fluxos confiáveis.",
    ctaLabel: "Fale conosco",
  },
  capabilities: {
    kicker: "Capacidades",
    title: "O que entregamos em integração",
    subtitle:
      "Da API pontual ao hub de integração — dados fluindo com rastreabilidade.",
    items: [
      {
        title: "APIs e webhooks",
        description:
          "Contratos versionados, autenticação e eventos para sistemas se comunicarem em tempo quase real.",
      },
      {
        title: "Filas e mensageria",
        description:
          "Processamento assíncrono, retries e desacoplamento para picos e falhas de parceiros.",
      },
      {
        title: "Conectores de legado",
        description:
          "Ponte com sistemas antigos via API, arquivo, EDI ou banco — sem big bang.",
      },
      {
        title: "SSO e identidade",
        description:
          "Login único, OAuth e sincronização de usuários entre aplicações.",
      },
      {
        title: "Sincronização de dados",
        description:
          "Cadastros, pedidos, estoque e financeiro alinhados entre plataformas.",
      },
      {
        title: "Observabilidade",
        description:
          "Logs, métricas e alertas para saber o que falhou e o que foi reprocessado.",
      },
    ],
  },
  reasons: {
    kicker: "Por que a VRC",
    title: "Integração com engenharia de produção",
    items: [
      {
        title: "Confiabilidade sob falha",
        description:
          "Parceiros caem. Desenhamos retries, dead-letter e alertas para a operação não ficar no escuro.",
      },
      {
        title: "Contratos claros",
        description:
          "Documentação, versionamento e sandbox — integração que o time consegue manter.",
      },
      {
        title: "Menos cola frágil",
        description:
          "Evitamos scripts soltos. Preferimos camadas de integração observáveis e testáveis.",
      },
      {
        title: "Entrega incremental",
        description:
          "Cada sprint conecta um fluxo crítico — valor rápido sem esperar o hub perfeito.",
      },
    ],
  },
  metrics: {
    kicker: "Impacto",
    title: "O que priorizamos em cada integração",
    items: defaultImpactMetrics,
  },
  offers: {
    kicker: "Entregáveis",
    title: "Como estruturamos o projeto",
    subtitle: "Do mapeamento de sistemas à operação monitorada.",
    items: [
      {
        title: "Discovery de integração",
        items: [
          "Inventário de sistemas e fluxos",
          "Priorização de interfaces",
          "Arquitetura de integração",
        ],
      },
      {
        title: "Implementação",
        items: [
          "APIs, filas e conectores",
          "Tratamento de erros e retries",
          "Testes de contrato e carga",
        ],
      },
      {
        title: "Governança",
        items: [
          "Versionamento e documentação",
          "Ambientes e credenciais",
          "Runbooks de incidente",
        ],
      },
      {
        title: "Operação",
        items: [
          "Monitoramento e alertas",
          "Evolução de novos conectores",
          "Suporte contínuo",
        ],
      },
    ],
  },
  cases: {
    kicker: "Cases",
    title: "Projetos de integração",
    subtitle: "Uma amostra de integrações e hubs que entregamos.",
  },
  methodology: {
    kicker: "Metodologia",
    title: "Como conduzimos projetos de integração",
    subtitle: "Quatro etapas claras — do mapa de sistemas à evolução contínua.",
    steps: defaultMethodologySteps,
  },
  faq: {
    kicker: "FAQ",
    title: "Perguntas frequentes sobre integração de sistemas",
    items: [
      {
        question: "Vocês integram sistemas sem API?",
        answer:
          "Sim, quando necessário — via arquivo, banco, EDI ou RPA seletivo — sempre com logs e governança.",
      },
      {
        question: "Como evitam duplicidade de dados?",
        answer:
          "Com idempotência, chaves de correlação e regras claras de sistema de origem (source of truth).",
      },
      {
        question: "Dá para ter um hub central?",
        answer:
          "Sim. Podemos começar por integrações pontuais e evoluir para um hub com filas e observabilidade.",
      },
      {
        question: "Quanto tempo leva uma integração?",
        answer:
          "Uma interface bem documentada pode sair em poucas sprints. Ecossistemas grandes seguem em fases.",
      },
      {
        question: "Vocês monitoram após o go-live?",
        answer:
          "Sim. Incluímos alertas e podemos manter suporte e evolução dos conectores.",
      },
    ],
  },
};
