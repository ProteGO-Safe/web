import React from 'react';
import PropTypes from 'prop-types';
import { RippleEffect, T } from '../../../../components';
import { Wrapper } from '../index';
import * as Styled from './CallToActionPin.styled';

import { ReactComponent as Arrow } from '../../../../assets/img/icons/angle-right-blue.svg';
import { ReactComponent as IconHand } from '../../../../assets/img/icons/telefon-reka.svg';

const CallToActionPin = ({ onClick }) => (
  <Wrapper padding>
    <Styled.CallToActionPin onClick={onClick}>
      <Styled.Image>
        <IconHand />
      </Styled.Image>

      <Styled.Content>
        <Styled.Label>
          <T i18nKey="call_to_action_pin_text_1" /> <Arrow />
        </Styled.Label>
        <Styled.Text>
          <T i18nKey="call_to_action_pin_text_2" />
        </Styled.Text>
      </Styled.Content>

      <RippleEffect />
    </Styled.CallToActionPin>
  </Wrapper>
);

CallToActionPin.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CallToActionPin;
