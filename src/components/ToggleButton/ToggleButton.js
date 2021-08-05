import React from 'react';
import PropTypes from 'prop-types';
import { T } from '../T';
import * as Styled from './ToggleButton.styled';

const ToggleButton = ({ active, color, onClick }) => (
  <Styled.ToggleButton onClick={onClick} active={active} color={color}>
    <Styled.Name color={color}>
      {active ? <T i18nKey="toggle_button_text_1" /> : <T i18nKey="toggle_button_text_2" />}
    </Styled.Name>
    <Styled.Icon active={active ? 1 : 0} color={color} />
  </Styled.ToggleButton>
);

ToggleButton.propTypes = {
  active: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ToggleButton;
