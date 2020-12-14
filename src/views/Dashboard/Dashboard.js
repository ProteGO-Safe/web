import React from 'react';
import { CallToActionHealth, CallToActionPin, Layout } from '../../components';

import { ExposureNotification, ResultAnalysis, Statistics } from './components';
import * as Styled from './Dashboard.styled';

const Dashboard = () => (
  <Layout noMargin isNavigation>
    <Styled.Dashboard>
      <ExposureNotification isEnActive />

      <ResultAnalysis />

      <Styled.Wrapper padding>
        <CallToActionPin onClick={() => null} />
      </Styled.Wrapper>

      <Styled.Wrapper>
        <Statistics />
      </Styled.Wrapper>

      <Styled.Wrapper padding>
        <CallToActionHealth onClick={() => null} />
      </Styled.Wrapper>
    </Styled.Dashboard>
  </Layout>
);

export default Dashboard;
