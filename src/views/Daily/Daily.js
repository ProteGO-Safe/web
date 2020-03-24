import React from 'react';
import PropTypes from 'prop-types';

import { daysDetailsPropType } from '../../utills/calendar';
import Background from '../../assets/img/banners/banner-1.png';
import { Button, Container, FieldSet } from '../../components';
import { Header } from '../components';
import './Daily.scss';

const Daily = ({ goToHistory, onFill, today, previousDays }) => {
  return (
    <div className="view view__risk-test">
      <Header background={Background} prevUrl="/" />
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
    </div>
  );
};

Daily.propTypes = {
  goToHistory: PropTypes.func.isRequired,
  onFill: PropTypes.func.isRequired,
  today: PropTypes.string.isRequired,
  previousDays: daysDetailsPropType
};

export default Daily;
