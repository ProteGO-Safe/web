import React from 'react';
import { withTranslation } from 'react-i18next';
import { Collapse, PhoneNumber, Url } from '../../../../../../components';

const IsolationCall = ({ t }) => (
  <>
    <Collapse title={t('isolation_call_text22')}>
      <p>
        <Url value="https://pacjent.gov.pl/podejrzewasz-ze-masz-koronawirusa#znajdz-stacje-sanitarno-epidemiologiczna">
          {t('isolation_call_text1')}
        </Url>{' '}
        <Url value="https://pacjent.gov.pl/podejrzewasz-ze-masz-koronawirusa#szpitale-z-oddzialami-zakaznymi">
          {t('isolation_call_text2')}
        </Url>
      </p>
      <p>{t('isolation_call_text3')}</p>
      <p>
        {t('isolation_call_text4')}{' '}
        <Url value="https://bit.ly/teleporady-lista">
          {t('isolation_call_text5')}
        </Url>
      </p>
    </Collapse>
    <Collapse title={t('isolation_call_text23')}>
      <p>{t('isolation_call_text6')}</p>
      <p>{t('isolation_call_text7')}</p>
      <p>
        <Url value="https://pacjent.gov.pl/podejrzewasz-ze-masz-koronawirusa#szpitale-z-oddzialami-zakaznymi">
          {t('isolation_call_text8')}
        </Url>
      </p>
      <p>
        {t('isolation_call_text9')}
        <PhoneNumber>{t('isolation_call_text10')}</PhoneNumber>
        {t('isolation_call_text11')}{' '}
        <PhoneNumber>{t('isolation_call_text12')}</PhoneNumber>
        {t('isolation_call_text13')}
      </p>
    </Collapse>
    <Collapse title={t('isolation_call_text24')}>
      <p>{t('isolation_call_text14')}</p>
      <p>
        <Url value="https://pacjent.gov.pl/bez-maski-ani-rusz#Jak-zakladac-i-zdejmowac-maske">
          {t('isolation_call_text15')}
        </Url>
      </p>
    </Collapse>
    <Collapse title={t('isolation_call_text25')}>
      <p>{t('isolation_call_text16')}</p>
      <ul>
        <li>
          {t('isolation_call_text17')}{' '}
          <Url value="https://gis.gov.pl/zdrowie/zasady-prawidlowego-mycia-rak/">
            {t('isolation_call_text18')}
          </Url>{' '}
          {t('isolation_call_text26')}
        </li>
        <li>{t('isolation_call_text19')}</li>
        <li>{t('isolation_call_text20')}</li>
        <li>{t('isolation_call_text21')}</li>
      </ul>
    </Collapse>
  </>
);

export default withTranslation()(IsolationCall);
