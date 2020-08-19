import React from 'react';
import { withTranslation } from 'react-i18next';
import { Email, Url } from '../../../../components';
import {
  Annotation,
  Paragraph,
  Title,
  ListAlpha,
  ListRoman,
  ListNumber,
  ListItem
} from './PrivacyPolicyContent.styled';

const PrivacyPolicyContent = ({ t }) => (
  <>
    <Paragraph>
      <strong>{t('privacy_policy_content_text1')}</strong>
    </Paragraph>
    <Paragraph>
      <strong>{t('privacy_policy_content_text2')}</strong>
    </Paragraph>
    <Paragraph>
      {t('privacy_policy_content_text3')}
      <br />
      {t('privacy_policy_content_text4')}{' '}
      <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
      {t('privacy_policy_content_text5')}
    </Paragraph>
    <Paragraph>
      <u>{t('privacy_policy_content_text6')}</u>
    </Paragraph>
    <Paragraph>{t('privacy_policy_content_text7')}</Paragraph>
    <Paragraph>{t('privacy_policy_content_text8')}</Paragraph>
    <Paragraph>
      {t('privacy_policy_content_text9')}
      <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>{' '}
      {t('privacy_policy_content_text138')}
    </Paragraph>
    <Paragraph>
      {t('privacy_policy_content_text10')}{' '}
      <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
      {t('privacy_policy_content_text11')}{' '}
      <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
      {t('privacy_policy_content_text12')}{' '}
      <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
      {t('privacy_policy_content_text13')}
    </Paragraph>
    <Paragraph>{t('privacy_policy_content_text14')}</Paragraph>
    <Annotation>§1.</Annotation>
    <Title>{t('privacy_policy_content_text15')}</Title>
    <ListNumber>
      <ListItem>{t('privacy_policy_content_text16')}</ListItem>
      <ListItem>{t('privacy_policy_content_text17')}</ListItem>
      <ListItem>{t('privacy_policy_content_text18')}</ListItem>
      <ListItem>
        {t('privacy_policy_content_text19')}
        <Email>{t('privacy_policy_content_text20')}</Email>
        {t('privacy_policy_content_text21')}{' '}
        <Email>{t('privacy_policy_content_text22')}</Email>.
      </ListItem>
      <ListItem>{t('privacy_policy_content_text23')}</ListItem>
      <ListItem>{t('privacy_policy_content_text24')}</ListItem>
    </ListNumber>
    <Annotation>§2.</Annotation>
    <Title>{t('privacy_policy_content_text25')}</Title>
    <Paragraph>{t('privacy_policy_content_text26')}</Paragraph>
    <ListNumber>
      <ListItem>
        <strong>{t('privacy_policy_content_text27')}</strong>
        {t('privacy_policy_content_text28')}
      </ListItem>
      <ListItem>
        <strong>{t('privacy_policy_content_text29')}</strong>
        {t('privacy_policy_content_text30')}
      </ListItem>
      <ListItem>
        <strong>{t('privacy_policy_content_text31')}</strong>
        {t('privacy_policy_content_text32')}
      </ListItem>
      <ListItem>
        <strong>{t('privacy_policy_content_text33')}</strong>
        {t('privacy_policy_content_text34')}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('privacy_policy_content_text139')}
      </ListItem>
      <ListItem>
        <strong>{t('privacy_policy_content_text35')}</strong>
        {t('privacy_policy_content_text36')}
      </ListItem>
      <ListItem>
        <strong>{t('privacy_policy_content_text37')}</strong>
        {t('privacy_policy_content_text38')}{' '}
        <Url value="https://www.google.com/covid19/exposurenotifications/">
          {t('privacy_policy_content_text39')}
        </Url>{' '}
        oraz{' '}
        <Url value="https://developer.apple.com/documentation/exposurenotification">
          {t('privacy_policy_content_text40')}
        </Url>{' '}
        {t('privacy_policy_content_text140')}
      </ListItem>
      <ListItem>
        <strong>{t('privacy_policy_content_text41')}</strong>
        {t('privacy_policy_content_text42')}{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('privacy_policy_content_text43')}
      </ListItem>
      <ListItem>
        <strong>{t('privacy_policy_content_text44')}</strong>
        {t('privacy_policy_content_text45')}{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('privacy_policy_content_text46')}
      </ListItem>
      <ListItem>
        <strong>{t('privacy_policy_content_text47')}</strong>
        {t('privacy_policy_content_text48')}
      </ListItem>
      <ListItem>
        <strong>{t('privacy_policy_content_text49')}</strong>
        {t('privacy_policy_content_text50')}{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('privacy_policy_content_text51')}{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>.
      </ListItem>
      <ListItem>
        <strong>{t('privacy_policy_content_text52')}</strong>
        {t('privacy_policy_content_text53')}
      </ListItem>
      <ListItem>
        <strong>{t('privacy_policy_content_text54')}</strong>
        {t('privacy_policy_content_text55')}
      </ListItem>
      <ListItem>
        <strong>{t('privacy_policy_content_text56')}</strong>
        {t('privacy_policy_content_text57')}
      </ListItem>
      <ListItem>
        <strong>{t('privacy_policy_content_text58')}</strong>
        {t('privacy_policy_content_text59')}
      </ListItem>
      <ListItem>
        <strong>WHO </strong>
        {t('privacy_policy_content_text60')}
      </ListItem>
    </ListNumber>
    <Annotation>§3.</Annotation>
    <Title>{t('privacy_policy_content_text61')}</Title>
    <ListNumber>
      <ListItem>
        {t('privacy_policy_content_text62')}
        <ListNumber>
          <ListItem>
            {t('privacy_policy_content_text63')}{' '}
            <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>;
          </ListItem>
          <ListItem>
            {t('privacy_policy_content_text64')}{' '}
            <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>;
          </ListItem>
          <ListItem>{t('privacy_policy_content_text65')}</ListItem>
          <ListItem>{t('privacy_policy_content_text66')}</ListItem>
        </ListNumber>
      </ListItem>
      <ListItem>{t('privacy_policy_content_text67')}</ListItem>
      <ListItem>
        {t('privacy_policy_content_text68')}
        <ListNumber>
          <ListItem>{t('privacy_policy_content_text69')}</ListItem>
          <ListItem>{t('privacy_policy_content_text70')}</ListItem>
          <ListItem>{t('privacy_policy_content_text71')}</ListItem>
          <ListItem>{t('privacy_policy_content_text72')}</ListItem>
        </ListNumber>
      </ListItem>
      <ListItem>
        {t('privacy_policy_content_text73')}
        <ListNumber>
          <ListItem>
            {t('privacy_policy_content_text74')}
            <ListAlpha>
              <ListItem>
                <strong>{t('privacy_policy_content_text75')}</strong>
                {t('privacy_policy_content_text76')}
              </ListItem>
              <ListItem>{t('privacy_policy_content_text77')}</ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            {t('privacy_policy_content_text78')}
            <ListAlpha>
              <ListItem>{t('privacy_policy_content_text79')}</ListItem>
              <ListItem>{t('privacy_policy_content_text80')}</ListItem>
              <ListItem>{t('privacy_policy_content_text81')}</ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            {t('privacy_policy_content_text82')}
            <ListAlpha>
              <ListItem>{t('privacy_policy_content_text83')}</ListItem>
              <ListItem>{t('privacy_policy_content_text84')}</ListItem>
              <ListItem>{t('privacy_policy_content_text85')}</ListItem>
              <ListItem>{t('privacy_policy_content_text86')}</ListItem>
              <ListItem>{t('privacy_policy_content_text87')}</ListItem>
              <ListItem>{t('privacy_policy_content_text88')}</ListItem>
              <ListItem>{t('privacy_policy_content_text89')}</ListItem>
              <ListItem>{t('privacy_policy_content_text90')}</ListItem>
              <ListItem>{t('privacy_policy_content_text91')}</ListItem>
              <ListItem>{t('privacy_policy_content_text92')}</ListItem>
              <ListItem>{t('privacy_policy_content_text93')}</ListItem>
              <ListItem>
                {t('privacy_policy_content_text94')}
                <ListRoman>
                  <ListItem>{t('privacy_policy_content_text95')}</ListItem>
                  <ListItem>{t('privacy_policy_content_text96')}</ListItem>
                  <ListItem>{t('privacy_policy_content_text97')}</ListItem>
                </ListRoman>
              </ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            {t('privacy_policy_content_text98')}
            <ListAlpha>
              <ListItem>
                {t('privacy_policy_content_text99')}{' '}
                <Url value="https://developer.apple.com/documentation/exposurenotification/entemporaryexposurekey">
                  {t('privacy_policy_content_text100')}
                </Url>
                )
              </ListItem>
              <ListItem>{t('privacy_policy_content_text101')}</ListItem>
              <ListItem>{t('privacy_policy_content_text102')}</ListItem>
              <ListItem>{t('privacy_policy_content_text103')}</ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            {t('privacy_policy_content_text104')}{' '}
            <Url value="https://support.cloudflare.com/hc/en-us/articles/200170156-Understanding-the-Cloudflare-Cookies#12345682">
              https://support.cloudflare.com/
            </Url>
            .
          </ListItem>
        </ListNumber>
      </ListItem>
      <ListItem>
        {t('privacy_policy_content_text105')}
        <ListNumber>
          <ListItem>
            {t('privacy_policy_content_text106')}
            <ListAlpha>
              <ListItem>
                {t('privacy_policy_content_text107')}{' '}
                <Email>{t('privacy_policy_content_text108')}</Email>;
              </ListItem>
              <ListItem>{t('privacy_policy_content_text109')}</ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            {t('privacy_policy_content_text110')}{' '}
            <Url value="https://firebase.google.com/support/privacy">
              https://firebase.google.com
            </Url>
            ;
          </ListItem>
          <ListItem>{t('privacy_policy_content_text111')}</ListItem>
        </ListNumber>
      </ListItem>
      <ListItem>
        {t('privacy_policy_content_text112')}{' '}
        <Url value="https://www.gov.pl/web/koronawirus">COVID-19</Url>
        {t('privacy_policy_content_text113')}
      </ListItem>
      <ListItem>{t('privacy_policy_content_text114')}</ListItem>
      <ListItem>{t('privacy_policy_content_text115')}</ListItem>
    </ListNumber>
    <Annotation>§4.</Annotation>
    <Title>{t('privacy_policy_content_text116')}</Title>
    <ListNumber>
      <ListItem>{t('privacy_policy_content_text117')}</ListItem>
      <ListItem>{t('privacy_policy_content_text118')}</ListItem>
      <ListItem>
        {t('privacy_policy_content_text119')}
        <ListAlpha>
          <ListItem>{t('privacy_policy_content_text120')}</ListItem>
          <ListItem>{t('privacy_policy_content_text124')}</ListItem>
          <ListItem>{t('privacy_policy_content_text126')}</ListItem>
        </ListAlpha>
        {t('privacy_policy_content_text131')}
      </ListItem>
      <ListItem>
        {t('privacy_policy_content_text132')}{' '}
        <Email>{t('privacy_policy_content_text133')}</Email>.
      </ListItem>
      <ListItem>{t('privacy_policy_content_text134')}</ListItem>
    </ListNumber>
    <Annotation>§5.</Annotation>
    <Title>{t('privacy_policy_content_text135')}</Title>
    <ListNumber>
      <ListItem>{t('privacy_policy_content_text136')}</ListItem>
      <ListItem>{t('privacy_policy_content_text137')}</ListItem>
    </ListNumber>
  </>
);

export default withTranslation()(PrivacyPolicyContent);
