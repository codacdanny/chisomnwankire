import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { CountUp } from "@/components/site/motion-primitives";
import { results } from "@/lib/site-config";

export function Results() {
  return (
    <Section id="results" tone="soft">
      <Reveal>
        <SectionHeading
          eyebrow="Results"
          title={
            <>
              Numbers from the accounts I run.{" "}
              <span className="text-muted-foreground">Not from a template.</span>
            </>
          }
        />
      </Reveal>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((result, index) => (
          <Reveal as="li" key={result.label} delay={index * 0.06}>
            <div className="border-border bg-card hover:border-brand/35 h-full rounded-2xl border p-6 shadow-sm shadow-[#1a1016]/4 transition-[border-color,box-shadow,transform] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-md">
              <CountUp
                value={result.display}
                className="display-tight text-brand block text-4xl font-semibold tabular-nums md:text-[2.75rem]"
              />
              <p className="mt-3 text-sm font-semibold">{result.label}</p>
              {result.detail ? (
                <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                  {result.detail}
                </p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <p className="text-muted-foreground mt-6 max-w-prose text-xs leading-relaxed">
          Figures from LinkedIn analytics across managed accounts, trailing 90 days.
        </p>
      </Reveal>
    </Section>
  );
}
