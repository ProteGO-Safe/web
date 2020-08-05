import React from 'react';
import { withTranslation } from 'react-i18next';
import './MoreInformation.scss';
import {
  Button,
  Email,
  GovFooter,
  Header,
  OnboardingContent
} from '../../../../../../../../components';
import { View, Container, Content } from '../../../../../../../../theme/grid';
import { Icon, Paragraph } from './MoreInformation.styled';

const MoreInformation = ({ t, onNext }) => {
  const buttons = [
    {
      label: t('button_next'),
      onClick: onNext
    }
  ];

  const renderButton = buttons.map(button => (
    <Button key={button.label} onClick={button.onClick} label={button.label} />
  ));

  return (
    <View>
      <Header hideBackButton />
      <Content>
        <Container className="full-height">
          <OnboardingContent icon={<Icon />} title="" buttons={renderButton}>
            <Paragraph>
              <strong>{t('more_information_text1')}</strong>
              {t('more_information_text2')}
            </Paragraph>
            <Paragraph>{t('more_information_text3')}</Paragraph>
            <Paragraph>
              <strong>{t('more_information_text4')}</strong>
            </Paragraph>
            <Paragraph>{t('more_information_text5')}</Paragraph>

            <Paragraph>{t('more_information_text6')}</Paragraph>
            <Paragraph>{t('more_information_text7')}</Paragraph>
            <Paragraph>{t('more_information_text8')}</Paragraph>
            <Paragraph>{t('more_information_text9')}</Paragraph>
            <Paragraph>{t('more_information_text10')}</Paragraph>
            <Paragraph>{t('more_information_text11')}</Paragraph>
            <Paragraph>{t('more_information_text12')}</Paragraph>
            <Paragraph>{t('more_information_text13')}</Paragraph>
            <Paragraph>
              <strong>{t('more_information_text14')}</strong>
            </Paragraph>
            <Paragraph>
              {t('more_information_text15')}{' '}
              <Email>{t('more_information_text16')}</Email>
            </Paragraph>
          </OnboardingContent>
          <GovFooter type="black" />
        </Container>
      </Content>
    </View>
  );
};

export default withTranslation()(MoreInformation);
