import React from 'react';
import { withTranslation } from 'react-i18next';
import { Collapse, PhoneNumber, Url } from '../../../../../../components';

const CallDoctor = ({ t }) => (
  <>
    <Collapse title={t('call_doctor_text30')}>
      <p>{t('call_doctor_text1')}</p>
      <p>
        {t('call_doctor_text2')}{' '}
        <Url value="https://www.nfz.gov.pl/aktualnosci/aktualnosci-oddzialow/gdzie-sie-leczyc-w-czasie-epidemii-koronawirusa,401.html">
          {t('call_doctor_text3')}
        </Url>{' '}
        {t('call_doctor_text31')}
      </p>
      <p>{t('call_doctor_text4')}</p>
      <ul>
        <li>{t('call_doctor_text5')}</li>
        <li>{t('call_doctor_text6')}</li>
        <li>{t('call_doctor_text7')}</li>
        <li>{t('call_doctor_text8')}</li>
      </ul>
      <p>{t('call_doctor_text9')}</p>
      <ul>
        <li>{t('call_doctor_text10')}</li>
        <li>{t('call_doctor_text11')}</li>
        <li>{t('call_doctor_text12')}</li>
      </ul>
      <p>{t('call_doctor_text13')}</p>
    </Collapse>
    <Collapse title={t('call_doctor_text32')}>
      <ul>
        <li>
          <div className="bold">{t('call_doctor_text14')}</div>
          <div className="normal">
            {t('call_doctor_text15')}{' '}
            <Url value="https://gis.gov.pl/zdrowie/zasady-prawidlowego-mycia-rak/">
              {t('call_doctor_text16')}
            </Url>{' '}
            {t('call_doctor_text33')}
          </div>
        </li>
        <li>
          <div className="bold">{t('call_doctor_text17')}</div>
          <div className="normal">{t('call_doctor_text18')}</div>
        </li>
        <li>
          <div className="bold">{t('call_doctor_text19')}</div>
          <div className="normal">{t('call_doctor_text20')}</div>
        </li>
        <li>
          <div className="bold">{t('call_doctor_text21')}</div>
          <div className="normal">{t('call_doctor_text22')}</div>
        </li>
        <li>
          <div className="bold">{t('call_doctor_text23')}</div>
          <div className="normal">{t('call_doctor_text24')}</div>
        </li>
      </ul>
    </Collapse>
    <Collapse title={t('call_doctor_text34')}>
      <p>
        {t('call_doctor_text25')}{' '}
        <PhoneNumber>{t('call_doctor_text26')}</PhoneNumber>{' '}
        {t('call_doctor_text27')}{' '}
        <PhoneNumber>{t('call_doctor_text28')}</PhoneNumber>{' '}
        {t('call_doctor_text29')}
      </p>
    </Collapse>
  </>
);

export default withTranslation()(CallDoctor);
