import React from 'react';
import { withTranslation } from 'react-i18next';
import { Collapse, PhoneNumber, Url } from '../../../../../../components';

const IsolationAmbulance = ({ t }) => (
  <>
    <Collapse title={t('isolation_ambulance_text22')}>
      <p>
        <Url value="https://pacjent.gov.pl/podejrzewasz-ze-masz-koronawirusa#znajdz-stacje-sanitarno-epidemiologiczna">
          {t('isolation_ambulance_text1')}
        </Url>{' '}
        <Url value="https://pacjent.gov.pl/podejrzewasz-ze-masz-koronawirusa#szpitale-z-oddzialami-zakaznymi">
          {t('isolation_ambulance_text2')}
        </Url>
      </p>
      <p>{t('isolation_ambulance_text3')}</p>
      <p>
        {t('isolation_ambulance_text4')}{' '}
        <Url value="https://bit.ly/teleporady-lista">
          {t('isolation_ambulance_text5')}
        </Url>
      </p>
    </Collapse>
    <Collapse title={t('isolation_ambulance_text23')}>
      <p>{t('isolation_ambulance_text6')}</p>
      <p>{t('isolation_ambulance_text7')}</p>
      <p>
        <Url value="https://pacjent.gov.pl/podejrzewasz-ze-masz-koronawirusa#szpitale-z-oddzialami-zakaznymi">
          {t('isolation_ambulance_text8')}
        </Url>
      </p>
      <p>
        {t('isolation_ambulance_text9')}
        <PhoneNumber>{t('isolation_ambulance_text10')}</PhoneNumber>
        {t('isolation_ambulance_text11')}{' '}
        <PhoneNumber>{t('isolation_ambulance_text12')}</PhoneNumber>
        {t('isolation_ambulance_text13')}
      </p>
    </Collapse>
    <Collapse title={t('isolation_ambulance_text24')}>
      <p>{t('isolation_ambulance_text14')}</p>
      <p>
        <Url value="https://pacjent.gov.pl/bez-maski-ani-rusz#Jak-zakladac-i-zdejmowac-maske">
          {t('isolation_ambulance_text15')}
        </Url>
      </p>
    </Collapse>
    <Collapse title={t('isolation_ambulance_text25')}>
      <p>{t('isolation_ambulance_text16')}</p>
      <ul>
        <li>
          {t('isolation_ambulance_text17')}{' '}
          <Url value="https://gis.gov.pl/zdrowie/zasady-prawidlowego-mycia-rak/">
            {t('isolation_ambulance_text18')}
          </Url>{' '}
          {t('isolation_ambulance_text26')}
        </li>
        <li>{t('isolation_ambulance_text19')}</li>
        <li>{t('isolation_ambulance_text20')}</li>
        <li>{t('isolation_ambulance_text21')}</li>
      </ul>
    </Collapse>
  </>
);

export default withTranslation()(IsolationAmbulance);
