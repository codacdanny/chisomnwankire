import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { offers } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Offers() {
  return (
    <Section id="offers" tone="soft">
      <Reveal>
        <SectionHeading
          eyebrow="Ways to work together"
          title="Three doors in"
          lead="Every one of them starts with a conversation, not a contract. If it is not a fit, I will tell you on the call."
        />
      </Reveal>

      <ul className="mt-12 grid items-start gap-4 lg:grid-cols-3">
        {offers.map((offer, index) => (
          <Reveal as="li" key={offer.name} delay={index * 0.06}>
            <article
              className={cn(
                "flex h-full flex-col rounded-2xl border p-7 transition-[border-color,box-shadow] duration-150 ease-out",
                offer.featured
                  ? "panel-brand border-transparent shadow-xl shadow-[#d9127f]/25 lg:-mt-4 lg:pb-10"
                  : "border-border bg-card hover:border-brand/35 shadow-sm shadow-[#1a1016]/4",
              )}
            >
              {offer.featured ? (
                <p className="bg-gold mb-4 self-start rounded-full px-2.5 py-1 font-mono text-[0.6875rem] tracking-[0.14em] text-[#1a1016] uppercase">
                  Most popular
                </p>
              ) : null}

              <h3 className="display-tight text-2xl font-semibold">{offer.name}</h3>
              <p
                className={cn(
                  "mt-1.5 font-mono text-xs tracking-[0.12em] uppercase",
                  offer.featured ? "text-white" : "text-brand-ink",
                )}
              >
                {offer.price}
              </p>
              <p
                className={cn(
                  "mt-4 text-sm leading-relaxed",
                  offer.featured ? "text-white" : "text-muted-foreground",
                )}
              >
                {offer.forWho}
              </p>

              <div
                aria-hidden="true"
                className={cn("my-6", offer.featured ? "h-px bg-white/30" : "rule-fade")}
              />

              <ul className="mb-8 flex-1 space-y-2.5">
                {offer.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check
                      aria-hidden="true"
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        offer.featured ? "text-gold" : "text-brand",
                      )}
                    />
                    <span
                      className={offer.featured ? "text-white" : "text-muted-foreground"}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="xl"
                variant={offer.featured ? "secondary" : "default"}
                className={cn(
                  "w-full",
                  offer.featured && "bg-white text-[#1a1016] hover:bg-white/90",
                )}
              >
                <a href={offer.href} target="_blank" rel="noopener noreferrer">
                  {offer.cta}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
