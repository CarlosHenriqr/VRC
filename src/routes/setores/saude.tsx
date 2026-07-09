import { createFileRoute } from "@tanstack/react-router";
import { SectorPage } from "@/components/sectors/SectorPage";
import { saudeSector } from "@/lib/sectors/saude";

export const Route = createFileRoute("/setores/saude")({
  head: () => ({
    meta: [
      { title: saudeSector.seo.title },
      { name: "description", content: saudeSector.seo.description },
    ],
  }),
  component: SaudePage,
});

function SaudePage() {
  return <SectorPage content={saudeSector} />;
}
