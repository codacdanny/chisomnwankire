import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { Parallax } from "@/components/site/motion-primitives";
import { finalCta, links } from "@/lib/site-config";

export function FinalCta() {
  return (
    <Section>
      <Reveal>
        <Parallax distance={34} innerClassName="panel-brand relative overflow-hidden rounded-3xl px-6 py-14 text-center shadow-xl shadow-[#d9127f]/25 md:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(255,255,255,0.16),transparent_65%)]"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="display-tight text-3xl font-semibold text-balance md:text-5xl">
              {finalCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-prose text-base leading-relaxed text-white md:text-lg">
              {finalCta.body}
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="xl" className="bg-white text-[#1a1016] hover:bg-white/90">
                <a href={links.calendly} target="_blank" rel="noopener noreferrer">
                  {finalCta.cta}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-white/50 bg-transparent text-white hover:bg-white/15 hover:text-white"
              >
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </Parallax>
      </Reveal>
    </Section>
  );
}
