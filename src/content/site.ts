import type { StaticImageData } from "next/image";

import coverField from "@/assets/cover-field.jpg";
import coverMaster from "@/assets/cover-master.jpg";
import coverQuickStart from "@/assets/cover-quick-start.jpg";

/**
 * Everything a visitor reads on the site lives in this file.
 * Edit prices, links and copy here; the components only handle layout.
 */

export type Edition = {
  id: "quick-start" | "field" | "master";
  name: string;
  /** Short label shown under the edition name. */
  format: string;
  pages: number;
  /** What this edition gives the reader, from the author. Null leaves the space empty. */
  description: string | null;
  /** Who it suits, shown after "Best for". Null hides the line. */
  bestFor: string | null;
  priceUsd: number;
  priceEur: number;
  /** Regular price shown crossed out next to the launch price. */
  regularPriceUsd: number;
  /** Checkout link (Gumroad, Lemon Squeezy, Stripe Payment Link…). Null shows "Available soon". */
  buyUrl: string | null;
  cover: StaticImageData;
  featured?: boolean;
};

export const book = {
  title: "Signal and Scale",
  subtitle: "The B2B SaaS Sales Playbook",
  tagline: "Scripts, sequences, and systems for SDRs, AEs, and GTM teams",
  author: "Boshko Kitanov",
  authorRole: "Founder of Tabbo",
  description:
    "A field manual for B2B SaaS sellers: scripts, sequences, and systems for SDRs, AEs, and GTM teams, by Boshko Kitanov, founder of Tabbo.",
} as const;

export const editions: Edition[] = [
  {
    id: "quick-start",
    name: "Quick-Start Edition",
    format: "Short edition",
    pages: 36,
    description:
      "The whole B2B SaaS sales process in a quick, practical read. You get all 10 chapters, each cut down to the core principles, worked examples for HR, Manufacturing and Finance, and key takeaways. It also has five ready-to-use cold email templates, from first touch to breakup.",
    bestFor: "busy founders and new SDRs who want the framework without the deep dive.",
    priceUsd: 19,
    priceEur: 17,
    regularPriceUsd: 29,
    buyUrl: null,
    cover: coverQuickStart,
  },
  {
    id: "field",
    name: "Field Edition",
    format: "Abridged edition",
    pages: 64,
    // The author's text was cut off after this sentence; the rest is still to come.
    description: "The same 10 chapters, with more of the “why” and “how” behind each tactic.",
    bestFor: null,
    priceUsd: 37,
    priceEur: 34,
    regularPriceUsd: 59,
    buyUrl: null,
    cover: coverField,
  },
  {
    id: "master",
    name: "Master Edition",
    format: "Complete edition",
    pages: 144,
    // Waiting on the author's description.
    description: null,
    bestFor: null,
    priceUsd: 47,
    priceEur: 44,
    regularPriceUsd: 97,
    buyUrl: null,
    cover: coverMaster,
    featured: true,
  },
];

/** Section labels (handwritten) and headlines. */
export const headings = {
  manual: { eyebrow: "how to use this playbook?" },
  readers: {
    eyebrow: "who this is for?",
    title: "Written for the people who carry the number",
  },
  chapters: {
    eyebrow: "how it is organized",
    title: "Ten chapters that follow the natural arc of a deal",
  },
  everyChapter: {
    eyebrow: "in every chapter",
    title: "The principle, then the proof",
  },
  editions: {
    eyebrow: "pick your edition",
    title: "Three editions. One playbook.",
    note: "Launch prices. Crossed-out prices are the regular prices.",
  },
  author: { title: "The Author" },
  contact: {
    eyebrow: "say hello",
    title: "Questions about the book?",
    body: "Get in touch with Boshko directly.",
    fallback: "Contact details are coming soon.",
  },
} as const;

export const manual = {
  lead: "This is not a book of theory. It is a",
  /** Words after the lead, set in the cover's orange. */
  leadHighlight: "field manual.",
  paragraphs: [
    "Every chapter is built to be opened the morning before a call block, a sequence launch, or a pipeline review, and to leave you with something you can use that same day.",
    "Modern B2B SaaS selling has changed faster in the last three years than in the previous fifteen. Buyers research before they ever speak to you. Inboxes are saturated. Generic outreach is filtered, ignored, or quietly resented. At the same time, the reps and founders who win have never had better tools: precise data, AI that drafts and researches at scale, and channels that let one person reach the right thousand accounts instead of the wrong hundred thousand.",
  ],
  thread:
    "The thread running through this entire playbook is simple: relevance beats volume, and judgment beats automation. Tools amplify a good strategy and accelerate a bad one. So we start with who you sell to and why they buy, and only then move to reach them.",
} as const;

export const readers = [
  {
    title: "Sales reps & Account Executives",
    body: "Who want sharper discovery, cleaner messaging, and higher win rates.",
  },
  {
    title: "SDRs & BDRs",
    body: "Building pipeline through cold email, calls, and LinkedIn, and tired of being ignored.",
  },
  {
    title: "Founders",
    body: "Running their own GTM motion who need a repeatable system, not a pile of tactics.",
  },
] as const;

export const organization = {
  summary:
    "Define your Ideal Customer Profile, understand the industries you sell into, diagnose pain, then prospect, email, call, and build presence on LinkedIn. From there the book covers founder branding, the CRM and tech stack that holds it together, and finally AI, the layer now reshaping every stage.",
  chapters: [
    "Ideal Customer Profile (ICP)",
    "Industry selling",
    "The three layers of pain",
    "Prospecting",
    "Cold email",
    "Cold calling",
    "LinkedIn",
    "Founder branding",
    "CRM and tech stack",
    "AI in sales",
  ],
} as const;

export const everyChapter = [
  {
    title: "Famous voices",
    body: "A short quote from a leader or thinker to anchor the idea.",
    tags: [] as string[],
  },
  {
    title: "Three industry lenses",
    body: "Worked examples so you can see the principle applied, not just stated.",
    tags: ["HR", "Manufacturing", "Finance"],
  },
] as const;

export const authorBio = [
  "Boshko Kitanov is the founder and CEO of Tabbo, a B2B sales-as-a-service agency that runs multichannel outbound (LinkedIn, email, and cold calling) for SaaS companies across EMEA and the US. Day to day, his work is about separating real buying signals from noise and turning what works into a repeatable engine that scales.",
  "Before founding Tabbo, Boshko was Head of Sales EMEA at Kumo, where he built pipeline in markets that don't respond to one-size-fits-all playbooks.",
  "He has spent years helping companies of very different sizes and categories take their go-to-market from guesswork to a system. Signal and Scale distills what he's learned from running outbound on the front lines: what to listen for, what to ignore, and how to grow without losing the thread.",
] as const;

export const contact = {
  /** Shown as a mailto link. Null hides it. */
  email: null as string | null,
  /** Full LinkedIn profile URL. Null hides it. */
  linkedinUrl: null as string | null,
};

/** Shown in the footer. Update each January. */
export const copyrightYear = 2026;
