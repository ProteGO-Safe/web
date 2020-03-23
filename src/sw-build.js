const { injectManifest } = require('workbox-build');

const swSrc = 'src/sw.js';
const swDest = 'build/sw.js';
injectManifest({
  swSrc,
  swDest,
  globDirectory: 'build',
  globPatterns: [
    '**\/!(service-worker|precache-manifest.*).{js,css,html,png,svg}',
  ]
  // Other configuration options...
}).then(({ count, size }) => {
  console.log(
    `Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`
  );
});
