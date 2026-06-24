import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PortfolioCarousel } from "@/components/sections/portfolio-carousel";
import { CASE_STUDIES } from "@/lib/content";

export function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-border py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work for operational teams."
          description="A sample of systems we've designed and shipped across logistics, insurance, manufacturing, and healthcare."
        />
      </Container>

      <PortfolioCarousel items={CASE_STUDIES} />
    </section>
  );
}
