import { type ElementType, type ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  variants?: Variants;
  delay?: number;
}

const MotionTag = motion.create as unknown as (tag: ElementType) => ElementType;

/**
 * Reveal content on scroll with a subtle fade-up. Animation runs once.
 */
export function Reveal({
  children,
  className,
  as = "div",
  variants = fadeUp,
  delay = 0,
}: RevealProps) {
  const Component = MotionTag(as);

  return (
    <Component
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </Component>
  );
}
