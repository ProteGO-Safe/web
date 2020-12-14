import React from 'react';
import PropTypes from 'prop-types';
import { T } from '../../../../components';
import * as Styled from './CallToActionPin.styled';

import { ReactComponent as Arrow } from '../../../../assets/img/icons/angle-right-blue.svg';
import { ReactComponent as IconHand } from '../../../../assets/img/icons/telefon-reka.svg';
import { Wrapper } from '../index';

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
    </Styled.CallToActionPin>
  </Wrapper>
);

CallToActionPin.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CallToActionPin;
