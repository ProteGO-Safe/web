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

const Daily = ({ onBack, onDiagnosis, today, previousDays }) => {
  return (
    <div className="view view__my-health">
      <Banner background={Background}>
        <Back onClick={onBack} />
        <Brand content={false} small white />
      </Banner>
      <Container>
        <h4 className="h1 text-center medium">Dziennik</h4>
        <Legend />
        <div className="today">
          <Button
            onClick={onDiagnosis}
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
              type={_obj.wasDiagnosis ? 'success' : 'black'}
            />
          ))}
        </FieldSet>
      </Container>
    </div>
  );
};

Daily.propTypes = {
  onBack: PropTypes.func.isRequired,
  onDiagnosis: PropTypes.func.isRequired,
  today: PropTypes.string.isRequired,
  previousDays: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      wasDiagnosis: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default Daily;
