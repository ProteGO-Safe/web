import React from 'react';
import { Layout } from '../../components';
import { ExposureNotificationWarning, HomeContent } from './components';

const Home = () => {
  return (
    <Layout hideBackButton isNavigation>
      <ExposureNotificationWarning />
      <HomeContent />
    </Layout>
  );
};

export default Home;
