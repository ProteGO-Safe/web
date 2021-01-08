import fs from 'fs';

const readTranslation = locale => {
  const jsonFile = fs.readFileSync(`../../locales/${locale}.json`, {
    encoding: 'utf-8'
  });
  return { raw: jsonFile, json: JSON.parse(jsonFile) };
};

export default readTranslation;
