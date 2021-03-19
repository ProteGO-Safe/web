import React from 'react';
import { Layout } from '../../components';
import { RatingApp } from '../index';
import {
  ExposureNotification,
  ResultAnalysis,
  Statistics,
  CallToActionPin,
  CallToActionHealth,
  Districts,
  LabTestActionButton
} from './components';
import * as Styled from './Dashboard.styled';

const Dashboard = () => (
  <Layout noMargin noPadding isNavigation hideBackButton>
    <Styled.Dashboard>
      <ExposureNotification />
      <ResultAnalysis />
      <CallToActionPin />
      <LabTestActionButton />
      <Statistics />
      <CallToActionHealth />
      <Districts />
    </Styled.Dashboard>

    <RatingApp />
  </Layout>
);

export default Dashboard;
