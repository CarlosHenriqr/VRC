import { createFileRoute } from "@tanstack/react-router";
import { SectorPage } from "@/components/sectors/SectorPage";
import { saasB2bSector } from "@/lib/sectors/saas-b2b";

export const Route = createFileRoute("/setores/saas-b2b")({
  head: () => ({
    meta: [
      { title: saasB2bSector.seo.title },
      { name: "description", content: saasB2bSector.seo.description },
    ],
  }),
  component: SaasB2bPage,
});

function SaasB2bPage() {
  return <SectorPage content={saasB2bSector} />;
}
