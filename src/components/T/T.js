import React from 'react';
import { withTranslation } from 'react-i18next';
import reactStringReplace from 'react-string-replace';
import { UrlCovid } from '../UrlCovid';
import { PhoneNumber } from '../PhoneNumber';

const T = ({ i18nKey, t }) => {
  let translated = t(i18nKey);
  translated = reactStringReplace(translated, '[COVID-19]', () => <UrlCovid />);
  translated = reactStringReplace(
    translated,
    /\[PHONE\](.*?)\[\/PHONE\]/g,
    match => (
      <PhoneNumber key={match} value={match}>
        {match}
      </PhoneNumber>
    )
  );
  translated = reactStringReplace(translated, '[BR]', () => <br />);
  translated = reactStringReplace(translated, /\[B\](.*?)\[\/B\]/g, match => (
    <strong key={match}>{match}</strong>
  ));
  return translated;
};

export default withTranslation()(T);
