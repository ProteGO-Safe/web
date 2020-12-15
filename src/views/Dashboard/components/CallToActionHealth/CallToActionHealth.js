import React from 'react';
import PropTypes from 'prop-types';
import { T } from '../../../../components';
import * as Styled from './CallToActionHealth.styled';

import { ReactComponent as IconTest } from '../../../../assets/img/icons/testy.svg';
import { ReactComponent as Arrow } from '../../../../assets/img/icons/angle-right-blue.svg';
import { Wrapper } from '../index';

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
    </Styled.CallToActionHealth>
  </Wrapper>
);

CallToActionHealth.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CallToActionHealth;
