import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

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
        heroImage: image().optional(),
        heroImageAlt: z.string().optional(),
        screenshots: z.array(z.object({ src: image(), alt: z.string() })).default([]),
        /** Numbered setup steps ("How it works"). */
        howItWorks: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
        features: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
        /** Site path of the product's own privacy policy page, e.g. /privacy/up-for-air/. Defaults to /privacy/. */
        privacyPolicy: z.string().startsWith('/').optional(),
        /** Permissions and data handling, one short row each. Links to the privacy policy. */
        privacy: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
        /** Device, OS and permission requirements, one line each. */
        requirements: z.array(z.string()).default([]),
        /** Free versus paid comparison. `note` is the fine print under the table. */
        pricing: z
          .object({
            tiers: z.array(z.string()).min(2).max(3),
            rows: z.array(z.object({ feature: z.string(), values: z.array(z.string()) })),
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
        if (data.pricing) {
          const n = data.pricing.tiers.length;
          for (const row of data.pricing.rows) {
            if (row.values.length !== n) {
              ctx.addIssue({
                code: 'custom',
                message: `pricing row "${row.feature}" needs ${n} values, one per tier`,
              });
            }
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
