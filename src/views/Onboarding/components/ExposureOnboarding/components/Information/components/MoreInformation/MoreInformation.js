import React from 'react';
import { withTranslation } from 'react-i18next';
import './MoreInformation.scss';
import {
  Button,
  Layout,
  OnboardingContent,
  T
} from '../../../../../../../../components';
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
    <Layout hideBackButton isGovFooter>
      <OnboardingContent icon={<Icon />} title="" buttons={renderButton}>
        <Paragraph>
          <T i18nKey="more_information_text1" />
        </Paragraph>
        <Paragraph>{t('more_information_text3')}</Paragraph>
        <Paragraph>
          <T i18nKey="more_information_text4" />
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
          <T i18nKey="more_information_text14" />
        </Paragraph>
        <Paragraph>
          <T i18nKey="more_information_text15" />
        </Paragraph>
      </OnboardingContent>
    </Layout>
  );
};

export default withTranslation()(MoreInformation);
