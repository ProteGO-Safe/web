import React from 'react';
import PropTypes from 'prop-types';

import { daysDetailsPropType } from '../../utills/calendar';
import { Button, Container, FieldSet } from '../../components';
import './Daily.scss';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';

const Daily = ({ goToHistory, onBack, onFill, today, previousDays }) => {
  return (
    <div className="view view__risk-test">
      <Header onBackClick={onBack} />
      <Container>
        <h4 className="h1 text-center medium">Moje zdrowie</h4>
        <div className="today">
          <Button
            onClick={onFill}
            text={`DZIŚ ${today} - KLIKNIJ I UZUPEŁNIJ DANE`}
            type="primary"
          />
        </div>
        <div className="line" />
        <FieldSet>
          {previousDays.map(_obj => (
            <Button
              key={_obj.timestamp}
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
};

Daily.propTypes = {
  goToHistory: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onFill: PropTypes.func.isRequired,
  today: PropTypes.string.isRequired,
  previousDays: daysDetailsPropType
};

export default Daily;
