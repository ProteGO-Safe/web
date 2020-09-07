import React from 'react';
import { withTranslation } from 'react-i18next';
import { Collapse, Url } from '../../../../../../components';

const NoRisk = ({ t }) => (
  <>
    <Collapse title={t('no_risk_text8')}>
      <p>
        {t('no_risk_text1')}{' '}
        <Url value="https://gis.gov.pl/zdrowie/zasady-prawidlowego-mycia-rak/">
          {t('no_risk_text2')}
        </Url>{' '}
        {t('no_risk_text9')}
      </p>
    </Collapse>
    <Collapse title={t('no_risk_text10')}>
      <p>{t('no_risk_text3')}</p>
    </Collapse>
    <Collapse title={t('no_risk_text11')}>
      <p>{t('no_risk_text4')}</p>
    </Collapse>
    <Collapse title={t('no_risk_text12')}>
      <p>{t('no_risk_text5')}</p>
    </Collapse>
    <Collapse title={t('no_risk_text13')}>
      <p>{t('no_risk_text6')}</p>
    </Collapse>
    <Collapse title={t('no_risk_text14')}>
      <p>{t('no_risk_text7')}</p>
    </Collapse>
  </>
);

export default withTranslation()(NoRisk);
