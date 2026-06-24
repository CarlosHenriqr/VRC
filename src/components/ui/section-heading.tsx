import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Consistent eyebrow + title + description block used across sections.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <motion.span
        variants={fadeUp}
        className="text-xs font-medium uppercase tracking-[0.2em] text-muted"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="max-w-3xl text-section font-semibold text-foreground"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-[17px] leading-relaxed text-muted"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
