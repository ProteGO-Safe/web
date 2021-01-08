import React from 'react';
import { T, CallToActionTemperature } from '../../../../components';
import { BlockBorder } from '../../components';
import * as Styled from '../content.styled';

import { ReactComponent as Icon } from '../../../../assets/img/icons/sick-approve.svg';

const SickApprove = ({ handlePath }) => (
  <Styled.Wrapper>
    <Styled.MainTitle>
      <T i18nKey="recommendations_text_41" />
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
      <T i18nKey="recommendations_text_42" />
    </Styled.Description>

    <Styled.BlockWrapper>
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

export default SickApprove;
