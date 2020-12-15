import React from 'react';
import PropTypes from 'prop-types';
import { RippleEffect, T } from '../../../../components';
import { Wrapper } from '../index';
import * as Styled from './CallToActionHealth.styled';

import { ReactComponent as IconTest } from '../../../../assets/img/icons/testy.svg';
import { ReactComponent as Arrow } from '../../../../assets/img/icons/angle-right-blue.svg';

const CallToActionHealth = ({ onClick }) => (
  <Wrapper padding>
    <Styled.CallToActionHealth onClick={onClick}>
      <Styled.Image>
        <IconTest />
      </Styled.Image>

      <Styled.Content>
        <Styled.Label>
          <T i18nKey="call_to_action_health_text_1" /> <Arrow />
        </Styled.Label>
        <Styled.Text>
          <T i18nKey="call_to_action_health_text_2" />
        </Styled.Text>
      </Styled.Content>

      <RippleEffect />
    </Styled.CallToActionHealth>
  </Wrapper>
);

CallToActionHealth.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CallToActionHealth;
