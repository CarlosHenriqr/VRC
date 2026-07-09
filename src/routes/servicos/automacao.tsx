import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/services/ServicePage";
import { automacaoService } from "@/lib/services/automacao";

export const Route = createFileRoute("/servicos/automacao")({
  head: () => ({
    meta: [
      { title: automacaoService.seo.title },
      { name: "description", content: automacaoService.seo.description },
    ],
  }),
  component: AutomacaoPage,
});

function AutomacaoPage() {
  return <ServicePage content={automacaoService} />;
}
