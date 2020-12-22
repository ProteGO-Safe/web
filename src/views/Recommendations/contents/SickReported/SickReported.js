import React from 'react';
import { CallToActionTemperature, CallHelpline, T } from '../../../../components';
import { BlockBorder } from '../../components';
import * as Styled from '../content.styled';

import { ReactComponent as Icon } from '../../../../assets/img/icons/sick-reported.svg';

const SickReported = ({ phoneNumber, handlePath }) => (
  <Styled.Wrapper>
    <Styled.MainTitle>
      <T i18nKey="recommendations_text_40" />
    </Styled.MainTitle>

    <Styled.Info>
      <Styled.Text>
        <T i18nKey="recommendations_text_2" />
      </Styled.Text>

      <Styled.Image>
        <Icon />
      </Styled.Image>
    </Styled.Info>

    <Styled.Title>
      <T i18nKey="recommendations_text_3" />
    </Styled.Title>

    <Styled.Description noPadding>
      <T i18nKey="recommendations_text_36" />
    </Styled.Description>

    <Styled.BlockWrapper>
      <CallHelpline phoneNumber={phoneNumber}>
        <T i18nKey="recommendations_text_5" />
      </CallHelpline>

      <BlockBorder title={<T i18nKey="recommendations_text_37" />} hideItems />
    </Styled.BlockWrapper>

    <Styled.Title>
      <T i18nKey="recommendations_text_38" />
    </Styled.Title>

    <Styled.Description>
      <T i18nKey="recommendations_text_39" />
    </Styled.Description>

    <CallToActionTemperature onClick={handlePath} />
  </Styled.Wrapper>
);

export default SickReported;
