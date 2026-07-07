import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowUpRight, RotateCcw } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Cta, Footer } from "@/components/landing/CtaFooter";

type Case = {
  slug: string;
  title: string;
  client: string;
  sector: string;
  solution: string;
  desc: string;
  tech: string[];
  highlight?: string;
};

const cases: Case[] = [
  {
    slug: "helix-crm",
    title: "Helix CRM",
    client: "Helix Log",
    sector: "SaaS B2B",
    solution: "Desenvolvimento Web",
    desc: "Plataforma de relacionamento com automações de pipeline, scoring de leads e IA preditiva para equipes de vendas.",
    tech: ["React", "Node.js", "PostgreSQL"],
    highlight: "3× aumento na conversão de leads",
  },
  {
    slug: "cargo-flow",
    title: "Cargo Flow",
    client: "Atlas Transportes",
    sector: "Logística",
    solution: "Desenvolvimento Web",
    desc: "Sistema de rastreamento logístico em tempo real com painel de controle de frota nacional e alertas automáticos.",
    tech: ["Next.js", "WebSockets", "Redis"],
    highlight: "40% redução no tempo de rastreamento",
  },
  {
    slug: "atlas-mobile",
    title: "Atlas Mobile",
    client: "Atlas Finance",
    sector: "Fintech",
    solution: "Mobile",
    desc: "App de gestão financeira pessoal com integração Open Finance, categorização automática e metas de investimento.",
    tech: ["React Native", "Kotlin", "Swift"],
    highlight: "120 mil downloads no primeiro mês",
  },
  {
    slug: "vertex-ai-assist",
    title: "Vertex AI Assist",
    client: "Nimbus Industrial",
    sector: "Indústria",
    solution: "Inteligência Artificial",
    desc: "Assistente inteligente integrado a ERPs legados para suporte ao time interno, com respostas contextuais e auditoria.",
    tech: ["Python", "LLM", "Vector DB"],
    highlight: "65% menos tickets no suporte interno",
  },
  {
    slug: "nimbus-erp",
    title: "Nimbus ERP",
    client: "Nimbus Industrial",
    sector: "Indústria",
    solution: "Desenvolvimento Web",
    desc: "ERP modular para indústrias de médio porte com BI integrado, gestão de estoque e dashboards em tempo real.",
    tech: ["TypeScript", "NestJS", "ClickHouse"],
    highlight: "Substituiu 4 sistemas legados",
  },
  {
    slug: "loop-automations",
    title: "Loop Automations",
    client: "Loop Studio",
    sector: "Automação",
    solution: "Automação",
    desc: "Hub de automações conectando 30+ APIs corporativas, com orquestração de fluxos e monitoramento centralizado.",
    tech: ["Go", "RabbitMQ", "Kubernetes"],
    highlight: "1.200 horas/mês economizadas",
  },
  {
    slug: "medsync",
    title: "MedSync",
    client: "ClínicaPlus",
    sector: "Saúde",
    solution: "Mobile",
    desc: "App de agendamento e prontuário eletrônico para clínicas de médio porte, com integração a planos de saúde.",
    tech: ["React Native", "FastAPI", "PostgreSQL"],
    highlight: "90% de redução no no-show",
  },
  {
    slug: "edupath",
    title: "EduPath",
    client: "Instituto Saber",
    sector: "Educação",
    solution: "Desenvolvimento Web",
    desc: "Plataforma LMS com trilhas de aprendizado personalizadas por IA, certificações digitais e relatórios de progresso.",
    tech: ["Next.js", "Python", "MongoDB"],
    highlight: "2× aumento na taxa de conclusão",
  },
  {
    slug: "tradebot",
    title: "TradeBot",
    client: "Atlas Finance",
    sector: "Fintech",
    solution: "Inteligência Artificial",
    desc: "Motor de análise quantitativa com modelos de ML para identificação de oportunidades em renda variável.",
    tech: ["Python", "PyTorch", "TimescaleDB"],
    highlight: "Backtests com 78% de precisão",
  },
  {
    slug: "retailflow",
    title: "RetailFlow",
    client: "Grupo MaxVarejo",
    sector: "Varejo",
    solution: "Automação",
    desc: "Automação de reposição de estoque e precificação dinâmica integrada ao ERP e marketplaces nacionais.",
    tech: ["Node.js", "RabbitMQ", "Redis"],
    highlight: "30% de redução em ruptura de estoque",
  },
];

const ALL = "Todos";

const sectors = [ALL, ...Array.from(new Set(cases.map((c) => c.sector))).sort()];
const solutions = [ALL, ...Array.from(new Set(cases.map((c) => c.solution))).sort()];

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Cases — VRC Solutions" },
      {
        name: "description",
        content:
          "Conheça os projetos entregues pela VRC Solutions para empresas em diferentes setores e segmentos.",
      },
    ],
  }),
  component: CasesPage,
});

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
        active
          ? "bg-sea text-white shadow-[0_0_0_1px_theme(colors.sea)]"
          : "border border-hairline text-muted-foreground hover:border-sea hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center py-24 text-center"
    >
      <div className="grid h-16 w-16 place-items-center rounded-full border border-hairline text-muted-foreground">
        <Search className="h-6 w-6" />
      </div>
      <p className="mt-6 font-display text-xl font-semibold text-foreground">Nenhum case encontrado</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Tente outros termos ou limpe os filtros para ver todos os projetos.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="pill-outline mt-6 text-sm"
      >
        <RotateCcw className="h-4 w-4" />
        Limpar filtros
      </button>
    </motion.div>
  );
}

function CasesPage() {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState(ALL);
  const [solution, setSolution] = useState(ALL);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return cases.filter((c) => {
      const matchSearch =
        q === "" ||
        c.title.toLowerCase().includes(q) ||
        c.client.toLowerCase().includes(q) ||
        c.desc.toLowerCase().includes(q);
      const matchSector = sector === ALL || c.sector === sector;
      const matchSolution = solution === ALL || c.solution === solution;
      return matchSearch && matchSector && matchSolution;
    });
  }, [search, sector, solution]);

  const hasActiveFilter = search !== "" || sector !== ALL || solution !== ALL;

  function resetFilters() {
    setSearch("");
    setSector(ALL);
    setSolution(ALL);
  }

  return (
    <div className="relative z-10 min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Header ── */}
      <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="kicker flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sea" />
            Cases
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[3rem] font-bold leading-[0.92] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl"
          >
            Resultado entregue
            <br />
            <span className="text-sea">em todos os setores</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Uma seleção de projetos desenvolvidos para empresas em diferentes segmentos — do
            primeiro commit à operação em escala.
          </motion.p>
        </div>
      </section>

      {/* ── Filters ── */}
      <div className="sticky top-[4.5rem] z-40 border-b border-hairline bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 space-y-3">
          {/* Search */}
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Buscar por projeto, cliente ou descrição…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-hairline bg-background py-2.5 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-sea focus:outline-none focus:ring-2 focus:ring-sea/20 transition-all duration-200"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Filter rows */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="kicker mr-1">Setor</span>
            {sectors.map((s) => (
              <FilterChip
                key={s}
                label={s}
                active={sector === s}
                onClick={() => setSector(s)}
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="kicker mr-1">Solução</span>
            {solutions.map((s) => (
              <FilterChip
                key={s}
                label={s}
                active={solution === s}
                onClick={() => setSolution(s)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <section className="bg-cloud py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filtered.length} case{filtered.length !== 1 ? "s" : ""} encontrado
              {filtered.length !== 1 ? "s" : ""}
            </p>
            {hasActiveFilter && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Limpar filtros
              </button>
            )}
          </div>

          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                key="grid"
                className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((c, i) => (
                  <motion.article
                    key={c.slug}
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="group card-soft flex flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(2,12,27,0.25)]"
                  >
                    {/* Badges + icon */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="rounded-full bg-cloud px-3 py-1 text-xs font-medium text-sea ring-1 ring-sea/20">
                          {c.sector}
                        </span>
                        <span className="rounded-full border border-hairline px-3 py-1 text-xs font-medium text-muted-foreground">
                          {c.solution}
                        </span>
                      </div>
                      <span className="shrink-0 grid h-9 w-9 place-items-center rounded-full border border-hairline text-muted-foreground transition-colors group-hover:border-sea group-hover:bg-sea group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>

                    {/* Title + client */}
                    <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-sea">{c.client}</p>

                    {/* Description */}
                    <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {c.desc}
                    </p>

                    {/* Highlight */}
                    {c.highlight && (
                      <div className="mt-5 rounded-xl bg-sea/8 px-4 py-2.5">
                        <p className="text-xs font-medium text-sea">{c.highlight}</p>
                      </div>
                    )}

                    {/* Tech stack */}
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 border-t border-hairline pt-5">
                      {c.tech.map((t) => (
                        <span key={t} className="font-mono text-xs text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <EmptyState key="empty" onReset={resetFilters} />
            )}
          </AnimatePresence>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
}
