import React from 'react';
import { ExposureNotification, Statistics } from './components';
import * as Styled from './Dashboard.styled';

const Dashboard = () => (
  <Styled.Dashboard>
    <ExposureNotification isEnActive />

    <Styled.Wrapper>
      <Statistics />
    </Styled.Wrapper>
  </Styled.Dashboard>
);

export default Dashboard;
