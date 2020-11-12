import React from 'react';
import { Layout } from '../../components';
import { FollowDistrictsSlider } from '../index';
import { ExposureNotificationWarning, HomeContent } from './components';
import * as Styled from './Home.styled';

const Home = ({ subscribedDistricts }) => {
  return (
    <Layout id="view-home" hideBackButton isNavigation noMargin>
      <Styled.Container>
        <ExposureNotificationWarning />
      </Styled.Container>

      <FollowDistrictsSlider items={subscribedDistricts} />

      <Styled.Container noMargin>
        <HomeContent />
      </Styled.Container>
    </Layout>
  );
};

export default Home;
