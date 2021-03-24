import React from 'react';
import { RippleEffect, T } from '../../../../components';
import * as Styled from './CallToAction.styled';

import { ReactComponent as Icon } from '../../../../assets/img/info-vaccinations/info-vaccinations-5.svg';
import { ReactComponent as Arrow } from '../../../../assets/img/icons/angle-right-blue.svg';

const CallToAction = ({ path }) => (
  <Styled.Wrapper>
    <Styled.Container href={path} target="_blank">
      <Styled.Image>
        <Icon />
      </Styled.Image>

      <Styled.Content>
        <Styled.Label>
          <T i18nKey="info_vaccinations_text_19" /> <Arrow />
        </Styled.Label>
        <Styled.Text>
          <T i18nKey="info_vaccinations_text_20" />
        </Styled.Text>
      </Styled.Content>

      <RippleEffect />
    </Styled.Container>

    <Styled.Small>
      <T i18nKey="info_vaccinations_text_18" />
    </Styled.Small>
  </Styled.Wrapper>
);

export default CallToAction;
