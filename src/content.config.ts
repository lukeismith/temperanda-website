import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { PICTOGRAM_NAMES } from './data/pictograms';

/** Optional copy for one section of a product page; the template has defaults for each. */
const sectionCopy = z.object({
  /** The pill label above the heading. */
  eyebrow: z.string().optional(),
  heading: z.string().optional(),
  intro: z.string().optional(),
});

/**
 * Products: one Markdown file per product in src/content/products/.
 * The file name is the URL slug (/products/<slug>/). `status` and `links`
 * drive every call to action on the site; see src/data/product-meta.ts.
 */
const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: ({ image }) =>
    z
      .object({
        name: z.string(),
        tagline: z.string().max(120),
        /** Meta description and hero paragraph; falls back to tagline. */
        description: z.string().max(200).optional(),
        category: z.enum(['ios', 'max-for-live', 'plugin']),
        status: z.enum(['in-development', 'beta', 'available']).default('in-development'),
        /** e.g. ['iPhone'], ['Ableton Live 12'], ['VST3', 'AU'] */
        platforms: z.array(z.string()).default([]),
        /**
         * The page's colours. `studio` is the company's forest green; an app page uses its own
         * theme (see the data-theme blocks in src/styles/global.css).
         */
        theme: z.enum(['studio', 'up-for-air', 'haptics-lab']).default('studio'),
        /** schema.org applicationCategory for the JSON-LD, e.g. DeveloperApplication. */
        appCategory: z
          .string()
          .regex(/^[A-Z][A-Za-z]*Application$/, 'Use a schema.org applicationCategory, e.g. LifestyleApplication')
          .optional(),
        featured: z.boolean().default(false),
        order: z.number().int().default(100),
        /** A stub is listed as "Unannounced" without a link and gets no page. */
        stub: z.boolean().default(false),
        releaseDate: z.coerce.date().optional(),
        links: z
          .object({
            appStore: z.url().optional(),
            testFlight: z.url().optional(),
            store: z.url().optional(),
            docs: z.url().optional(),
          })
          .default({}),
        /** The app icon (square; the page rounds it). Shown in the hero, the closing call and the home page. */
        icon: image().optional(),
        /** The screenshot in the hero phone. Use each screenshot at most once on a page. */
        heroImage: image().optional(),
        heroImageAlt: z.string().optional(),
        /** Optional headings for each section of the product page. */
        sections: z
          .object({
            howItWorks: sectionCopy,
            features: sectionCopy,
            more: sectionCopy,
            overview: sectionCopy,
            privacy: sectionCopy,
            requirements: sectionCopy,
            pricing: sectionCopy,
            faq: sectionCopy,
            cta: sectionCopy,
          })
          .partial()
          .default({}),
        /** Numbered steps ("How it works"), shown as numbered glass cards. */
        howItWorks: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
        /**
         * Feature tabs. When every feature has an `image`, the tabs crossfade those screenshots
         * in a phone; when none has one, the features are a card grid.
         */
        features: z
          .array(
            z.object({
              title: z.string(),
              body: z.string(),
              image: image().optional(),
              imageAlt: z.string().optional(),
            }),
          )
          .default([]),
        /** Smaller extras, shown as an icon-card grid. `icon` names a pictogram in src/data/pictograms.ts. */
        more: z
          .array(z.object({ title: z.string(), body: z.string(), icon: z.enum(PICTOGRAM_NAMES).optional() }))
          .default([]),
        /** Site path of the product's own privacy policy page, e.g. /privacy/up-for-air/. Defaults to /privacy/. */
        privacyPolicy: z.string().startsWith('/').optional(),
        /** Site path of the product's own support page, e.g. /support/haptics-lab/. Defaults to /support/. */
        support: z.string().startsWith('/').optional(),
        /** Permissions and data handling, one short row each. Links to the privacy policy. */
        privacy: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
        /** Device, OS and permission requirements, one line each. */
        requirements: z.array(z.string()).default([]),
        /** Plan cards. `highlight` tints one plan with the accent. `note` is the fine print under the cards. */
        pricing: z
          .object({
            plans: z
              .array(
                z.object({
                  name: z.string(),
                  /** e.g. "$0" or "$4.99". Leave it out until the store has a price. */
                  price: z.string().optional(),
                  /** e.g. "one time", "a year". */
                  period: z.string().optional(),
                  description: z.string(),
                  features: z.array(z.string()).default([]),
                  highlight: z.boolean().default(false),
                }),
              )
              .min(1)
              .max(3),
            note: z.string().optional(),
          })
          .optional(),
        faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      })
      .superRefine((data, ctx) => {
        if (data.status === 'available' && data.category === 'ios' && !data.links.appStore) {
          ctx.addIssue({
            code: 'custom',
            message: 'An available iPhone app needs links.appStore',
          });
        }
        if (data.status === 'available' && data.category !== 'ios' && !data.links.store) {
          ctx.addIssue({
            code: 'custom',
            message: 'An available device or plugin needs links.store',
          });
        }
        if (data.heroImage && !data.heroImageAlt) {
          ctx.addIssue({ code: 'custom', message: 'heroImage requires heroImageAlt' });
        }
        if (data.stub && data.featured) {
          ctx.addIssue({ code: 'custom', message: 'A stub cannot be featured' });
        }
        const withImage = data.features.filter((f) => f.image).length;
        if (withImage > 0 && withImage < data.features.length) {
          ctx.addIssue({
            code: 'custom',
            message: 'Give every feature an image (feature tabs) or none (a card grid)',
          });
        }
        for (const feature of data.features) {
          if (feature.image && !feature.imageAlt) {
            ctx.addIssue({ code: 'custom', message: `feature "${feature.title}" has an image without imageAlt` });
          }
        }
      }),
});

/** Long-form pages (About, Support, Privacy) rendered through layouts/MarkdownPage.astro. */
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { products, pages };
