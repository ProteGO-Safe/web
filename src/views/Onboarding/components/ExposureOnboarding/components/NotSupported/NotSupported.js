import React from 'react';
import { withTranslation } from 'react-i18next';
import './NotSupported.scss';
import {
  OnboardingContent,
  Button,
  GovFooter
} from '../../../../../../components';
import { isIOSWebView } from '../../../../../../utils/native';
import Header from '../../../../../../components/Header/Header';
import { View, Container, Content } from '../../../../../../theme/grid';
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
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
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
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default withTranslation()(NotSupported);
