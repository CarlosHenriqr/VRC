import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/services/ServicePage";
import { integracaoSistemasService } from "@/lib/services/integracao-de-sistemas";

export const Route = createFileRoute("/servicos/integracao-de-sistemas")({
  head: () => ({
    meta: [
      { title: integracaoSistemasService.seo.title },
      { name: "description", content: integracaoSistemasService.seo.description },
    ],
  }),
  component: IntegracaoSistemasPage,
});

function IntegracaoSistemasPage() {
  return <ServicePage content={integracaoSistemasService} />;
}
