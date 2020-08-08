import React from 'react';
import PropTypes from 'prop-types';
import ReactFlagsSelect from 'react-flags-select';
import * as Styled from './Language.styled';

const Language = ({ customLabels, defaultLang, languages, onSelect }) => (
  <Styled.Language>
    <ReactFlagsSelect
      countries={languages}
      customLabels={customLabels}
      defaultCountry={defaultLang}
      onSelect={onSelect}
    />
  </Styled.Language>
);

Language.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  customLabels: PropTypes.object.isRequired,
  defaultLang: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  languages: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Language;
