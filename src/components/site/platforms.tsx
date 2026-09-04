import { LinkedInIcon, XIcon, InstagramIcon, TikTokIcon } from "@/components/site/icons";
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { platforms } from "@/lib/site-config";

const ICONS = {
  LinkedIn: LinkedInIcon,
  X: XIcon,
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
} as const;

export function Platforms() {
  return (
    <Section id="platforms">
      <Reveal>
        <SectionHeading
          eyebrow="Platforms"
          title="One brand, run properly on every platform that matters"
          lead="Same voice, same positioning, adapted to how people actually behave on each one."
        />
      </Reveal>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((platform, index) => {
          const Icon = ICONS[platform.name];
          return (
            <Reveal as="li" key={platform.name} delay={index * 0.06}>
              <div className="group border-border bg-card hover:border-brand/35 flex h-full items-center gap-4 rounded-2xl border p-5 shadow-sm shadow-[#1a1016]/4 transition-[border-color,box-shadow,transform] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-md">
                <span
                  aria-hidden="true"
                  className="bg-brand-tint text-brand grid size-11 shrink-0 place-content-center rounded-xl transition-[background-color,color,transform] duration-150 ease-out group-hover:scale-105 group-hover:bg-brand group-hover:text-white"
                >
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="display-tight block text-lg font-semibold">
                    {platform.name}
                  </span>
                  <span className="text-muted-foreground block text-xs">{platform.note}</span>
                </span>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
