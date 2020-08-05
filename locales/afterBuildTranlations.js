const fs = require('fs');
const path = require('path');

const resourcesFile = path.join(__dirname, '../src/locales/resources.js');

const resourcesFileContent = `export const resources = {};\n// Don't change this file\n`;
fs.writeFile(resourcesFile, resourcesFileContent, err => {
  if (err) throw err;
});
