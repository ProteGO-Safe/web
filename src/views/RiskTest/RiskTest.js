import React from 'react';
import PropTypes from 'prop-types';

import { Button, Container, FieldSet } from '../../components';

import { daysDetailsPropType } from '../../utills/calendar';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';

const RiskTest = ({
  goToHistory,
  isFilledToday,
  onBack,
  onFill,
  today,
  previousDays
}) => (
  <div className="view view__risk-test">
    <Header onBackClick={onBack} />
    <Container>
      <h4 className="h1 text-center medium">
        Ankiety Oceny Ryzyka - wypełniaj ankietę 1x dziennie
      </h4>
      <div className="today">
        <Button
          onClick={onFill}
          text={`DZIŚ ${today}${!isFilledToday ? ' - WYKONAJ TEST' : ''}`}
          type={isFilledToday ? 'gray' : 'primary'}
        />
      </div>
      <div className="line" />
      <FieldSet>
        {previousDays.map(_obj => (
          <Button
            key={_obj.day}
            onClick={() => goToHistory(_obj.timestamp)}
            text=""
            type="gray"
          >
            <span>{_obj.dayWeek}</span>
            <span className="text-bold">{_obj.day}</span>
          </Button>
        ))}
      </FieldSet>
    </Container>
    <BottomNavigation />
  </div>
);

RiskTest.propTypes = {
  onBack: PropTypes.func.isRequired,
  onFill: PropTypes.func.isRequired,
  goToHistory: PropTypes.func.isRequired,
  isFilledToday: PropTypes.bool.isRequired,
  today: PropTypes.string.isRequired,
  previousDays: daysDetailsPropType
};

export default RiskTest;
