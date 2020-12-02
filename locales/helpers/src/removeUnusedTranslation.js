import fs from 'fs';
import findInDir from './findInDir/index.js';
import readTranslation from './readTranslation/index.js';
import writeTranslation from './writeTranslation/index.js';

const allFiles = findInDir('./src/', /\.(js|json)$/)
  .filter(value => value !== 'src/locales/resources.js')
  .map(fileName => {
    const data = fs.readFileSync(fileName, { encoding: 'utf-8' });
    return data;
  });

const { json: contentPl } = readTranslation('pl');
const { json: contentEn } = readTranslation('en');
const { json: contentUk } = readTranslation('uk');

const notExistedKeys = Object.entries(contentPl)
  .map(entry => {
    const [key] = entry;
    return key;
  })
  .filter(key => key !== key.toUpperCase())
  .filter(key => !allFiles.some(value => value.includes(`'${key}'`) || value.includes(`"${key}"`)));

notExistedKeys.forEach(value => {
  delete contentPl[value];
  delete contentEn[value];
  delete contentUk[value];
});

writeTranslation('pl', contentPl);
writeTranslation('en', contentEn);
writeTranslation('uk', contentUk);

// console.log(JSON.stringify(notExistedKeys));
// console.log('-----------');
// console.log(JSON.stringify(allKeys));
