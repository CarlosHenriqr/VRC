import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const whyUs = [
  "Soluções sob medida, sem templates",
  "Código limpo, escalável e documentado",
  "Arquitetura moderna e segura por padrão",
  "Comunicação transparente em cada etapa",
];

const youGet = [
  "Entregas previsíveis em sprints",
  "Integrações com seus sistemas atuais",
  "Suporte e evolução contínua",
  "Um parceiro técnico de longo prazo",
];

export function Differentials() {
  return (
    <section id="manifesto" className="ocean relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sea/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="kicker text-aqua">Por que a Nexora</p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 max-w-4xl font-display text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]"
        >
          Construímos software para ser <span className="text-sea">confiável</span>,{" "}
          <span className="text-sea">escalável</span> e{" "}
          <span className="text-sea">verdadeiramente seu</span>. O resultado: produtos melhores,
          equipes mais rápidas e valor que fica na sua operação.
        </motion.h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <Column title="O que entregamos" items={whyUs} />
          <Column title="O que você ganha" items={youGet} />
        </div>
      </div>
    </section>
  );
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="kicker text-aqua">{title}</h3>
      <ul className="mt-6">
        {items.map((label, i) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-center gap-3 border-b border-white/10 py-4 text-lg text-white/90"
          >
            <ArrowRight className="h-4 w-4 shrink-0 text-sea" />
            {label}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
