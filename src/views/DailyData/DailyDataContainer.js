import React from 'react';

import { Formik } from 'formik';
import DailyData from './DailyData';
import {
  FIELD_CHILLS,
  FIELD_CONTACTS,
  FIELD_COUGH,
  FIELD_MUSCLE_PAIN,
  FIELD_RUNNY_NOSE,
  FIELD_TEMPERATURE_EVENING,
  FIELD_TEMPERATURE_MORNING,
  VALUE_SYMPTOM_LEVEL_1
} from '../../constants';

const DailyDataContainer = () => {
  const initialValues = {
    [FIELD_TEMPERATURE_MORNING]: '',
    [FIELD_TEMPERATURE_EVENING]: '',
    [FIELD_RUNNY_NOSE]: VALUE_SYMPTOM_LEVEL_1,
    [FIELD_COUGH]: VALUE_SYMPTOM_LEVEL_1,
    [FIELD_CHILLS]: VALUE_SYMPTOM_LEVEL_1,
    [FIELD_MUSCLE_PAIN]: VALUE_SYMPTOM_LEVEL_1,
    [FIELD_CONTACTS]: ''
  };
  const handleSubmit = () => {};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <DailyData />
    </Formik>
  );
};

export default DailyDataContainer;
