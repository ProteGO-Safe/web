import React from 'react';
import { Button, OnboardingContent, T } from '../../../../../../../../components';
import { Icon, Paragraph } from './MoreInformation.styled';

const MoreInformation = ({ onNext }) => {
  const buttons = [
    {
      label: <T i18nKey="button_next" />,
      onClick: onNext
    }
  ];

  const renderButton = buttons.map(button => (
    <Button key={button.label} onClick={button.onClick} label={button.label} />
  ));

  return (
    <OnboardingContent icon={<Icon />} title="" buttons={renderButton}>
      <Paragraph>
        <T i18nKey="more_information_text1" />
      </Paragraph>
      <Paragraph>
        <T i18nKey="more_information_text3" />
      </Paragraph>
      <Paragraph>
        <T i18nKey="more_information_text4" />
      </Paragraph>
      <Paragraph>
        <T i18nKey="more_information_text5" />
      </Paragraph>
      <Paragraph>
        <T i18nKey="more_information_text6" />
      </Paragraph>
      <Paragraph>
        <T i18nKey="more_information_text7" />
      </Paragraph>
      <Paragraph>
        <T i18nKey="more_information_text8" />
      </Paragraph>
      <Paragraph>
        <T i18nKey="more_information_text9" />
      </Paragraph>
      <Paragraph>
        <T i18nKey="more_information_text10" />
      </Paragraph>
      <Paragraph>
        <T i18nKey="more_information_text11" />
      </Paragraph>
      <Paragraph>
        <T i18nKey="more_information_text12" />
      </Paragraph>
      <Paragraph>
        <T i18nKey="more_information_text13" />
      </Paragraph>
      <Paragraph>
        <T i18nKey="more_information_text14" />
      </Paragraph>
      <Paragraph>
        <T i18nKey="more_information_text15" />
      </Paragraph>
    </OnboardingContent>
  );
};

export default MoreInformation;
