import React from 'react';
import { withTranslation } from 'react-i18next';
import './Information.scss';
import {
  OnboardingContent,
  Button,
  Layout
} from '../../../../../../components';
import { Icon } from './Information.styled';

const Information = ({ t, onNext, onSkip }) => {
  const buttons = [
    {
      label: t('button_next'),
      onClick: onNext
    },
    {
      label: t('notification_onboarding_information_text2'),
      type: 'blankSmall',
      onClick: onSkip
    }
  ];

  const renderButton = buttons.map(button => (
    <Button
      key={button.label}
      onClick={button.onClick}
      label={button.label}
      type={button.type}
    />
  ));

  return (
    <Layout hideBackButton isGovFooter>
      <OnboardingContent
        icon={<Icon />}
        title={t('notification_onboarding_information_text3')}
        buttons={renderButton}
      >
        <>
          <p>{t('notification_onboarding_information_text1')}</p>
        </>
      </OnboardingContent>
    </Layout>
  );
};

export default withTranslation()(Information);
