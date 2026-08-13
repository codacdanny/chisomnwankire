/**
 * Every piece of copy, link, and number on the site lives here.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * SOURCING
 * Most of this is verified against her live LinkedIn and X presence (Aug 2026).
 * Items still needing her direct confirmation are marked ⚠ inline and listed in
 * the README. Do not invent numbers here — every figure below is either publicly
 * checkable or came from her own published creatives.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const person = {
  name: "Chisom Nwankire",
  initials: "CN",
  role: "LinkedIn Brand Strategist & Social Media Manager",
  /** Her own sign-off, used across her posts. Her most recognisable asset. */
  signature: "The LinkedIn Princess",
  tagline: "Helping you become the obvious choice on LinkedIn",
  location: "Remote — working with founders across Nigeria, the UK, and Rwanda",
} as const;

export const links = {
  // ✔ verified
  linkedin: "https://www.linkedin.com/in/chisom-nwankire",
  x: "https://x.com/chisom_nwankire",
  // ⚠ coachli.co returned a server error on check — confirm this resolves
  coachli: "https://coachli.co/chisomnwankire/SV-SetId",
  // ⚠ no public Calendly found — replace with her real booking link
  calendly: "https://calendly.com/chisomnwankire",
  // ⚠ confirm the address she wants inbound going to
  email: "mailto:hello@chisomnwankire.com",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
] as const;

export const hero = {
  badge: "Taking on 2 new clients this quarter",
  headlineLead: "I help brands, CEOs and entrepreneurs build a LinkedIn presence that drives",
  headlineHighlight: "authority, trust, and revenue.",
  sub: "High engagement is not the same as inbound leads. You can post for 150 days straight, collect the likes, and still watch the people who can actually pay you scroll past. That is a positioning problem — and it is fixable.",
  primaryCta: "Book a 1:1 call",
  secondaryCta: "See the results",
  disciplines: ["Brand Management", "Ghostwriting", "Lead Generation"],
} as const;

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
 * Ordered by how easily a visitor can check them. The follower figures are live
 * and one click away, which is why they lead — impressions screenshots are not.
 */
export const results = [
  {
    display: "15.2K",
    label: "Followers on my own account",
    detail: "Built from zero in under a year, and 338 posts deep. Go and check it.",
  },
  {
    display: "3 → 693",
    label: "Acheva Technologies",
    detail: "From 3 followers to 600+ in two months. It has not stopped climbing since.",
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
] as const;

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
      "Your ideas, in your voice, written so people finish the post. No recycled hooks, no AI sludge, no “keep showing up”.",
    points: ["Voice capture session", "4–12 posts per month", "Hook & narrative testing"],
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
  {
    title: "Mentorship & coaching",
    summary:
      "For founders who want to run it themselves. I hand you the system and correct your reps until it sticks.",
    points: ["1:1 power sessions", "Content reviews", "90-day roadmap"],
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
    body: "We settle who you're for and the problem you solve. Clients DM when they see you naming a pain they already feel.",
  },
  {
    step: "03",
    title: "Build trust",
    body: "Lessons, wins, client stories — proof, not platitudes. Nobody DMs after one post. They DM after the third visit to your profile.",
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
    note: "Tech education platform for beginners and professionals. Launch post drew 806 reactions and 738 comments.",
  },
  {
    role: "Social Media Strategist",
    org: "Acheva Technologies LTD",
    period: "Feb 2025 — Present",
    kind: "Part-time",
    note: "Academic result-processing platform for African universities. Took the LinkedIn page from 3 followers to 693.",
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

export const speaking = {
  eyebrow: "Speaking",
  title: "The Future of Tech Careers: Are There Really Enough Jobs for Everyone?",
  host: "In partnership with Utiva",
  date: "15 August 2026 · 7:00 PM WAT",
  body: "My first LinkedIn Live — a masterclass with a cloud engineer, a data scientist, a senior cybersecurity analyst, and a product manager on where tech hiring actually stands.",
  stats: [
    { label: "Reactions", value: "243" },
    { label: "Comments", value: "301" },
    { label: "Reposts", value: "39" },
  ],
} as const;

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
  body: "One call. We look at your profile together, and you leave knowing exactly what to fix first — whether or not you work with me.",
  cta: "Book a 1:1 call",
} as const;
