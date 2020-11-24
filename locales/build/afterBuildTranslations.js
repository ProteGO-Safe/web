const fs = require('fs');

const resourcesFileContent = `export const resources = {};\n// Don't change this file\n`;
fs.writeFile('./src/locales/resources.js', resourcesFileContent, err => {
  if (err) throw err;
});
