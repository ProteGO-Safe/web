import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import DailyData from './DailyData';
import {
  FIELD_CHILLS,
  FIELD_CONTACTS,
  FIELD_COUGH,
  FIELD_MUSCLE_PAIN,
  FIELD_RUNNY_NOSE,
  FIELD_TEMPERATURE,
  FIELD_TIME,
  VALUE_SYMPTOM_LEVEL_1
} from '../../constants';
import { addDaily, updateDaily } from '../../store/actions/daily';
import { DAILY_DATA_MODE } from './dailyData.constants';
import { isEditMode } from './dailyData.helpers';
import useNavigation from '../../hooks/useNavigation';

const DailyDataContainer = () => {
  const dispatch = useDispatch();
  const daily = useSelector(state => state.daily);
  const { getParam, goBack } = useNavigation();

  const goHome = () => goBack();

  const id = getParam('id');

  const dailyData = daily[id];

  const validationSchema = Yup.object().shape({
    [FIELD_TEMPERATURE]: Yup.number()
      .min(35, 'form_text15')
      .max(45, 'form_text16')
  });

  const initialValues = {
    [FIELD_TEMPERATURE]: (dailyData && dailyData.data[FIELD_TEMPERATURE]) || '',
    [FIELD_RUNNY_NOSE]: (dailyData && dailyData.data[FIELD_RUNNY_NOSE]) || VALUE_SYMPTOM_LEVEL_1,
    [FIELD_COUGH]: (dailyData && dailyData.data[FIELD_COUGH]) || VALUE_SYMPTOM_LEVEL_1,
    [FIELD_CHILLS]: (dailyData && dailyData.data[FIELD_CHILLS]) || VALUE_SYMPTOM_LEVEL_1,
    [FIELD_MUSCLE_PAIN]: (dailyData && dailyData.data[FIELD_MUSCLE_PAIN]) || VALUE_SYMPTOM_LEVEL_1,
    [FIELD_CONTACTS]: (dailyData && dailyData.data[FIELD_CONTACTS]) || '',
    [FIELD_TIME]: (dailyData && dailyData.data[FIELD_TIME]) || new Date()
  };

  const [mode, setMode] = useState(dailyData ? DAILY_DATA_MODE.VIEW : DAILY_DATA_MODE.CREATE);

  const handleSubmit = form => {
    if (!isEditMode(mode)) {
      dispatch(addDaily({ data: form })).then(goHome);
      return;
    }

    dispatch(updateDaily({ data: form }, id)).then(goHome);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <DailyData mode={mode} setMode={setMode} />
    </Formik>
  );
};

export default DailyDataContainer;
