import React from 'react';
import PropTypes from 'prop-types';

import Background from '../../assets/img/banners/banner-1.png';
import {
  Back,
  Banner,
  Brand,
  Button,
  Container,
  FieldSet
} from '../../components';
import './Daily.scss';
import { calendarPropType } from '../../utills/calendar';

const Daily = ({
  goToHistory,
  onBack,
  onFill,
  calendar: { today, previousDays }
}) => {
  return (
    <div className="view view__risk-test">
      <Banner background={Background}>
        <Back onClick={onBack} />
        <Brand content={false} small white />
      </Banner>
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
              disabled={!_obj.isFilled}
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
};

Daily.propTypes = {
  goToHistory: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onFill: PropTypes.func.isRequired,
  calendar: calendarPropType
};

export default Daily;
