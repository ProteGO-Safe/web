import React from 'react';
import { Layout } from '../../components';

import {
  ExposureNotification,
  ResultAnalysis,
  Statistics,
  CallToActionPin,
  Wrapper,
  CallToActionHealth
} from './components';
import * as Styled from './Dashboard.styled';

const Dashboard = () => (
  <Layout noMargin isNavigation hideBackButton>
    <Styled.Dashboard>
      <ExposureNotification />

      <ResultAnalysis />

      <CallToActionPin />

      <Wrapper>
        <Statistics />
      </Wrapper>

      <CallToActionHealth />
    </Styled.Dashboard>
  </Layout>
);

export default Dashboard;
