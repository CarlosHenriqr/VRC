import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="about" className="border-t border-border py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Clients"
          title="Trusted by teams who can't afford downtime."
          description="We work with operations and engineering leaders who care about reliability and clarity over hype."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={fadeUp}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="flex h-full flex-col justify-between gap-8 p-7">
                <blockquote className="text-[15px] leading-relaxed text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full border border-border bg-background text-sm font-medium text-muted grayscale">
                    {testimonial.initials}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-muted">{testimonial.role}</span>
                  </span>
                </figcaption>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
