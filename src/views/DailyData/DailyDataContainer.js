import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
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
  VALUE_SYMPTOM_LEVEL_1
} from '../../constants';
import { addDaily } from '../../store/actions/daily';
import Routes from '../../routes';

const dateFormat = 'D-MM-YYYY';

const DailyDataContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const daily = useSelector(state => state.daily);
  const { id } = useParams();

  const goBack = () => history.push(Routes.Daily);

  const handleSubmit = form => {
    dispatch(addDaily({ data: form })).then(goBack);
  };

  const dailyData = daily[[id]];
  const date =
    (id && moment.unix(id).format(dateFormat)) || moment().format(dateFormat);

  const validationSchema = Yup.object().shape({
    [FIELD_TEMPERATURE]: Yup.number()
      .min(25, 'Za niska wartość temperatury')
      .max(45, 'Za wysoka wartość temperatury')
  });

  const initialValues = {
    [FIELD_TEMPERATURE]: (dailyData && dailyData.data[FIELD_TEMPERATURE]) || '',
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
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <DailyData onBack={goBack} isViewMode={!!dailyData} date={date} />
    </Formik>
  );
};

export default DailyDataContainer;
