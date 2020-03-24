import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { saveUser } from '../../store/actions/user';

import * as constants from '../../constants';
import Registration from './Registration';

const RegistrationContainer = () => {
  const dispatch = useDispatch();

  const initialValues = {
    [constants.FIELD_AGE]: '',
    [constants.FIELD_SEX]: '',
    [constants.FIELD_NAME]: '',
    [constants.FIELD_CHRONIC_SICK_1]: false,
    [constants.FIELD_CHRONIC_SICK_2]: false,
    [constants.FIELD_CHRONIC_SICK_3]: false,
    [constants.FIELD_CHRONIC_SICK_4]: false,
    [constants.FIELD_CHRONIC_SICK_5]: false,
    [constants.FIELD_CHRONIC_SICK_6]: false,
    [constants.FIELD_CHRONIC_SICK_7]: false,
    [constants.FIELD_CHRONIC_SICK_8]: false,
    [constants.FIELD_CHRONIC_SICK_9]: false,
    [constants.FIELD_CHRONIC_SICK_10]: false,
    [constants.FIELD_CHRONIC_SICK_11]: false,
    [constants.FIELD_CHRONIC_SICK_12]: false,
    [constants.FIELD_CHRONIC_SICK_13]: false,
    [constants.FIELD_CHRONIC_SICK_14]: false,
    [constants.FIELD_CHRONIC_SICK_15]: false,
    [constants.FIELD_CHRONIC_SICK_1_DESC]: '',
    [constants.FIELD_CHRONIC_SICK_2_DESC]: '',
    [constants.FIELD_CHRONIC_SICK_3_DESC]: '',
    [constants.FIELD_CHRONIC_SICK_4_DESC]: '',
    [constants.FIELD_CHRONIC_SICK_5_DESC]: '',
    [constants.FIELD_CHRONIC_SICK_6_DESC]: '',
    [constants.FIELD_CHRONIC_SICK_7_DESC]: '',
    [constants.FIELD_CHRONIC_SICK_8_DESC]: '',
    [constants.FIELD_CHRONIC_SICK_9_DESC]: '',
    [constants.FIELD_CHRONIC_SICK_10_DESC]: '',
    [constants.FIELD_CHRONIC_SICK_11_DESC]: '',
    [constants.FIELD_CHRONIC_SICK_12_DESC]: '',
    [constants.FIELD_CHRONIC_SICK_13_DESC]: '',
    [constants.FIELD_CHRONIC_SICK_14_DESC]: '',
    [constants.FIELD_CHRONIC_SICK_15_DESC]: '',
    [constants.FIELD_BLOOD_GROUP]: '',
    installApp: true,
    step: 1,
    term1: false,
    term2: false
  };

  const resolveSex = field => {
    switch (field) {
      case constants.VALUE_MAN:
        return 'male';
      case constants.VALUE_WOMAN:
        return 'female';
      default:
        return '';
    }
  };

  const handleSubmit = form => {
    const chronicSicks = [];
    if (form[constants.FIELD_CHRONIC_SICK_1]) chronicSicks.push({ name: constants.FIELD_CHRONIC_SICK_1, description: form[constants.FIELD_CHRONIC_SICK_1_DESC] });
    if (form[constants.FIELD_CHRONIC_SICK_2]) chronicSicks.push({ name: constants.FIELD_CHRONIC_SICK_2, description: form[constants.FIELD_CHRONIC_SICK_2_DESC] });
    if (form[constants.FIELD_CHRONIC_SICK_3]) chronicSicks.push({ name: constants.FIELD_CHRONIC_SICK_3, description: form[constants.FIELD_CHRONIC_SICK_3_DESC] });
    if (form[constants.FIELD_CHRONIC_SICK_4]) chronicSicks.push({ name: constants.FIELD_CHRONIC_SICK_4, description: form[constants.FIELD_CHRONIC_SICK_4_DESC] });
    if (form[constants.FIELD_CHRONIC_SICK_5]) chronicSicks.push({ name: constants.FIELD_CHRONIC_SICK_5, description: form[constants.FIELD_CHRONIC_SICK_5_DESC] });
    if (form[constants.FIELD_CHRONIC_SICK_6]) chronicSicks.push({ name: constants.FIELD_CHRONIC_SICK_6, description: form[constants.FIELD_CHRONIC_SICK_6_DESC] });
    if (form[constants.FIELD_CHRONIC_SICK_7]) chronicSicks.push({ name: constants.FIELD_CHRONIC_SICK_7, description: form[constants.FIELD_CHRONIC_SICK_7_DESC] });
    if (form[constants.FIELD_CHRONIC_SICK_8]) chronicSicks.push({ name: constants.FIELD_CHRONIC_SICK_8, description: form[constants.FIELD_CHRONIC_SICK_8_DESC] });
    if (form[constants.FIELD_CHRONIC_SICK_9]) chronicSicks.push({ name: constants.FIELD_CHRONIC_SICK_9, description: form[constants.FIELD_CHRONIC_SICK_9_DESC] });
    if (form[constants.FIELD_CHRONIC_SICK_10]) chronicSicks.push({ name: constants.FIELD_CHRONIC_SICK_10, description: form[constants.FIELD_CHRONIC_SICK_10_DESC] });
    if (form[constants.FIELD_CHRONIC_SICK_11]) chronicSicks.push({ name: constants.FIELD_CHRONIC_SICK_11, description: form[constants.FIELD_CHRONIC_SICK_11_DESC] });
    if (form[constants.FIELD_CHRONIC_SICK_12]) chronicSicks.push({ name: constants.FIELD_CHRONIC_SICK_12, description: form[constants.FIELD_CHRONIC_SICK_12_DESC] });
    if (form[constants.FIELD_CHRONIC_SICK_13]) chronicSicks.push({ name: constants.FIELD_CHRONIC_SICK_13, description: form[constants.FIELD_CHRONIC_SICK_13_DESC] });
    if (form[constants.FIELD_CHRONIC_SICK_14]) chronicSicks.push({ name: constants.FIELD_CHRONIC_SICK_14, description: form[constants.FIELD_CHRONIC_SICK_14_DESC] });
    if (form[constants.FIELD_CHRONIC_SICK_15]) chronicSicks.push({ name: constants.FIELD_CHRONIC_SICK_15, description: form[constants.FIELD_CHRONIC_SICK_15_DESC] });

    const data = {
      name: form[constants.FIELD_NAME],
      sex: resolveSex(form[constants.FIELD_SEX]),
      age: form[constants.FIELD_AGE],
      chronicSicks: [...chronicSicks],
      bloodGroup: form[constants.FIELD_BLOOD_GROUP],
      smokeNumber: form[constants.FIELD_SMOKE_NUMBER]
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
