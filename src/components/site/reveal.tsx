"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in seconds. Keep under ~0.24s total across a group. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
};

/**
 * One-shot scroll entrance. Fires once, never on re-render, and collapses to the
 * final state instantly under `prefers-reduced-motion: reduce`.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.4, ease: [0, 0, 0.2, 1], delay }}
    >
      {children}
    </Component>
  );
}
