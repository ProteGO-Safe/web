import React from 'react';
import { Layout } from '../../components';

import { ExposureNotification, ResultAnalysis, Statistics, CallToActionPin, CallToActionHealth } from './components';
import * as Styled from './Dashboard.styled';

const Dashboard = () => (
  <Layout noMargin isNavigation hideBackButton>
    <Styled.Dashboard>
      <ExposureNotification />
      <ResultAnalysis />
      <CallToActionPin />
      <Statistics />
      <CallToActionHealth />
    </Styled.Dashboard>
  </Layout>
);

export default Dashboard;
