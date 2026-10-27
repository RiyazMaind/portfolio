# Design Style Guide

The site should stay **minimal and professional**: dark, calm, high-contrast, with a single accent color used sparingly. Avoid decorative clutter and template-looking effects.

## Color

| Role | Values in use |
| --- | --- |
| Page/section background | `slate-950`, `gray-950`; Hero uses a `gray-900 → gray-800 → gray-900` vertical gradient |
| Primary text | `white`, `slate-100` |
| Secondary text | `gray-400`, `gray-300` |
| Accent (primary) | `blue-400` (labels, links, borders), `blue-500`/`blue-600` (buttons) |
| Accent gradient | `blue-400 → cyan-400`, only for the name in the Hero headline |
| Feedback | `green-400` success, `red-400` error, `blue-400` in-progress |
| Card surface | `slate-900` with `slate-800` borders |

Rules:

- One accent color only (blue). Do not introduce new hues without a reason.
- Keep large surfaces near-black; accent color is for small elements — labels, buttons, borders, links.

## Typography

- **Font families:** Geist Sans / Geist Mono via `next/font/google` (`--font-geist-sans`, `--font-geist-mono`).
- **Section eyebrow labels:** `text-sm uppercase tracking-[0.3em] text-blue-400` — the signature detail of the design; use it consistently on every section.
- **Section headings:** `text-4xl md:text-5xl font-bold`.
- **Body copy:** `text-base md:text-lg leading-relaxed` in `gray-400`; supporting text `max-w-2xl` for readable line lengths.
- **Titles:** sentence case or short phrases; avoid all-caps except the eyebrow labels.

## Layout and spacing

- Every section: `w-full px-4 py-20` with inner `max-w-6xl mx-auto`.
- Section headers are centered: eyebrow label, heading, optional intro paragraph (`mt-4 max-w-2xl mx-auto`).
- Two-column content uses `grid` with generous gaps (`gap-10`); single column below `lg`.
- Consistent vertical rhythm: heading block → `mb-12` → content grid.

## Components

- **Cards:** `rounded-[32px] border border-slate-800 bg-slate-900/95 p-8` with a soft shadow (`shadow-2xl shadow-blue-500/10`).
- **Buttons:** primary = `bg-blue-500 hover:bg-blue-600 text-white` (pill `rounded-full` for form actions, `rounded-lg` in the Hero); secondary = transparent with `border-2 border-blue-400 text-blue-400`.
- **Inputs:** `rounded-3xl border-slate-700 bg-slate-950`, focus state `focus:border-blue-400`.
- **Social icons:** circular buttons in a row (`rounded-full`, brand-appropriate background).

## Motion

- Use small, purposeful transitions only: `transition-colors` on links/buttons, `hover:scale-105` on Hero CTAs, `animate-bounce` on the scroll indicator, `animate-fade-in` on the greeting.
- No heavy animation libraries; CSS transitions/Tailwind animations only.

## Do / Don't

| Do | Don't |
| --- | --- |
| Keep sections short and scannable | Add long walls of text |
| Use the blue eyebrow label on each section | Invent new heading styles |
| Use whitespace and subtle borders for structure | Add gradients, glows, or patterns beyond the Hero |
| Use Tailwind utilities already in the codebase | Add UI kits or icon packages |
| Write plain, professional copy | Use hype words, emoji-heavy copy, or exclamation marks |
