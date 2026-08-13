# Chisom Nwankire — Landing Page

Personal landing page for Chisom Nwankire, LinkedIn Brand Strategist & Social Media Manager.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui (radix-nova) · Motion

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Before this goes live

### 1. Confirm these five things with Chisom

| Item | Status |
|---|---|
| **Calendly link** | ⚠ No public Calendly could be found. `links.calendly` is a placeholder and every primary CTA points at it. **This is the highest-priority blocker.** |
| **Coachli link** | ⚠ `coachli.co/chisomnwankire` returned HTTP 500 on check — a server error, not a 404, so it is neither confirmed nor disproven. Have her click it. |
| **Email** | ⚠ `hello@chisomnwankire.com` is a placeholder. |
| **Sova job title** | ⚠ Listed as "Founder & Team Lead". Her LinkedIn says "Team Lead", but her own launch post says *"I'm officially launching my brand today"* — see below. |
| **Pricing** | ⚠ The cost FAQ is written in her voice but contains no real numbers. |

**Verified and already correct:** LinkedIn `linkedin.com/in/chisom-nwankire`, X `x.com/chisom_nwankire`.

### 2. Photo — `src/components/site/portrait.tsx`

The hero shows a branded "CN" monogram rather than a broken image. To use the real photo:

1. Save the cut-out portrait to `public/chisom.png` (transparent PNG sits best on the
   magenta gradient bed).
2. Change one line:
   ```ts
   const PORTRAIT_SRC: string | null = null;   // → "/chisom.png"
   ```

`next/image`, sizing, `alt` text, and priority loading are already wired.

### 3. Update the live numbers before launch

`results[0]` and `results[1]` cite follower counts that were live in August 2026 (15.2K on her
own account, 693 for Acheva). They will drift. The section footnote dates them honestly, but
refresh them at launch — their whole value is that a visitor can check them in one click.

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

**"The LinkedIn Princess 👸" is her sign-off** across her posts, and it was going unused. It
now closes the footer.

Her flagship argument — *"High engagement ≠ inbound leads"* — became the hero subheading, and
her content framework (*Attracts → Builds trust → Invites action*) now shapes the Process
section. Copy deliberately avoids the agency register she publicly attacks: she calls out
*"generic advice like 'keep showing up'"* by name.

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
the site is weaker without them. Worth asking her for three.

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
  scrolling required, and the logo marquee is fully stopped
