import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    name: "Mariana Alves",
    company: "Diretora de Operações, Helix Log",
    text: "A VRC Solutions entregou em 3 meses o que outras agências prometiam em um ano. Comunicação impecável.",
    initials: "MA",
  },
  {
    name: "Rafael Monteiro",
    company: "CEO, Atlas Finance",
    text: "Construíram nosso app do zero com qualidade de produto global. Time técnico de altíssimo nível.",
    initials: "RM",
  },
  {
    name: "Camila Duarte",
    company: "CTO, Nimbus Industrial",
    text: "A consultoria de arquitetura nos economizou meses de retrabalho. Recomendo sem hesitar.",
    initials: "CD",
  },
  {
    name: "Pedro Tavares",
    company: "Fundador, Loop Studio",
    text: "Automatizaram processos que travavam nosso crescimento. ROI no primeiro trimestre.",
    initials: "PT",
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
        <p className="kicker text-aqua">Depoimentos</p>

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
              <footer className="mt-10 flex items-center justify-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-sea font-mono text-sm font-medium text-white">
                  {items[i].initials}
                </span>
                <div className="text-left">
                  <div className="text-sm font-medium text-white">{items[i].name}</div>
                  <div className="text-xs text-aqua/80">{items[i].company}</div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Depoimento ${k + 1}`}
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
