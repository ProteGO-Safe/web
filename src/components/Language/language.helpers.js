// https://github.com/ekwonye-richard/react-flags-select/blob/master/src/countries.js
const isoCodeWithLibraryCode = {
  UK: 'UA',
  PL: 'PL'
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
