import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Cta, Footer } from "@/components/landing/CtaFooter";
import { getCasesBySector } from "@/lib/cases";
import type { SectorContent } from "@/lib/sectors/types";
import { FEATURES } from "@/lib/features";

const ease = [0.22, 1, 0.36, 1] as const;

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

export function SectorPage({ content }: { content: SectorContent }) {
  const cases = FEATURES.cases ? getCasesBySector(content.caseSector) : [];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
            {content.hero.kicker}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mt-6 max-w-4xl font-display text-[2.75rem] font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
          >
            {content.hero.title}
            <br />
            <span className="text-sea">{content.hero.titleAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            {content.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-10"
          >
            <Link to="/contato" className="pill text-sm">
              {content.hero.ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Domains */}
      <section className="border-t border-hairline bg-cloud py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="kicker">{content.domains.kicker}</p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {content.domains.title}
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">{content.domains.subtitle}</p>
          </FadeIn>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.domains.items.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-hairline bg-background p-7">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="kicker">{content.reasons.kicker}</p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              {content.reasons.title}
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {content.reasons.items.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <div className="border-t border-hairline pt-6">
                  <span className="font-mono text-xs text-sea">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-t border-hairline bg-cloud py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <p className="kicker">{content.metrics.kicker}</p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              {content.metrics.title}
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-4">
            {content.metrics.items.map((m, i) => (
              <FadeIn
                key={m.label}
                delay={i * 0.08}
                className="bg-background px-8 py-10 text-center lg:text-left"
              >
                <div className="font-display text-3xl font-bold tracking-[-0.04em] text-sea sm:text-4xl">
                  {m.value}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="kicker">{content.services.kicker}</p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              {content.services.title}
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">{content.services.subtitle}</p>
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {content.services.items.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-hairline p-7">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {service.items.map((line) => (
                      <li
                        key={line}
                        className="flex gap-3 text-[0.95rem] leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      {cases.length > 0 && (
        <section className="border-t border-hairline bg-cloud py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn>
              <p className="kicker">{content.cases.kicker}</p>
              <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                {content.cases.title}
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">{content.cases.subtitle}</p>
              <div className="mt-8">
                <Link to="/cases" className="pill text-sm">
                  Ver todos os cases <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {cases.map((c, i) => (
                <FadeIn key={c.slug} delay={i * 0.06}>
                  <article className="group card-soft flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(2,12,27,0.25)]">
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

                    <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
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
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Methodology */}
      <section className="ocean relative overflow-hidden py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sea/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <FadeIn className="max-w-2xl">
            <p className="kicker text-aqua">{content.methodology.kicker}</p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
              {content.methodology.title}
            </h2>
            <p className="mt-4 text-aqua/80">{content.methodology.subtitle}</p>
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.methodology.steps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <span className="font-mono text-sm font-medium text-sea">{step.step}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-aqua/70">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn>
            <p className="kicker">{content.faq.kicker}</p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              {content.faq.title}
            </h2>
          </FadeIn>

          <div className="border-t border-hairline">
            {content.faq.items.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.question} className="border-b border-hairline">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-sea"
                  >
                    <span className="font-display text-lg font-semibold tracking-tight">
                      {f.question}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-sea" : "text-muted-foreground"
                      }`}
                      strokeWidth={1.75}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="max-w-xl pb-6 text-[0.95rem] leading-relaxed text-muted-foreground">
                          {f.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
}
