import React from 'react';
import { Layout } from '../../components';

import { ExposureNotification, ResultAnalysis, Statistics, CallToActionPin, CallToActionHealth } from './components';
import * as Styled from './Dashboard.styled';
import { InfoInteroperability, RatingApp } from '../index';

const Dashboard = () => (
  <Layout noMargin noPadding isNavigation hideBackButton>
    <Styled.Dashboard>
      <ExposureNotification />
      <ResultAnalysis />
      <CallToActionPin />
      <Statistics />
      <CallToActionHealth />
    </Styled.Dashboard>

    <InfoInteroperability />
    <RatingApp />
  </Layout>
);

export default Dashboard;
