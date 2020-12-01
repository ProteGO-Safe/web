import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import reactStringReplace from 'react-string-replace';
import { UrlCovid, PhoneNumber, Url, NavLink, Email } from '../index';
import { PrivacyPolicyModal, RegulationsModal } from '../Modals';
import { Routes } from '../../services/navigationService/routes';

const T = ({ i18nKey, t, variables }) => {
  let translated = t(i18nKey, variables);
  translated = reactStringReplace(translated, /\[PP\](.*?)\[\/PP\]/g, (match, i) => (
    <PrivacyPolicyModal key={match + i} text={match} />
  ));
  translated = reactStringReplace(translated, /\[REG\](.*?)\[\/REG\]/g, (match, i) => (
    <RegulationsModal key={match + i} text={match} />
  ));
  translated = reactStringReplace(translated, '[COVID-19]', (match, i) => <UrlCovid key={match + i} />);
  translated = reactStringReplace(translated, /\[PHONE\](.*?)\[\/PHONE\]/g, match => (
    <PhoneNumber key={match} value={match}>
      {match}
    </PhoneNumber>
  ));
  translated = reactStringReplace(translated, '[BR]', (match, i) => <br key={match + i} />);
  translated = reactStringReplace(translated, /\[B\](.*?)\[\/B\]/g, match => <strong key={match}>{match}</strong>);
  translated = reactStringReplace(translated, /\[EMAIL\](.*?)\[\/EMAIL\]/g, match => <Email>{match}</Email>);
  translated = reactStringReplace(translated, /\[URL\](.*?)\[\/URL\]/g, (match, i) => {
    return (
      <Url key={match + i} value={match.split('|')[1]} underlineOff>
        {match.split('|')[0]}
      </Url>
    );
  });
  translated = reactStringReplace(translated, /\[ROUTE\](.*?)\[\/ROUTE\]/g, (match, i) => {
    const path = match.split('|')[1];

    return (
      <NavLink key={match + i} className="trans-route" to={Routes[path]}>
        {match.split('|')[0]}
      </NavLink>
    );
  });
  return translated;
};

T.defaultProps = {
  variables: {}
};

T.propTypes = {
  i18nKey: PropTypes.string.isRequired,
  variables: PropTypes.object
};

export default withTranslation()(T);
