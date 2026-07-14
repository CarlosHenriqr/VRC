import { Link, useLocation } from "@tanstack/react-router";
import type { MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/brand";

type BrandLogoProps = {
  className?: string;
  /** Classes de tamanho tipográfico (ex.: text-2xl). */
  sizeClassName?: string;
  /** @deprecated Use sizeClassName — mantido por compatibilidade. */
  imgClassName?: string;
  /** Mostra a tagline “Soluções Digitais” abaixo do nome. */
  showTagline?: boolean;
  /** Se true, renderiza só o wordmark sem Link. */
  asImage?: boolean;
};

/**
 * Wordmark tipográfico da CORA — sem imagem.
 * Usa Schibsted Grotesk (fonte do site), com O e acento em sea.
 */
export function BrandLogoImage({
  className,
  sizeClassName,
  imgClassName,
  showTagline = false,
}: {
  className?: string;
  sizeClassName?: string;
  imgClassName?: string;
  showTagline?: boolean;
}) {
  const size = sizeClassName ?? imgClassName;

  return (
    <span
      className={cn("inline-flex flex-col items-start leading-none", className)}
      role="img"
      aria-label={BRAND.fullName}
    >
      <span
        className={cn(
          "font-display font-bold tracking-[-0.045em] text-foreground",
          size ?? "text-2xl",
        )}
      >
        C
        <span className="text-sea">O</span>
        RA
        <span
          className="ml-[0.06em] inline-block h-[0.28em] w-[0.28em] translate-y-[-0.05em] rounded-full bg-sea align-middle"
          aria-hidden
        />
      </span>
      {showTagline && (
        <span className="mt-1.5 font-mono text-[0.52em] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {BRAND.tagline}
        </span>
      )}
    </span>
  );
}

/** Wordmark CORA clicável para a home. */
export function BrandLogo({
  className,
  sizeClassName,
  imgClassName,
  showTagline = false,
  asImage = false,
}: BrandLogoProps) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    }
  }

  const mark = (
    <BrandLogoImage
      sizeClassName={sizeClassName}
      imgClassName={imgClassName}
      showTagline={showTagline}
    />
  );

  if (asImage) {
    return <span className={className}>{mark}</span>;
  }

  return (
    <Link
      to="/"
      onClick={handleClick}
      aria-label={BRAND.fullName}
      className={cn("group inline-flex items-center", className)}
    >
      {mark}
    </Link>
  );
}

/** @deprecated Use BrandLogo */
export function Wordmark({ className = "" }: { className?: string }) {
  return <BrandLogo className={className} />;
}
