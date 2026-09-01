import type { CollectionEntry } from 'astro:content';

export const CATEGORY_ORDER = ['ios', 'max-for-live', 'plugin'] as const;
export type Category = (typeof CATEGORY_ORDER)[number];
export type Status = 'in-development' | 'beta' | 'available';
export type Product = CollectionEntry<'products'>;

export const categoryLabel: Record<Category, string> = {
  ios: 'iPhone app',
  'max-for-live': 'Max for Live device',
  plugin: 'Audio plugin',
};

export const categoryPlural: Record<Category, string> = {
  ios: 'iPhone apps',
  'max-for-live': 'Max for Live devices',
  plugin: 'Audio plugins',
};

export const statusLabel: Record<Status, string> = {
  'in-development': 'In development',
  beta: 'Beta',
  available: 'Available',
};

export type Cta =
  | { kind: 'app-store' | 'store' | 'testflight'; label: string; href: string }
  | { kind: 'none'; label: string };

/**
 * The single place that turns a product's status and links into its primary
 * call to action. Used by the featured block, product rows, the product hero
 * and the JSON-LD schema, so launching a product only needs frontmatter edits.
 */
export function getPrimaryCta(product: Product): Cta {
  const { status, links, category, name } = product.data;
  if (status === 'available' && links.appStore) {
    return { kind: 'app-store', label: 'Download on the App Store', href: links.appStore };
  }
  if (status === 'available' && links.store) {
    return { kind: 'store', label: `Get ${name}`, href: links.store };
  }
  if (status === 'beta' && links.testFlight) {
    return { kind: 'testflight', label: 'Join the TestFlight beta', href: links.testFlight };
  }
  return {
    kind: 'none',
    label: category === 'ios' ? 'TestFlight beta coming soon' : 'In development',
  };
}

/** Featured first, then by `order`, then by name. */
export function sortProducts(list: Product[]): Product[] {
  return [...list].sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      a.data.order - b.data.order ||
      a.data.name.localeCompare(b.data.name),
  );
}

export function groupByCategory(list: Product[]) {
  return CATEGORY_ORDER.map((category) => ({
    category,
    items: list.filter((p) => p.data.category === category),
  })).filter((group) => group.items.length > 0);
}
