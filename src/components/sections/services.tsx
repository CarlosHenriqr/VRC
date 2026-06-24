import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { SERVICES } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="border-t border-border py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="A full software team, focused on outcomes."
          description="From discovery to long-term support, we cover the work needed to put dependable software in front of the people who rely on it."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={fadeUp}>
              <Card className="h-full rounded-none border-0 bg-card p-7 hover:bg-foreground/[0.03]">
                <service.icon
                  className="size-5 text-foreground"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
