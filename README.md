# temperanda.com

Static website for Temperanda, a software studio making iPhone apps, Max for Live
devices, and audio plugins. Built with Astro 7 and Tailwind v4, deployed as a static site on Cloudflare Workers.

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
| `public/.well-known/apple-app-site-association` | Universal links for the Up For Air app (see below). |
| `public/_redirects` | Cloudflare rewrite: every `/c/*` checkpoint link serves `src/pages/checkpoint.astro`. |

## Products and launch states

A product's `status` and `links` frontmatter drive every call to action on the site:

| `status` | required link | what shows |
| --- | --- | --- |
| `in-development` | none | "Coming soon to the App Store" (iPhone) or "In development" |
| `beta` | `links.testFlight` | "Join the TestFlight beta" button |
| `available` | `links.appStore` (iPhone) or `links.store` (device/plugin) | download or buy button |

The build fails if `available` is set without the matching link. Products with `stub: true`
are listed as "Unannounced" and get no page; rename the file and remove `stub` when the
product has a name.

The product page is built from frontmatter. To add screenshots, drop images into
`src/assets/products/<slug>/` and reference them. The hero image shows in a phone at the
top; when every feature has an image, the features become tabs that crossfade their
screenshots. Use each screenshot once per page.

```yaml
theme: up-for-air          # the page's colours: studio, up-for-air, or haptics-lab
icon: ../../assets/products/up-for-air/icon.svg
heroImage: ../../assets/products/up-for-air/hero.png
heroImageAlt: Up For Air home screen showing 47 minutes to spare
features:
  - title: Five ways to make minutes
    body: Walking, workouts, and mindful minutes come from Apple Health.
    image: ../../assets/products/up-for-air/earn.png
    imageAlt: The Earn tab
```

`src/content.config.ts` documents every field, including `more`, `pricing.plans`, and
`sections` (optional headings for each section).

## Before launch

- [ ] `src/data/site.ts`: confirm the contact email and add social links.
- [ ] `src/content/products/up-for-air.md`: review copy marked `[confirm]`, and replace the design-gallery render with real device screenshots.
- [ ] `src/content/pages/about.md`: fill in the bracketed details.
- [ ] `src/content/pages/privacy.md`: verify every bracketed statement against the shipped app (App Store Connect links to this page).
- [ ] `src/content/pages/support.md`: confirm the response time.
- [ ] Up For Air beta: set `status: beta` and `links.testFlight`.
- [ ] Up For Air release: set `status: available`, `links.appStore`, add screenshots, and swap the text button in `src/components/ProductCta.astro` for Apple's official App Store badge.
- [ ] If the tagline changes, update `src/assets/og.svg` and run `npm run og`.

## Up For Air checkpoint links

Up For Air's printed QR cards and NFC tags carry `https://temperanda.com/c/<payload>`.
iOS opens these universal links in the app when it is installed, with no request to this
site. Everyone else gets the checkpoint page. The site has no backend: the payload is
decoded on the phone.

- `public/.well-known/apple-app-site-association` names the app (`C8457X7583.com.temperanda.sidequest`)
  and the `/c/*` path. `public/_headers` serves it as JSON. It must stay at this exact
  address on the bare domain, over HTTPS, and never behind a redirect. Apple's CDN
  caches it, so a change can take a day or more to reach phones.
- Printed cards depend on this domain and path for as long as they exist. Keep
  `temperanda.com` renewed, and never reuse `/c/` for anything else.
- The app keeps the same host in `CheckpointLink.host` and in its Associated Domains
  entitlement. All three must agree.

## Deploy

Cloudflare Workers Builds, configured in the dashboard: connect this repository, build
command `npm run build`, deploy command `npx wrangler deploy`, custom domain
`temperanda.com`.

`wrangler.jsonc` tells that deploy to upload `dist/` as static assets, with no Worker
script. Keep the file: without it, Wrangler's automatic setup runs `astro add cloudflare`
to make a server app, and the build fails. `public/_headers` and `public/_redirects` work
the same way on Workers static assets as they did on Pages.

To try the deployed behavior locally (redirects, headers, the 404 page), build, then run
`npx wrangler dev`. `npx wrangler deploy --dry-run` checks the configuration without
deploying.
