import React from 'react';
import { withTranslation } from 'react-i18next';
import reactStringReplace from 'react-string-replace';
import { UrlCovid } from '../UrlCovid';

const T = ({ i18nKey, t }) => {
  const translated = t(i18nKey);
  return reactStringReplace(translated, '[COVID-19]', () => <UrlCovid />);
};

export default withTranslation()(T);
