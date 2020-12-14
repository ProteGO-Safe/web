import React from 'react';
import * as Styled from './CallToActionTemperature.styled';
import { ReactComponent as IconHand } from '../../assets/img/icons/dziennik_zdrowia.svg';
import { T } from '../T';
import { ReactComponent as Arrow } from '../../assets/img/icons/angle-right-blue.svg';

const CallToActionTemperature = ({ onClick }) => (
  <Styled.Wrapper onClick={onClick}>
    <Styled.Image>
      <IconHand />
    </Styled.Image>

    <Styled.Content>
      <Styled.Label>
        <T i18nKey="call_to_action_temperature_text_1" /> <Arrow />
      </Styled.Label>
      <Styled.Text>
        <T i18nKey="call_to_action_temperature_text_2" />
      </Styled.Text>
    </Styled.Content>
  </Styled.Wrapper>
);

export default CallToActionTemperature;
