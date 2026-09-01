// Renders src/assets/og.svg to public/og.png at 1200x630.
// Uses sharp, which Astro already installs for image optimisation.
import sharp from 'sharp';

const info = await sharp('src/assets/og.svg', { density: 96 })
  .resize(1200, 630)
  .png()
  .toFile('public/og.png');

console.log(`public/og.png written (${info.width}x${info.height})`);
