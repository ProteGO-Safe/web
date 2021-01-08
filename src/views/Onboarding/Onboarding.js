import React from 'react';
import { OnboardingContent, Button, Layout } from '../../components';

const Onboarding = ({ screen: { buttons, content, icon, title } }) => {
  const renderButton = buttons.map(button => (
    <Button key={button.text} onClick={button.onClick} label={button.text} type={button.type} />
  ));

  return (
    <Layout hideBackButton hideBell>
      <OnboardingContent icon={icon} title={title} buttons={renderButton}>
        {content}
      </OnboardingContent>
    </Layout>
  );
};

export default Onboarding;
