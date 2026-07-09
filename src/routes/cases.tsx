import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, X, ArrowUpRight, RotateCcw } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Cta, Footer } from "@/components/landing/CtaFooter";
import { CASES } from "@/lib/cases";

const ALL = "Todos";

const sectors = [ALL, ...Array.from(new Set(CASES.map((c) => c.sector))).sort()];
const solutions = [ALL, ...Array.from(new Set(CASES.map((c) => c.solution))).sort()];

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
      className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 ${
        active
          ? "bg-sea text-white"
          : "border border-hairline text-muted-foreground hover:border-sea hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}

function ActiveTag({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <button
      type="button"
      onClick={onClear}
      className="inline-flex items-center gap-1.5 rounded-full bg-sea/10 px-2.5 py-1 text-xs font-medium text-sea ring-1 ring-sea/20 transition-colors hover:bg-sea/15"
    >
      {label}
      <X className="h-3 w-3" strokeWidth={2} />
    </button>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center py-24 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-full border border-hairline text-muted-foreground">
        <Search className="h-6 w-6" />
      </div>
      <p className="mt-6 font-display text-xl font-semibold text-foreground">
        Nenhum case encontrado
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Tente outros termos ou limpe os filtros para ver todos os projetos.
      </p>
      <button type="button" onClick={onReset} className="pill-outline mt-6 text-sm">
        <RotateCcw className="h-4 w-4" />
        Limpar filtros
      </button>
    </div>
  );
}

function CasesPage() {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState(ALL);
  const [solution, setSolution] = useState(ALL);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return CASES.filter((c) => {
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
  const resultLabel =
    filtered.length === 1
      ? "1 case encontrado"
      : `${filtered.length} cases encontrados`;

  function resetFilters() {
    setSearch("");
    setSector(ALL);
    setSolution(ALL);
  }

  return (
    <div className="relative z-10 min-h-screen bg-background text-foreground">
      <Navbar />

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

      {/* Sticky filters */}
      <div className="sticky top-[4.5rem] z-40 border-b border-hairline bg-background/95 shadow-[0_8px_24px_-16px_rgba(2,12,27,0.18)] backdrop-blur-md">
        <div className="mx-auto max-w-6xl space-y-3 px-6 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative min-w-0 flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Buscar por projeto, cliente ou descrição…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-hairline bg-background py-2.5 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-150 focus:border-sea focus:outline-none focus:ring-2 focus:ring-sea/20"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Limpar busca"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex shrink-0 items-center justify-between gap-3 sm:justify-end">
              <p className="text-sm font-medium text-foreground">
                <span className="tabular-nums text-sea">{filtered.length}</span>
                <span className="text-muted-foreground">
                  {" "}
                  de {CASES.length} case{CASES.length !== 1 ? "s" : ""}
                </span>
              </p>
              {hasActiveFilter && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 rounded-full border border-sea/30 bg-sea/10 px-3.5 py-2 text-xs font-medium text-sea transition-colors hover:bg-sea hover:text-white"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Limpar
                </button>
              )}
            </div>
          </div>

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

          {hasActiveFilter && (
            <div className="flex flex-wrap items-center gap-2 border-t border-hairline pt-3">
              <span className="text-xs text-muted-foreground">Ativos:</span>
              {search && (
                <ActiveTag
                  label={`Busca: “${search.length > 24 ? `${search.slice(0, 24)}…` : search}”`}
                  onClear={() => setSearch("")}
                />
              )}
              {sector !== ALL && (
                <ActiveTag label={`Setor: ${sector}`} onClear={() => setSector(ALL)} />
              )}
              {solution !== ALL && (
                <ActiveTag label={`Solução: ${solution}`} onClear={() => setSolution(ALL)} />
              )}
            </div>
          )}
        </div>
      </div>

      <section className="bg-cloud py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm text-muted-foreground">{resultLabel}</p>

          {filtered.length > 0 ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((c) => (
                <article
                  key={c.slug}
                  className="group card-soft flex flex-col p-7 transition-shadow duration-200 hover:shadow-[0_24px_48px_-24px_rgba(2,12,27,0.25)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="rounded-full bg-cloud px-3 py-1 text-xs font-medium text-sea ring-1 ring-sea/20">
                        {c.sector}
                      </span>
                      <span className="rounded-full border border-hairline px-3 py-1 text-xs font-medium text-muted-foreground">
                        {c.solution}
                      </span>
                    </div>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hairline text-muted-foreground transition-colors group-hover:border-sea group-hover:bg-sea group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-sea">{c.client}</p>

                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {c.desc}
                  </p>

                  {c.highlight && (
                    <div className="mt-5 rounded-xl bg-sea/8 px-4 py-2.5">
                      <p className="text-xs font-medium text-sea">{c.highlight}</p>
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 border-t border-hairline pt-5">
                    {c.tech.map((t) => (
                      <span key={t} className="font-mono text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <EmptyState onReset={resetFilters} />
          )}
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
}
