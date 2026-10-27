# Deployment

## Local setup

```bash
npm install
cp .env.example .env.local   # then fill in the Resend values
npm run dev                  # http://localhost:3000
```

Required environment variables (see `contact-api.md`): `RESEND_API_KEY`, `FROM_EMAIL`, `TO_EMAIL`. The site renders without them, but the contact form returns a 500 "Email service is not configured" error.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint check |

Run `npm run build` before shipping — it catches type and build errors that `dev` does not.

## Deploying to Vercel

The project is a standard Next.js app with no custom server config (`next.config.ts` is empty), so either path works:

**Git integration (recommended)**

1. Push the repository to GitHub.
2. Import it at <https://vercel.com/new> — Vercel auto-detects Next.js.
3. Add the three environment variables under *Settings → Environment Variables* (Production and Preview).
4. Deploy.

**CLI**

```bash
npm i -g vercel
vercel            # preview deployment
vercel --prod     # production deployment
```

The production domain is `https://riyaz.dev`; configure it under *Settings → Domains* and point DNS at Vercel.

## Post-deploy verification

1. `npm run lint` and `npm run build` pass.
2. All sections render and the navbar anchors (`#about`, `#experience`, `#projects`, `#contact`) scroll correctly.
3. Mobile layout works (the Navbar collapses to a menu).
4. Submit a test message through the contact form and confirm the email arrives.
5. Check `https://riyaz.dev/robots.txt` and `/sitemap.xml` resolve.
6. Validate social previews (see `seo.md` — the OG/Twitter images are currently missing from `public/`).

## Updating content

Content lives in the components; there is no CMS:

| To change | Edit |
| --- | --- |
| Name, tagline, CTAs | `app/components/Hero.tsx` |
| Bio and skills | `app/components/About.tsx` |
| Work history | `app/components/Experience.tsx` |
| Projects | `app/components/Projects.tsx` |
| Email, phone, location, social links | `app/components/Contacts.tsx` |
| Page title/description/social cards | `app/layout.tsx` (metadata) |
| Structured data | `app/page.tsx` (JSON-LD) |
