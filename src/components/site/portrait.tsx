import Image from "next/image";
import { cn } from "@/lib/utils";
import { person } from "@/lib/site-config";

/**
 * ⚠ DROP IN THE REAL PHOTO HERE.
 *
 * Save Chisom's cut-out portrait to `public/chisom.png` (transparent PNG works best
 * against the gradient) and change this to "/chisom.png". Until then the component
 * renders a branded monogram placeholder rather than a broken image.
 */
const PORTRAIT_SRC: string | null = null;

export function Portrait({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border-border relative aspect-4/5 w-full overflow-hidden rounded-3xl border",
        className,
      )}
    >
      {/* Magenta gradient bed — visible behind a transparent cut-out, and the
          full treatment when no photo is set yet. */}
      <div aria-hidden="true" className="panel-brand absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_72%_12%,rgba(255,225,77,0.22),transparent_50%)]"
      />

      {PORTRAIT_SRC ? (
        <Image
          src={PORTRAIT_SRC}
          alt={`${person.name}, ${person.role}`}
          fill
          sizes="(min-width: 1024px) 420px, 80vw"
          className="object-cover object-top"
          priority
        />
      ) : (
        <div className="absolute inset-0 grid place-content-center gap-3 text-center">
          <span
            aria-hidden="true"
            className="display-tight text-7xl font-bold text-white"
          >
            {person.initials}
          </span>
          {/* Full-strength white: small type over the magenta bed needs 4.5:1. */}
          <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-white uppercase">
            Add photo
          </span>
          <span className="sr-only">
            Placeholder for a portrait of {person.name}
          </span>
        </div>
      )}
    </div>
  );
}
