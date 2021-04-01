import React from 'react';
import { Layout, T, CallHelpline, Button } from '../../components';
import { Banner, CallToAction } from './components';
import * as Styled from './InfoVaccinations.styled';

const InfoVaccinations = () => (
  <Layout isNavigation noPadding noMargin>
    <Banner title={<T i18nKey="info_vaccinations_text_1" />} />

    <Styled.Content>
      <Styled.Text>
        <T i18nKey="info_vaccinations_text_2" />
      </Styled.Text>

      <Styled.Heading mgr>
        <T i18nKey="info_vaccinations_text_7" />
      </Styled.Heading>

      <Styled.ListNumber>
        <Styled.ListItem>
          <T i18nKey="info_vaccinations_text_3" />
        </Styled.ListItem>
        <Styled.ListItem>
          <T i18nKey="info_vaccinations_text_4" />
        </Styled.ListItem>
        <Styled.ListItem>
          <T i18nKey="info_vaccinations_text_5" />
        </Styled.ListItem>
        <Styled.ListItem>
          <T i18nKey="info_vaccinations_text_6" />
        </Styled.ListItem>
      </Styled.ListNumber>

      <CallToAction path="https://www.gov.pl/web/szczepimysie/zgloszenia" />

      <Styled.Heading mgr>
        <T i18nKey="info_vaccinations_text_8" />
      </Styled.Heading>

      <Styled.Text>
        <T i18nKey="info_vaccinations_text_9" />
      </Styled.Text>

      <Styled.ButtonWrapper>
        <Styled.UrlLink href="https://www.gov.pl/web/szczepimysie/rejestracja" target="_blank">
          <Button label={<T i18nKey="info_vaccinations_text_17" />} onClick={() => null} />
        </Styled.UrlLink>

        <Styled.Small>
          <T i18nKey="i_am_sick_text_25" />
        </Styled.Small>
      </Styled.ButtonWrapper>

      <Styled.Heading mgr>
        <T i18nKey="info_vaccinations_text_10" />
      </Styled.Heading>

      <Styled.Text>
        <T i18nKey="info_vaccinations_text_11" />
      </Styled.Text>

      <Styled.ListDots>
        <Styled.ListDotsItem>
          <T i18nKey="info_vaccinations_text_12" />
        </Styled.ListDotsItem>
        <Styled.ListDotsItem>
          <T i18nKey="info_vaccinations_text_13" />
        </Styled.ListDotsItem>
        <Styled.ListDotsItem>
          <T i18nKey="info_vaccinations_text_14" />
        </Styled.ListDotsItem>
        <Styled.ListDotsItem>
          <T i18nKey="info_vaccinations_text_15" />
        </Styled.ListDotsItem>
      </Styled.ListDots>

      <CallHelpline phoneNumber={989}>
        <T i18nKey="info_vaccinations_text_16" />
      </CallHelpline>
    </Styled.Content>
  </Layout>
);

export default InfoVaccinations;
