// Every bit of text/data the site shows lives here, so our components stay clean and easy to re-skin.

/**
 * Centralized site copy.
 *
 * This file holds the repeating, list-shaped content rendered across the
 * portfolio — nav links, projects, capabilities, the stack, footer columns,
 * and so on. One-off strings (headlines, section intros, CTA labels) stay
 * inline in their components; only data with a repeating pattern lives here so
 * it's easy to edit, translate, or hand off in one place.
 *
 * Each export is consumed by the component named in its comment.
 */

export const PROFILE = {
  name: "Yeabsira Mekuria",
  handle: "yaba101",
  email: "yabumek46@gmail.com",
  github: "https://github.com/yaba101",
  linkedin: "https://www.linkedin.com/in/yeabsira-mekuria",
  location: "Addis Ababa, Ethiopia",
} as const

/* ============================================================
   DESIGN TOKENS — copy/paste into app/globals.css during the
   design-system step of the tutorial.
   (1) goes inside `@theme inline { ... }`
   (2) + (3) go inside `:root { ... }`
   ============================================================

   (1) Editorial --color-* entries — paste inside `@theme inline`:

    // Editorial design tokens: surfaces
    --color-canvas: var(--canvas);
    --color-canvas-soft: var(--canvas-soft);
    --color-surface-card: var(--surface-card);
    --color-surface-strong: var(--surface-strong);

    // Hairlines
    --color-hairline: var(--hairline);
    --color-hairline-soft: var(--hairline-soft);
    --color-hairline-strong: var(--hairline-strong);

    // Text
    --color-ink: var(--ink);
    --color-body: var(--body);
    --color-body-strong: var(--body-strong);
    --color-muted-ink: var(--muted-ink);
    --color-muted-soft: var(--muted-soft);
    --color-on-primary: var(--on-primary);

    // Brand
    --color-primary-active: var(--primary-active);

    // Overlay pair: light cream type + dark scrim ink
    --color-overlay-cream: var(--overlay-cream);
    --color-overlay-ink: var(--overlay-ink);

    // Terminal palette — macOS-style window dots
    --color-term-red: var(--term-red);
    --color-term-yellow: var(--term-yellow);
    --color-term-green: var(--term-green);

    // Semantic
    --color-success: var(--success);
    --color-error: var(--error);

   ------------------------------------------------------------

   (2) Editorial :root values — paste inside `:root`:

    // Brand accent: used scarcely, primary CTAs + wordmark only
    --primary: #f54e00;
    --primary-foreground: #ffffff;
    --primary-active: #d04200;
    --on-primary: #ffffff;

    // Surfaces: warm cream canvas, never pure white
    --canvas: #f7f7f4;
    --canvas-soft: #fafaf7;
    --surface-card: #ffffff;
    --surface-strong: #e6e5e0;

    // Hairlines: depth via 1px lines, no shadows
    --hairline: #e6e5e0;
    --hairline-soft: #efeee8;
    --hairline-strong: #cfcdc4;

    // Text: warm near-black ink
    --ink: #26251e;
    --body: #5a5852;
    --body-strong: #26251e;
    --muted-ink: #807d72;
    --muted-soft: #a09c92;

    // Terminal palette — macOS-style window dots (stack.config mock only)
    --term-red: #ff5f57;
    --term-yellow: #febc2e;
    --term-green: #28c840;

    // Overlay pair: cream type + ink scrim for media-backed regions
    --overlay-cream: #f7f6f1;
    --overlay-ink: #0f0f0c;

    // Semantic
    --success: #1f8a65;
    --error: #cf2d56;

   ------------------------------------------------------------

   (3) Shadcn -> editorial remap — paste inside `:root`
       (replace the starter's standalone shadcn default values):

    --background: var(--canvas);
    --foreground: var(--ink);
    --card: var(--surface-card);
    --card-foreground: var(--ink);
    --popover: var(--surface-card);
    --popover-foreground: var(--ink);
    --secondary: var(--surface-strong);
    --secondary-foreground: var(--ink);
    --muted: var(--canvas-soft);
    --muted-foreground: var(--body);
    --accent: var(--hairline-soft);
    --accent-foreground: var(--ink);
    --destructive: var(--error);
    --border: var(--hairline);
    --input: var(--hairline);
    --ring: var(--hairline-strong);

   ============================================================ */

// --- Site header ----------------------------------------------------------
// components/site-header.tsx — primary + mobile nav.
export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Inspector", href: "#inspector" },
  { label: "Stack", href: "#stack" },
  { label: "Notes", href: "#notes" },
] as const

// --- Practice strip -------------------------------------------------------
// components/practice-strip.tsx — the thin band of practice areas.
export const PRACTICE_AREAS = [
  { k: "01", v: "Next.js products" },
  { k: "02", v: "React systems" },
  { k: "03", v: "Product UI / UX" },
  { k: "04", v: "Responsive interfaces" },
  { k: "05", v: "Frontend quality" },
] as const

// --- Selected work --------------------------------------------------------
// components/selected-work.tsx — the project carousel.
export type Project = {
  index: string
  title: string
  description: string
  year: string
  status: string
  tags: readonly string[]
  href: string
  image: string
  imageAlt: string
}

export const PROJECTS: readonly Project[] = [
  {
    index: "01",
    title: "AI Citizenship Platform",
    description:
      "Led frontend and UI/UX execution for an AI-assisted citizenship product, taking the experience from initial foundation to production-ready customer journeys.",
    year: "2026",
    status: "Lead frontend",
    tags: ["Next.js", "TypeScript", "Product UI", "AI-assisted"],
    href: "#",
    image: "/assets/projects/interior-design-platform.png",
    imageAlt:
      "Interior design platform UI showing a before/after room render with a materials palette and a generate-design control bar.",
  },
  {
    index: "02",
    title: "Client & Expert Portals",
    description:
      "Built connected portal experiences for clients and experts, including dashboards, account states, API-driven screens, and reusable interface patterns.",
    year: "2025",
    status: "Production",
    tags: ["React", "TanStack Query", "Dashboards", "REST APIs"],
    href: "#",
    image: "/assets/projects/headshot-generator.png",
    imageAlt:
      "AI headshot generator UI with a grid of generated professional portraits, style and lighting controls, and a credits counter.",
  },
  {
    index: "03",
    title: "Eligibility & Onboarding",
    description:
      "Designed and shipped guided onboarding and eligibility journeys that turn complex citizenship requirements into understandable, responsive product flows.",
    year: "2024",
    status: "Production",
    tags: ["UX flows", "Forms", "Responsive", "State design"],
    href: "#",
    image: "/assets/projects/automation-agent-systems.png",
    imageAlt:
      "Dark automation dashboard showing an agent workflow node graph alongside a live event stream and run log.",
  },
  {
    index: "04",
    title: "Interactive Family Tree",
    description:
      "Created a React Flow-based family-tree interface for exploring relationships and eligibility data inside a complex, domain-specific workflow.",
    year: "2024",
    status: "Product feature",
    tags: ["React Flow", "Interaction", "Data UI", "TypeScript"],
    href: "#",
    image: "/assets/projects/document-intelligence.png",
    imageAlt:
      "Document intelligence UI extracting structured fields from an invoice, with a review queue and confidence indicators.",
  },
  {
    index: "05",
    title: "Analytics & Product Quality",
    description:
      "Improved production quality through analytics views, responsive polish, reusable UI systems, performance work, monitoring, and complete edge states.",
    year: "2023",
    status: "Continuous",
    tags: ["PostHog", "Sentry", "Performance", "Design systems"],
    href: "#",
    image: "/assets/projects/data-labeling-platform.png",
    imageAlt:
      "Data labeling platform annotating a room scene with bounding boxes, a reviewer queue, and a quality score panel.",
  },
]

// --- Capabilities ---------------------------------------------------------
// components/capabilities.tsx — the three practice cards. Cards map to the
// icons in components/capability-icons.tsx by position.
export const CAPABILITIES = [
  {
    num: "— 01",
    title: "Build product interfaces",
    body: "Responsive Next.js experiences connected to real product data.",
    evidence:
      "Evidence: client and expert portals, dashboards, onboarding, and eligibility flows at adavia.",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Zustand",
      "nuqs",
      "TanStack Query",
      "REST APIs",
    ],
  },
  {
    num: "— 02",
    title: "Simplify complex workflows",
    body: "Dense requirements shaped into clear journeys and interaction systems.",
    evidence:
      "Evidence: React Flow family-tree UI and guided citizenship eligibility experiences.",
    items: [
      "UI/UX design",
      "Figma delivery",
      "React Flow",
      "Dashboards",
      "Forms",
      "Responsive UI",
    ],
  },
  {
    num: "— 03",
    title: "Improve production quality",
    body: "Interfaces refined through testing, analytics, observability, and responsive QA.",
    evidence:
      "Evidence: Playwright coverage, PostHog insights, Sentry monitoring, and reusable UI patterns.",
    items: [
      "Design systems",
      "Tailwind CSS",
      "PostHog",
      "Sentry",
      "Playwright",
      "Performance",
      "Accessibility",
    ],
  },
] as const

// --- Approach -------------------------------------------------------------
// components/approach.tsx — the four ordered process steps.
export const APPROACH_STEPS = [
  {
    k: "— Step 01",
    t: "Understand the journey",
    d: "Start with the user, the business goal, and the decisions the interface needs to make easy.",
  },
  {
    k: "— Step 02",
    t: "Shape the interface system",
    d: "Turn requirements and Figma direction into reusable patterns, responsive states, and a clear interaction model.",
  },
  {
    k: "— Step 03",
    t: "Build the complete flow",
    d: "Connect typed UI to real APIs, handling loading, empty, error, and success states as part of the feature.",
  },
  {
    k: "— Step 04",
    t: "Measure, observe, refine",
    d: "Use feedback, PostHog, Sentry, and hands-on QA to improve performance, usability, and production confidence.",
  },
] as const

export const FIELD_NOTES = [
  {
    type: "Building",
    title: "A portfolio that demonstrates quality instead of claiming it",
    summary:
      "Turning accessibility, responsive behavior, and edge states into an interface visitors can test themselves.",
    date: "Now",
    tags: ["Accessibility", "Product UI"],
  },
  {
    type: "Learning",
    title: "Better motion begins with knowing when to stop it",
    summary:
      "Exploring visibility-aware animation, reduced-motion fallbacks, and motion that explains state changes.",
    date: "This week",
    tags: ["Motion", "React"],
  },
  {
    type: "Decision",
    title: "Why production states belong in the first design pass",
    summary:
      "Loading, empty, error, and recovery states are the product—not cleanup work after the happy path.",
    date: "Recently",
    tags: ["Systems", "UX"],
  },
] as const

// --- Stack ----------------------------------------------------------------
// components/stack.tsx — the editor-mockup panes. Each item is [name, tag].
export const STACK_PANES = [
  {
    title: "Application",
    items: [
      ["Next.js", "framework"],
      ["TypeScript", "language"],
      ["JavaScript", "language"],
      ["React 19", "ui"],
      ["Tailwind CSS", "styling"],
      ["Zustand / nuqs", "client & URL state"],
    ],
  },
  {
    title: "Product UI",
    items: [
      ["Responsive systems", "layout"],
      ["React Flow", "interactive UI"],
      ["D3", "data visualization"],
      ["Figma", "design delivery"],
      ["Forms & onboarding", "journeys"],
      ["Resend", "email integration"],
    ],
  },
  {
    title: "Quality",
    items: [
      ["PostHog", "analytics"],
      ["Sentry", "observability"],
      ["Playwright", "end-to-end testing"],
      ["Accessibility", "inclusive UI"],
      ["Performance", "experience"],
    ],
  },
  {
    title: "Workflow",
    items: [
      ["Git / GitHub", "version control"],
      ["Claude Code", "AI tooling"],
      ["Codex", "AI tooling"],
      ["Cursor", "AI tooling"],
    ],
  },
] as const

// --- About ----------------------------------------------------------------
// components/contact.tsx (About band) — the meta definition list. [key, value].
export const ABOUT_META = [
  ["Based", "Addis Ababa, Ethiopia"],
  ["Role", "Frontend Product Engineer"],
  ["Experience", "4+ years in frontend product teams"],
  ["Current focus", "Product UI, frontend systems, responsive quality"],
  ["Education", "Computer Science · HiLCoE"],
] as const

// --- Site footer ----------------------------------------------------------
// components/site-footer.tsx — link columns. Each link is [label, href].
export const FOOTER_COLUMNS = [
  {
    title: "Site",
    links: [
      ["Work", "#work"],
      ["Capabilities", "#capabilities"],
      ["Approach", "#process"],
      ["Stack", "#stack"],
      ["About", "#about"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["Email Yeabsira", "mailto:yabumek46@gmail.com"],
      ["Start a project", "#contact"],
    ],
  },
  {
    title: "Social",
    links: [
      ["GitHub ↗", "https://github.com/yaba101"],
      ["LinkedIn ↗", "https://www.linkedin.com/in/yeabsira-mekuria"],
    ],
  },
] as const

// --- Token-usage widget ---------------------------------------------------
// components/widgets/token-usage.tsx — sample usage rows.
export type Vendor = "Anthropic" | "OpenAI" | "Google" | "Mistral"

export type UsageRow = {
  model: string
  vendor: Vendor
  tokens: number
  costUsd: number
}

export const TOKEN_USAGE: UsageRow[] = [
  { model: "Opus 4.7", vendor: "Anthropic", tokens: 8_230_000, costUsd: 211 },
  { model: "Sonnet 4.6", vendor: "Anthropic", tokens: 2_400_000, costUsd: 42 },
  { model: "Haiku 4.5", vendor: "Anthropic", tokens: 1_140_000, costUsd: 19 },
  { model: "GPT-5", vendor: "OpenAI", tokens: 730_000, costUsd: 12 },
]

/* 
Navigation Bar Variants:

type Variant = "overlay" | "solid"

const VARIANT_STYLES: Record<
  Variant,
  {
    header: string
    wordmark: string
    nav: string
    navLink: string
    action: string
    //  Hamburger / close trigger shown on small screens.
    trigger: string
    // Mobile dropdown panel surface.
    panel: string
    //  Links inside the mobile panel. 
    panelLink: string
    //  Hairline divider inside the mobile panel. 
    panelDivider: string
  }
> = {
  overlay: {
    header: "",
    wordmark: "text-overlay-cream",
    nav: "text-overlay-cream/95",
    navLink: "hover:text-overlay-cream",
    action:
      "border-overlay-cream/55 bg-overlay-ink/55 text-overlay-cream backdrop-blur-[6px] hover:bg-overlay-ink/70",
    trigger:
      "border-overlay-cream/55 bg-overlay-ink/55 text-overlay-cream backdrop-blur-[6px] hover:bg-overlay-ink/70",
    panel:
      "border-overlay-cream/15 bg-overlay-ink/85 text-overlay-cream backdrop-blur-xl",
    panelLink: "text-overlay-cream/85 hover:text-overlay-cream",
    panelDivider: "bg-overlay-cream/12",
  },
  solid: {
    header: "border-b border-hairline bg-canvas/85 backdrop-blur",
    wordmark: "text-ink",
    nav: "text-body",
    navLink: "hover:text-ink",
    action:
      "border-hairline-strong bg-surface-card text-ink hover:bg-surface-strong",
    trigger:
      "border-hairline-strong bg-surface-card text-ink hover:bg-surface-strong",
    panel: "border-hairline bg-canvas/95 text-ink backdrop-blur-xl",
    panelLink: "text-body hover:text-ink",
    panelDivider: "bg-hairline",
  },
}

*/
