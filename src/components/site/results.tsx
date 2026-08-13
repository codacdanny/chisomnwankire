import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
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
          lead="Reach is not the goal — it is the evidence that the positioning landed. Two of these you can verify yourself in about ten seconds."
        />
      </Reveal>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((result, index) => (
          <Reveal as="li" key={result.label} delay={index * 0.06}>
            <div className="border-border bg-card hover:border-brand/35 h-full rounded-2xl border p-6 shadow-sm shadow-[#1a1016]/4 transition-colors duration-150 ease-out">
              <p className="display-tight text-brand text-4xl font-semibold tabular-nums md:text-[2.75rem]">
                {result.display}
              </p>
              <p className="mt-3 text-sm font-semibold">{result.label}</p>
              <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                {result.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <p className="text-muted-foreground mt-6 max-w-prose text-xs leading-relaxed">
          Follower counts are live on LinkedIn and current as of August 2026. Impressions are
          from LinkedIn analytics across managed accounts, trailing 90 days.
        </p>
      </Reveal>
    </Section>
  );
}
