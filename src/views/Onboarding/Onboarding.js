import React from 'react';
import { Content, Container, View } from '../../theme/grid';
import { OnboardingContent, Button, GovFooter } from '../../components';
import Header from '../../components/Header/Header';
import './Onboarding.scss';

const Onboarding = ({ screen: { buttons, content, icon, title } }) => {
  const renderButton = buttons.map(button => (
    <Button
      key={button.text}
      onClick={button.onClick}
      text={button.text}
      border={button.border}
    />
  ));

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <OnboardingContent icon={icon} title={title} buttons={renderButton}>
            {content}
          </OnboardingContent>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default Onboarding;
