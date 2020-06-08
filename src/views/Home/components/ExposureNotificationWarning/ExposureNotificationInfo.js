import React from 'react';
import styled from 'styled-components';
import { Color } from '../../../../theme/colors';

const ExposureNotificationInfo = ({ icon }) => {
  return (
    <Container>
      <Icon src={icon} />
      Monitorowanie ryzyka: włączone
    </Container>
  );
};

const Icon = styled.img`
  display: block;
  width: 20px;
  margin-right: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  min-height: 30px;
  padding: 10px;
  color: ${Color.gray};
  font-size: 14px;
  margin-bottom: 10px;
  justify-content: center;
  margin-top: 25px;
`;

export { ExposureNotificationInfo };
