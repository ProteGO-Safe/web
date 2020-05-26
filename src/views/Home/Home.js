import React from 'react';
import {
  Header,
  Badge,
  Container,
  Smile,
  TriageRiskInformation,
  TriageInfoBorder,
  BottomNavigation,
  TriageRecommendations
} from '../../components';
import './Home.scss';
import {
  BottomMakeDiagnosisButton,
  ExposureNotificationWarning,
  TopMakeDiagnosisButton,
  MoreInformation,
  MakeDailyButton
} from './components';

const Home = () => {
  return (
    <div className="view view__home">
      <Header hideBackButton />
      <Container>
        <ExposureNotificationWarning />
        <Badge />
        <Smile />
        <TopMakeDiagnosisButton />
        <TriageRiskInformation />
        <TriageInfoBorder />
        <TriageRecommendations />
        <MoreInformation />
        <BottomMakeDiagnosisButton />
        <MakeDailyButton />
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default Home;
