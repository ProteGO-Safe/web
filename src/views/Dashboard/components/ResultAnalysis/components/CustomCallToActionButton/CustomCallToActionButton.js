import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './CustomCallToActionButton.styled';
import { Button } from '../../../../../../components';
import { BUTTON_TYPES } from '../../../../../../components/Button/Button.constants';

const CustomCallToActionButton = ({ action, text }) => (
  <Styled.Wrapper>
    <Button onClick={action} type={BUTTON_TYPES.SMALL_OUTLINE}>
      {text}
    </Button>
  </Styled.Wrapper>
);

CustomCallToActionButton.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.node.isRequired
};

export default CustomCallToActionButton;
