import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import { Button, Container, FieldSet, Imprint } from '../../components';
import { Form } from './components';
import './DailyData.scss';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';

const DailyData = ({ date, isViewMode, onBack }) => {
  const { dirty, submitForm } = useFormikContext();

  return (
    <div className="view view__data">
      <Header onBackClick={onBack} />
      <Container className="container__content">
        <h4 className="title medium">Dziennik zdrowia</h4>
        <p className="date medium">{date}</p>
        <Form isViewMode={isViewMode} />
        <Imprint hidePhoneNumber />
      </Container>
      <div className="footer">
        <Container className="container__footer">
          <FieldSet>
            <Button
              onClick={submitForm}
              text="Zapisz"
              type="primary"
              disabled={!dirty}
            />
          </FieldSet>
        </Container>
      </div>
      <BottomNavigation />
    </div>
  );
};

DailyData.propTypes = {
  isViewMode: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired
};

export default DailyData;
