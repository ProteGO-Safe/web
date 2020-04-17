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
        <div className="more-information">
          <h4>Więcej informacji</h4>
          <p>
            Aby dowiedzieć się więcej zapoznaj się z wytycznymi CDC, wytycznymi
            WHO oraz poradami udzielonymi przez władze twojego kraju.
          </p>
          <small>
            Pamiętaj, że wyniki wywiadu służą wyłącznie celom informacyjnym oraz
            edukacyjnym i nie mogą być w żadnym wypadku interpretowane ani
            traktowane jako porada, konsultacja lub diagnoza lekarska.
          </small>
        </div>
      </Container>
      {showNotification && <Notification />}
      <BottomNavigation />
    </div>
  );
};

export default Home;
