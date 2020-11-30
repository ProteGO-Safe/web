import fs from 'fs';

const LABEL_PREFIX = 'country_name';

const translatedPhases = {};

const jsonFile = fs.readFileSync(
  './src/services/diagnosisLogic/locations.json',
  { encoding: 'utf-8' }
);

const content = JSON.parse(jsonFile);

const generateTextTranslationLabel = (code, text) => {
  const label = `${LABEL_PREFIX}_${code.toLowerCase()}`;
  translatedPhases[label] = text;
  return label;
};

const translatedContent = content.map(item => {
  const { extras, name } = item;
  const { country_iso_code } = extras;

  return {
    ...item,
    name: generateTextTranslationLabel(country_iso_code, name)
  };
});

console.log(JSON.stringify(translatedPhases));
console.log('-----------');
console.log(JSON.stringify(translatedContent));
