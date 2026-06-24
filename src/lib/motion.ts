import type { Variants } from "motion/react";

/**
 * Shared, intentionally subtle motion presets.
 * Short distances, soft easing, no bounce.
 */
const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Default viewport config for reveal-on-scroll sections. */
export const viewportOnce = { once: true, margin: "-80px" } as const;

/** Container for the hero browser mockup: gentle stagger of its inner blocks. */
export const mockupContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

/** Individual block inside the mockup (stat row, chart, lists). */
export const mockupItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

/** Chart bars growing from the baseline. Pair with `origin-bottom`. */
export const barGrow: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};
