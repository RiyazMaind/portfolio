# AI Skills to Install for This Project

This document lists the AI skills (reusable `SKILL.md` instruction files) worth installing to make working on this portfolio faster, safer, and higher quality.

**The stack these recommendations are based on:** Next.js 16.2.3 · React 19 · TypeScript 5 · Tailwind CSS 4 · Resend contact API · SEO (JSON-LD, sitemap, robots) · dark theme.

> ⚠️ This project's `AGENTS.md` warns that Next.js 16 has breaking changes versus what the model learned during training. Skills that point the agent at the *installed* docs are therefore the highest-value additions below.

---

## Installation status (updated 2026-10-27)

**Already installed** and available in OpenCode sessions:

| Tier | Installed skills |
| --- | --- |
| Tier 1 | `next-dev-loop`, `next-bundle-optimizer`, `next-cache-components-adoption`, `next-cache-components-optimizer`, `next-partial-prefetching-*` (the `vercel/next.js` pack), `vercel-react-best-practices`, `vercel-composition-patterns`, `web-design-guidelines`, `deploy-to-vercel`, `vercel-optimize`, `vercel-react-view-transitions` (the `vercel-labs/agent-skills` pack), `frontend-design` |
| Tier 2 | `accessibility`, `tailwindcss` + `tailwindcss-build`, `code-review` |
| Tier 3 | `agent-browser`, `find-skills` |
| Bonus | `design-taste-frontend` (art direction for public pages — use when restyling the portfolio), `writing-guidelines` |

**Still to install:**

```bash
npx skills add https://github.com/mblode/agent-skills --skill optimise-seo
npx skills add https://github.com/obra/superpowers --skill verification-before-completion
```

---

## How to install

The [skills CLI](https://www.skills.sh/docs/cli) installs skills into the repository (no global install needed, works with OpenCode):

```bash
# Install every skill in a repo
npx skills add <owner>/<repo>

# Install a single skill from a repo
npx skills add https://github.com/<owner>/<repo> --skill <skill-id>

# Update previously installed skills
npx skills update
```

Notes:

- Run commands from the project root, then **restart the OpenCode session** so skills are discovered.
- Installed skills land in the repo (`.opencode/skills/` or `.claude/skills/`). Committing them keeps every session/teammate consistent.
- The CLI collects anonymous telemetry by default; opt out with `DISABLE_TELEMETRY=1`.
- Skills are plain instructions your agent follows — skim a third-party `SKILL.md` before installing if you don't know the source.

---

## Tier 1 — Install first (highest impact)

| Skill | Install command | Why this project needs it |
| --- | --- | --- |
| **vercel/next.js** (7 skills) | `npx skills add vercel/next.js` | Official Vercel Next.js skills: `next-dev-loop`, `next-cache-components-adoption`, `next-bundle-optimizer`, `next-browser-initial-load-optimizer`, and more. Keeps the agent aligned with real Next 16 behavior instead of outdated training data. |
| **vercel-labs/agent-skills** (16 skills) | `npx skills add vercel-labs/agent-skills` | Vercel's production React patterns: `vercel-react-best-practices`, `web-design-guidelines`, `vercel-composition-patterns`, `deploy-to-vercel`. Directly improves the components in `app/components/`. |
| **frontend-design** (anthropics/skills) | `npx skills add https://github.com/anthropics/skills --skill frontend-design` | Helps the agent make deliberate design choices (typography, palette, motion) instead of generic "AI-looking" layouts — useful for the Hero and overall visual identity. |

## Tier 2 — Quality gates

| Skill | Install command | Why this project needs it |
| --- | --- | --- |
| **accessibility** (addyosmani/web-quality-skills) | `npx skills add https://github.com/addyosmani/web-quality-skills --skill accessibility` | WCAG 2.2 audit workflow: contrast in the dark theme, keyboard/focus behavior, form labels on the contact form, heading structure. |
| **optimise-seo** (mblode/agent-skills) | `npx skills add https://github.com/mblode/agent-skills --skill optimise-seo` | Built specifically for Next.js App Router: `metadata`/`generateMetadata`, JSON-LD, `sitemap.ts`, `robots.ts`, Core Web Vitals — all things this project already ships. |
| **tailwindcss** (Tailwind v4 aware) | `npx skills add https://github.com/thisisjuke/skills --skill tailwindcss` | The project uses Tailwind 4's CSS-first config (`@import "tailwindcss"`, `@theme`). Stops the agent from writing v3-style `tailwind.config.js` code. |
| **code-review** (mattpocock/skills) | `npx skills add https://github.com/mattpocock/skills --skill code-review` | Structured review pass before committing UI or API route changes. |

## Tier 3 — Workflow & verification

| Skill | Install command | Why this project needs it |
| --- | --- | --- |
| **agent-browser** (vercel-labs/agent-browser) | `npx skills add vercel-labs/agent-browser` | Lets the agent drive a real browser: check responsive layouts, navigate the site, and test the contact form end-to-end. |
| **verification-before-completion** (obra/superpowers) | `npx skills add https://github.com/obra/superpowers --skill verification-before-completion` | Forces the agent to actually run/verify its changes (`npm run build`, `npm run lint`) before claiming it's done. |
| **find-skills** (vercel-labs/skills) | `npx skills add https://github.com/vercel-labs/skills --skill find-skills` | Adds `npx skills find <query>` so you can discover more skills on demand (testing, performance, content writing, etc.). |

### One-shot copy-paste

```bash
npx skills add vercel/next.js
npx skills add vercel-labs/agent-skills
npx skills add https://github.com/anthropics/skills --skill frontend-design
npx skills add https://github.com/addyosmani/web-quality-skills --skill accessibility
npx skills add https://github.com/mblode/agent-skills --skill optimise-seo
npx skills add https://github.com/thisisjuke/skills --skill tailwindcss
npx skills add https://github.com/mattpocock/skills --skill code-review
npx skills add vercel-labs/agent-browser
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

---

## Custom skills to write for this repo

Registry skills don't know *this* codebase. Two small custom skills (`.opencode/skills/<id>/SKILL.md`) go a long way:

### 1. `nextjs-16-docs` — enforce the `AGENTS.md` rule

```markdown
---
name: Next.js 16 Local Docs
description: Read the installed Next.js 16 docs in node_modules before writing or changing any Next.js code in this project
---

This project runs Next.js 16, which has breaking changes versus older versions.

1. Before touching routing, data fetching, caching, metadata, or config, read the
   relevant guide under `node_modules/next/dist/docs/`.
2. Never apply Next.js patterns from training data without confirming them
   against those docs.
3. Heed deprecation notices in the docs.
```

### 2. `project-map` — where things live

A short skill describing this repo's structure (`app/page.tsx` sections, `app/components/*`, `app/api/contact/route.ts` + Resend, `globals.css` theme tokens) so new sessions don't have to re-discover it. Add project conventions here (naming, how sections are composed, how to add a new section).

---

## How OpenCode discovers skills

| Scope | Location |
| --- | --- |
| Project | `.opencode/skills/<skill-id>/SKILL.md` (also `.claude/skills`, `.agents/skills`) |
| Global | `~/.config/opencode/skills` |
| Extra sources | `skills` array in `opencode.json` (local paths or HTTP catalogs) |

Key facts:

- The **skill ID comes from the file path** (`.opencode/skills/foo/SKILL.md` → `foo`); frontmatter `name` is only a display label.
- A skill is only advertised to the model if it has a `description` in its frontmatter.
- The agent loads skills on demand via the `skill` tool; you can force one by mentioning `@skill-id` in your prompt.
- Later sources override earlier ones on the same ID — avoid duplicate IDs.

Reference: [OpenCode Skills docs](https://opencode.ai/v2/docs/skills/) · [skills.sh directory](https://www.skills.sh/)
