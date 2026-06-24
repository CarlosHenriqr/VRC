import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { BrowserMockup } from "@/components/sections/browser-mockup";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Container className="grid items-center gap-14 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-medium uppercase tracking-[0.22em] text-muted"
          >
            Nexus Digital
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-xl text-hero font-semibold text-foreground"
          >
            We build software that solves operational problems.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            Nexus Digital is a software consultancy for enterprise teams. We design,
            build, and ship systems that remove manual work and make operations
            measurable.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#contact" size="lg">
              Start a project
              <ArrowRight />
            </ButtonLink>
            <ButtonLink href="#portfolio" size="lg" variant="secondary">
              View our work
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
        >
          <BrowserMockup />
        </motion.div>
      </Container>
    </section>
  );
}
