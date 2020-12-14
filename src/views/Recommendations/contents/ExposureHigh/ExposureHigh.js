import React from 'react';
import { ButtonWithDescription, CallHelpline, T } from '../../../../components';
import { Color } from '../../../../theme/colors';
import * as Styled from '../content.styled';

import { ReactComponent as Icon } from '../../../../assets/img/icons/exposure-high.svg';

const ExposureHigh = ({ pathToGoHelpline, phoneNumber }) => (
  <Styled.Wrapper>
    <Styled.MainTitle>
      <T i18nKey="recommendations_text_18" variables={{ color: Color.red }} />
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
      <T i18nKey="recommendations_text_19" />
    </Styled.Description>

    <Styled.BlockWrapper>
      <CallHelpline phoneNumber={phoneNumber}>
        <T i18nKey="recommendations_text_5" />
      </CallHelpline>

      <Styled.Link href={pathToGoHelpline} target="_blank">
        <ButtonWithDescription
          color={Color.primary}
          onClick={() => null}
          description={<T i18nKey="recommendations_text_22" />}
          title={<T i18nKey="recommendations_text_21" />}
        >
          <T i18nKey="recommendations_text_20" />
        </ButtonWithDescription>
      </Styled.Link>
    </Styled.BlockWrapper>
  </Styled.Wrapper>
);

export default ExposureHigh;
