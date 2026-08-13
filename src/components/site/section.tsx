import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Single page gutter and max width for every section on the site. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)}>{children}</div>
  );
}

export function Section({
  id,
  children,
  className,
  /** Pink-tinted band. Alternate with white to give the page rhythm. */
  tone = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "soft";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 md:py-28",
        tone === "soft" && "bg-soft border-y",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-brand-ink font-mono text-xs tracking-[0.18em] uppercase">{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="display-tight mt-4 text-3xl font-semibold text-balance md:text-[2.75rem]">
        {title}
      </h2>
      {lead ? (
        <p className="text-muted-foreground mt-4 max-w-prose text-base leading-relaxed md:text-lg">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
