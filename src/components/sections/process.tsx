import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { PROCESS_STEPS } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="border-t border-border py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A clear path from problem to production."
          description="Every engagement follows the same disciplined sequence, so you always know what happens next."
        />

        <div className="relative mt-16">
          {/* Connecting line */}
          <motion.div
            className="absolute left-0 right-0 top-[11px] hidden h-px origin-left bg-border lg:block"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6"
          >
            {PROCESS_STEPS.map((step) => (
              <motion.li key={step.index} variants={fadeUp} className="relative">
                <div className="flex items-center gap-3 lg:block">
                  <span
                    className="relative z-10 block size-[22px] shrink-0 rounded-full border border-border bg-background"
                    aria-hidden="true"
                  >
                    <span className="absolute inset-[6px] rounded-full bg-foreground" />
                  </span>
                  <span className="font-mono text-xs text-muted lg:mt-4 lg:block">
                    {step.index}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-foreground lg:mt-2">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}
