import fs from 'fs';
import reactStringReplace from 'react-string-replace';
import readTranslation from './readTranslation/index.js';
import { writeTranslationAsString } from './writeTranslation/index.js';

const fileName = '../../src/views/Regulations/component/RegulationsContent/RegulationsContent.js';
let data = fs.readFileSync(fileName, { encoding: 'utf-8' });

const getStringBetween = (string, character) => {
  return string.substring(string.indexOf(character) + 1, string.lastIndexOf(character));
};

let { raw: contentPl } = readTranslation('pl');
let { raw: contentEn } = readTranslation('en');
let { raw: contentUk } = readTranslation('uk');

data = reactStringReplace(data, /<strong>(.*?)<\/strong>/gs, (match, i) => {
  const tComponent = match.trim();
  const key = getStringBetween(tComponent, `"`);
  console.log(key);
  const regex = new RegExp(`"${key}": "(.*?)"`, 'g');
  contentPl = reactStringReplace(contentPl, regex, (match_, i) => {
    return `"${key}": "[B]${match_}[/B]"`;
  });
  contentEn = reactStringReplace(contentEn, regex, (match_, i) => {
    return `"${key}": "[B]${match_}[/B]"`;
  });
  contentUk = reactStringReplace(contentUk, regex, (match_, i) => {
    return `"${key}": "[B]${match_}[/B]"`;
  });

  return tComponent;
});

data = reactStringReplace(data, /<T i18nKey="(.*?)" \/> <UrlCovid \/>/g, (match, i) => {
  const key = match.trim();
  // const key = getStringBetween(tComponent, `"`);
  // console.log(key);
  const regex = new RegExp(`"${key}": "(.*?)"`, 'g');
  contentPl = reactStringReplace(contentPl, regex, (match_, i) => {
    return `"${key}": "${match_} [COVID-19]"`;
  });
  contentEn = reactStringReplace(contentEn, regex, (match_, i) => {
    return `"${key}": "${match_} [COVID-19]"`;
  });
  contentUk = reactStringReplace(contentUk, regex, (match_, i) => {
    return `"${key}": "${match_} [COVID-19]"`;
  });

  return `<T i18nKey="${key}" />`;
});

data = reactStringReplace(data, /<Url value="(.*?)<\/Url>/gs, (match, i) => {
  const url = match.substring(0, match.indexOf(`"`));
  let key = '';
  const ignore = reactStringReplace(match, /<T i18nKey="(.*?)" \/>/g, (match_, i) => {
    key = match_;
    return match_;
  });
  const regex = new RegExp(`"${key}": "(.*?)"`, 'g');
  contentPl = reactStringReplace(contentPl, regex, (match_, i) => {
    return `"${key}": "[URL]${match_}|${url}[/URL]"`;
  });
  contentEn = reactStringReplace(contentEn, regex, (match_, i) => {
    return `"${key}": "[URL]${match_}|${url}[/URL]"`;
  });
  contentUk = reactStringReplace(contentUk, regex, (match_, i) => {
    return `"${key}": "[URL]${match_}|${url}[/URL]"`;
  });

  return `<T i18nKey="${key}" />`;
});

data = reactStringReplace(data, /<Email>(.*?)<\/Email>/gs, (match, i) => {
  const key = getStringBetween(match.trim(), `"`);
  const regex = new RegExp(`"${key}": "(.*?)"`, 'g');
  contentPl = reactStringReplace(contentPl, regex, (match_, i) => {
    return `"${key}": "[EMAIL]${match_}[/EMAIL]"`;
  });
  contentEn = reactStringReplace(contentEn, regex, (match_, i) => {
    return `"${key}": "[EMAIL]${match_}[/EMAIL]"`;
  });
  contentUk = reactStringReplace(contentUk, regex, (match_, i) => {
    return `"${key}": "[EMAIL]${match_}[/EMAIL]"`;
  });

  return `<T i18nKey="${key}" />`;
});

data = reactStringReplace(data, /<PhoneNumber>(.*?)<\/PhoneNumber>/gs, (match, i) => {
  const key = getStringBetween(match.trim(), `"`);
  const regex = new RegExp(`"${key}": "(.*?)"`, 'g');
  contentPl = reactStringReplace(contentPl, regex, (match_, i) => {
    return `"${key}": "[PHONE]${match_}[/PHONE]"`;
  });
  contentEn = reactStringReplace(contentEn, regex, (match_, i) => {
    return `"${key}": "[PHONE]${match_}[/PHONE]"`;
  });
  contentUk = reactStringReplace(contentUk, regex, (match_, i) => {
    return `"${key}": "[PHONE]${match_}[/PHONE]"`;
  });

  return `<T i18nKey="${key}" />`;
});

data = data.join('');

const tC = '<T ';

const array = data.split(tC);
const array2 = [];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (element.indexOf('>') === element.lastIndexOf('>')) {
    // join
    console.log(element);
    const key = getStringBetween(element, '"');
    const elementNext = array[i + 1];
    const nextKey = getStringBetween(elementNext, '"');
    const regex = new RegExp(`"${key}": "(.*?)",\n`, 'g');
    const regex2 = new RegExp(`"${nextKey}": "(.*?)"`, 'g');

    let value = '';

    contentPl = reactStringReplace(contentPl, regex, (match_, i) => {
      value = match_;
      return ``;
    });
    contentPl = reactStringReplace(contentPl, regex2, (match_, i) => {
      return `"${nextKey}": "${value} ${match_}"`;
    });
    contentUk = reactStringReplace(contentUk, regex, (match_, i) => {
      value = match_;
      return ``;
    });
    contentUk = reactStringReplace(contentUk, regex2, (match_, i) => {
      return `"${nextKey}": "${value} ${match_}"`;
    });
    contentEn = reactStringReplace(contentEn, regex, (match_, i) => {
      value = match_;
      return ``;
    });
    contentEn = reactStringReplace(contentEn, regex2, (match_, i) => {
      return `"${nextKey}": "${value} ${match_}"`;
    });

    array2.push(elementNext);
    i++;
  } else {
    array2.push(element);
  }
}

fs.writeFileSync(fileName, array2.join(tC));
writeTranslationAsString('pl', contentPl.join(''));
writeTranslationAsString('en', contentEn.join(''));
writeTranslationAsString('uk', contentUk.join(''));
