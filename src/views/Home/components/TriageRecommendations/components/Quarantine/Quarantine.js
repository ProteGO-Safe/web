import React from 'react';
import { withTranslation } from 'react-i18next';
import { Collapse, PhoneNumber, Url } from '../../../../../../components';

const Quarantine = ({ t }) => (
  <>
    <Collapse title={t('quarantine_text45')}>
      <p>{t('quarantine_text1')}</p>
    </Collapse>
    <Collapse title={t('quarantine_text46')}>
      <ul>
        <li>{t('quarantine_text2')}</li>
        <li>{t('quarantine_text3')}</li>
        <li>{t('quarantine_text4')}</li>
        <li>{t('quarantine_text5')}</li>
        <li>{t('quarantine_text6')}</li>
        <li>{t('quarantine_text7')}</li>
        <li>{t('quarantine_text8')}</li>
      </ul>
    </Collapse>
    <Collapse title={t('quarantine_text47')}>
      <ul>
        <li>
          <div className="bold">{t('quarantine_text9')}</div>
          <div className="normal">
            {t('quarantine_text10')}{' '}
            <Url value="https://gis.gov.pl/zdrowie/zasady-prawidlowego-mycia-rak/">
              {t('quarantine_text11')}
            </Url>{' '}
            {t('quarantine_text48')}
          </div>
        </li>
        <li>
          <div className="bold">{t('quarantine_text12')}</div>
          <div className="normal">{t('quarantine_text13')}</div>
        </li>
        <li>
          <div className="bold">{t('quarantine_text14')}</div>
          <div className="normal">{t('quarantine_text15')}</div>
        </li>
        <li>
          <div className="bold">{t('quarantine_text16')}</div>
          <div className="normal">{t('quarantine_text17')}</div>
        </li>
        <li>
          <div className="bold">{t('quarantine_text18')}</div>
          <div className="normal">{t('quarantine_text19')}</div>
        </li>
        <li>
          <div className="bold">{t('quarantine_text20')}</div>
        </li>
        <li>
          <div className="bold">{t('quarantine_text21')}</div>
          <div className="normal">{t('quarantine_text22')}</div>
        </li>
      </ul>
    </Collapse>
    <Collapse title={t('quarantine_text49')}>
      <p>{t('quarantine_text23')}</p>
      <ul>
        <li>{t('quarantine_text24')}</li>
        <li>{t('quarantine_text25')}</li>
        <li>{t('quarantine_text26')}</li>
      </ul>
      <p>{t('quarantine_text27')}</p>
      <p>
        <Url value="https://pacjent.gov.pl/podejrzewasz-ze-masz-koronawirusa#znajdz-stacje-sanitarno-epidemiologiczna">
          {t('quarantine_text28')}
        </Url>{' '}
        <Url value="https://pacjent.gov.pl/podejrzewasz-ze-masz-koronawirusa#szpitale-z-oddzialami-zakaznymi">
          {t('quarantine_text29')}
        </Url>
      </p>
      <p>{t('quarantine_text30')}</p>
      <p>
        {t('quarantine_text31')}{' '}
        <PhoneNumber>{t('quarantine_text32')}</PhoneNumber>{' '}
        {t('quarantine_text33')}{' '}
        <PhoneNumber>{t('quarantine_text34')}</PhoneNumber>{' '}
        {t('quarantine_text35')}{' '}
      </p>
    </Collapse>
    <Collapse title={t('quarantine_text50')}>
      <p>{t('quarantine_text36')}</p>
      <ul>
        <li>
          <p>
            <strong>{t('quarantine_text37')}</strong>
          </p>
          <p>{t('quarantine_text38')}</p>
        </li>
        <li>
          <p>
            <strong>{t('quarantine_text39')}</strong>
          </p>
          <p>{t('quarantine_text40')}</p>
        </li>
        <li>
          <p>
            <strong>{t('quarantine_text41')}</strong>
          </p>
          <p>{t('quarantine_text42')}</p>
        </li>
        <li>
          <p>
            <strong>{t('quarantine_text43')}</strong>
          </p>
          <p>{t('quarantine_text44')}</p>
        </li>
      </ul>
    </Collapse>
  </>
);

export default withTranslation()(Quarantine);
