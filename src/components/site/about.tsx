import { Section, Eyebrow } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { experience, skills } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <h2 className="display-tight mt-4 text-3xl font-semibold text-balance md:text-[2.75rem]">
            I help you become the{" "}
            <span className="marker-gold">obvious choice</span>
          </h2>

          <div className="text-muted-foreground mt-6 max-w-prose space-y-4 text-base leading-relaxed">
            <p>
              Two years ago I was the girl who did not know what LinkedIn was for. Today I
              build and run brands for founders, startups, and training platforms across
              Nigeria, the UK, and Rwanda — strategy, content, and community.
            </p>
            <p>
              The pattern is always the same. The founder is brilliant. The product is good.
              And almost nobody knows they exist. That gap is not a talent problem. It is a
              visibility problem, and visibility is a system you can build.
            </p>
            <p>
              So I build it: strategy first, content that sounds like you and not like an
              agency, and enough consistency that the market stops needing to be convinced.
              Not &ldquo;keep showing up&rdquo; — an actual system, with proof attached.
              LinkedIn is where I do my sharpest work, but the system travels.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="border-border bg-card text-muted-foreground rounded-full border px-3.5 py-1.5 text-xs font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <h3 className="text-muted-foreground font-mono text-xs tracking-[0.18em] uppercase">
            Where I&rsquo;ve worked
          </h3>

          <ol className="mt-6">
            {experience.map((role, index) => (
              <li
                key={`${role.org}-${role.role}`}
                className="border-border relative border-l pt-0 pb-8 pl-6 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "ring-background absolute top-1.5 -left-1 size-2 rounded-full ring-4",
                    index === 0 ? "bg-brand" : "bg-brand/30",
                  )}
                />
                <p className="text-base font-semibold">{role.role}</p>
                <p className="text-muted-foreground mt-0.5 text-sm">{role.org}</p>
                <p className="text-muted-foreground mt-1.5 font-mono text-xs tabular-nums">
                  {role.period} · {role.kind}
                </p>
                {role.note ? (
                  <p className="text-muted-foreground mt-2 max-w-prose text-sm leading-relaxed">
                    {role.note}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
