import fs from 'fs';

const writeTranslation = (locale, contentObject) => {
  const content = JSON.stringify(contentObject);
  fs.writeFileSync(`./locales/${locale}.json`, content);
};

export default writeTranslation;
