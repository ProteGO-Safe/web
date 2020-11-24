import React from 'react';
import { WarningInEuropeImage, WarningInEuropeTerm, T } from '../../components';
import * as Styled from './WarningInEurope.styled';

const WarningInEurope = () => (
  <Styled.WarningInEurope>
    <Styled.Container>
      <Styled.MainTitle>
        <T i18nKey="warning_in_europe_text1" />
      </Styled.MainTitle>

      <WarningInEuropeImage />

      <Styled.Paragraph>
        <T i18nKey="warning_in_europe_text2" />
      </Styled.Paragraph>
    </Styled.Container>

    <WarningInEuropeTerm forceOpen />

    <Styled.Container>
      <Styled.Title>
        <T i18nKey="warning_in_europe_text3" />
      </Styled.Title>
      <Styled.Paragraph>
        <T i18nKey="warning_in_europe_text4" />
      </Styled.Paragraph>

      <Styled.Title>
        <T i18nKey="warning_in_europe_text5" />
      </Styled.Title>
      <Styled.Paragraph>
        <T i18nKey="warning_in_europe_text6" />
      </Styled.Paragraph>

      <Styled.Info>
        <Styled.Flag />
        <Styled.Text>
          <T i18nKey="warning_in_europe_text7" />
        </Styled.Text>
      </Styled.Info>
    </Styled.Container>
  </Styled.WarningInEurope>
);

export default WarningInEurope;
