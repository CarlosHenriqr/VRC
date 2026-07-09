import { createFileRoute } from "@tanstack/react-router";
import { SectorPage } from "@/components/sectors/SectorPage";
import { fintechSector } from "@/lib/sectors/fintech";

export const Route = createFileRoute("/setores/fintech")({
  head: () => ({
    meta: [
      { title: fintechSector.seo.title },
      { name: "description", content: fintechSector.seo.description },
    ],
  }),
  component: FintechPage,
});

function FintechPage() {
  return <SectorPage content={fintechSector} />;
}
