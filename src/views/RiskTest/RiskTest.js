import React from 'react';
import PropTypes from 'prop-types';

import Background from '../../assets/img/banners/banner-1.png';
import { Button, Container, FieldSet } from '../../components';
import { Header } from '../components';

import { daysDetailsPropType } from '../../utills/calendar';

const RiskTest = ({
  goToHistory,
  isFilledToday,
  onFill,
  today,
  previousDays
}) => (
  <div className="view view__risk-test">
    <Header background={Background} prevUrl="/" />
    <Container>
      <h4 className="h1 text-center medium">Test oceny ryzyka</h4>
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
  </div>
);

RiskTest.propTypes = {
  onFill: PropTypes.func.isRequired,
  goToHistory: PropTypes.func.isRequired,
  isFilledToday: PropTypes.bool.isRequired,
  today: PropTypes.string.isRequired,
  previousDays: daysDetailsPropType
};

export default RiskTest;
