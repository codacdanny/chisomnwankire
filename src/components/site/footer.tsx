import { Mail } from "lucide-react";
import { LinkedInIcon, XIcon } from "@/components/site/icons";
import { Container } from "@/components/site/section";
import { links, nav, person } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t py-12">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="panel-brand display-tight grid size-9 place-content-center rounded-lg text-sm font-bold"
              >
                {person.initials}
              </span>
              <span className="display-tight text-[0.9375rem] font-semibold">
                {person.name}
              </span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              {person.role}. {person.location}.
            </p>
            {/* Her own sign-off — recognised by 15k followers, so it belongs here. */}
            <p className="text-brand-ink mt-4 text-sm font-semibold">
              {person.signature}
              <span aria-hidden="true"> 👸</span>
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-1 md:items-start">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground focus-visible:ring-ring -mx-2 flex min-h-10 items-center rounded-md px-2 text-sm transition-colors duration-150 ease-out focus-visible:ring-2 focus-visible:outline-none"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} on LinkedIn`}
              className="border-border text-muted-foreground hover:text-foreground hover:bg-brand-tint focus-visible:ring-ring grid size-11 place-content-center rounded-xl border transition-colors duration-150 ease-out focus-visible:ring-2 focus-visible:outline-none"
            >
              <LinkedInIcon className="size-4" />
            </a>
            <a
              href={links.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} on X`}
              className="border-border text-muted-foreground hover:text-foreground hover:bg-brand-tint focus-visible:ring-ring grid size-11 place-content-center rounded-xl border transition-colors duration-150 ease-out focus-visible:ring-2 focus-visible:outline-none"
            >
              <XIcon className="size-4" />
            </a>
            <a
              href={links.email}
              aria-label={`Email ${person.name}`}
              className="border-border text-muted-foreground hover:text-foreground hover:bg-brand-tint focus-visible:ring-ring grid size-11 place-content-center rounded-xl border transition-colors duration-150 ease-out focus-visible:ring-2 focus-visible:outline-none"
            >
              <Mail className="size-4.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="rule-fade my-8" aria-hidden="true" />

        <p className="text-muted-foreground text-xs">
          &copy; {year} {person.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
