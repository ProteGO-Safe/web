import React from 'react';
import { CallToActionHealth, Layout } from '../../components';

import { ExposureNotification, ResultAnalysis, Statistics, CallToActionPin, Wrapper } from './components';
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

      <Wrapper padding>
        <CallToActionHealth onClick={() => null} />
      </Wrapper>
    </Styled.Dashboard>
  </Layout>
);

export default Dashboard;
