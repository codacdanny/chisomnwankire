"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/section";
import { links, nav, person } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the mobile panel and returns focus to the trigger.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200 ease-out",
        scrolled || open
          ? "bg-background/85 border-b backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 md:h-18">
          <a
            href="#top"
            className="focus-visible:ring-ring flex min-h-11 items-center gap-2.5 rounded-md focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent focus-visible:outline-none"
          >
            <span
              aria-hidden="true"
              className="panel-brand display-tight grid size-9 place-content-center rounded-lg text-sm font-bold"
            >
              {person.initials}
            </span>
            <span className="display-tight text-[0.9375rem] leading-tight font-semibold">
              {person.name}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground hover:bg-accent focus-visible:ring-ring flex min-h-10 items-center rounded-md px-3 text-sm font-medium transition-colors duration-150 ease-out focus-visible:ring-2 focus-visible:outline-none"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="nav" className="hidden sm:inline-flex">
              <a href={links.calendly} target="_blank" rel="noopener noreferrer">
                Book a call
              </a>
            </Button>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="text-foreground hover:bg-accent focus-visible:ring-ring grid size-10 place-content-center rounded-md transition-colors duration-150 ease-out focus-visible:ring-2 focus-visible:outline-none lg:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t lg:hidden"
      >
        <Container>
          <nav aria-label="Mobile" className="flex flex-col py-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-foreground hover:bg-accent focus-visible:ring-ring flex min-h-11 items-center rounded-md px-3 text-base font-medium transition-colors duration-150 ease-out focus-visible:ring-2 focus-visible:outline-none"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="nav" className="mt-3 sm:hidden">
              <a href={links.calendly} target="_blank" rel="noopener noreferrer">
                Book a call
              </a>
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
