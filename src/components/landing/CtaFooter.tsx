import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Linkedin, Instagram, Github, Mail, Phone, MessageCircle } from "lucide-react";

export function Cta() {
  return (
    <section id="contato" className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="ocean relative overflow-hidden rounded-[2rem] px-8 py-16 sm:px-16 lg:py-24"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sea/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-aqua/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="kicker text-aqua">Vamos conversar</p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Vamos construir a próxima solução digital da sua empresa?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-aqua/80">
              Conte seu desafio e nossa equipe desenvolverá uma solução personalizada para
              transformar sua ideia em resultado.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:contato@nexora.com.br"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white"
              >
                Ver portfólio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-hairline pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold tracking-[-0.04em]">VRC Solutions</span>
              <span className="h-2 w-2 rounded-full bg-sea" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Parceira estratégica em engenharia de software, automação e inteligência artificial.
            </p>
          </div>

          <FooterCol
            title="Empresa"
            links={[
              { label: "Sobre", href: "#sobre" },
              { label: "Serviços", href: "#servicos" },
              { label: "Portfólio", href: "#portfolio" },
            ]}
          />

          <div>
            <h4 className="kicker">Contato</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-sea" strokeWidth={1.75} /> contato@nexora.com.br
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-sea" strokeWidth={1.75} /> +55 (11) 4000-0000
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-sea" strokeWidth={1.75} /> WhatsApp
              </li>
            </ul>
          </div>

          <div>
            <h4 className="kicker">Redes</h4>
            <div className="mt-5 flex gap-2.5">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
                { icon: Github, label: "GitHub" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-muted-foreground transition-colors hover:border-sea hover:bg-sea hover:text-white"
                >
                  <s.icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
            <h4 className="kicker mt-8">Legal</h4>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/politica-de-privacidade"
                  className="transition-colors hover:text-foreground"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="transition-colors hover:text-foreground">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-hairline py-8 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} VRC Solutions. Todos os direitos reservados.</div>
          <div className="font-mono tracking-wide">Engenharia de software sob medida</div>
        </div>
      </div>

      {/* Oversized wordmark, Sui-style footer flourish */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="font-display text-[22vw] font-bold leading-[0.8] tracking-[-0.06em] text-foreground/[0.04]">
            VRC Solutions
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="kicker">{title}</h4>
      <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
