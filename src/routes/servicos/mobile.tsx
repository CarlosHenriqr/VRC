import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/services/ServicePage";
import { mobileService } from "@/lib/services/mobile";

export const Route = createFileRoute("/servicos/mobile")({
  head: () => ({
    meta: [
      { title: mobileService.seo.title },
      { name: "description", content: mobileService.seo.description },
    ],
  }),
  component: MobilePage,
});

function MobilePage() {
  return <ServicePage content={mobileService} />;
}
