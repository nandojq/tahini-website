import sharp from 'sharp';
import { rename } from 'fs/promises';
import { join } from 'path';

const dir = 'public/images/about';

// Target: warm analog/film look, 900×900 square crop.
// Reference aesthetic: arne.jpg (best exposed, warm film look).
//
// Per-image notes:
//  fer.jpg      – digital camera, saturated, needs desaturation + film warmth
//  ana.jpg      – overexposed window behind her, needs ~30% brightness cut
//  arne.jpg     – reference, minor touch-up only
//  georgios.jpg – very underexposed + strong teal shadow cast
//  leo.jpg      – nice but slightly bright flare, minor reduction

const images = [
  {
    // Fer: current 900x900 crop is too guitar-heavy, Fer is cut to the right edge.
    // Extract the right 55% (where Fer actually is) and scale up.
    file: 'fer.jpg',
    extract: { left: 395, top: 0, width: 505, height: 900 },
    resizeTo: 900,
    modulate: null,
    linear: null,
  },
  {
    // Georgios: too bright after last pass — reduce luminance.
    file: 'georgios.jpg',
    extract: null,
    resizeTo: null,
    modulate: { brightness: 0.78 },
    linear: null,
  },
];

for (const img of images) {
  const input = join(dir, img.file);
  const tmp = input + '.processing';

  let pipe = sharp(input);

  if (img.extract) {
    pipe = pipe.extract(img.extract).resize(img.resizeTo, img.resizeTo, { fit: 'cover' });
  } else if (img.cropPosition) {
    pipe = pipe.resize(900, 900, { fit: 'cover', position: img.cropPosition });
  }

  if (img.modulate) pipe = pipe.modulate(img.modulate);
  if (img.linear) pipe = pipe.linear(img.linear.a, img.linear.b);

  await pipe.jpeg({ quality: 88, mozjpeg: true }).toFile(tmp);
  await rename(tmp, input);
  console.log(`✓ ${img.file}`);
}

console.log('Done. All member photos processed to 900×900.');
