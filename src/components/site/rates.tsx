import type { ReactNode } from "react";
import { ArrowUpRight, Check, Info, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { links, rates } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Bundle = (typeof rates.bundles)[number];

/** What a bundle's contents would cost booked one at a time. */
function priceSeparately(bundle: Bundle) {
  return bundle.items.reduce((sum, item) => sum + item.qty * item.rate.price, 0);
}

/**
 * A naira amount. The sign is drawn by the `naira` utility because none of the
 * site's fonts include "₦" (see globals.css); the real character is still what
 * screen readers announce and what gets copied.
 */
function Naira({ amount, className }: { amount: number; className?: string }) {
  return (
    <span className={cn("whitespace-nowrap tabular-nums", className)}>
      <span aria-hidden="true" className="naira">
        N
      </span>
      <span className="sr-only">₦</span>
      {amount.toLocaleString("en-US")}
    </span>
  );
}

/** Mono label with a hairline running off to the right — splits singles from bundles. */
function GroupLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <h3 className="text-brand-ink shrink-0 font-mono text-xs tracking-[0.18em] uppercase">
        {children}
      </h3>
      <div aria-hidden="true" className="from-border h-px flex-1 bg-linear-to-r to-transparent" />
    </div>
  );
}

const briefHref = `${links.email}?subject=${encodeURIComponent("Sponsored content enquiry")}`;

export function Rates() {
  return (
    <Section id="rates">
      <Reveal>
        <SectionHeading
          eyebrow="Sponsored content rates"
          title={
            <>
              Your brand, in front of {rates.audience} people on LinkedIn.{" "}
              <span className="text-muted-foreground">Priced up front.</span>
            </>
          }
          lead="Written in my voice and published on my own profile, to the audience that already reads me. Book a single post, or bundle a few and pay less for each one."
        />
      </Reveal>

      {/* ── Single posts ─────────────────────────────────────────────── */}
      <div className="mt-12">
        <Reveal>
          <GroupLabel>Single posts</GroupLabel>
        </Reveal>

        <Reveal delay={0.06}>
          <ul className="border-border bg-border mt-5 grid gap-px overflow-hidden rounded-2xl border shadow-sm shadow-[#1a1016]/4 md:grid-cols-2">
            {rates.singles.map((rate) => (
              <li key={rate.name} className="bg-card flex flex-col p-6 md:p-8">
                <h4 className="display-tight text-xl font-semibold md:text-2xl">{rate.name}</h4>

                <p className="mt-4 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <Naira
                    amount={rate.price}
                    className="display-tight text-brand text-4xl font-semibold md:text-[2.75rem]"
                  />
                  <span className="text-muted-foreground font-mono text-xs tracking-[0.12em] uppercase">
                    per post
                  </span>
                </p>

                <div aria-hidden="true" className="rule-fade my-6" />

                <ul className="space-y-2.5">
                  {rate.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check aria-hidden="true" className="text-brand mt-0.5 size-4 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* ── Bundles ──────────────────────────────────────────────────── */}
      <div className="mt-14">
        <Reveal>
          <GroupLabel>Bundles</GroupLabel>
        </Reveal>

        {/* Extra row gap on phones: the "Best value" badge hangs 12px above its card. */}
        <ul className="mt-5 grid gap-x-4 gap-y-7 md:grid-cols-2">
          {rates.bundles.map((bundle, index) => {
            const separately = priceSeparately(bundle);
            const saving = separately - bundle.price;
            const featured = bundle.featured;

            return (
              <Reveal as="li" key={bundle.name} delay={0.06 + index * 0.06}>
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl border p-6 transition-[border-color,box-shadow,transform] duration-150 ease-out hover:-translate-y-0.5 md:p-8",
                    featured
                      ? "panel-brand border-transparent shadow-xl shadow-[#d9127f]/25"
                      : "border-border bg-card hover:border-brand/35 shadow-sm shadow-[#1a1016]/4 hover:shadow-md",
                  )}
                >
                  {/*
                   * Hung on the top edge rather than set beside the name: in a
                   * narrow column it would wrap under the name and push this card's
                   * price below its neighbour's.
                   */}
                  {featured ? (
                    <p className="bg-gold absolute -top-3 right-6 rounded-full px-2.5 py-1 font-mono text-[0.6875rem] tracking-[0.14em] text-[#1a1016] uppercase shadow-sm md:right-8">
                      Best value
                    </p>
                  ) : null}

                  <h4 className="display-tight text-xl font-semibold md:text-2xl">{bundle.name}</h4>

                  <p className="mt-5">
                    <Naira
                      amount={bundle.price}
                      className={cn(
                        "display-tight text-[2.75rem] font-semibold md:text-5xl",
                        featured ? "text-white" : "text-brand",
                      )}
                    />
                  </p>

                  {saving > 0 ? (
                    <p className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm">
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 font-medium",
                          featured ? "bg-gold text-[#1a1016]" : "bg-brand-tint text-brand-ink",
                        )}
                      >
                        Save <Naira amount={saving} />
                      </span>
                      <span className={featured ? "text-white" : "text-muted-foreground"}>
                        vs. <Naira amount={separately} /> booked separately
                      </span>
                    </p>
                  ) : null}

                  <div
                    aria-hidden="true"
                    className={cn("my-6", featured ? "h-px bg-white/30" : "rule-fade")}
                  />

                  <ul className="mb-8 flex-1 space-y-3">
                    {bundle.items.map((item) => (
                      <li key={item.label} className="flex items-center gap-3 text-[0.9375rem]">
                        <span
                          className={cn(
                            "grid size-7 shrink-0 place-content-center rounded-lg font-mono text-xs font-semibold tabular-nums",
                            featured ? "bg-black/15 text-white" : "bg-brand-tint text-brand-ink",
                          )}
                        >
                          {item.qty}
                        </span>
                        <span className={featured ? "text-white" : "text-foreground"}>
                          {item.label}
                        </span>
                      </li>
                    ))}
                    {bundle.extras.map((extra) => (
                      <li key={extra} className="flex items-start gap-3 text-[0.9375rem]">
                        <span className="grid size-7 shrink-0 place-content-center">
                          <Check
                            aria-hidden="true"
                            className={cn("size-4", featured ? "text-gold" : "text-brand")}
                          />
                        </span>
                        {/* Top-aligned so a wrapped line keeps its tick on the first row. */}
                        <span className={cn("pt-0.75", featured ? "text-white" : "text-foreground")}>
                          {extra}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="xl"
                    className={cn(
                      "w-full",
                      featured && "bg-white text-[#1a1016] hover:bg-white/90",
                    )}
                  >
                    <a href={links.calendly} target="_blank" rel="noopener noreferrer">
                      Book this package
                      <span className="sr-only">: {bundle.name}</span>
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>

      {/* ── Closing note + brief ─────────────────────────────────────── */}
      <Reveal delay={0.06}>
        <div className="bg-soft mt-8 flex flex-col gap-6 rounded-2xl border p-6 md:flex-row md:items-center md:justify-between md:gap-10 md:p-8">
          <div>
            <p className="display-tight text-xl font-semibold md:text-2xl">{rates.closing}</p>
            <p className="text-muted-foreground mt-2.5 flex max-w-prose items-start gap-2 text-sm leading-relaxed">
              <Info aria-hidden="true" className="text-brand-ink mt-0.5 size-4 shrink-0" />
              {rates.note}
            </p>
          </div>

          <Button asChild size="xl" className="w-full shrink-0 md:w-auto">
            <a href={briefHref}>
              <Mail aria-hidden="true" />
              Send a brief
            </a>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
