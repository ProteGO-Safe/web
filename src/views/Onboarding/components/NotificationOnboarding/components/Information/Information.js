import React from 'react';
import { withTranslation } from 'react-i18next';
import './Information.scss';
import {
  OnboardingContent,
  Button,
  GovFooter
} from '../../../../../../components';
import { View, Container, Content } from '../../../../../../theme/grid';
import Header from '../../../../../../components/Header/Header';
import { Icon } from './Information.styled';

const Information = ({ t, onNext, onSkip }) => {
  const buttons = [
    {
      label: t('button_next'),
      onClick: onNext
    },
    {
      label: t('notification_onboarding_information_text1'),
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
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <OnboardingContent
            icon={<Icon />}
            title={t('notification_onboarding_information_text3')}
            buttons={renderButton}
          >
            <>
              <p>{t('notification_onboarding_information_text1')}</p>
            </>
          </OnboardingContent>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default withTranslation()(Information);
