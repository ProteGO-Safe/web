import React from 'react';
import { withTranslation } from 'react-i18next';
import { Email, Url, PhoneNumber } from '../../../../components';
import {
  Annotation,
  Paragraph,
  Title,
  ListNumber,
  ListItem
} from './RegulationsContent.styled';

const RegulationsContent = ({ t }) => (
  <>
    <Paragraph>
      <strong>{t('regulations_content_text1')}</strong>
    </Paragraph>
    <Annotation>§1.</Annotation>
    <Title>{t('regulations_content_text2')}</Title>
    <ListNumber>
      <ListItem>
        {t('regulations_content_text3')}
        <strong>{t('regulations_content_text4')}</strong>
        {t('regulations_content_text5')}
      </ListItem>
      <ListItem>{t('regulations_content_text6')}</ListItem>
    </ListNumber>
    <Annotation>§2.</Annotation>
    <Title>{t('regulations_content_text7')}</Title>
    <Paragraph>{t('regulations_content_text8')}</Paragraph>
    <ListNumber>
      <ListItem>
        <strong>{t('regulations_content_text9')}</strong>
        {t('regulations_content_text10')}
      </ListItem>
      <ListItem>
        <strong>{t('regulations_content_text11')}</strong>
        {t('regulations_content_text12')}
      </ListItem>
      <ListItem>
        <strong>{t('regulations_content_text13')}</strong>
        {t('regulations_content_text14')}{' '}
        <Url value="https://www.google.com/covid19/exposurenotifications/">
          {t('regulations_content_text15')}
        </Url>{' '}
        {t('regulations_content_text89')}{' '}
        <Url value="https://developer.apple.com/documentation/exposurenotification">
          {t('regulations_content_text16')}
        </Url>{' '}
        {t('regulations_content_text90')}
      </ListItem>
      <ListItem>
        <strong>{t('regulations_content_text17')}</strong>
        {t('regulations_content_text18')}{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('regulations_content_text19')}
      </ListItem>
      <ListItem>
        <strong>{t('regulations_content_text20')}</strong>
        {t('regulations_content_text21')}
      </ListItem>
      <ListItem>
        <strong>{t('regulations_content_text22')}</strong>
        {t('regulations_content_text23')}
      </ListItem>
      <ListItem>
        <strong>{t('regulations_content_text24')}</strong>
        {t('regulations_content_text25')}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('regulations_content_text91')}
      </ListItem>
      <ListItem>
        <strong>{t('regulations_content_text26')}</strong>
        {t('regulations_content_text27')}
      </ListItem>
      <ListItem>
        <strong>{t('regulations_content_text28')}</strong>
        {t('regulations_content_text29')}
      </ListItem>
      <ListItem>
        <strong>{t('regulations_content_text30')}</strong>
        {t('regulations_content_text31')}
      </ListItem>
      <ListItem>
        <strong>{t('regulations_content_text32')}</strong>
        {t('regulations_content_text33')}{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('regulations_content_text34')}
      </ListItem>
      <ListItem>
        <strong>{t('regulations_content_text35')}</strong>
        {t('regulations_content_text36')}{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('regulations_content_text37')}
      </ListItem>
      <ListItem>
        <strong>{t('regulations_content_text38')}</strong>
        {t('regulations_content_text39')}{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('regulations_content_text40')}{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>.
      </ListItem>
      <ListItem>
        <strong>{t('regulations_content_text41')}</strong>
        {t('regulations_content_text42')}
      </ListItem>
      <ListItem>
        <strong>{t('regulations_content_text43')}</strong>
        {t('regulations_content_text44')}
      </ListItem>
      <ListItem>
        <strong>WHO </strong>
        {t('regulations_content_text45')}
      </ListItem>
    </ListNumber>
    <Annotation>§3.</Annotation>
    <Title>{t('regulations_content_text46')}</Title>
    <ListNumber>
      <ListItem>
        {t('regulations_content_text47')}{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('regulations_content_text48')}
      </ListItem>
      <ListItem>
        {t('regulations_content_text49')}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('regulations_content_text50')}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('regulations_content_text51')}
      </ListItem>
      <ListItem>
        {t('regulations_content_text52')}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('regulations_content_text92')}
      </ListItem>
      <ListItem>
        {t('regulations_content_text53')}{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('regulations_content_text54')}{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('regulations_content_text55')}{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('regulations_content_text56')}
      </ListItem>
      <ListItem>{t('regulations_content_text57')}</ListItem>
    </ListNumber>
    <Annotation>§4.</Annotation>
    <Title>{t('regulations_content_text58')}</Title>
    <ListNumber>
      <ListItem>{t('regulations_content_text59')}</ListItem>
      <ListItem>{t('regulations_content_text60')}</ListItem>
      <ListItem>{t('regulations_content_text61')}</ListItem>
    </ListNumber>
    <Annotation>§5.</Annotation>
    <Title>{t('regulations_content_text62')}</Title>
    <Paragraph>
      {t('regulations_content_text63')}
      <Url value="https://www.gnu.org/licenses/gpl-3.0.html">GPL-3.0</Url>.
    </Paragraph>
    <Annotation>§6.</Annotation>
    <Title>{t('regulations_content_text64')}</Title>
    <ListNumber>
      <ListItem>{t('regulations_content_text65')}</ListItem>
      <ListItem>{t('regulations_content_text66')}</ListItem>
      <ListItem>
        {t('regulations_content_text67')}{' '}
        <PhoneNumber>{t('regulations_content_text68')}</PhoneNumber>
        {t('regulations_content_text69')}
      </ListItem>
      <ListItem>
        {t('regulations_content_text70')}
        <PhoneNumber>{t('regulations_content_text71')}</PhoneNumber>
        {t('regulations_content_text72')}
      </ListItem>
      <ListItem>{t('regulations_content_text73')}</ListItem>
      <ListItem>{t('regulations_content_text74')}</ListItem>
    </ListNumber>
    <Annotation>§7.</Annotation>
    <Title>{t('regulations_content_text75')}</Title>
    <ListNumber>
      <ListItem>{t('regulations_content_text76')}</ListItem>
      <ListItem>{t('regulations_content_text77')}</ListItem>
    </ListNumber>
    <Annotation>§8.</Annotation>
    <Title>{t('regulations_content_text78')}</Title>
    <Paragraph>{t('regulations_content_text79')}</Paragraph>
    <Annotation>§9.</Annotation>
    <Title>{t('regulations_content_text80')}</Title>
    <Paragraph>{t('regulations_content_text81')}</Paragraph>
    <Annotation>§10.</Annotation>
    <Title>{t('regulations_content_text82')}</Title>
    <ListNumber>
      <ListItem>{t('regulations_content_text83')}</ListItem>
      <ListItem>{t('regulations_content_text84')}</ListItem>
      <ListItem>{t('regulations_content_text85')}</ListItem>
      <ListItem>{t('regulations_content_text86')}</ListItem>
      <ListItem>
        {t('regulations_content_text87')}
        <Email>{t('regulations_content_text88')}</Email>.
      </ListItem>
    </ListNumber>
  </>
);

export default withTranslation()(RegulationsContent);
