import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Quanto custa um projeto?",
    a: "Cada projeto é único. Após uma conversa inicial e levantamento de escopo, enviamos uma proposta com investimento, prazo e entregáveis detalhados.",
  },
  {
    q: "Quanto tempo leva o desenvolvimento?",
    a: "Projetos menores ficam entre 4 e 8 semanas. Plataformas mais complexas seguem em sprints contínuos com entregas incrementais.",
  },
  {
    q: "Vocês fazem manutenção?",
    a: "Sim. Oferecemos planos de suporte e evolução contínua, com SLA e canal direto com o time de engenharia.",
  },
  {
    q: "É possível integrar com sistemas existentes?",
    a: "Sim. Integramos com ERPs, CRMs, gateways de pagamento, APIs públicas e sistemas legados via REST, GraphQL ou filas.",
  },
  {
    q: "Vocês desenvolvem aplicativos?",
    a: "Desenvolvemos apps nativos e híbridos para Android e iOS com foco em performance e experiência do usuário.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="kicker">FAQ</p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            Perguntas
            <br />
            frequentes
          </h2>
        </div>

        <div className="border-t border-hairline">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-hairline">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-sea"
                >
                  <span className="font-display text-lg font-semibold tracking-tight">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-sea" : "text-muted-foreground"
                    }`}
                    strokeWidth={1.75}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="max-w-xl pb-6 text-[0.95rem] leading-relaxed text-muted-foreground">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
