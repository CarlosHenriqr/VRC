import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-foreground text-background hover:bg-foreground/90",
        secondary:
          "border border-border bg-transparent text-foreground hover:bg-foreground/5",
        ghost: "text-muted hover:text-foreground hover:bg-foreground/5",
      },
      size: {
        sm: "h-9 px-3.5",
        md: "h-10 px-5",
        lg: "h-12 px-6 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

const TAP_EASE = [0.22, 1, 0.36, 1] as const;

export interface ButtonProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => {
    const reduceMotion = useReducedMotion();

    return (
      <motion.button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        whileHover={reduceMotion ? undefined : { y: -1 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.15, ease: TAP_EASE }}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
