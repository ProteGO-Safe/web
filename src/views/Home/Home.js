import React from 'react';
import { Header, Container, BottomNavigation } from '../../components';
import './Home.scss';
import { ExposureNotificationWarning, HomeContent } from './components';

const Home = () => {
  return (
    <div className="view view__home">
      <Header hideBackButton />
      <Container>
        <ExposureNotificationWarning />
        <HomeContent />
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default Home;
