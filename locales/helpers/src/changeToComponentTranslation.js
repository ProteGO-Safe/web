import fs from 'fs';
import reactStringReplace from 'react-string-replace';
import findInDir from './findInDir/index.js';

findInDir('../../src/', /\.(js)$/)
  .map(fileName => {
    const data = fs.readFileSync(fileName, { encoding: 'utf-8' });
    return { fileName, data };
  })
  .map(({ fileName, data }) => {
    let replaced = data;
    replaced = reactStringReplace(replaced, />{t\('(.*?)'\)}/g, (match, i) => {
      return `><T i18nKey="${match}"/>`;
    });
    replaced = reactStringReplace(replaced, /={t\('(.*?)'\)}/g, (match, i) => {
      return `={<T i18nKey="${match}"/>}`;
    });
    replaced = reactStringReplace(replaced, /> {t\('(.*?)'\)}/g, (match, i) => {
      return `><T i18nKey="${match}"/>`;
    });
    replaced = reactStringReplace(replaced, /: t\('(.*?)'\)/g, (match, i) => {
      return `: <T i18nKey="${match}"/>`;
    });
    replaced = reactStringReplace(replaced, /={t\((.*?)\)}/g, (match, i) => {
      return `={<T i18nKey={${match}}/>}`;
    });
    replaced = reactStringReplace(replaced, / = t\('(.*?)'\)/g, (match, i) => {
      return `= <T i18nKey="${match}"/>`;
    });
    replaced = reactStringReplace(replaced, /{t\('(.*?)'\)}/g, (match, i) => {
      return `<T i18nKey="${match}"/>`;
    });
    replaced = reactStringReplace(replaced, />{t\((.*?)\)}/g, (match, i) => {
      return `><T i18nKey={${match}}/>`;
    });
    replaced = reactStringReplace(replaced, /withTranslation\(\)\((.*?)\)/g, (match, i) => {
      return match;
    });
    replaced = reactStringReplace(replaced, /({ t })/g, (match, i) => {
      return ``;
    });
    replaced = reactStringReplace(replaced, /(, t }\))/g, (match, i) => {
      return ` })`;
    });

    replaced = reactStringReplace(replaced, /(import { withTranslation } from 'react-i18next';\n)/g, (match, i) => {
      return ``;
    });
    return { fileName, data: replaced.join('') };
  })
  .forEach(({ fileName, data }) => {
    console.log(fileName);
    fs.writeFileSync(fileName, data);
  });
