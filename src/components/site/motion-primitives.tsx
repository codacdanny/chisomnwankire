"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Magenta reading-progress line pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 190, damping: 32, mass: 0.3 });

  /*
   * Hidden via CSS rather than `useReducedMotion()`. That hook has proved
   * unreliable here — it does not flip even when the media query matches — so
   * every reduced-motion guarantee on this site is enforced in CSS, which cannot
   * fail that way. Progress is inherently motion-linked, so it is removed
   * outright rather than frozen.
   */
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="from-brand-bright to-brand fixed inset-x-0 top-0 z-100 h-[3px] origin-left bg-linear-to-r motion-reduce:hidden"
    />
  );
}

/**
 * Scroll-linked parallax. The outer element is the measurement target and is
 * never transformed, so its rect stays stable and the transform cannot feed back
 * into its own scroll progress.
 */
export function Parallax({
  children,
  distance = 40,
  className,
  innerClassName,
}: {
  children: ReactNode;
  /** Pixels travelled across the full pass through the viewport. */
  distance?: number;
  className?: string;
  innerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        data-parallax=""
        style={reduceMotion ? undefined : { y }}
        className={innerClassName}
      >
        {children}
      </motion.div>
    </div>
  );
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Animates the numeric runs inside a string, leaving everything else alone —
 * so "15.2K", "3 → 693", "300+" and "2,017,000" all work without special-casing.
 * Decimal places and comma grouping are inferred from the target text, so the
 * width never jumps mid-count.
 */
export function CountUp({
  value,
  className,
  duration = 1100,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  // Starts at 1 so the server renders the final figure. Without JS, or with
  // reduced motion, the correct number is simply what is already on the page.
  const [progress, setProgress] = useState(1);
  const hasRun = useRef(false);

  useEffect(() => {
    if (reduceMotion) return;
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || hasRun.current) return;
      hasRun.current = true;
      observer.disconnect();

      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        setProgress(easeOutCubic(t));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration, reduceMotion]);

  const shown = reduceMotion ? 1 : progress;

  // Split into numeric and non-numeric runs; only the numbers animate.
  const parts = value.split(/(\d[\d,]*(?:\.\d+)?)/g).filter(Boolean);

  return (
    <span ref={ref} className={className}>
      {parts.map((part, index) => {
        if (!/^\d/.test(part)) return <span key={index}>{part}</span>;

        // Grouping and decimals come from the target text, so the figure never
        // changes width mid-count.
        const grouped = part.includes(",");
        const decimals = part.includes(".") ? part.split(".")[1].length : 0;
        const target = Number(part.replace(/,/g, ""));

        return (
          <span key={index} className="tabular-nums">
            {(target * shown).toLocaleString("en-US", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
              useGrouping: grouped,
            })}
          </span>
        );
      })}
    </span>
  );
}

/**
 * A hairline that draws itself as the section it belongs to passes the viewport.
 */
export function ScrollLine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.6"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  return (
    <div ref={ref} className={cn("bg-border h-px w-full overflow-hidden", className)}>
      <motion.div
        data-parallax=""
        style={reduceMotion ? { transform: "scaleX(1)" } : { scaleX }}
        className="from-brand-bright to-brand h-full w-full origin-left bg-linear-to-r"
      />
    </div>
  );
}

/**
 * Page-wide parallax field.
 *
 * Fixed to the viewport and translated against document scroll, so the shapes
 * visibly drift at their own speeds for the whole length of the page — this is
 * what carries the parallax feel between sections, rather than it living only in
 * the hero. Purely decorative: blurred, low-opacity, behind everything, and
 * `aria-hidden`. Only `transform` animates, so it stays off the layout path.
 */
export function ParallaxBackdrop() {
  const { scrollYProgress } = useScroll();

  const slow = useTransform(scrollYProgress, [0, 1], ["0px", "-320px"]);
  const medium = useTransform(scrollYProgress, [0, 1], ["0px", "420px"]);
  const fast = useTransform(scrollYProgress, [0, 1], ["0px", "-700px"]);
  const drift = useTransform(scrollYProgress, [0, 1], ["0px", "260px"]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden motion-reduce:hidden"
    >
      <motion.div
        data-parallax=""
        style={{ y: slow }}
        className="bg-brand-bright/12 absolute top-[15vh] -left-40 size-[34rem] rounded-full blur-3xl"
      />
      <motion.div
        data-parallax=""
        style={{ y: medium }}
        className="bg-gold/16 absolute top-[55vh] -right-32 size-[28rem] rounded-full blur-3xl"
      />
      <motion.div
        data-parallax=""
        style={{ y: fast }}
        className="bg-brand/10 absolute top-[105vh] left-[45%] size-[30rem] rounded-full blur-3xl"
      />
      <motion.div
        data-parallax=""
        style={{ y: drift }}
        className="bg-brand-bright/10 absolute top-[150vh] -left-24 size-[26rem] rounded-full blur-3xl"
      />
    </div>
  );
}
