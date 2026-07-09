import { createFileRoute } from "@tanstack/react-router";
import { SectorPage } from "@/components/sectors/SectorPage";
import { logisticaSector } from "@/lib/sectors/logistica";

export const Route = createFileRoute("/setores/logistica")({
  head: () => ({
    meta: [
      { title: logisticaSector.seo.title },
      { name: "description", content: logisticaSector.seo.description },
    ],
  }),
  component: LogisticaPage,
});

function LogisticaPage() {
  return <SectorPage content={logisticaSector} />;
}
