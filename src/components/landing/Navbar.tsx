import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { WhatWeDoMenu } from "./WhatWeDoMenu";
import { BrandLogo } from "./BrandLogo";
import { FEATURES } from "@/lib/features";

export { BrandLogo, Wordmark } from "./BrandLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <BrandLogo showTagline sizeClassName="text-2xl sm:text-3xl" />

        <nav className="hidden items-center gap-8 lg:flex">
          <WhatWeDoMenu variant="desktop" />
          <Link
            to="/sobre"
            className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
          >
            Sobre
            <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-sea transition-all duration-300 group-hover:w-full [.active_&]:w-full" />
          </Link>
          {FEATURES.cases && (
            <Link
              to="/cases"
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
            >
              Cases
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-sea transition-all duration-300 group-hover:w-full [.active_&]:w-full" />
            </Link>
          )}
          <Link
            to="/contato"
            className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
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
          type="button"
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
            <WhatWeDoMenu variant="mobile" onNavigate={() => setOpen(false)} />
            <Link
              to="/sobre"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-cloud hover:text-foreground [&.active]:text-foreground"
            >
              Sobre
            </Link>
            {FEATURES.cases && (
              <Link
                to="/cases"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-cloud hover:text-foreground [&.active]:text-foreground"
              >
                Cases
              </Link>
            )}
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
