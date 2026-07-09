import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/services/ServicePage";
import { desenvolvimentoWebService } from "@/lib/services/desenvolvimento-web";

export const Route = createFileRoute("/servicos/desenvolvimento-web")({
  head: () => ({
    meta: [
      { title: desenvolvimentoWebService.seo.title },
      { name: "description", content: desenvolvimentoWebService.seo.description },
    ],
  }),
  component: DesenvolvimentoWebPage,
});

function DesenvolvimentoWebPage() {
  return <ServicePage content={desenvolvimentoWebService} />;
}
