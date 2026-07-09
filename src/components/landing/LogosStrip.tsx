import { Link } from "@tanstack/react-router";
import type { SectorRoute } from "@/lib/what-we-do";

const sectors: { label: string; to: SectorRoute }[] = [
  { label: "SaaS", to: "/setores/saas-b2b" },
  { label: "Fintech", to: "/setores/fintech" },
  { label: "Logística", to: "/setores/logistica" },
  { label: "Indústria", to: "/setores/industria" },
  { label: "Saúde", to: "/setores/saude" },
  { label: "Educação", to: "/setores/educacao" },
];

export function LogosStrip() {
  return (
    <section className="relative border-y border-hairline bg-cloud py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="kicker text-center">Setores que atendemos</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {sectors.map((s) => (
            <Link
              key={s.label}
              to={s.to}
              className="font-display text-xl font-bold tracking-tight text-foreground/35 transition-colors hover:text-sea"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
