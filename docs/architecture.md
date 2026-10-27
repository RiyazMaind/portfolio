# Architecture

## Repository structure

```text
portfolio/
├── app/
│   ├── page.tsx              # Home route: composes all sections + JSON-LD
│   ├── layout.tsx            # Root layout: fonts, global metadata, <html>/<body>
│   ├── globals.css           # Tailwind 4 entry, theme tokens, base styles
│   ├── components/
│   │   ├── Navbar.tsx        # Top navigation (client)
│   │   ├── Hero.tsx          # Landing section (client)
│   │   ├── About.tsx         # Summary and skills
│   │   ├── Experience.tsx    # Work experience timeline
│   │   ├── Projects.tsx      # Project showcase
│   │   └── Contacts.tsx      # Contact form and details (client)
│   └── api/contact/route.ts  # POST endpoint that sends email via Resend
├── public/
│   ├── robots.txt            # Crawler rules (static)
│   ├── sitemap.xml           # Sitemap (static)
│   └── favicon.svg
├── docs/                     # This documentation
├── next.config.ts            # Next.js config (currently empty)
├── tsconfig.json
├── eslint.config.mjs
└── postcss.config.mjs        # Tailwind 4 via @tailwindcss/postcss
```

## Rendering model

- **Single route.** The site is one page; `app/page.tsx` imports and stacks the section components. There is no routing beyond `app/api/contact`.
- **Server by default.** `About`, `Experience`, and `Projects` are server components — they render static markup with no client JavaScript.
- **Client islands.** `Navbar` (mobile menu state), `Contacts` (form state and submission), and `Hero` are marked `"use client"`. `Hero` uses no state or browser APIs today and could be converted to a server component to shave client JS.
- **One API route.** `app/api/contact/route.ts` runs on the server; the Resend key never reaches the browser.

## Component map

| Component | Client? | Responsibility | Section id |
| --- | --- | --- | --- |
| `Navbar` | yes | Fixed header, anchor links, mobile menu toggle | — |
| `Hero` | yes | Headline, subheading, two CTA buttons, scroll indicator | `hero` |
| `About` | no | Professional summary and skill categories | `about` |
| `Experience` | no | Roles and responsibilities timeline | `experience` |
| `Projects` | no | Featured data science / ML projects | `projects` |
| `Contacts` | yes | Contact form → `/api/contact`, plus email/phone/social details | `contact` |

## Styling

- Tailwind CSS 4 with the CSS-first configuration: `globals.css` starts with `@import "tailwindcss"` and maps theme values in `@theme inline`. There is no `tailwind.config.js` — do not create one.
- Section backgrounds are dark (`bg-slate-950`, `bg-gray-950`, gradient on the Hero); `globals.css` also switches root colors by `prefers-color-scheme`.
- Fonts are loaded through `next/font/google` and exposed as `--font-geist-sans` / `--font-geist-mono`. Note that `globals.css` still sets `font-family: Arial, Helvetica, sans-serif` on `body`, so the Geist variables are available but not applied by default.
- Layout convention for every section: `w-full ... px-4 py-20` with an inner `max-w-6xl mx-auto` container.

## Content

All copy — bio, experience entries, projects, contact details — lives directly in the component files. There is no data layer. To change content, edit the corresponding file in `app/components/`.

## Conventions

1. One section = one component in `app/components/`, with a stable `id` used by the navbar anchors (`#about`, `#experience`, `#projects`, `#contact`).
2. Keep sections as server components unless they genuinely need state or browser APIs.
3. Use the existing palette and spacing rules (see `design.md`) rather than introducing new colors.
4. Match the existing Next.js 16 patterns — `AGENTS.md` requires consulting `node_modules/next/dist/docs/` before changing framework code.

## Known quirks / improvement candidates

- `Hero` is a client component but has no interactivity.
- Manual `<meta charSet>` and `viewport` tags in `layout.tsx` duplicate what Next.js injects automatically.
- The contact API has no rate limiting or spam protection.
- Metadata references `og-image.jpg`, `twitter-image.jpg`, and `avatar.jpg`, which are not present in `public/` (see `seo.md`).
