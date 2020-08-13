import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactFlagsSelect from 'react-flags-select';
import * as Styled from './Language.styled';

const Language = ({ customLabels, defaultLang, languages, onSelect }) => {
  const myInput = useRef();

  useEffect(() => {
    myInput.current.updateSelected(defaultLang);
  }, [myInput, defaultLang]);

  return (
    <Styled.Language>
      <ReactFlagsSelect
        ref={myInput}
        countries={languages}
        customLabels={customLabels}
        defaultCountry={defaultLang}
        onSelect={onSelect}
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
