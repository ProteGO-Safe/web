import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { saveUser } from '../../store/actions/user';

import {
  FIELD_AGE,
  FIELD_CHRONIC_SICK_1,
  FIELD_CHRONIC_SICK_2,
  FIELD_CHRONIC_SICK_3,
  FIELD_CHRONIC_SICK_4,
  FIELD_CHRONIC_SICK_5,
  FIELD_CHRONIC_SICK_6,
  FIELD_CHRONIC_SICK_7,
  FIELD_CHRONIC_SICK_1_DESC,
  FIELD_CHRONIC_SICK_2_DESC,
  FIELD_CHRONIC_SICK_3_DESC,
  FIELD_CHRONIC_SICK_4_DESC,
  FIELD_CHRONIC_SICK_5_DESC,
  FIELD_CHRONIC_SICK_6_DESC,
  FIELD_CHRONIC_SICK_7_DESC,
  FIELD_SEX,
  FIELD_NAME,
  FIELD_BLOOD_GROUP,
  FIELD_SMOKE_NUMBER, VALUE_MAN, VALUE_WOMAN
} from '../../constants';
import Registration from './Registration';

const RegistrationContainer = () => {
  const dispatch = useDispatch();

  const initialValues = {
    [FIELD_AGE]: '',
    [FIELD_SEX]: '',
    [FIELD_NAME]: '',
    [FIELD_CHRONIC_SICK_1]: false,
    [FIELD_CHRONIC_SICK_2]: false,
    [FIELD_CHRONIC_SICK_3]: false,
    [FIELD_CHRONIC_SICK_4]: false,
    [FIELD_CHRONIC_SICK_5]: false,
    [FIELD_CHRONIC_SICK_6]: false,
    [FIELD_CHRONIC_SICK_7]: false,
    [FIELD_CHRONIC_SICK_1_DESC]: '',
    [FIELD_CHRONIC_SICK_2_DESC]: '',
    [FIELD_CHRONIC_SICK_3_DESC]: '',
    [FIELD_CHRONIC_SICK_4_DESC]: '',
    [FIELD_CHRONIC_SICK_5_DESC]: '',
    [FIELD_CHRONIC_SICK_6_DESC]: '',
    [FIELD_CHRONIC_SICK_7_DESC]: '',
    [FIELD_BLOOD_GROUP]: '',
    installApp: true,
    step: 1,
    term1: false,
    term2: false
  };

  const resolveSex = field => {
    switch (field) {
      case VALUE_MAN:
        return 'male';
      case VALUE_WOMAN:
        return 'female';
      default:
        return '';
    }
  };

  const handleSubmit = form => {
    const chronicSicks = [];
    if (form[FIELD_CHRONIC_SICK_1]) chronicSicks.push({ name: FIELD_CHRONIC_SICK_1, time: form[FIELD_CHRONIC_SICK_1_DESC] });
    if (form[FIELD_CHRONIC_SICK_2]) chronicSicks.push({ name: FIELD_CHRONIC_SICK_2, time: form[FIELD_CHRONIC_SICK_2_DESC] });
    if (form[FIELD_CHRONIC_SICK_3]) chronicSicks.push({ name: FIELD_CHRONIC_SICK_3, time: form[FIELD_CHRONIC_SICK_3_DESC] });
    if (form[FIELD_CHRONIC_SICK_4]) chronicSicks.push({ name: FIELD_CHRONIC_SICK_4, time: form[FIELD_CHRONIC_SICK_4_DESC] });
    if (form[FIELD_CHRONIC_SICK_5]) chronicSicks.push({ name: FIELD_CHRONIC_SICK_5, time: form[FIELD_CHRONIC_SICK_5_DESC] });
    if (form[FIELD_CHRONIC_SICK_6]) chronicSicks.push({ name: FIELD_CHRONIC_SICK_6, time: form[FIELD_CHRONIC_SICK_6_DESC] });
    if (form[FIELD_CHRONIC_SICK_7]) chronicSicks.push({ name: FIELD_CHRONIC_SICK_7, time: form[FIELD_CHRONIC_SICK_7_DESC] });

    const data = {
      name: form[FIELD_AGE],
      sex: resolveSex(form[FIELD_SEX]),
      age: form[FIELD_AGE],
      chronicSicks: [...chronicSicks],
      bloodGroup: form[FIELD_BLOOD_GROUP],
      smokeNumber: form[FIELD_SMOKE_NUMBER]
    };

    dispatch(saveUser(data));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Registration />
    </Formik>
  );
};

export default RegistrationContainer;
