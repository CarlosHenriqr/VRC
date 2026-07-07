import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Helix CRM",
    sector: "SaaS B2B",
    desc: "Plataforma de relacionamento com automações de pipeline e IA preditiva.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    name: "Cargo Flow",
    sector: "Logística",
    desc: "Sistema de rastreamento logístico em tempo real para frota nacional.",
    tech: ["Next.js", "WebSockets", "Redis"],
  },
  {
    name: "Atlas Mobile",
    sector: "Fintech",
    desc: "App de gestão financeira pessoal com integração Open Finance.",
    tech: ["React Native", "Kotlin", "Swift"],
  },
  {
    name: "Vertex AI Assist",
    sector: "Inteligência Artificial",
    desc: "Assistente inteligente integrado a ERPs para suporte ao time interno.",
    tech: ["Python", "LLM", "Vector DB"],
  },
  {
    name: "Nimbus ERP",
    sector: "Indústria",
    desc: "ERP modular para indústrias de médio porte com BI integrado.",
    tech: ["TypeScript", "NestJS", "ClickHouse"],
  },
  {
    name: "Loop Automations",
    sector: "Automação",
    desc: "Hub de automações conectando 30+ APIs corporativas.",
    tech: ["Go", "RabbitMQ", "Kubernetes"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-cloud py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="kicker">Portfólio</p>
        <h2 className="mt-5 font-display text-4xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
          Resultado entregue
          <br />
          em todos os setores
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Uma seleção de soluções desenvolvidas para empresas em diferentes segmentos.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <Link to="/cases" className="pill text-sm">
            Ver todos os cases <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group card-soft flex flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(2,12,27,0.25)]"
            >
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-cloud px-3 py-1 text-xs font-medium text-sea ring-1 ring-sea/20">
                  {p.sector}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-hairline text-muted-foreground transition-colors group-hover:border-sea group-hover:bg-sea group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                {p.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 border-t border-hairline pt-5">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
