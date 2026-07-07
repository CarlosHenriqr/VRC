import { useEffect, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

function scrollToHash(e: MouseEvent<HTMLAnchorElement>, href: string, onDone?: () => void) {
  e.preventDefault();
  const id = href.replace(/^#/, "");
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  }
  onDone?.();
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a
      href="#inicio"
      onClick={(e) => scrollToHash(e, "#inicio")}
      className={`group flex items-center gap-2 ${className}`}
    >
      <span className="font-display text-2xl font-bold tracking-[-0.04em] text-foreground">
        VRC Solutions
      </span>
      <span className="h-2 w-2 rounded-full bg-sea transition-transform duration-300 group-hover:scale-125" />
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-hairline bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Wordmark />

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollToHash(e, l.href)}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-sea transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#portfolio"
            onClick={(e) => scrollToHash(e, "#portfolio")}
            className="pill-outline text-sm"
          >
            Ver portfólio
          </a>
          <a
            href="#contato"
            onClick={(e) => scrollToHash(e, "#contato")}
            className="pill text-sm"
          >
            Fale conosco <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-hairline p-2.5 text-foreground lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-background/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollToHash(e, l.href, () => setOpen(false))}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-cloud hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => scrollToHash(e, "#contato", () => setOpen(false))}
              className="pill mt-2 justify-center"
            >
              Fale conosco <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
