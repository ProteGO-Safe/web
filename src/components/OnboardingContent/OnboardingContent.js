import React from 'react';
import PropTypes from 'prop-types';
import { OnboardingWrapper, ButtonWrapper, IconWrapper, Text, Title } from './OnboardingContent.styled';

const OnboardingContent = ({ buttons, children, icon, title }) => {
  return (
    <OnboardingWrapper data-cy="view-onboarding">
      <IconWrapper>{icon}</IconWrapper>
      <Title data-cy="onboarding-title">{title}</Title>
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
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
};

export default OnboardingContent;
