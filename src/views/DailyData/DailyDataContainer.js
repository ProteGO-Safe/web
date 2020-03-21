import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
import { addDaily } from '../../store/actions/daily';

const DailyDataContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const daily = useSelector(state => state.daily);
  const { id } = useParams();

  const goBack = () => history.push('/daily');

  const handleSubmit = form => {
    dispatch(addDaily({ data: form })).then(goBack);
  };

  const dailyData = daily[[id]];

  const initialValues = {
    [FIELD_TEMPERATURE_MORNING]:
      (dailyData && dailyData.data[FIELD_TEMPERATURE_MORNING]) || '',
    [FIELD_TEMPERATURE_EVENING]:
      (dailyData && dailyData.data[FIELD_TEMPERATURE_EVENING]) || '',
    [FIELD_RUNNY_NOSE]:
      (dailyData && dailyData.data[FIELD_RUNNY_NOSE]) || VALUE_SYMPTOM_LEVEL_1,
    [FIELD_COUGH]:
      (dailyData && dailyData.data[FIELD_COUGH]) || VALUE_SYMPTOM_LEVEL_1,
    [FIELD_CHILLS]:
      (dailyData && dailyData.data[FIELD_CHILLS]) || VALUE_SYMPTOM_LEVEL_1,
    [FIELD_MUSCLE_PAIN]:
      (dailyData && dailyData.data[FIELD_MUSCLE_PAIN]) || VALUE_SYMPTOM_LEVEL_1,
    [FIELD_CONTACTS]: (dailyData && dailyData.data[FIELD_CONTACTS]) || ''
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <DailyData onBack={goBack} isViewMode={!!dailyData} />
    </Formik>
  );
};

export default DailyDataContainer;
