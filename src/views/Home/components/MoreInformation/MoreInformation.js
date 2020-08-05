import React from 'react';
import { withTranslation } from 'react-i18next';

const MoreInformation = ({ t }) => (
  <div className="more-information">
    <h4>{t('home_more_information_text1')}</h4>
    <p>{t('home_more_information_text2')}</p>
    <small>{t('home_more_information_text3')}</small>
  </div>
);

export default withTranslation()(MoreInformation);
