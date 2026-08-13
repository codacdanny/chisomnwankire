import { Container } from "@/components/site/section";
import { clients } from "@/lib/site-config";

/**
 * Client wordmarks. Rendered as type rather than logo files — a set of mismatched
 * PNG logos at different optical weights is the fastest way to make a page look cheap.
 * Swap to real SVGs later if the brands supply them.
 */
function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10 md:gap-14 md:pr-14"
    >
      {clients.map((client) => (
        <li
          key={client}
          className="display-tight text-muted-foreground text-lg font-semibold whitespace-nowrap md:text-xl"
        >
          {client}
        </li>
      ))}
    </ul>
  );
}

export function Clients() {
  return (
    <section aria-labelledby="clients-heading" className="py-10 md:py-14">
      <Container>
        <h2
          id="clients-heading"
          className="text-muted-foreground text-center font-mono text-xs tracking-[0.18em] uppercase"
        >
          Trusted by teams and founders at
        </h2>
      </Container>

      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max motion-safe:animate-marquee motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-4 motion-reduce:px-5">
          <Track />
          {/* Second copy makes the loop seamless; it carries no information. */}
          <div className="motion-reduce:hidden">
            <Track ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
