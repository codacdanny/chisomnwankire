"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/section";
import { Portrait } from "@/components/site/portrait";
import { hero, links, person } from "@/lib/site-config";

export function Hero() {
  const reduceMotion = useReducedMotion();

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
    <section id="top" className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
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
              className="display-tight mt-6 text-[2rem] font-semibold text-balance sm:text-[2.75rem] lg:text-[3.25rem]"
            >
              {hero.headlineLead}{" "}
              {/* Gold sits behind the ink rather than replacing it — gold text on
                  white is 1.3:1, ink on gold is 12.9:1. */}
              <span className="marker-gold">{hero.headlineHighlight}</span>
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
          </div>

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
            <Portrait />

            {/* Floating proof chip — the single number that earns the scroll. */}
            <div className="border-border bg-card absolute -bottom-5 -left-4 rounded-2xl border p-4 shadow-lg shadow-[#1a1016]/8 sm:-left-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-brand size-4" aria-hidden="true" />
                <span className="text-muted-foreground text-xs font-medium">
                  Last 90 days
                </span>
              </div>
              <p className="display-tight mt-1.5 font-mono text-2xl font-semibold tabular-nums">
                2,017,000
              </p>
              <p className="text-muted-foreground mt-0.5 text-xs">
                impressions · <span className="text-brand-ink font-semibold">+4,472%</span>
              </p>
            </div>

            <span className="sr-only">{person.tagline}</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
