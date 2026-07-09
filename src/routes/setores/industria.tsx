import { createFileRoute } from "@tanstack/react-router";
import { SectorPage } from "@/components/sectors/SectorPage";
import { industriaSector } from "@/lib/sectors/industria";

export const Route = createFileRoute("/setores/industria")({
  head: () => ({
    meta: [
      { title: industriaSector.seo.title },
      { name: "description", content: industriaSector.seo.description },
    ],
  }),
  component: IndustriaPage,
});

function IndustriaPage() {
  return <SectorPage content={industriaSector} />;
}
