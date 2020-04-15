import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { daysDetailsPropType } from '../../utills/calendar';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Container, Icon, ListTitle, Title } from './RiskTest.styled';
import { BordersButton } from '../../components/BordersButton';
import LineItem from '../../components/LineItem/LineItem';

const RiskTest = ({ goToHistory, onFill, previousDays }) => (
  <Fragment>
    <Header title="Dziennik zdrowia" hideBackButton titlePosition="left" />
    <Container>
      <Title>Przygotowaliśmy dla Ciebie nowy test na dzisiaj.</Title>
      <BordersButton
        onClick={onFill}
        text="Wykonaj TEST oceny ryzyka"
        icon={<Icon />}
      />
      <ListTitle>Wykonane testy:</ListTitle>
      {previousDays.map(previousDay => {
        const { day, dayWeek, timestamp } = previousDay;
        const text = `Test: ${dayWeek} (${day} r.)`;
        return <LineItem onClick={() => goToHistory(timestamp)} text={text} />;
      })}
    </Container>
    <BottomNavigation />
  </Fragment>
);

RiskTest.propTypes = {
  onFill: PropTypes.func.isRequired,
  goToHistory: PropTypes.func.isRequired,
  previousDays: daysDetailsPropType
};

export default RiskTest;
