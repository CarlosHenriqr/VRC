import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Code2, Smartphone, Workflow, Brain, Compass, ArrowUpRight } from "lucide-react";
import type { ServiceRoute } from "@/lib/what-we-do";

const services: {
  icon: typeof Code2;
  label: string;
  title: string;
  desc: string;
  to: ServiceRoute;
}[] = [
  {
    icon: Code2,
    label: "Desenvolvimento Web",
    title: "Sistemas e plataformas",
    desc: "ERPs, CRMs, SaaS, sistemas internos e portais corporativos sob medida.",
    to: "/servicos/desenvolvimento-web",
  },
  {
    icon: Smartphone,
    label: "Mobile",
    title: "Aplicativos nativos e híbridos",
    desc: "Apps para Android e iOS com experiência premium e alta performance.",
    to: "/servicos/mobile",
  },
  {
    icon: Workflow,
    label: "Automação",
    title: "Processos e integrações",
    desc: "APIs, bots e automações que economizam horas de operação.",
    to: "/servicos/automacao",
  },
  {
    icon: Brain,
    label: "Inteligência Artificial",
    title: "IA aplicada ao negócio",
    desc: "Chatbots, assistentes e soluções baseadas em modelos de IA.",
    to: "/servicos/inteligencia-artificial",
  },
  {
    icon: Compass,
    label: "Consultoria",
    title: "Arquitetura e estratégia",
    desc: "Modernização de sistemas e transformação digital com método.",
    to: "/servicos/consultoria",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Serviços"
          title="O stack completo para construir seu produto."
          subtitle="Engenharia, design e estratégia combinados para entregar soluções completas, do primeiro protótipo à operação em escala."
        />

        <div className="mt-16 grid overflow-hidden rounded-2xl border border-hairline sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative -mr-px -mb-px border-r border-b border-hairline bg-background transition-colors duration-300 hover:bg-cloud"
            >
              <Link to={s.to} className="block p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-sea">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-cloud text-foreground transition-colors group-hover:bg-sea group-hover:text-white">
                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                </div>
                <p className="kicker mt-8">{s.label}</p>
                <h3 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold tracking-tight">
                  {s.title}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`kicker flex items-center gap-3 ${center ? "justify-center" : ""} ${
          dark ? "text-aqua" : ""
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-sea" />
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.035em] sm:text-5xl lg:text-6xl lg:leading-[0.98]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-lg leading-relaxed ${
            dark ? "text-aqua/80" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
