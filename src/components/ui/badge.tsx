import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Quiet, uppercase label used for eyebrows and metadata tags.
 */
export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-transparent px-2.5 py-1 text-xs font-medium text-muted",
        className,
      )}
      {...props}
    />
  );
}
