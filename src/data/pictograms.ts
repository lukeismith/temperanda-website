/**
 * Path data for Pictogram.astro. `stroke: true` draws the path as a 2px outline;
 * otherwise it is filled. Kept in a .ts file so the content schema can list the names.
 */
export const PICTOGRAMS = {
  // Up For Air (filled)
  bell: {
    d: 'M12 2 a1.5 1.5 0 0 1 1.5 1.5 V4 a6 6 0 0 1 4.5 5.8 V15 l2 2.5 v1 H4 v-1 L6 15 V9.8 A6 6 0 0 1 10.5 4 V3.5 A1.5 1.5 0 0 1 12 2 Z M10 20 h4 a2 2 0 0 1 -4 0 Z',
  },
  check: { d: 'M4 12.5 l5 5 L20 6.5 l1.5 1.5 L9 20.5 l-6.5 -6.5 Z' },
  checkpoint: {
    d: 'M3 3 h7 v7 H3 Z M5 5 v3 h3 V5 Z M14 3 h7 v7 h-7 Z M16 5 v3 h3 V5 Z M3 14 h7 v7 H3 Z M5 16 v3 h3 v-3 Z M14 14 h3 v3 h-3 Z M18 14 h3 v3 h-3 Z M14 18 h3 v3 h-3 Z M18 18 h3 v3 h-3 Z',
  },
  focus: {
    d: 'M9 2 h6 v2 H9 Z M12 5 a8 8 0 1 0 0.01 0 Z M12 7.2 a5.8 5.8 0 1 1 -0.01 0 Z M11 8.5 h2 v4.5 h-2 Z',
  },
  health: {
    d: 'M12 21 s-8 -5.5 -8 -11 a4.5 4.5 0 0 1 8 -2.8 a4.5 4.5 0 0 1 8 2.8 c0 5.5 -8 11 -8 11 Z',
  },
  hole: {
    d: 'M12 5 a6 6 0 0 1 6 6 v3.5 H6 V11 a6 6 0 0 1 6 -6 Z M9.2 6.5 q-1.4 -4.8 0.6 -5.2 q1 1.8 0.9 4.7 Z M14.8 6.5 q1.4 -4.8 -0.6 -5.2 q-1 1.8 -0.9 4.7 Z M2 16 h20 c0 3 -5 4.5 -10 4.5 S2 19 2 16 Z',
  },
  note: {
    d: 'M5 3 h14 v18 l-3 -2 -4 2 -4 -2 -3 2 Z M8 8 h8 v1.5 H8 Z M8 11.5 h8 V13 H8 Z M8 15 h5 v1.5 H8 Z',
  },
  sun: {
    d: 'M12 6.5 a5.5 5.5 0 1 0 0 11 a5.5 5.5 0 0 0 0 -11 Z M11 1 h2 v3.5 h-2 Z M11 19.5 h2 V23 h-2 Z M1 11 h3.5 v2 H1 Z M19.5 11 H23 v2 h-3.5 Z M4.2 3 l2.5 2.5 -1.4 1.4 L2.8 4.4 Z M17.3 16.1 l2.5 2.5 -1.4 1.4 -2.5 -2.5 Z M19.8 3 l1.4 1.4 -2.5 2.5 -1.4 -1.4 Z M6.7 16.1 l1.4 1.4 -2.5 2.5 -1.4 -1.4 Z',
  },
  zone: {
    d: 'M12 22 s-7 -7.4 -7 -12.2 a7 7 0 0 1 14 0 C19 14.6 12 22 12 22 Z M12 12.6 a2.8 2.8 0 1 0 0 -5.6 a2.8 2.8 0 0 0 0 5.6 Z',
  },
  // Generic (outlined)
  book: { d: 'M4 19.5 V5 a2 2 0 0 1 2 -2 h14 v14 H6 a2 2 0 0 0 -2 2.5 a2 2 0 0 0 2 1.5 h14 M8 7 h8 M8 11 h6', stroke: true },
  code: { d: 'M8 7 l-5 5 5 5 M16 7 l5 5 -5 5 M14 4 l-4 16', stroke: true },
  import: { d: 'M12 3 v12 M7 10 l5 5 5 -5 M4 15 v4 a1 1 0 0 0 1 1 h14 a1 1 0 0 0 1 -1 v-4', stroke: true },
  pulse: { d: 'M2 12 h4 l2 -6 4 12 3 -9 2 3 h5', stroke: true },
  stack: { d: 'M12 2 L2 7 l10 5 10 -5 Z M2 12 l10 5 10 -5 M2 17 l10 5 10 -5', stroke: true },
} satisfies Record<string, { d: string; stroke?: boolean }>;

export type PictogramName = keyof typeof PICTOGRAMS;
export const PICTOGRAM_NAMES = Object.keys(PICTOGRAMS) as [PictogramName, ...PictogramName[]];
