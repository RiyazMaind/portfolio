# Project Overview

## What this is

**Riyaz Maind — Data Science & Analytics Portfolio** (`https://riyaz.dev`)

A single-page portfolio website that presents Riyaz's profile, work experience, and data science / ML projects, and lets visitors get in touch through a contact form. It is a static marketing site with one dynamic feature: the contact form, which sends email via the Resend API.

**Audience:** recruiters, hiring managers, and potential clients scanning for data science and analytics skills.

**Design intent:** minimal and professional — dark theme, restrained blue accent, clear typography, no heavy UI or animation libraries.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19, TypeScript 5 |
| Styling | Tailwind CSS 4 (CSS-first config) |
| Fonts | Geist Sans + Geist Mono (`next/font/google`) |
| Email | Resend HTTP API (server-side only) |
| Hosting | Vercel (production domain `riyaz.dev`) |

## Page sections

The whole site is one route, `app/page.tsx`, composed of these sections in order:

| Section | Anchor | Purpose |
| --- | --- | --- |
| Navbar | — | Sticky top nav with links to each section; collapses to a mobile menu |
| Hero | `#hero` | Name, tagline, and the two primary CTAs (View My Work, Get In Touch) |
| About | `#about` | Short professional summary and skills |
| Experience | `#experience` | Timeline of roles and responsibilities |
| Projects | `#projects` | Featured data science / ML projects |
| Contact | `#contact` | Contact form (POSTs to `/api/contact`) plus email, phone, location, and social links |

## Key facts

- **Content is hardcoded** in the components under `app/components/` — there is no CMS or database. Editing the components is how you update the site.
- **The contact form** posts JSON to `POST /api/contact`, which forwards the message to Resend. It requires three environment variables (see `contact-api.md`).
- **SEO is built in:** metadata and Open Graph/Twitter cards in `app/layout.tsx`, JSON-LD `ProfilePage` structured data in `app/page.tsx`, plus static `public/sitemap.xml` and `public/robots.txt`.
- **No tests and no analytics** are set up yet.

## Commands

```bash
npm run dev      # development server
npm run build    # production build
npm start        # run production build
npm run lint     # ESLint
```

Setup and environment variables are covered in the repository `README.md`; deployment is covered in `deployment.md`.
