import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export function Cta() {
  return (
    <section id="contact" className="border-t border-border py-24 lg:py-32">
      <Container>
        <Reveal className="rounded-2xl bg-accent px-8 py-20 text-center sm:px-16 lg:py-28">
          <h2 className="mx-auto max-w-3xl text-section font-semibold tracking-tight text-background">
            Let&rsquo;s build the system your operation has been missing.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-background/70">
            Tell us about the problem you&rsquo;re solving. We&rsquo;ll respond within
            one business day with next steps.
          </p>
          <div className="mt-9 flex justify-center">
            <ButtonLink
              href="mailto:hello@nexusdigital.com"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Start a project
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
