import React from 'react';
import { CallToActionTemperature, CallHelpline, T } from '../../../../components';
import { Info } from '../../components';
import * as Styled from '../content.styled';

import { ReactComponent as Icon } from '../../../../assets/img/icons/exposure-middle.svg';

const ExposureMiddle = ({ handlePath, phoneNumber }) => (
  <Styled.Wrapper>
    <Styled.MainTitle>
      <T i18nKey="recommendations_text_1" />
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

    <Styled.Description>
      <T i18nKey="recommendations_text_4" />
    </Styled.Description>

    <Styled.BlockWrapper>
      <CallHelpline phoneNumber={phoneNumber}>
        <T i18nKey="recommendations_text_5" />
      </CallHelpline>

      <Info content={<T i18nKey="recommendations_text_6" />} />

      <CallToActionTemperature onClick={handlePath} />
    </Styled.BlockWrapper>
  </Styled.Wrapper>
);

export default ExposureMiddle;
