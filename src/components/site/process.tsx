import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { ScrollLine } from "@/components/site/motion-primitives";
import { process } from "@/lib/site-config";

export function Process() {
  return (
    <Section id="process" tone="soft">
      <Reveal>
        <SectionHeading
          eyebrow="Process"
          title="Four steps, ninety days"
          lead="No mystery, no monthly deck full of vanity charts. This is the same sequence every engagement follows."
        />
      </Reveal>

      <ScrollLine className="mt-12" />

      <ol className="border-border bg-border mt-px grid gap-px overflow-hidden rounded-2xl border md:grid-cols-2 lg:grid-cols-4">
        {process.map((phase, index) => (
          <Reveal as="li" key={phase.step} delay={index * 0.06}>
            <div className="bg-card hover:bg-brand-tint h-full p-6 transition-colors duration-150 ease-out md:p-7">
              <span className="text-brand-ink font-mono text-xs tracking-[0.2em]">
                {phase.step}
              </span>
              <h3 className="display-tight mt-4 text-xl font-semibold">{phase.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {phase.body}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
