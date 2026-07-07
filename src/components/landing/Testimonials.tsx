import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    text: "Cada projeto começa do zero — sem templates, sem atalhos. Construímos exatamente o que o seu negócio precisa.",
    label: "Sob medida de verdade",
  },
  {
    text: "Comunicação clara desde o primeiro contato. Você acompanha escopo, prazos e entregas em cada etapa.",
    label: "Transparência total",
  },
  {
    text: "Arquitetura sólida, código limpo e documentação desde o início. Pensamos no futuro do seu produto.",
    label: "Engenharia que dura",
  },
  {
    text: "Somos parceiros, não fornecedores. Seu sucesso é o nosso critério de qualidade.",
    label: "Parceria real",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="ocean relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-sea/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="kicker text-aqua">Compromissos</p>

        <div className="relative mt-12 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-display text-2xl font-semibold leading-snug tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl">
                &ldquo;{items[i].text}&rdquo;
              </p>
              <footer className="mt-10">
                <span className="inline-block rounded-full bg-sea/20 px-4 py-1.5 font-mono text-xs font-medium text-aqua">
                  {items[i].label}
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Compromisso ${k + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                k === i ? "w-10 bg-sea" : "w-5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
