import { type ElementType, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
}

/**
 * Centered 1280px content container with consistent horizontal padding.
 */
export function Container({ as: Component = "div", className, ...props }: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-container px-6 lg:px-8", className)}
      {...props}
    />
  );
}
