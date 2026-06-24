import { motion } from "framer-motion";
import {
  Search,
  ClipboardList,
  LayoutGrid,
  Code2,
  TestTube2,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import { SectionHeader } from "./Services";

const steps = [
  { icon: Search, title: "Descoberta", desc: "Entendemos o negócio, contexto e objetivos." },
  {
    icon: ClipboardList,
    title: "Requisitos",
    desc: "Mapeamos escopo, fluxos e critérios de sucesso.",
  },
  { icon: LayoutGrid, title: "Planejamento", desc: "Arquitetura, sprints e marcos bem definidos." },
  { icon: Code2, title: "Desenvolvimento", desc: "Código limpo, revisado e versionado." },
  { icon: TestTube2, title: "Testes", desc: "Qualidade validada em múltiplas camadas." },
  { icon: Rocket, title: "Implantação", desc: "Deploy seguro com monitoramento ativo." },
  { icon: LifeBuoy, title: "Suporte", desc: "Evolução contínua e suporte dedicado." },
];

export function Process() {
  return (
    <section id="processo" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Processo"
          title="Como começamos a trabalhar juntos."
          subtitle="Um método claro, previsível e colaborativo — da primeira conversa ao suporte de longo prazo."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group card-soft p-7 transition-colors hover:bg-cloud"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-foreground text-background transition-colors group-hover:bg-sea group-hover:text-white">
                  <s.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="font-mono text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
