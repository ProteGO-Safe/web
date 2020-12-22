import fs from 'fs';

export const writeTranslation = (locale, contentObject) => {
  const content = JSON.stringify(contentObject);
  fs.writeFileSync(`../../locales/${locale}.json`, content);
};

export const writeTranslationAsString = (locale, content) => {
  fs.writeFileSync(`../../locales/${locale}.json`, content);
};

export default writeTranslation;
