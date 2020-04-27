import React from 'react';
import PropTypes from 'prop-types';
import {
  BluetoothWrapper,
  ButtonWrapper,
  IconWrapper,
  Text,
  Title
} from './OnboardingContent.styled';

const OnboardingContent = ({ buttons, children, icon, title }) => {
  return (
    <BluetoothWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Text>{children}</Text>
      <ButtonWrapper>{buttons}</ButtonWrapper>
    </BluetoothWrapper>
  );
};

OnboardingContent.defaultProps = {
  buttons: []
};

OnboardingContent.propTypes = {
  buttons: PropTypes.array,
  children: PropTypes.node.isRequired,
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default OnboardingContent;
