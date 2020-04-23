import React from 'react';
import PropTypes from 'prop-types';

import { daysDetailsPropType } from '../../utills/calendar';
import Header from '../../components/Header/Header';
import LineItem from '../../components/LineItem/LineItem';
import { BottomNavigation } from '../../components/BottomNavigation';
import { BordersButton } from '../../components/BordersButton';
import { Icon, ListTitle, Title } from './RiskTest.styled';
import { Container, Content, View } from '../../theme/grid';

const RiskTest = ({ goToHistory, onFill, previousDays }) => (
  <View>
    <Header />
    <Content>
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
          return (
            <LineItem
              key={timestamp}
              onClick={() => goToHistory(timestamp)}
              text={text}
            />
          );
        })}
      </Container>
      <BottomNavigation />
    </Content>
  </View>
);

RiskTest.propTypes = {
  onFill: PropTypes.func.isRequired,
  goToHistory: PropTypes.func.isRequired,
  previousDays: daysDetailsPropType
};

export default RiskTest;
