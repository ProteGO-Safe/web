import React from 'react';
import { withTranslation } from 'react-i18next';
import './NotSupported.scss';
import {
  OnboardingContent,
  Button,
  Layout
} from '../../../../../../components';
import { isIOSWebView } from '../../../../../../utils/native';
import { Icon } from './NotSupported.styled';

const NotSupported = ({ t, onNext }) => {
  const buttons = [
    {
      label: t('onboarding_not_supported_text3'),
      onClick: onNext
    }
  ];

  const renderButton = buttons.map(({ onClick, label }) => (
    <Button key={label} onClick={onClick} label={label} />
  ));

  return (
    <Layout hideBackButton isGovFooter>
      <OnboardingContent
        icon={<Icon />}
        title={t('onboarding_not_supported_text4')}
        buttons={renderButton}
      >
        {!isIOSWebView() ? (
          <p>{t('onboarding_not_supported_text1')}</p>
        ) : (
          <p>{t('onboarding_not_supported_text2')}</p>
        )}
      </OnboardingContent>
    </Layout>
  );
};

export default withTranslation()(NotSupported);
