import React from 'react';

import {
  Badge,
  Container,
  Notification,
  Smile,
  Info,
  InfoBorder,
  BordersButton
} from '../../components';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import './Home.scss';
import { Icon } from '../RiskTest/RiskTest.styled';

const Home = ({
  lastDate,
  infoContent,
  seriousNames,
  riskColor,
  riskDescription,
  riskGroup,
  riskInfo,
  riskLevel,
  showBadge,
  showNotification,
  triage,
  userName,
  onClickGoToDiagnosis
}) => {
  return (
    <div className="view view__home">
      <Header hideBackButton />
      <Container>
        {showBadge && <Badge />}
        <Smile
          userName={userName}
          lastDate={lastDate}
          riskGroup={riskGroup}
          icon={riskLevel}
        />
        <BordersButton
          onClick={onClickGoToDiagnosis}
          text="Wykonaj TEST oceny ryzyka"
          icon={<Icon />}
        />
        {triage && <Info color={riskColor} content={infoContent} />}
        {triage && (
          <InfoBorder
            content={riskDescription}
            color={riskColor}
            items={seriousNames}
          />
        )}
        {riskInfo}
      </Container>
      {showNotification && <Notification />}
      <BottomNavigation />
    </div>
  );
};

export default Home;
