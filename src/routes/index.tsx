import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { Hero } from "@/components/landing/Hero";
import { LogosStrip } from "@/components/landing/LogosStrip";
import { Services } from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
import { Differentials } from "@/components/landing/Differentials";
import { Stats } from "@/components/landing/Stats";
import { Portfolio } from "@/components/landing/Portfolio";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Cta, Footer } from "@/components/landing/CtaFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VRC Solutions — Engenharia de software sob medida" },
      {
        name: "description",
        content:
          "Desenvolvemos sistemas, aplicativos, automações e soluções de IA sob medida para acelerar o crescimento da sua empresa.",
      },
      { property: "og:title", content: "VRC Solutions — Engenharia de software sob medida" },
      {
        property: "og:description",
        content: "Sistemas, mobile, automações e IA para transformar desafios em resultado.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative z-10 min-h-screen bg-transparent text-foreground">
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
        <LogosStrip />
        <Differentials />
        <Services />
        <Stats />
        <Portfolio />
        <Process />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
