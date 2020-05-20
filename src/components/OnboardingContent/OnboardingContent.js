import React from 'react';
import PropTypes from 'prop-types';
import {
  OnboardingWrapper,
  ButtonWrapper,
  IconWrapper,
  Text,
  Title
} from './OnboardingContent.styled';

const OnboardingContent = ({ buttons, children, icon, title }) => {
  return (
    <OnboardingWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Text>{children}</Text>
      <ButtonWrapper>{buttons}</ButtonWrapper>
    </OnboardingWrapper>
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
