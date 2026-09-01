# temperanda.com

Static website for Temperanda, a software studio making iPhone apps, Max for Live
devices, and audio plugins. Built with Astro 7 and Tailwind v4, deployed to Cloudflare Pages.

## Requirements

- Node 22 (see `.nvmrc`; Astro 7 needs 22.12 or newer). Run `nvm use` first.
- npm.

## Commands

```sh
nvm use && npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve dist/
npm run check     # astro check (types + templates)
npm run og        # re-render public/og.png from src/assets/og.svg
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/content/products/*.md` | One file per product. The file name is the URL slug (`/products/<slug>/`). |
| `src/content/pages/*.md` | About, Support and Privacy pages. |
| `src/data/site.ts` | Site name, tagline, description, contact email, nav, social links. |
| `src/data/product-meta.ts` | Category and status labels, sort order, and the call-to-action logic. |
| `src/styles/global.css` | Every colour, font and type size on the site, as Tailwind `@theme` tokens. |
| `src/assets/products/<slug>/` | Product screenshots (referenced from frontmatter, optimised at build). |
| `public/` | Files served as-is: favicon, `og.png`, `robots.txt`, Cloudflare `_headers`. |

## Products and launch states

A product's `status` and `links` frontmatter drive every call to action on the site:

| `status` | required link | what shows |
| --- | --- | --- |
| `in-development` | none | "TestFlight beta coming soon" (iPhone) or "In development" |
| `beta` | `links.testFlight` | "Join the TestFlight beta" button |
| `available` | `links.appStore` (iPhone) or `links.store` (device/plugin) | download or buy button |

The build fails if `available` is set without the matching link. Products with `stub: true`
are listed as "Unannounced" and get no page; rename the file and remove `stub` when the
product has a name.

To add screenshots, drop images into `src/assets/products/<slug>/` and list them:

```yaml
heroImage: ../../assets/products/permanence/hero.png
heroImageAlt: Permanence home screen showing three goals
screenshots:
  - src: ../../assets/products/permanence/goals.png
    alt: Goals list
```

## Before launch

- [ ] `src/data/site.ts`: confirm the contact email and add social links.
- [ ] `src/content/products/permanence.md`: review copy marked `[confirm]` / `[edit]`, set the minimum iOS version.
- [ ] `src/content/pages/about.md`: fill in the bracketed details.
- [ ] `src/content/pages/privacy.md`: verify every bracketed statement against the shipped app (App Store Connect links to this page).
- [ ] `src/content/pages/support.md`: confirm the response time.
- [ ] Permanence beta: set `status: beta` and `links.testFlight`.
- [ ] Permanence release: set `status: available`, `links.appStore`, add screenshots, and swap the text button in `src/components/ProductCta.astro` for Apple's official App Store badge.
- [ ] If the tagline changes, update `src/assets/og.svg` and run `npm run og`.

## Deploy

Cloudflare Pages, configured in the dashboard: connect this repository, build command
`npm run build`, output directory `dist`, environment variable `NODE_VERSION=22`, custom
domain `temperanda.com`.
