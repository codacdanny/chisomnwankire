# Chisom Nwankire — Landing Page

Personal landing page for Chisom Nwankire, Social Media Marketer & Manager.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui (radix-nova) · Motion

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Before this goes live

### 1. Confirm these with Chisom

| Item | Status |
|---|---|
| **Coachli link** | ⚠ `coachli.co/chisomnwankire` returned HTTP 500 on check — a server error, not a 404, so it is neither confirmed nor disproven. Have her click it. It backs the "1:1 Power Session" CTA. |
| **Sova job title** | ⚠ Listed as "Founder & Team Lead". Her LinkedIn says "Team Lead", but her own launch post says *"I'm officially launching my brand today"* — see below. |
| **Testimonials** | ⚠ None exist publicly. The Reviews section and its nav entry are built and gated on `testimonials` in site-config; add three and both appear. |
| **Pricing** | ⚠ The cost FAQ is written in her voice but contains no real numbers. |

**Supplied and wired:** Calendly, email, LinkedIn `linkedin.com/in/chisom-nwankire`,
X `x.com/chisom_nwankire`.

### 2. Photo and favicon — done

`public/Chisom-Portrait.jpeg` is live in the hero via `next/image` (priority-loaded, sized,
`alt` set). It is a studio shot on a grey backdrop rather than a cut-out, so the brand colour
comes from a tilted magenta plate behind it rather than showing through.

The favicon is `src/app/icon.png` — a 256px square crop of her face, generated from the same
photo. Next.js picks it up automatically from that path; the stock `favicon.ico` was deleted
so it cannot win over it.

### 3. Why there are no follower counts

Her own total moved 15.2K → 16.5K inside a month, and **there is no public LinkedIn API that
would let the page read it automatically** — follower counts are only exposed through an
authenticated Marketing API for company pages you administer, never for personal profiles. A
figure that has to be hand-edited to stay true will quietly go stale, so the Results section
states growth as a fixed achievement ("3 → 600+") instead of a live number. If she ever wants
a live count, it would need a small server route holding her LinkedIn OAuth token, and it
still would not cover her personal profile.

## Positioning

She is a **social media marketer and manager** — the strategy and the day-to-day running of it
together — working across **LinkedIn, X, Instagram and TikTok**. LinkedIn is the flagship
offer, not the whole identity. That distinction drives the page title, meta description,
footer bio, the Platforms section, the service list, and the "Do you only work on LinkedIn?"
FAQ. Keep it when editing copy — `site-config.ts` carries the same note at the top.

Platforms live in one place, `platforms` in `site-config.ts`; the section and its icons are
generated from that array.

The hero headline (**"Making brands impossible to ignore"**, set in all-caps) and the
subheading (**"A clear Social Media System…"**) are Chisom's own words, verbatim.

Structural cues taken from [digitalhavenglobal.com](https://www.digitalhavenglobal.com/),
which she gave as a reference: broad practitioner positioning rather than a single platform,
a bold direct-address promise in the hero, and **Reviews as a top-level nav item appearing
early** — implemented here, but gated until real testimonials exist.

## What the research changed

A research pass over her public LinkedIn and X presence turned up three things that altered
the content:

**Sova is her own venture, not a job.** Her launch post reads *"My baby is finally here… I'm
officially launching my brand today. How did I go from a confused creator to someone now
leading others?"* Sova Academy is a tech education platform she founded; the launch post drew
806 reactions and 738 comments. The site now frames it as a founder story. ⚠ Also: never link
`linkedin.com/company/sovasolutions` — that is an unrelated DC consultancy.

**Her follower curve is better proof than her impressions.** She is at 15,262 followers across
338 posts, having crossed 2,000 only about eleven months earlier. Acheva Technologies sits at
693 followers today against a "3 followers" starting point. Both are one click from
verifiable, which is why the Results section now leads with them and the 2.01M impressions
figure sits last. Her engagement is also unusual: 400–900 reactions and 350–900 comments per
post, a near 1:1 ratio that most accounts her size do not see.

Her content framework (*Attracts → Builds trust → Invites action*) shapes the Process section,
and her argument that *"high engagement is not the same as inbound leads"* is now an FAQ
answer. Copy deliberately avoids the agency register she publicly attacks: she calls out
*"generic advice like 'keep showing up'"* by name.

Her "The LinkedIn Princess 👸" sign-off was added to the footer and then removed at her
request, along with the Speaking / LinkedIn Live section and the word "Remote" from the
footer bio.

### Claims that could not be independently verified

These come from her own published profile and creatives, so they are hers to stand behind —
but nothing external corroborates them. Worth a glance before launch:

- **Nexa Point Group, Internflare, Maker Studios (Kigali)** — no public trace at all.
- **Blackspot Media Production & Events** — several unrelated firms share the name; do not
  link any of them.
- **Favikon** — no profile for her found, though her banner carries the logo.
- **The 2,017,000 impressions / +4,472.2% figures** — from her own analytics screenshots.
- **The "3 followers" starting point** for Acheva — LinkedIn does not expose historical
  follower counts, so only she can confirm it.

Client wordmarks in the logo strip render as **type, not logo files** — a row of mismatched
PNGs at different optical weights is the fastest way to cheapen a page.

**No testimonials were found anywhere public.** Her whole sales argument is proof-driven, so
the site is weaker without them — and the reference site she chose puts Reviews in the nav.
The section is built and waiting; it needs three real quotes.

## Structure

```
src/
  app/
    layout.tsx          fonts, metadata, light theme
    globals.css         brand tokens, base layer, panel/marker utilities, reduced-motion guarantees
    page.tsx            section composition + skip link
  components/
    site/               all page sections
      section.tsx       Container / Section (white | soft) / SectionHeading primitives
      testimonials.tsx  Reviews — renders only when site-config has real quotes
      platforms.tsx     LinkedIn / X / Instagram / TikTok
      motion-primitives.tsx  ScrollProgress, Parallax, CountUp, ScrollLine
      reveal.tsx        one-shot scroll entrance wrapper
      portrait.tsx      hero photo slot
      icons.tsx         LinkedIn + X glyphs (Lucide ships no brand marks)
    ui/                 shadcn primitives
  lib/
    site-config.ts      ← all copy, links, and numbers live here
brand.md                palette, type, voice, motion rules
```

## Design decisions

- **White + magenta, one committed theme.** No dark mode. Magenta panels punctuate the white
  page; a pink-tinted band alternates with white for rhythm.
- **Three magentas, deliberately.** `#B00C66` for text on white (6.85:1), `#D9127F` for fills
  (4.84:1 with white text), `#FF2D9B` for gradients only (3.44:1 — never carries text).
- **Gold is never text on white** (1.3:1). It appears as a highlighter swash behind ink text,
  and as figures/icons on magenta panels. See `brand.md` for the full rule.
- **Panel gradients stop at `#E0148A`**, not at the bright magenta, so white body copy clears
  AA everywhere on the panel.
- **Reduced motion is enforced in CSS, not JS.** Motion's `useReducedMotion()` has twice
  failed to flip in this project even when the media query matches, so every guarantee is a
  CSS rule (`[data-reveal]`, `[data-parallax]`, `motion-reduce:hidden`). New motion must carry
  one of those hooks. See `brand.md`.
- **Button sizes.** shadcn's radix-nova `lg` is 36px — below the 40px touch minimum and too
  small for a landing CTA — so `nav` (40px) and `xl` (48px) were added to `ui/button.tsx`.

## Verified

Checked in a real browser at 375 / 768 / 1280 px:

- Zero horizontal overflow at all three widths; no console errors
- Full keyboard pass: skip link is the first tab stop, every stop shows a focus ring, Escape
  closes the mobile menu and returns focus to its trigger, the FAQ opens on Enter
- Every rendered text node passes WCAG AA, including text on the magenta panels, measured
  against the gradient's lightest stop
- One `h1`, ordered headings, all controls and icons carry accessible names
- Touch targets ≥ 40px, except an inline prose link (exempt under WCAG 2.5.8)
- Under `prefers-reduced-motion: reduce`, all content renders at its final state with no
  scrolling required, the logo marquee is stopped, every parallax transform is neutralised,
  and the progress bar is hidden
- Motion behaves: parallax elements move at different rates on scroll, the progress bar
  tracks scroll position, and the count-up lands on the exact target values
  (`15.2K`, `3 → 693`, `300+`, `2.01M`) rather than drifting
