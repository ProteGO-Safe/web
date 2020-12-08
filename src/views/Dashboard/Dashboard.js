import React from 'react';
import { ExposureNotification } from './components';
import * as Styled from './Dashboard.styled';

const Dashboard = () => (
  <Styled.Dashboard>
    <ExposureNotification enableServices={false} />
  </Styled.Dashboard>
);

export default Dashboard;
