const sectors = ["SaaS", "Fintech", "Logística", "Indústria", "Saúde", "Educação"];

export function LogosStrip() {
  return (
    <section className="relative border-y border-hairline bg-cloud py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="kicker text-center">Setores que atendemos</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {sectors.map((s) => (
            <span
              key={s}
              className="font-display text-xl font-bold tracking-tight text-foreground/35 transition-colors hover:text-foreground/70"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
