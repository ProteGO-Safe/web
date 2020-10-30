import React from 'react';
import { withTranslation } from 'react-i18next';
import { Url } from '../index';

const UrlCovid = ({ t }) => <Url value={t('covid_href')}>COVID-19</Url>;

export default withTranslation()(UrlCovid);
