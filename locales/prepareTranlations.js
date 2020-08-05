const fs = require('fs');
const path = require('path');

const JSON_EXT = '.json';

const localesDir = path.join(__dirname, '../locales');
const resourcesFile = path.join(__dirname, '../src/locales/resources.js');

fs.readdir(localesDir, (err, files) => {
  const resources = {};
  if (err) throw err;
  files
    .filter(fileName => fileName.endsWith(JSON_EXT))
    .forEach(fileName => {
      const lang = fileName.replace(JSON_EXT, '');
      const translateFile = path.join(__dirname, `../locales/${fileName}`);
      const data = fs.readFileSync(translateFile, { encoding: 'utf-8' });
      resources[lang] = { translation: JSON.parse(data) };
    });
  const resourcesFileContent = `export const resources = ${JSON.stringify(
    resources
  )};\n`;
  fs.writeFile(resourcesFile, resourcesFileContent, err => {
    if (err) throw err;
  });
});
