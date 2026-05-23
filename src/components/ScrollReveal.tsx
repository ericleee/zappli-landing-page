"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Optional max-translate disabled by default — atmospheric is fade-only.
   *  Setting `lift` adds a subtle 8px upward translate on enter. Use sparingly. */
  lift?: boolean;
}

/**
 * Opacity-only entrance animation on scroll-into-view.
 * Atmospheric genre is "fade-in only" (atmospheric.md § Motion), so no slide,
 * no bounce. Respects prefers-reduced-motion through the framework defaults
 * plus the global rule in globals.css.
 */
export function ScrollReveal({
  children,
  delay = 0,
  className,
  lift = false,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: lift ? 8 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
