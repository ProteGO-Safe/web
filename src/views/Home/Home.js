import React from 'react';
import { Header, Container, BottomNavigation } from '../../components';
import './Home.scss';
import { ExposureNotificationWarning } from './components';

const Home = ({ resolveView }) => {
  return (
    <div className="view view__home">
      <Header hideBackButton />
      <Container>
        <ExposureNotificationWarning />
        {resolveView()}
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default Home;
