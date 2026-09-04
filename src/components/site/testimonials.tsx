import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { testimonials } from "@/lib/site-config";

/**
 * Renders nothing until `testimonials` in site-config has entries — the nav
 * entry is gated on the same array, so the site never ships an empty Reviews
 * section or a placeholder quote. Add three real ones and both switch on.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section id="reviews" tone="soft">
      <Reveal>
        <SectionHeading
          eyebrow="Reviews"
          title="What the people I work with say"
          lead="Every one of these came from a founder who was invisible before we started."
        />
      </Reveal>

      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal as="li" key={`${item.name}-${index}`} delay={Math.min(index, 3) * 0.06}>
            <figure className="border-border bg-card h-full rounded-2xl border p-6 shadow-sm shadow-[#1a1016]/4">
              <Quote className="text-brand size-5" aria-hidden="true" />
              <blockquote className="mt-4 text-sm leading-relaxed">
                {item.quote}
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold">{item.name}</span>
                <span className="text-muted-foreground block">
                  {item.title}, {item.company}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
