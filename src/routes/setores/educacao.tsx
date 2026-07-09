import { createFileRoute } from "@tanstack/react-router";
import { SectorPage } from "@/components/sectors/SectorPage";
import { educacaoSector } from "@/lib/sectors/educacao";

export const Route = createFileRoute("/setores/educacao")({
  head: () => ({
    meta: [
      { title: educacaoSector.seo.title },
      { name: "description", content: educacaoSector.seo.description },
    ],
  }),
  component: EducacaoPage,
});

function EducacaoPage() {
  return <SectorPage content={educacaoSector} />;
}
