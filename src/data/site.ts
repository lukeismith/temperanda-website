/**
 * Site-wide configuration. The production URL lives in astro.config.mjs
 * (`site`) and is read through `Astro.site`, so it is not repeated here.
 */
export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  /** Contact address shown in the footer and on the Support page. Placeholder until the mailbox exists. */
  email: string;
  /** Absolute path (under public/) to the default share image. */
  ogImage: string;
  ogAlt: string;
  nav: NavItem[];
  /** Entries with an empty url are ignored; the footer column hides when none remain. */
  socials: SocialLink[];
}

export const site: SiteConfig = {
  name: 'Temperanda',
  tagline: 'Software build with intentionality',
  description:
    'Temperanda is a small software studio making iPhone apps, Max for Live devices, and audio plugins.',
  email: 'info@temperanda.com',
  ogImage: '/og.png',
  ogAlt: 'Temperanda wordmark on a paper background',
  nav: [
    { href: '/products/', label: 'Products' },
    { href: '/about/', label: 'About' },
    { href: '/support/', label: 'Support' },
  ],
  socials: [],
};
