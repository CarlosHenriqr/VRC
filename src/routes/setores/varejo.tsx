import { createFileRoute } from "@tanstack/react-router";
import { SectorPage } from "@/components/sectors/SectorPage";
import { varejoSector } from "@/lib/sectors/varejo";

export const Route = createFileRoute("/setores/varejo")({
  head: () => ({
    meta: [
      { title: varejoSector.seo.title },
      { name: "description", content: varejoSector.seo.description },
    ],
  }),
  component: VarejoPage,
});

function VarejoPage() {
  return <SectorPage content={varejoSector} />;
}
