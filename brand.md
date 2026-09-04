# Brand — Chisom Nwankire

_Status: active_

White and magenta, per Chisom's preference. Derived from her LinkedIn banner, featured
creatives, and profile identity. This file is the source of truth for colour, type, and
voice across the project.

## Palette

One committed light theme. White page, magenta panels punctuating it, gold used sparingly.

| Token | Value | Role |
|---|---|---|
| `--background` | `#FFFFFF` | Page canvas |
| `--soft` | `#FDF2F7` | Pink-tinted band, alternated with white to give the page rhythm |
| `--card` | `#FFFFFF` | Card surface, separated by a hairline border and a faint shadow |
| `--foreground` | `#1A1016` | Ink. Warm near-black with a magenta cast |
| `--muted-foreground` | `#6B5A64` | Secondary text — 6.4:1 on white |
| `--brand` | `#D9127F` | Filled surfaces and large figures. White on it is 4.84:1 |
| `--brand-ink` | `#B00C66` | Magenta **text** on white — 6.85:1. All small pink type uses this |
| `--brand-bright` | `#FF2D9B` | Decoration and gradients **only**. 3.44:1 on white, never carries text |
| `--brand-tint` | `#FCE7F0` | Badge and hover fills |
| `--gold` | `#FFE14D` | Highlighter swash and on-magenta accent. **Never text on white** |
| `--border` | `#F1E1EA` | Hairlines |

### The three magentas are not interchangeable

This is the rule most likely to be broken by accident. `--brand-bright` is the colour of her
creatives and it is beautiful, but at 3.44:1 on white it fails AA for anything smaller than
large display type. Use `--brand-ink` for text, `--brand` for fills, `--brand-bright` for
gradients and glows.

### Gold cannot be text here

`#FFE14D` is 1.3:1 on white — effectively invisible. On the dark treatment it was a text
colour; on white it is not. It appears in exactly two places:

- **Highlighter swash** (`.marker-gold`) — gold sits *behind* ink text. Ink on gold is 12.9:1.
  Used on the hero headline and once in the About heading. Twice on the page, no more.
- **On magenta panels** — gold figures and icons at 3.5:1, which clears the 3:1 bar for large
  text and icons. Never for body copy.

### The magenta panels

`.panel-brand` is the gradient that carries the featured cards and the closing CTA. Its ramp deliberately starts at `#E0148A`, **not** at `--brand-bright`: white
text on `#FF2D9B` is only 3.44:1, so a gradient reaching that far would fail for body copy at
the light end. `#E0148A` is the brightest magenta still clearing 4.5:1 against white.

Text on panels is **full white**, not `white/90` — the latter drops to 4.11:1 at the light end.
Any translucent fill layered on a panel must darken it (`bg-black/10`), never lighten it.

## Typography

| Face | Loaded as | Use |
|---|---|---|
| **Outfit** | `--font-display` | Headlines, stat figures, nav wordmark. Geometric grotesque — the closest widely-available match to her banner lettering. |
| **Geist** | `--font-sans` | All body copy, labels, buttons |
| **Geist Mono** | `--font-mono` | Metrics, dates, eyebrows, anything with digits (`tabular-nums`) |

The hero headline is set in **all-caps**, where `display-tight`'s -0.03em is too tight for
capitals — it relaxes to -0.005em. Elsewhere display type is tight (`tracking-[-0.03em]`) and heavy (600–700). Body stays 400–500 at normal
tracking. Fluid sizing for display only; body sizes are fixed.

## Voice

Direct, confident, second person, and specific about money. She talks to the founder, not
about herself. Drawn from how she actually writes on LinkedIn.

**Positioning:** social media **marketer and manager** — the strategy and the day-to-day
running of it, together. She works across LinkedIn, X, Instagram and TikTok. LinkedIn is the
flagship offer, never the whole identity — do not write copy that reduces her to one platform.

- **Her core argument, in her words:** "High engagement ≠ inbound leads." Likes come from
  peers; leads come from clarity.
- **Her content framework:** Attracts → Builds trust → Invites action.
- **She attacks generic advice by name** — "not generic advice like 'keep showing up'." A
  polished agency register would read as a stranger writing for her. Avoid it.
- Active voice, sentence case headings, Title Case only in nav and buttons. Every claim
  carries a number, and preferably one the reader can go and check.

## Motion

The page should be enjoyable to scroll without becoming a fairground. What it does, and why:

| Effect | Where | Rule it follows |
|---|---|---|
| Scroll-progress line | Fixed at the top | Spring-damped, 3px, brand gradient |
| Parallax | Hero portrait (−70px), proof chip (−16px), ambient blooms (+90px) | Three different rates in one scene reads as depth; a single rate reads as a glitch |
| Ambient blooms | Hero background | 9s and 13s float loops, blurred, `-z-10`, `aria-hidden` |
| Marker wipe | Hero headline gold swash | 620ms `ease-out` after a 260ms beat, once on load |
| Count-up | Every headline figure | Fires once on entry, eases out, lands on the exact target |
| Line draw | Above the Process steps | Scroll-linked `scaleX`, spring-damped |
| Hover lift | Result / service / platform / offer cards | `-translate-y-0.5` + shadow, 150ms, named properties only |

Entrances are 300–400ms `ease-out`, one-shot (`viewport: { once: true }`), and never fire on
elements already above the fold except the hero. Hover feedback is 150ms and always names its
properties — never `transition: all`. Only `transform` and `opacity` are animated.

### Reduced motion is enforced in CSS, never in JS

**Motion's `useReducedMotion()` does not work reliably in this project** — it has twice failed
to flip even when `matchMedia("(prefers-reduced-motion: reduce)")` reports `true`. Every
guarantee therefore lives in CSS, which cannot fail that way:

- `[data-reveal]` → `opacity: 1 !important; transform: none !important`
- `[data-parallax]` → `transform: none !important`
- The progress bar → `motion-reduce:hidden`
- The marquee and float loops → killed by the global `animation-duration: 0.01ms` rule
- `CountUp` → renders the final figure on the server, so it is already correct before any
  script runs

Any new motion must carry `data-parallax`, `data-reveal`, or a `motion-reduce:` class. Do not
gate it on the hook alone.
