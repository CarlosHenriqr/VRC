import { useEffect, useState } from "react";

/**
 * Fixed scroll progress counter (00% -> 100%) — a signature element of sui.io.
 * Sits in the lower-left corner and tracks how far the page has been scrolled.
 */
export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const p = scrollable > 0 ? window.scrollY / scrollable : 0;
      setPct(Math.round(Math.min(1, Math.max(0, p)) * 100));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-6 left-6 z-40 hidden items-center gap-3 md:flex"
    >
      <span className="font-mono text-xs tabular-nums text-muted-foreground">
        {String(pct).padStart(2, "0")}%
      </span>
      <span className="relative h-px w-16 overflow-hidden bg-[var(--hairline)]">
        <span
          className="absolute inset-y-0 left-0 bg-sea transition-[width] duration-150"
          style={{ width: `${pct}%` }}
        />
      </span>
    </div>
  );
}
