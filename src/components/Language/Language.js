import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactFlagsSelect from 'react-flags-select';
import * as Styled from './Language.styled';
import { convertToIso, convertToLibraryCode, prepareLanguagesCustomLabels, prepareLanguages } from './language.helpers';

const Language = ({ customLabels, defaultLang, languages, onSelect }) => {
  const myInput = useRef();

  const lang = convertToLibraryCode(defaultLang);

  useEffect(() => {
    myInput.current.updateSelected(lang);
  }, [myInput, lang]);

  const changeLanguage = code => {
    onSelect(convertToIso(code));
  };

  return (
    <Styled.Language data-cy="language-select-wrapper" data-lang={lang}>
      <ReactFlagsSelect
        ref={myInput}
        countries={prepareLanguages(languages)}
        customLabels={prepareLanguagesCustomLabels(customLabels)}
        defaultCountry={lang}
        onSelect={changeLanguage}
      />
    </Styled.Language>
  );
};

Language.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  customLabels: PropTypes.object.isRequired,
  defaultLang: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  languages: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Language;
