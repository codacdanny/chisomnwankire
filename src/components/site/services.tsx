import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { services } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <Section id="services">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="Pick the level of help you actually need"
          lead="Some founders want the whole engine handed over. Others want one thing fixed. Both are fine — start where the bottleneck is."
        />
      </Reveal>

      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal as="li" key={service.title} delay={Math.min(index, 3) * 0.06}>
            <article
              className={cn(
                "h-full rounded-2xl border p-6 transition-[background-color,border-color,box-shadow,transform] duration-150 ease-out hover:-translate-y-0.5",
                service.featured
                  ? "panel-brand border-transparent shadow-lg shadow-[#d9127f]/20"
                  : "border-border bg-card hover:border-brand/35 shadow-sm shadow-[#1a1016]/4 hover:shadow-md",
              )}
            >
              {service.featured ? (
                <p className="bg-gold mb-4 inline-block rounded-full px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.14em] text-[#1a1016] uppercase">
                  Most requested
                </p>
              ) : null}

              <h3 className="display-tight text-xl font-semibold">{service.title}</h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  service.featured ? "text-white" : "text-muted-foreground",
                )}
              >
                {service.summary}
              </p>

              <ul className="mt-5 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm">
                    <Check
                      aria-hidden="true"
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        service.featured ? "text-gold" : "text-brand",
                      )}
                    />
                    <span
                      className={service.featured ? "text-white" : "text-muted-foreground"}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
