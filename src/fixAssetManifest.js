const fs = require('fs');
const path = require('path');

const assetManifest = path.join(__dirname, '../build/asset-manifest.json');

fs.readFile(assetManifest, { encoding: 'utf-8' }, (err, data) => {
  const updatedData = data
    .split('\n')
    .filter(line => !line.includes('service-worker'))
    .filter(line => !line.includes('precache-manifest'))
    .join('\n');

  fs.writeFile(assetManifest, updatedData, err => {
    if (err) throw err;
    console.log('Successfully updated the file asset-manifest.json');
  });
});
