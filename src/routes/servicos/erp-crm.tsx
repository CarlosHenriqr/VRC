import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/services/ServicePage";
import { erpCrmService } from "@/lib/services/erp-crm";

export const Route = createFileRoute("/servicos/erp-crm")({
  head: () => ({
    meta: [
      { title: erpCrmService.seo.title },
      { name: "description", content: erpCrmService.seo.description },
    ],
  }),
  component: ErpCrmPage,
});

function ErpCrmPage() {
  return <ServicePage content={erpCrmService} />;
}
