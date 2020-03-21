import React from 'react';
import PropTypes from 'prop-types';

import Background from '../../assets/img/banners/banner-1.png';
import {
  Back,
  Banner,
  Brand,
  Button,
  Container,
  FieldSet,
  Legend
} from '../../components';
import { calendarPropType } from '../../utills/calendar';

const RiskTest = ({ onBack, onFill, calendar: { today, previousDays } }) => (
  <div className="view view__risk-test">
    <Banner background={Background}>
      <Back onClick={onBack} />
      <Brand content={false} small white />
    </Banner>
    <Container>
      <h4 className="h1 text-center medium">Dziennik</h4>
      <Legend />
      <div className="today">
        <Button
          onClick={onFill}
          text={`DZIŚ ${today} - KLIKNIJ I UZUPEŁNIJ DANE`}
          type="success-blank"
        />
      </div>
      <div className="line" />
      <FieldSet>
        {previousDays.map(_obj => (
          <Button
            key={_obj.day}
            onClick={() => null}
            text={_obj.day}
            type={_obj.isFilled ? 'success' : 'black'}
          />
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
