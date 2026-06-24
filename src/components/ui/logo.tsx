import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/**
 * Wordmark with a small geometric "N" glyph. No gradients, no glow.
 */
export function Logo({ className }: LogoProps) {
  return (
    <a
      href="#top"
      className={cn(
        "flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-80",
        className,
      )}
      aria-label="Nexus Digital — back to top"
    >
      <svg
        viewBox="0 0 32 32"
        className="size-7"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="0.5"
          y="0.5"
          width="31"
          height="31"
          rx="7"
          stroke="rgba(255,255,255,0.14)"
        />
        <path
          d="M10 22V10l12 12V10"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[15px] font-semibold tracking-tight">Nexus Digital</span>
    </a>
  );
}
