import { forwardRef } from "react";
import { type VariantProps } from "class-variance-authority";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const TAP_EASE = [0.22, 1, 0.36, 1] as const;

export interface ButtonLinkProps
  extends HTMLMotionProps<"a">,
    VariantProps<typeof buttonVariants> {}

/**
 * Anchor styled as a button. Used for in-page navigation CTAs.
 */
export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, ...props }, ref) => {
    const reduceMotion = useReducedMotion();

    return (
      <motion.a
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        whileHover={reduceMotion ? undefined : { y: -1 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.15, ease: TAP_EASE }}
        {...props}
      />
    );
  },
);
ButtonLink.displayName = "ButtonLink";
