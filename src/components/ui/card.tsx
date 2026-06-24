import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Surface card: flat by default, thin border, subtle hover elevation only.
 */
export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-border bg-card transition-colors duration-200",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";
