import { useEffect, useId, useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { WHAT_WE_DO_SECTIONS, type WhatWeDoLink } from "@/lib/what-we-do";

const ease = [0.22, 1, 0.36, 1] as const;
const CLOSE_DELAY_MS = 120;

function scrollToHash(e: MouseEvent<HTMLAnchorElement>, hash: string, onDone?: () => void) {
  e.preventDefault();
  const target = document.getElementById(hash);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${hash}`);
  }
  onDone?.();
}

type WhatWeDoMenuProps = {
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
};

export function WhatWeDoMenu({ variant, onNavigate }: WhatWeDoMenuProps) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = useId();

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openMenu() {
    clearCloseTimer();
    setOpen(true);
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  }

  function closeMenu() {
    clearCloseTimer();
    setOpen(false);
  }

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    if (!open || variant !== "desktop") return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, variant]);

  function navHref(hash: string) {
    return isHome ? `#${hash}` : `/#${hash}`;
  }

  function handleHashClick(e: MouseEvent<HTMLAnchorElement>, hash: string) {
    if (isHome) {
      scrollToHash(e, hash, () => {
        closeMenu();
        onNavigate?.();
      });
    } else {
      closeMenu();
      onNavigate?.();
    }
  }

  function handleRouteClick() {
    closeMenu();
    onNavigate?.();
  }

  function renderLink(link: WhatWeDoLink, className: string) {
    if (link.kind === "hash") {
      return (
        <a
          key={`${link.hash}-${link.label}`}
          href={navHref(link.hash)}
          onClick={(e) => handleHashClick(e, link.hash)}
          className={className}
        >
          {link.label}
        </a>
      );
    }

    return (
      <Link
        key={`${link.to}-${link.label}`}
        to={link.to}
        onClick={handleRouteClick}
        className={className}
      >
        {link.label}
      </Link>
    );
  }

  if (variant === "mobile") {
    return (
      <div className="flex flex-col">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-cloud hover:text-foreground"
        >
          O que fazemos
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-4 px-3 pb-3 pt-1">
                {WHAT_WE_DO_SECTIONS.map((section) => (
                  <div key={section.title}>
                    <p className="mb-1.5 px-0 text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
                      {section.title}
                    </p>
                    <div className="flex flex-col">
                      {section.links.map((link) =>
                        renderLink(
                          link,
                          "rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-cloud hover:text-foreground",
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
      <button
        type="button"
        onFocus={openMenu}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className={`group relative flex items-center gap-1 text-sm font-medium transition-colors ${
          open ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        O que fazemos
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
        <span
          className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-sea transition-all duration-300 ${
            open ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-label="O que fazemos"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease }}
            className="fixed inset-x-0 top-[4.5rem] z-40 overflow-hidden border-b border-hairline bg-background shadow-[0_18px_40px_-28px_rgba(1,24,41,0.35)]"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -6, opacity: 0 }}
              transition={{ duration: 0.28, ease }}
              className="mx-auto max-w-6xl px-6 py-8"
            >
              <div className="divide-y divide-hairline">
                {WHAT_WE_DO_SECTIONS.map((section) => (
                  <div
                    key={section.title}
                    className="grid grid-cols-[10rem_1fr] gap-8 py-6 first:pt-0 last:pb-0 sm:grid-cols-[12rem_1fr]"
                  >
                    <p className="pt-0.5 text-sm font-semibold text-foreground">{section.title}</p>
                    <div className="grid grid-cols-2 gap-x-10 gap-y-2.5">
                      {section.links.map((link) =>
                        renderLink(
                          link,
                          "text-sm text-muted-foreground transition-colors hover:text-foreground",
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
