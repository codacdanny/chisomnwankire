import Image from "next/image";
import { cn } from "@/lib/utils";
import { person } from "@/lib/site-config";

const PORTRAIT_SRC = "/Chisom-Portrait.jpeg";

/**
 * The photo card. The source is a studio shot on a grey backdrop rather than a
 * cut-out, so the brand colour comes from the plate behind it (see Hero) instead
 * of showing through. `object-center` keeps her face centred — a 4:5 frame crops
 * only ~10% off a 916×1280 source, so nothing important is lost.
 */
export function Portrait({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border-border bg-muted relative aspect-4/5 w-full overflow-hidden rounded-3xl border shadow-xl shadow-[#1a1016]/10",
        className,
      )}
    >
      <Image
        src={PORTRAIT_SRC}
        alt={`${person.name}, ${person.role}`}
        fill
        sizes="(min-width: 1024px) 460px, (min-width: 640px) 380px, 80vw"
        className="object-cover object-center"
        priority
      />
    </div>
  );
}
