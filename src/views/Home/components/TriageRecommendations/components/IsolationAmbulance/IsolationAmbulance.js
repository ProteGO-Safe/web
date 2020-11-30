import React from 'react';
import { withTranslation } from 'react-i18next';
import { Collapse, T } from '../../../../../../components';

const IsolationAmbulance = ({ t }) => (
  <>
    <Collapse title={t('isolation_ambulance_text22')}>
      <p>
        <T i18nKey="isolation_ambulance_text1" />
      </p>
      <p>{t('isolation_ambulance_text3')}</p>
      <p>
        <T i18nKey="isolation_ambulance_text4" />
      </p>
    </Collapse>
    <Collapse title={t('isolation_ambulance_text23')}>
      <p>{t('isolation_ambulance_text6')}</p>
      <p>{t('isolation_ambulance_text7')}</p>
      <p>
        <T i18nKey="isolation_ambulance_text8" />
      </p>
      <p>
        <T i18nKey="isolation_ambulance_text9" />
      </p>
    </Collapse>
    <Collapse title={t('isolation_ambulance_text24')}>
      <p>{t('isolation_ambulance_text14')}</p>
      <p>
        <T i18nKey="isolation_ambulance_text15" />
      </p>
    </Collapse>
    <Collapse title={t('isolation_ambulance_text25')}>
      <p>{t('isolation_ambulance_text16')}</p>
      <ul>
        <li>
          <T i18nKey="isolation_ambulance_text17" />
        </li>
        <li>{t('isolation_ambulance_text19')}</li>
        <li>{t('isolation_ambulance_text20')}</li>
        <li>{t('isolation_ambulance_text21')}</li>
      </ul>
    </Collapse>
  </>
);

export default withTranslation()(IsolationAmbulance);
