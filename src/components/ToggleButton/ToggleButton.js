import React from 'react';
import PropTypes from 'prop-types';
import { T } from '../T';
import * as Styled from './ToggleButton.styled';

const ToggleButton = ({ active, onClick }) => (
  <Styled.ToggleButton onClick={onClick}>
    <Styled.Name>{active ? <T i18nKey="toggle_button_text_1" /> : <T i18nKey="toggle_button_text_2" />}</Styled.Name>
    <Styled.Icon active={active ? 1 : 0} />
  </Styled.ToggleButton>
);

ToggleButton.defaultProps = {
  active: false
};

ToggleButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default ToggleButton;
