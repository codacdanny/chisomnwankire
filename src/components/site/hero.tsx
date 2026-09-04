"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/section";
import { Portrait } from "@/components/site/portrait";
import { CountUp } from "@/components/site/motion-primitives";
import { hero, links, person } from "@/lib/site-config";

export function Hero() {
  const reduceMotion = useReducedMotion();

  // The section is the measurement target and is never transformed, so the
  // parallax cannot feed back into its own scroll progress.
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  /*
   * Four layers, four rates. Depth reads from the *difference* between them, so
   * the magenta plate deliberately travels the opposite way to the photo — that
   * separation is what makes the parallax visible rather than merely present.
   */
  const plateY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const chipY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const bloomY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -45]);

  // Short, one-shot, ease-out. The hero is the one place an entrance earns its keep.
  const step = (index: number) =>
    reduceMotion
      ? { "data-reveal": "" }
      : {
          "data-reveal": "",
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.4,
            ease: [0, 0, 0.2, 1] as const,
            delay: index * 0.06,
          },
        };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24"
    >
      {/* Ambient brand blooms. Decorative, drift slowly, and drift out on scroll. */}
      <motion.div
        aria-hidden="true"
        data-parallax=""
        style={reduceMotion ? undefined : { y: bloomY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="bg-brand-bright/20 motion-safe:animate-(--animate-float) absolute -top-24 -right-16 size-[26rem] rounded-full blur-3xl" />
        <div className="bg-gold/25 motion-safe:animate-(--animate-float-slow) absolute top-40 -left-24 size-72 rounded-full blur-3xl" />
      </motion.div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div data-parallax="" style={reduceMotion ? undefined : { y: copyY }}>
            <motion.p
              {...step(0)}
              className="border-brand/25 bg-brand-tint text-brand-ink inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium"
            >
              <span
                aria-hidden="true"
                className="bg-brand size-1.5 rounded-full shadow-[0_0_0_3px_rgba(217,18,127,0.18)]"
              />
              {hero.badge}
            </motion.p>

            <motion.h1
              {...step(1)}
              // Set in all-caps. `display-tight` tracks at -0.03em, which is too
              // tight for capitals, so tracking is relaxed here.
              className="display-tight mt-6 text-[2rem] font-bold tracking-[-0.005em] text-balance uppercase sm:text-[2.75rem] lg:text-[3.5rem]"
            >
              {hero.headlineLead}{" "}
              {/* Gold sits behind the ink rather than replacing it — gold text on
                  white is 1.3:1, ink on gold is 12.9:1. */}
              <span className="marker-gold motion-safe:animate-(--animate-marker)">
                {hero.headlineHighlight}
              </span>
            </motion.h1>

            <motion.p
              {...step(2)}
              className="text-muted-foreground mt-6 max-w-prose text-base leading-relaxed md:text-lg"
            >
              {hero.sub}
            </motion.p>

            <motion.div {...step(3)} className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="xl">
                <a href={links.calendly} target="_blank" rel="noopener noreferrer">
                  {hero.primaryCta}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="xl" variant="outline">
                <a href="#results">
                  {hero.secondaryCta}
                  <ArrowDown aria-hidden="true" />
                </a>
              </Button>
            </motion.div>

            <motion.ul {...step(4)} className="mt-9 flex flex-wrap gap-2">
              {hero.disciplines.map((discipline) => (
                <li
                  key={discipline}
                  className="border-border bg-card text-muted-foreground rounded-full border px-3.5 py-1.5 text-xs font-medium"
                >
                  {discipline}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            data-reveal=""
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.97 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const, delay: 0.12 },
                })}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            {/* Magenta plate, tilted and offset behind the photo. It carries the
                brand colour the studio backdrop cannot, and gives the parallax a
                second layer to separate from. */}
            <motion.div
              aria-hidden="true"
              data-parallax=""
              style={reduceMotion ? undefined : { y: plateY }}
              className="panel-brand absolute inset-0 -rotate-3 rounded-[2rem] shadow-xl shadow-[#d9127f]/25"
            />
            {/* Gold accent peeking from behind the opposite corner. */}
            <motion.div
              aria-hidden="true"
              data-parallax=""
              style={reduceMotion ? undefined : { y: plateY }}
              className="bg-gold absolute -top-4 right-6 size-24 rotate-12 rounded-2xl"
            />

            <motion.div
              data-parallax=""
              style={reduceMotion ? undefined : { y: portraitY }}
              className="relative"
            >
              <Portrait />
            </motion.div>

            {/* Floating proof chip — the single number that earns the scroll. */}
            <motion.div
              data-parallax=""
              style={reduceMotion ? undefined : { y: chipY }}
              className="border-border bg-card absolute -bottom-5 -left-4 rounded-2xl border p-4 shadow-lg shadow-[#1a1016]/8 sm:-left-6"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="text-brand size-4" aria-hidden="true" />
                <span className="text-muted-foreground text-xs font-medium">
                  Last 90 days
                </span>
              </div>
              <CountUp
                value="2,017,000"
                className="display-tight mt-1.5 block font-mono text-2xl font-semibold tabular-nums"
              />
              <p className="text-muted-foreground mt-0.5 text-xs">
                impressions · <span className="text-brand-ink font-semibold">+4,472%</span>
              </p>
            </motion.div>

            <span className="sr-only">{person.tagline}</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
