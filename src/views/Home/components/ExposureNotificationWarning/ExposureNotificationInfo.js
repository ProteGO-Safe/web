import React from 'react';
import { Icon, Container } from './ExposureNotificationInfo.styled';

const ExposureNotificationInfo = ({ icon }) => {
  return (
    <Container>
      <Icon src={icon} />
      Monitorowanie ryzyka: włączone
    </Container>
  );
};

export { ExposureNotificationInfo };
