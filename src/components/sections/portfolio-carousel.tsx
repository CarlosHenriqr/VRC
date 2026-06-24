import { Card } from "@/components/ui/card";
import { type CaseStatus, type CaseStudy } from "@/lib/content";
import { cn } from "@/lib/utils";

export const CASE_STATUS_DOT: Record<CaseStatus, string> = {
  Shipped: "bg-foreground",
  "In production": "bg-foreground",
  Ongoing: "bg-muted",
};

function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Card className="mr-5 flex w-[320px] shrink-0 flex-col p-7 transition-colors hover:border-foreground/20 sm:w-[380px]">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">
        {study.industry}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-foreground">{study.name}</h3>

      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
        {study.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {study.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
        <span className="flex items-center gap-2 text-sm text-foreground">
          <span
            className={cn("size-1.5 rounded-full", CASE_STATUS_DOT[study.status])}
            aria-hidden="true"
          />
          {study.status}
        </span>
        <span className="font-mono text-sm text-muted">{study.year}</span>
      </div>
    </Card>
  );
}

function CaseTrackGroup({
  items,
  ariaHidden = false,
}: {
  items: CaseStudy[];
  ariaHidden?: boolean;
}) {
  return (
    <ul className="flex shrink-0" aria-hidden={ariaHidden || undefined}>
      {items.map((study) => (
        <li key={study.name} className="flex">
          <CaseCard study={study} />
        </li>
      ))}
    </ul>
  );
}

interface PortfolioCarouselProps {
  items: CaseStudy[];
}

/**
 * Seamless, infinite-loop carousel of case studies.
 * Pauses on hover and respects prefers-reduced-motion (falls back to scroll).
 */
export function PortfolioCarousel({ items }: PortfolioCarouselProps) {
  return (
    <div
      className="group relative mt-14 overflow-hidden motion-reduce:overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      role="region"
      aria-label="Selected case studies"
    >
      <div className="flex w-max animate-marquee will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <CaseTrackGroup items={items} />
        <CaseTrackGroup items={items} ariaHidden />
      </div>
    </div>
  );
}
