# Modern Portfolio — Starter

This is the **starter project** for the modern portfolio build-along tutorial.

It comes with everything you need to follow along — all the media assets, the
content/data file, the shadcn UI primitives, fonts, and project config — but
**none of the sections we build on camera**. You'll create the hero, header,
project showcase, capabilities, contact form, footer, and the rest step by step
as you follow the video.

## What's inside

- `public/` — all the images and videos the site uses
- `lib/content.ts` — the central text/data file the components read from
- `lib/utils.ts` — the `cn()` Tailwind class-merging helper
- `components/ui/` — shadcn UI primitives (button, card, badge)
- `app/` — a minimal layout, a placeholder home page, and a near-empty
  `globals.css` (we add the design tokens during the tutorial)

## Prerequisites

- [Node.js](https://nodejs.org) 18.18 or newer
- [Bun](https://bun.sh) (the package manager used in this project)

## Getting started

Install the dependencies:

```bash
bun install
```

Start the dev server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) and you should see the
"Starter ready" placeholder. From here, follow the video and we'll build the
rest of the portfolio together.

## Useful scripts

- `bun dev` — run the local dev server
- `bun run build` — production build
- `bun run typecheck` — TypeScript check
- `bun run lint` — ESLint
