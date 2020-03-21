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
import { calendarPropType } from '../../utills/calendar';

const RiskTest = ({ onBack, onFill, calendar: { today, previousDays } }) => (
  <div className="view view__risk-test">
    <Banner background={Background}>
      <Back onClick={onBack} />
      <Brand content={false} small white />
    </Banner>
    <Container>
      <h4 className="h1 text-center medium">Test oceny ryzyka</h4>
      <div className="today">
        <Button
          onClick={onFill}
          text={`DZIŚ ${today} - WYKONAJ TEST`}
          type="primary"
        />
      </div>
      <div className="line" />
      <FieldSet>
        {previousDays.map(_obj => (
          <Button key={_obj.day} onClick={() => null} text="" type="gray">
            <span>{_obj.dayWeek}</span>
            <span className="text-bold">{_obj.day}</span>
          </Button>
        ))}
      </FieldSet>
    </Container>
  </div>
);

RiskTest.propTypes = {
  onBack: PropTypes.func.isRequired,
  onFill: PropTypes.func.isRequired,
  calendar: calendarPropType
};

export default RiskTest;
