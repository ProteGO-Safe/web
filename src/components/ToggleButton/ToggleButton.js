import React from 'react';
import PropTypes from 'prop-types';
import { T } from '../T';
import * as Styled from './ToggleButton.styled';
import { Color } from '../../theme/colors';

const ToggleButton = ({ active, color, onClick }) => (
  <Styled.ToggleButton onClick={onClick} active={active} color={color}>
    <Styled.Name active={active ? 1 : 0}>
      {active ? <T i18nKey="toggle_button_text_1" /> : <T i18nKey="toggle_button_text_2" />}
    </Styled.Name>
    <Styled.Icon active={active ? 1 : 0} />
  </Styled.ToggleButton>
);

ToggleButton.defaultProps = {
  active: false,
  color: Color.primary
};

ToggleButton.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default ToggleButton;
