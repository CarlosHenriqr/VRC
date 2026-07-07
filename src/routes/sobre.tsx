import { useEffect, useRef, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Target,
  Eye,
  Compass,
  Shield,
  Zap,
  Users,
  Heart,
  Award,
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Cta, Footer } from "@/components/landing/CtaFooter";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: 5, suffix: "+", label: "Especialidades técnicas de atuação" },
  { value: 100, suffix: "%", label: "Projetos desenvolvidos sob medida" },
  { value: 3, suffix: "", label: "Pilares: estratégia, engenharia e entrega" },
  { value: 1, suffix: "", label: "Parceiro técnico dedicado por projeto" },
];

const team = [
  {
    name: "Carlos Henrique",
    role: "Co-Founder & CEO",
    bio: "Empreendedor e estrategista de produtos digitais. Especialista em MVPs e transformação digital, conduz a visão e os próximos passos da VRC Solutions com foco em impacto e execução.",
    initials: "CH",
  },
  {
    name: "Rafael Mendes",
    role: "Co-Founder & CTO",
    bio: "Engenheiro de software com sólida experiência em arquitetura de sistemas escaláveis. Lidera os times de desenvolvimento com foco em qualidade técnica, usabilidade e entregas previsíveis.",
    initials: "RM",
  },
  {
    name: "Ana Beatriz Costa",
    role: "Co-Founder & COO",
    bio: "Gestora de operações com repertório em projetos corporativos de diferentes segmentos. Garante clareza nos processos, proximidade com clientes e relações de confiança desde o primeiro contato.",
    initials: "AC",
  },
];

const pillars = [
  {
    icon: Compass,
    title: "Propósito",
    text: "Ir além do desenvolvimento de software. Integramos conhecimento em negócios e tecnologia para cobrir toda a jornada digital — da estratégia à execução — com qualidade e precisão em cada entrega.",
  },
  {
    icon: Target,
    title: "Missão",
    text: "Ser referência em soluções digitais sob medida, criando impacto significativo e valor real para os negócios dos nossos clientes. Co-criamos inovações que excedem expectativas e atendem necessidades específicas.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Liderar uma nova era de transformação empresarial digital. Ser catalisadores de inovação e crescimento sustentável, permitindo que empresas de diversos setores superem as expectativas do mercado.",
  },
];

const values = [
  { icon: Award, label: "Qualidade", desc: "Excelência em cada detalhe, do código à experiência do usuário." },
  { icon: Zap, label: "Resolutividade", desc: "Enfrentamos desafios com determinação, autonomia e criatividade." },
  { icon: Users, label: "Colaboração", desc: "Unimos forças com clientes e times para co-criar soluções." },
  { icon: Heart, label: "Respeito", desc: "Ambiente inclusivo onde todos são tratados com consideração." },
  { icon: Shield, label: "Transparência", desc: "Comunicação clara e honesta em cada etapa do projeto." },
];

const commitments = [
  {
    title: "Transparência desde o dia um",
    text: "Comunicação clara em cada etapa — escopo, prazos e entregas sempre visíveis para você acompanhar de perto.",
    initials: "01",
  },
  {
    title: "Engenharia de verdade",
    text: "Código limpo, arquitetura sólida e documentação desde o início. Construímos para durar, não para impressionar no demo.",
    initials: "02",
  },
  {
    title: "Foco no seu resultado",
    text: "Cada decisão técnica é tomada pensando no impacto real para o seu negócio — não em tendências vazias.",
    initials: "03",
  },
];

function Counter({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVal(to);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{val.toFixed(decimals)}</span>;
}

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — VRC Solutions" },
      {
        name: "description",
        content:
          "Conheça a VRC Solutions: engenharia de software sob medida, automação e IA para transformar negócios com inovação.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  const [commitmentIdx, setCommitmentIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCommitmentIdx((v) => (v + 1) % commitments.length),
      7000,
    );
    return () => clearInterval(id);
  }, []);

  const c = commitments[commitmentIdx];

  return (
    <div className="relative z-10 min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="kicker flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sea" />
            Sobre
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mt-6 max-w-4xl font-display text-[2.75rem] font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
          >
            Transformando negócios
            <br />
            <span className="text-sea">com inovação</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Construímos software sob medida com excelência em engenharia,
            visão estratégica e foco absoluto em resultado — desde o primeiro projeto.
          </motion.p>
        </div>
      </section>

      {/* História */}
      <section className="border-t border-hairline bg-cloud py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="kicker">Quem somos</p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Uma empresa nova, com visão de quem já sabe construir
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn delay={0.05} className="space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground">
              <p>
                A <strong className="font-medium text-foreground">VRC Solutions</strong> nasceu com
                a missão de entregar{" "}
                <strong className="font-medium text-foreground">transformação digital</strong> de
                verdade para empresas que precisam de software sob medida — sem atalhos, sem
                templates. Somos uma empresa jovem, formada por especialistas que unem{" "}
                <strong className="font-medium text-foreground">visão estratégica</strong>,{" "}
                <strong className="font-medium text-foreground">profundidade técnica</strong> e{" "}
                <strong className="font-medium text-foreground">foco em resultados</strong>.
              </p>
              <p>
                Desenvolvemos soluções digitais sob medida: sistemas, plataformas, aplicativos,
                automações e soluções com inteligência artificial — com{" "}
                <strong className="font-medium text-foreground">arquitetura robusta</strong>,{" "}
                <strong className="font-medium text-foreground">experiência do usuário</strong> e{" "}
                <strong className="font-medium text-foreground">governança</strong> como pilares.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground">
              <p>
                Atuamos com{" "}
                <strong className="font-medium text-foreground">autonomia, clareza e iniciativa</strong>,
                traduzindo complexidade em soluções digitais que geram valor real — desde o primeiro
                contato.
              </p>
              <p>
                Mais do que fornecedores, queremos ser{" "}
                <strong className="font-medium text-foreground">parceiros estratégicos</strong> nas
                jornadas digitais dos nossos clientes — do conceito à operação em escala.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <p className="kicker">O que nos define</p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              Compromisso com excelência
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Empresa nova, padrão alto — cada projeto é tratado com a atenção e o rigor que
              merece desde o início.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <FadeIn
                key={s.label}
                delay={i * 0.08}
                className="bg-background px-8 py-10 text-center lg:text-left"
              >
                <div className="font-display text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
                  <Counter to={s.value} decimals={0} />
                  <span className="text-sea">{s.suffix}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Time */}
      <section className="border-t border-hairline bg-cloud py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="kicker">Quem faz a VRC Solutions</p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Liderança com experiência
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.08}>
                <article className="card-soft flex h-full flex-col p-8">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-sea/10 font-display text-xl font-bold text-sea">
                    {member.initials}
                  </div>
                  <p className="mt-6 text-xs font-medium uppercase tracking-wider text-sea">
                    {member.role}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                    {member.name}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Propósito, Missão, Visão */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <article className="flex h-full flex-col rounded-2xl border border-hairline p-8">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-sea/10 text-sea">
                    <p.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="ocean relative overflow-hidden py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sea/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <FadeIn className="max-w-2xl">
            <p className="kicker text-aqua">Valores</p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
              O que nos guia em cada projeto
            </h2>
            <p className="mt-4 text-aqua/80">
              Buscamos qualidade em cada detalhe e valorizamos a resolutividade. A colaboração e o
              respeito são a base de tudo — moldando nossa cultura e incentivando impacto positivo e
              duradouro.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <FadeIn key={v.label} delay={i * 0.06}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-sea/20 text-sea">
                    <v.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-white">
                    {v.label}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-aqua/70">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compromissos */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn className="text-center">
            <p className="kicker">Compromissos</p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              Como nos posicionamos em cada projeto
            </h2>
          </FadeIn>

          <div className="relative mt-14 min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={commitmentIdx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="card-soft p-8 sm:p-12 text-center"
              >
                <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-sea/10 font-mono text-sm font-medium text-sea">
                  {c.initials}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {c.title}
                </h3>
                <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {commitments.map((_, k) => (
              <button
                key={k}
                type="button"
                onClick={() => setCommitmentIdx(k)}
                aria-label={`Compromisso ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === commitmentIdx ? "w-10 bg-sea" : "w-5 bg-hairline"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
}
