//#region node_modules/.nitro/vite/services/ssr/assets/cases-CzeAt3pd.js
var CASES = [
	{
		slug: "helix-crm",
		title: "Helix CRM",
		client: "Helix Log",
		sector: "SaaS B2B",
		solution: "Desenvolvimento Web",
		desc: "Plataforma de relacionamento com automações de pipeline, scoring de leads e IA preditiva para equipes de vendas.",
		tech: [
			"React",
			"Node.js",
			"PostgreSQL"
		],
		highlight: "3× aumento na conversão de leads"
	},
	{
		slug: "cargo-flow",
		title: "Cargo Flow",
		client: "Atlas Transportes",
		sector: "Logística",
		solution: "Desenvolvimento Web",
		desc: "Sistema de rastreamento logístico em tempo real com painel de controle de frota nacional e alertas automáticos.",
		tech: [
			"Next.js",
			"WebSockets",
			"Redis"
		],
		highlight: "40% redução no tempo de rastreamento"
	},
	{
		slug: "atlas-mobile",
		title: "Atlas Mobile",
		client: "Atlas Finance",
		sector: "Fintech",
		solution: "Mobile",
		desc: "App de gestão financeira pessoal com integração Open Finance, categorização automática e metas de investimento.",
		tech: [
			"React Native",
			"Kotlin",
			"Swift"
		],
		highlight: "120 mil downloads no primeiro mês"
	},
	{
		slug: "vertex-ai-assist",
		title: "Vertex AI Assist",
		client: "Nimbus Industrial",
		sector: "Indústria",
		solution: "Inteligência Artificial",
		desc: "Assistente inteligente integrado a ERPs legados para suporte ao time interno, com respostas contextuais e auditoria.",
		tech: [
			"Python",
			"LLM",
			"Vector DB"
		],
		highlight: "65% menos tickets no suporte interno"
	},
	{
		slug: "nimbus-erp",
		title: "Nimbus ERP",
		client: "Nimbus Industrial",
		sector: "Indústria",
		solution: "Desenvolvimento Web",
		desc: "ERP modular para indústrias de médio porte com BI integrado, gestão de estoque e dashboards em tempo real.",
		tech: [
			"TypeScript",
			"NestJS",
			"ClickHouse"
		],
		highlight: "Substituiu 4 sistemas legados"
	},
	{
		slug: "loop-automations",
		title: "Loop Automations",
		client: "Loop Studio",
		sector: "Automação",
		solution: "Automação",
		desc: "Hub de automações conectando 30+ APIs corporativas, com orquestração de fluxos e monitoramento centralizado.",
		tech: [
			"Go",
			"RabbitMQ",
			"Kubernetes"
		],
		highlight: "1.200 horas/mês economizadas"
	},
	{
		slug: "medsync",
		title: "MedSync",
		client: "ClínicaPlus",
		sector: "Saúde",
		solution: "Mobile",
		desc: "App de agendamento e prontuário eletrônico para clínicas de médio porte, com integração a planos de saúde.",
		tech: [
			"React Native",
			"FastAPI",
			"PostgreSQL"
		],
		highlight: "90% de redução no no-show"
	},
	{
		slug: "edupath",
		title: "EduPath",
		client: "Instituto Saber",
		sector: "Educação",
		solution: "Desenvolvimento Web",
		desc: "Plataforma LMS com trilhas de aprendizado personalizadas por IA, certificações digitais e relatórios de progresso.",
		tech: [
			"Next.js",
			"Python",
			"MongoDB"
		],
		highlight: "2× aumento na taxa de conclusão"
	},
	{
		slug: "tradebot",
		title: "TradeBot",
		client: "Atlas Finance",
		sector: "Fintech",
		solution: "Inteligência Artificial",
		desc: "Motor de análise quantitativa com modelos de ML para identificação de oportunidades em renda variável.",
		tech: [
			"Python",
			"PyTorch",
			"TimescaleDB"
		],
		highlight: "Backtests com 78% de precisão"
	},
	{
		slug: "retailflow",
		title: "RetailFlow",
		client: "Grupo MaxVarejo",
		sector: "Varejo",
		solution: "Automação",
		desc: "Automação de reposição de estoque e precificação dinâmica integrada ao ERP e marketplaces nacionais.",
		tech: [
			"Node.js",
			"RabbitMQ",
			"Redis"
		],
		highlight: "30% de redução em ruptura de estoque"
	}
];
function getCasesBySector(sector) {
	return CASES.filter((c) => c.sector === sector);
}
function getCasesBySolution(solution) {
	return CASES.filter((c) => c.solution === solution);
}
//#endregion
export { getCasesBySector as n, getCasesBySolution as r, CASES as t };
