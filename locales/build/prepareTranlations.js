const fs = require('fs');

const JSON_EXT = '.json';


fs.readdir('./locales', (err, files) => {
  const resources = {};
  const languages = {};
  if (err) throw err;
  files
    .filter(fileName => fileName.endsWith(JSON_EXT))
    .forEach(fileName => {
      const lang = fileName.replace(JSON_EXT, '');
      const data = fs.readFileSync(`./locales/${fileName}`, { encoding: 'utf-8' });
      resources[lang] = { translation: JSON.parse(data) };
      languages[lang] = resources[lang].translation.language;
    });
  const resourcesWithLanguages = Object
      .keys(resources)
      .reduce((obj, item) => {
        const current = resources[item];
        return {
          ...obj,
          [item]: {
              ...current,
              languages
          }
        }
    }, {});
  const resourcesFileContent = `export const resources = ${JSON.stringify(
      resourcesWithLanguages
  )};\n`;
  fs.writeFile('./src/locales/resources.js', resourcesFileContent, err => {
    if (err) throw err;
  });
});
