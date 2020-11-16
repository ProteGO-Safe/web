import React from 'react';
import { withTranslation } from 'react-i18next';
import reactStringReplace from 'react-string-replace';
import { UrlCovid, PhoneNumber, Url, NavLink } from '../index';
import { Routes } from '../../services/navigationService/routes';

const T = ({ i18nKey, t }) => {
  let translated = t(i18nKey);
  translated = reactStringReplace(translated, '[COVID-19]', i => (
    <UrlCovid key={i} />
  ));
  translated = reactStringReplace(
    translated,
    /\[PHONE\](.*?)\[\/PHONE\]/g,
    match => (
      <PhoneNumber key={match} value={match}>
        {match}
      </PhoneNumber>
    )
  );
  translated = reactStringReplace(translated, '[BR]', i => <br key={i} />);
  translated = reactStringReplace(translated, /\[B\](.*?)\[\/B\]/g, match => (
    <strong key={match}>{match}</strong>
  ));
  translated = reactStringReplace(
    translated,
    /\[URL\](.*?)\[\/URL\]/g,
    (match, i) => {
      return (
        <Url key={match + i} value={match.split('|')[1]} underlineOff>
          {match.split('|')[0]}
        </Url>
      );
    }
  );
  translated = reactStringReplace(
    translated,
    /\[ROUTE\](.*?)\[\/ROUTE\]/g,
    (match, i) => {
      const path = match.split('|')[1];

      return (
        <NavLink key={match + i} className="trans-route" to={Routes[path]}>
          {match.split('|')[0]}
        </NavLink>
      );
    }
  );
  return translated;
};

export default withTranslation()(T);
