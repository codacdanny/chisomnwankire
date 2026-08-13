import { CalendarDays, Radio } from "lucide-react";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { speaking } from "@/lib/site-config";

export function Speaking() {
  return (
    <Section>
      <Reveal>
        <div className="panel-brand relative overflow-hidden rounded-3xl shadow-xl shadow-[#d9127f]/20">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_88%_10%,rgba(255,255,255,0.18),transparent_55%)]"
          />

          <div className="relative grid gap-10 p-7 md:p-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-white uppercase">
                {speaking.eyebrow}
              </p>

              <h2 className="display-tight mt-4 text-2xl font-semibold text-balance md:text-4xl">
                {speaking.title}
              </h2>

              <p className="mt-5 max-w-prose text-base leading-relaxed text-white">
                {speaking.body}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white">
                <span className="flex items-center gap-2">
                  <Radio className="text-gold size-4" aria-hidden="true" />
                  {speaking.host}
                </span>
                <span className="flex items-center gap-2">
                  <CalendarDays className="text-gold size-4" aria-hidden="true" />
                  <span className="font-mono text-xs tabular-nums">{speaking.date}</span>
                </span>
              </div>
            </div>

            <dl className="flex flex-row justify-between gap-4 rounded-2xl border border-white/30 bg-black/10 p-6 sm:justify-around lg:flex-col lg:justify-center lg:gap-0 lg:divide-y lg:divide-white/30">
              {speaking.stats.map((stat) => (
                <div key={stat.label} className="lg:py-5 lg:first:pt-0 lg:last:pb-0">
                  <dt className="text-xs text-white">{stat.label}</dt>
                  <dd className="display-tight text-gold mt-1 font-mono text-3xl font-semibold tabular-nums">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
