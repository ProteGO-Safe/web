import React from 'react';
import { Icon, Container } from './ExposureNotificationInfo.styled';
import { T } from '../../../../components';

const ExposureNotificationInfo = ({ icon }) => {
  return (
    <Container data-cy="exposure-notification-info">
      <Icon src={icon} />
      <T i18nKey="exposure_notification_info_text1" />
    </Container>
  );
};

export default ExposureNotificationInfo;
