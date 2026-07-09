import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/services/ServicePage";
import { consultoriaService } from "@/lib/services/consultoria";

export const Route = createFileRoute("/servicos/consultoria")({
  head: () => ({
    meta: [
      { title: consultoriaService.seo.title },
      { name: "description", content: consultoriaService.seo.description },
    ],
  }),
  component: ConsultoriaPage,
});

function ConsultoriaPage() {
  return <ServicePage content={consultoriaService} />;
}
