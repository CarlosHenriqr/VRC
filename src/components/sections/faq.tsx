import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { FAQ_ITEMS } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="border-t border-border py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
          description="If you don't see what you're looking for, reach out and we'll get back to you within a day."
        />

        <Reveal>
          <Accordion items={FAQ_ITEMS} defaultOpen={0} />
        </Reveal>
      </Container>
    </section>
  );
}
