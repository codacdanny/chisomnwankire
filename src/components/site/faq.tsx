import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, Eyebrow } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { faq, links } from "@/lib/site-config";

export function Faq() {
  return (
    <Section id="faq" tone="soft">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="display-tight mt-4 text-3xl font-semibold text-balance md:text-[2.75rem]">
            Before you book
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            Still unsure?{" "}
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-ink font-medium underline underline-offset-4 decoration-brand/40 hover:decoration-brand-ink"
            >
              Message me on LinkedIn
            </a>{" "}
            and ask directly.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <Accordion type="single" collapsible className="gap-0">
            {faq.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground max-w-prose pb-5 text-sm leading-relaxed md:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
