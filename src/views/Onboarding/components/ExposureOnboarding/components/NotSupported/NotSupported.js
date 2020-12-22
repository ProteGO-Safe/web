import React from 'react';
import { Button, OnboardingContent, T } from '../../../../../../components';
import { isIOSWebView } from '../../../../../../utils/native';
import { Icon } from './NotSupported.styled';

const NotSupported = ({ onNext }) => {
  const buttons = [
    {
      label: <T i18nKey="onboarding_not_supported_text3" />,
      onClick: onNext
    }
  ];

  const renderButton = buttons.map(({ onClick, label }) => <Button key={label} onClick={onClick} label={label} />);

  return (
    <OnboardingContent icon={<Icon />} title={<T i18nKey="onboarding_not_supported_text4" />} buttons={renderButton}>
      {!isIOSWebView() ? (
        <p>
          <T i18nKey="onboarding_not_supported_text1" />
        </p>
      ) : (
        <p>
          <T i18nKey="onboarding_not_supported_text2" />
        </p>
      )}
    </OnboardingContent>
  );
};

export default NotSupported;
