import React from 'react';

import { ButtonWrapper, Content, ContentText, Header, Icon, Text, Wrapper } from './ModalContent.styled';
import { Button, ButtonWithDescription, T } from '../../../../components';
import { Color } from '../../../../theme/colors';

const ModalContent = ({ data, handleReceiveLabTest, handleBack }) => {
  const { color, icon } = data;

  return (
    <Wrapper>
      <Header color={color}>
        <Icon>{icon}</Icon>
        <Text>
          <T i18nKey="exposure_notification_contact_detection_01" />
        </Text>
      </Header>
      <Content>
        <ContentText>
          <T i18nKey="exposure_notification_contact_detection_02" />
        </ContentText>
        <ButtonWrapper>
          <ButtonWithDescription
            color={Color.primary}
            onClick={handleReceiveLabTest}
            description={<T i18nKey="exposure_notification_contact_detection_03" />}
            title={<T i18nKey="exposure_notification_contact_detection_04" />}
          />
        </ButtonWrapper>
        <ContentText>
          <T i18nKey="exposure_notification_contact_detection_05" />
        </ContentText>
        <ButtonWrapper>
          <Button onClick={handleBack} type="outline" label={<T i18nKey="button_back" />} />
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};

export default ModalContent;
