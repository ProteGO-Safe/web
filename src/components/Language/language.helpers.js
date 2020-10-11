// https://github.com/ekwonye-richard/react-flags-select/blob/master/src/countries.js
import { AVAILABLE_LANGUAGES } from '../../constants';

const isoCodeWithLibraryCode = {
  [AVAILABLE_LANGUAGES.uk.toUpperCase()]: 'UA',
  [AVAILABLE_LANGUAGES.pl.toUpperCase()]: 'PL',
  [AVAILABLE_LANGUAGES.en.toUpperCase()]: 'GB'
};

export const prepareLanguages = languages =>
  languages.map(language => isoCodeWithLibraryCode[language]);

export const convertToIso = code => {
  return Object.keys(isoCodeWithLibraryCode).find(value => {
    const libraryCode = isoCodeWithLibraryCode[value];
    return libraryCode === code;
  });
};

export const convertToLibraryCode = code => {
  return isoCodeWithLibraryCode[code];
};

export const prepareLanguagesCustomLabels = customLabels => {
  return Object.keys(customLabels)
    .map(key => {
      const newKey = isoCodeWithLibraryCode[key] || key;
      return { [newKey]: customLabels[key] };
    })
    .reduce((obj, item) => {
      return { ...obj, ...item };
    }, {});
};
