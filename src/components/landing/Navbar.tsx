import { useEffect, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";

const hashLinks = [
  { hash: "servicos", label: "Serviços" },
  { hash: "processo", label: "Processo" },
];

function scrollToHash(e: MouseEvent<HTMLAnchorElement>, hash: string, onDone?: () => void) {
  e.preventDefault();
  const target = document.getElementById(hash);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${hash}`);
  }
  onDone?.();
}

export function Wordmark({ className = "" }: { className?: string }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    }
  }

  return (
    <Link
      to="/"
      onClick={handleClick}
      className={`group flex items-center gap-2 ${className}`}
    >
      <span className="font-display text-2xl font-bold tracking-[-0.04em] text-foreground">
        VRC Solutions
      </span>
      <span className="h-2 w-2 rounded-full bg-sea transition-transform duration-300 group-hover:scale-125" />
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function navHref(hash: string) {
    return isHome ? `#${hash}` : `/#${hash}`;
  }

  function handleHashClick(
    e: MouseEvent<HTMLAnchorElement>,
    hash: string,
    onDone?: () => void,
  ) {
    if (isHome) scrollToHash(e, hash, onDone);
    else onDone?.();
  }

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

        <nav className="hidden items-center gap-8 lg:flex">
          {hashLinks.map((l) => (
            <a
              key={l.hash}
              href={navHref(l.hash)}
              onClick={(e) => handleHashClick(e, l.hash)}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-sea transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Link
            to="/sobre"
            className="group relative text-sm font-medium transition-colors [&.active]:text-foreground text-muted-foreground hover:text-foreground"
          >
            Sobre
            <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-sea transition-all duration-300 group-hover:w-full [.active_&]:w-full" />
          </Link>
          <Link
            to="/cases"
            className="group relative text-sm font-medium transition-colors [&.active]:text-foreground text-muted-foreground hover:text-foreground"
          >
            Cases
            <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-sea transition-all duration-300 group-hover:w-full [.active_&]:w-full" />
          </Link>
          <Link
            to="/contato"
            className="group relative text-sm font-medium transition-colors [&.active]:text-foreground text-muted-foreground hover:text-foreground"
          >
            Contato
            <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-sea transition-all duration-300 group-hover:w-full [.active_&]:w-full" />
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contato" className="pill text-sm">
            Fale conosco <ArrowRight className="h-4 w-4" />
          </Link>
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
            {hashLinks.map((l) => (
              <a
                key={l.hash}
                href={navHref(l.hash)}
                onClick={(e) => handleHashClick(e, l.hash, () => setOpen(false))}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-cloud hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/sobre"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-cloud hover:text-foreground [&.active]:text-foreground"
            >
              Sobre
            </Link>
            <Link
              to="/cases"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-cloud hover:text-foreground [&.active]:text-foreground"
            >
              Cases
            </Link>
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-cloud hover:text-foreground [&.active]:text-foreground"
            >
              Contato
            </Link>
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="pill mt-2 justify-center"
            >
              Fale conosco <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
