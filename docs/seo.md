# SEO

The site is a single page, so SEO work concentrates on metadata, structured data, and the two static crawler files.

## Metadata — `app/layout.tsx`

The exported `metadata` object provides:

- **Title and description** — "Riyaz Maind | Data Science & Analytics Portfolio".
- **Keywords, author, creator.**
- **Open Graph** — `type: website`, URL `https://riyaz.dev`, image `https://riyaz.dev/og-image.jpg` (1200×630).
- **Twitter card** — `summary_large_image`, `@riyazmaind`, image `https://riyaz.dev/twitter-image.jpg`.
- **Robots** — `index: true, follow: true`.
- **Canonical** — `https://riyaz.dev`.
- **Theme color** — `#000000`.

## Structured data — `app/page.tsx`

A JSON-LD script with `@type: ProfilePage` containing a `Person` entity:

- Name, job title ("Data Science Engineer & ML Specialist"), email, avatar URL.
- `sameAs` links to LinkedIn, GitHub, and X.
- `knowsAbout` skill list (Machine Learning, Python, TensorFlow, PyTorch, etc.).

Keep this object in sync with the visible content when the profile changes.

## Crawler files — `public/`

- **`robots.txt`** — allows all user agents, disallows `/api/`, points to `https://riyaz.dev/sitemap.xml`, sets crawl delays.
- **`sitemap.xml`** — lists the root URL plus the `#about`, `#experience`, `#projects`, `#contact` anchors with `lastmod`, `changefreq`, and `priority`.

Both are static files; Next.js does not regenerate them. After content changes, update the `lastmod` dates in `sitemap.xml` by hand.

## Known gaps

| Issue | Detail |
| --- | --- |
| Missing images | `og-image.jpg`, `twitter-image.jpg`, and `avatar.jpg` are referenced by metadata and JSON-LD but are not in `public/`. Social previews and the `Person` image will 404 until they are added. |
| Manual `<head>` tags | `layout.tsx` sets `charSet` and `viewport` manually; Next.js already injects both. Remove the duplicates to avoid validation warnings. |
| Anchor URLs in sitemap | `#fragment` URLs are not separately indexable; the single root URL is what search engines will rank. |
| No analytics | Traffic and search performance cannot be measured yet (e.g., Vercel Web Analytics or Google Search Console). |

## Checklist after content changes

1. Update `metadata` in `layout.tsx` if the title, description, or social cards should change.
2. Update the JSON-LD `Person` object in `page.tsx`.
3. Refresh `lastmod` dates in `public/sitemap.xml`.
4. Verify the canonical URL still matches the production domain.
