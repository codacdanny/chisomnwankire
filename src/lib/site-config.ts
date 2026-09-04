/**
 * Every piece of copy, link, and number on the site lives here.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * SOURCING
 * Most of this is verified against her live LinkedIn and X presence (Aug 2026).
 * Items still needing her direct confirmation are marked ⚠ inline and listed in
 * the README. Do not invent numbers here — every figure below is either publicly
 * checkable or came from her own published creatives.
 *
 * POSITIONING
 * She is a social media MARKETER and MANAGER — the strategy and the day-to-day
 * running of it, together. Not a LinkedIn-only specialist: she works across
 * LinkedIn, X, Instagram and TikTok. LinkedIn is the flagship, not the identity.
 * Keep that distinction when editing copy.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const person = {
  name: "Chisom Nwankire",
  initials: "CN",
  role: "Social Media Marketer & Manager",
  tagline: "I help you become the obvious choice",
  location: "Working with founders across Nigeria, the UK, and Rwanda",
} as const;

export const links = {
  // ✔ verified
  linkedin: "https://www.linkedin.com/in/chisom-nwankire",
  x: "https://x.com/chisom_nwankire",
  // ⚠ coachli.co returned a server error on check — confirm this resolves
  coachli: "https://coachli.co/chisomnwankire/SV-SetId",
  // ✔ supplied by Chisom
  calendly: "https://calendly.com/nwankireprecious2/new-meeting-1",
  email: "mailto:nwankireprecious2@gmail.com",
} as const;

/**
 * ⚠ EMPTY BY DESIGN — no testimonials exist anywhere public.
 *
 * The Reviews section and its nav entry only appear once this array has entries,
 * so the site never ships an empty or fabricated testimonial block. Add three
 * and both switch on automatically. Shape:
 *   { quote: "…", name: "…", title: "…", company: "…" }
 */
export const testimonials: {
  quote: string;
  name: string;
  title: string;
  company: string;
}[] = [];

export const nav = [
  { label: "Services", href: "#services" },
  ...(testimonials.length > 0 ? [{ label: "Reviews", href: "#reviews" }] : []),
  { label: "Results", href: "#results" },
  { label: "Platforms", href: "#platforms" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

/**
 * ⚠ HEADLINE AND SUBHEAD ARE CHISOM'S OWN WORDS, verbatim — including the caps
 * on the headline, which is set in all-caps by design.
 *
 * Both lines are platform-agnostic, matching the positioning above.
 */
export const hero = {
  badge: "Taking on 2 new clients this quarter",
  headlineLead: "Making brands",
  headlineHighlight: "impossible to ignore",
  sub: "A clear Social Media System designed to help you get noticed, build trust, and Attract clients.",
  primaryCta: "Book a 1:1 call",
  secondaryCta: "See the results",
  disciplines: ["Social Media Marketing", "Brand Management", "Ghostwriting", "Lead Generation"],
} as const;

/** The platforms she manages. Order is deliberate: LinkedIn is the flagship. */
export const platforms = [
  { name: "LinkedIn", note: "Flagship" },
  { name: "X", note: "Thought leadership" },
  { name: "Instagram", note: "Brand presence" },
  { name: "TikTok", note: "Reach & discovery" },
] as const;

/**
 * Names taken from her own LinkedIn banner and experience list.
 * ⚠ Nexa Point Group, Internflare, Maker Studios and Blackspot Media have no
 * public trace — she published them herself, but confirm before launch.
 */
export const clients = [
  "Acheva Technologies",
  "Sova Academy",
  "Utiva",
  "Coachli",
  "HerTechTrail",
  "Uvidense",
  "Favikon",
  "Nexa Point Group",
] as const;

/**
 * No live follower counts here, deliberately.
 *
 * Her own follower total moves every week (15.2K → 16.5K inside a month), and
 * there is no public LinkedIn API that would let the page read it automatically —
 * follower counts are only exposed through an authenticated Marketing API for
 * pages you administer, not for personal profiles. A number that has to be
 * hand-edited to stay true is a number that will quietly go stale, so the page
 * states growth as a fixed achievement instead.
 *
 * `detail` is optional; a card renders fine without one.
 */
export const results: {
  display: string;
  label: string;
  detail?: string;
}[] = [
  {
    display: "3 → 600+",
    label: "Acheva Technologies",
    detail: "From 3 followers to 600+ in two months, and still climbing.",
  },
  {
    display: "300+",
    label: "Comments on a single post",
    detail: "Near 1:1 comments to reactions — most accounts this size see a fraction.",
  },
  {
    display: "2.01M",
    label: "Impressions in 90 days",
    detail: "Across managed accounts, up 4,472% on the prior window. No paid spend.",
  },
];

export const services = [
  {
    title: "Done-for-you LinkedIn management",
    summary:
      "The whole engine, run by me. Strategy, content, engagement, and outreach — you show up for the calls it books.",
    points: ["Content calendar & ghostwriting", "Daily engagement", "Warm outbound", "Monthly reporting"],
    featured: true,
  },
  {
    title: "Professional ghostwriting",
    summary:
      "Your ideas and content written in your voice — your audience would swear you wrote it yourself.",
    points: ["Voice capture session", "4–12 posts per month", "Hook & narrative testing"],
    featured: false,
  },
  {
    title: "Social media management",
    summary:
      "LinkedIn, X, Instagram and TikTok — one brand, one voice, run properly on every platform your buyers actually use.",
    points: ["Multi-platform content", "Community management", "Campaign support"],
    featured: false,
  },
  {
    title: "Brand strategy & positioning",
    summary:
      "Before the content: who you're for, the problem you solve, and why the market should pick you over the louder option.",
    points: ["Positioning workshop", "Offer clarity", "Messaging pillars"],
    featured: false,
  },
  {
    title: "Profile optimisation",
    summary:
      "Banner, headline, About, Featured — rebuilt so the profile sells on the third visit, which is when people actually decide.",
    points: ["Headline & About rewrite", "Featured section build", "Keyword coverage"],
    featured: false,
  },
  {
    title: "Lead generation",
    summary:
      "Content creates the demand. This turns it into conversations that end in a calendar invite.",
    points: ["ICP list build", "DM sequences", "Conversion tracking"],
    featured: false,
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Audit",
    body: "I take apart your profile, your last 90 days of content, and your competitors' — and show you exactly where attention is leaking.",
  },
  {
    step: "02",
    title: "Position",
    body: "We settle who you're for and the problem you solve. Clients reach out when they see you naming a pain they already feel.",
  },
  {
    step: "03",
    title: "Build trust",
    body: "Lessons, wins, client stories — proof, not platitudes. Nobody buys after one post. They buy after the third visit to your profile.",
  },
  {
    step: "04",
    title: "Invite action",
    body: "Every piece ends somewhere. Publish, engage, reach out, measure — then cut what missed and double the format that landed.",
  },
] as const;

export const offers = [
  {
    name: "1:1 Power Session",
    price: "Single session",
    forWho: "Founders who are stuck and need direction this week.",
    includes: [
      "60 minutes, one problem, solved",
      "Live profile teardown",
      "Content plan you leave with",
      "Recording and notes",
    ],
    cta: "Book the session",
    href: links.coachli,
    featured: false,
  },
  {
    name: "Done-For-You Management",
    price: "Monthly retainer",
    forWho: "Busy CEOs who want the outcome without touching the platform.",
    includes: [
      "Full strategy and content calendar",
      "Ghostwritten posts, shipped on schedule",
      "Audience growth and engagement",
      "Outreach and lead handling",
      "Monthly performance report",
    ],
    cta: "Start here",
    href: links.calendly,
    featured: true,
  },
  {
    name: "Mentorship",
    price: "3-month container",
    forWho: "Operators who want to build the skill in-house.",
    includes: [
      "Bi-weekly coaching calls",
      "Unlimited content reviews",
      "Frameworks and swipe files",
      "Async support between calls",
    ],
    cta: "Apply for mentorship",
    href: links.calendly,
    featured: false,
  },
] as const;

/**
 * ⚠ Sova: her own launch post frames this as her venture, not a job — "I'm
 * officially launching my brand today". Titled below as Founder & Team Lead;
 * confirm which she prefers.
 */
export const experience = [
  {
    role: "Founder & Team Lead",
    org: "Sova Academy",
    period: "Apr 2026 — Present",
    kind: "My own venture",
    note: "Tech education platform for beginners and professionals.",
  },
  {
    role: "Social Media Strategist",
    org: "Acheva Technologies LTD",
    period: "Feb 2025 — Present",
    kind: "Part-time",
    note: "Academic result-processing platform for African universities.",
  },
  {
    role: "Brand Manager",
    org: "Blackspot Media Production & Events",
    period: "May 2026 — Jul 2026",
    kind: "Freelance · United Kingdom",
    note: null,
  },
  {
    role: "Email Marketer",
    org: "Maker Studios",
    period: "Feb 2026 — Mar 2026",
    kind: "Freelance · Rwanda",
    note: null,
  },
  {
    role: "Brand Ambassador",
    org: "HerTechTrail",
    period: "Oct 2025 — Mar 2026",
    kind: "Contract",
    note: "Community helping African and Black women build careers in tech.",
  },
  {
    role: "Social Media Manager",
    org: "Internflare",
    period: "Aug 2025 — Oct 2025",
    kind: "Internship",
    note: null,
  },
] as const;

export const skills = [
  "Personal Branding",
  "Content Strategy",
  "Ghostwriting",
  "Social Media Management",
  "Content Marketing",
  "Brand Consulting",
  "Public Speaking",
] as const;

export const faq = [
  {
    q: "How long before I see results?",
    a: "Profile changes move numbers inside a week. Content compounds slower — expect a clear lift in reach and inbound conversations by week six, and a repeatable pipeline by month three. Anyone promising faster is selling you something.",
  },
  {
    q: "I post consistently and still get no clients. Why?",
    a: "Because high engagement is not the same as inbound leads. Likes come from peers; leads come from clarity. If your posts do not name who you help and the exact problem you solve, buyers scroll past — however good the writing is.",
  },
  {
    q: "Do you only work on LinkedIn?",
    a: "No. I work across LinkedIn, X, Instagram and TikTok — the marketing strategy and the day-to-day management together. LinkedIn is where I do my sharpest work and where most clients start, but the system travels. One brand, one voice, wherever your buyers are.",
  },
  {
    q: "Do you write in my voice, or yours?",
    a: "Yours. We start with a voice capture session where I record how you actually talk about your work, then I write against that. You approve everything before it publishes.",
  },
  {
    q: "What do you need from me each month?",
    a: "About an hour. One call to unload ideas and context, plus approvals in a shared doc. I handle the rest — writing, scheduling, engagement, and outreach.",
  },
  {
    q: "Do you work with companies as well as individuals?",
    a: "Both. Founder-led profiles almost always outperform company pages, so if you're a brand I'll usually recommend putting weight behind the person leading it — and I manage both together. That is exactly what I did at Acheva.",
  },
  {
    q: "What does it cost?", // ⚠ replace with real pricing
    a: "Power sessions are booked individually. Management and mentorship are quoted after the call, based on posting volume and how much outreach you want running. I'll give you a number on the call, not a proposal three days later.",
  },
] as const;

export const finalCta = {
  title: "Your competitors aren't better. They're just easier to find.",
  body: "One call. We look at your brand together, and you leave knowing exactly what to fix first — whether or not you work with me.",
  cta: "Book a 1:1 call",
} as const;
