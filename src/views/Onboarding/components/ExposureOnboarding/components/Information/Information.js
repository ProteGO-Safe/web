import React from 'react';
import { Button, OnboardingContent, T } from '../../../../../../components';
import { Icon, More } from './Information.styled';

const Information = ({ onNext, onMore, onSkip }) => {
  const buttons = [
    {
      label: <T i18nKey="button_next" />,
      onClick: onNext
    },
    {
      label: <T i18nKey="exposure_onboarding_information_text1" />,
      type: 'blankSmall',
      onClick: onSkip
    }
  ];

  const renderButton = buttons.map(button => (
    <Button key={button.label} onClick={button.onClick} label={button.label} type={button.type} />
  ));

  return (
    <OnboardingContent
      icon={<Icon />}
      title={<T i18nKey="exposure_onboarding_information_text2" />}
      buttons={renderButton}
    >
      <>
        <p>
          <T i18nKey="exposure_onboarding_information_text3" />
        </p>
        <br />
        <More onClick={onMore}>
          <T i18nKey="exposure_onboarding_information_text4" />
        </More>
      </>
    </OnboardingContent>
  );
};

export default Information;
