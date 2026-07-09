import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/services/ServicePage";
import { inteligenciaArtificialService } from "@/lib/services/inteligencia-artificial";

export const Route = createFileRoute("/servicos/inteligencia-artificial")({
  head: () => ({
    meta: [
      { title: inteligenciaArtificialService.seo.title },
      {
        name: "description",
        content: inteligenciaArtificialService.seo.description,
      },
    ],
  }),
  component: InteligenciaArtificialPage,
});

function InteligenciaArtificialPage() {
  return <ServicePage content={inteligenciaArtificialService} />;
}
