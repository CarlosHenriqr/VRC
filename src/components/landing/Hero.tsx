import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroCanvas } from "./HeroCanvas";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      <HeroCanvas />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="kicker flex items-center gap-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sea" />
          Engenharia de software sob medida
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mt-6 font-display text-[3.25rem] font-bold leading-[0.92] tracking-[-0.045em] text-foreground sm:text-7xl lg:text-[7.5rem]"
        >
          Software
          <br />
          <span className="text-sea">sob medida</span>
        </motion.h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            A VRC Solutions projeta e constrói sistemas, plataformas e automações sob medida — com a
            engenharia, o cuidado e a previsibilidade que uma operação séria exige.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="flex flex-wrap gap-3"
          >
            <a href="#contato" className="pill group">
              Solicitar orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#servicos" className="pill-outline">
              Conhecer serviços
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
