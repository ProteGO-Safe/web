import React from 'react';
import { Icon, Container } from './ExposureNotificationInfo.styled';
import { withTranslation } from 'react-i18next';

const ExposureNotificationInfo = ({ t, icon }) => {
  return (
    <Container>
      <Icon src={icon} />
      {t('exposure_notification_info_text1')}
    </Container>
  );
};

export default withTranslation()(ExposureNotificationInfo);
