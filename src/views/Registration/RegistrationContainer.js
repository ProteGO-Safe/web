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
  FIELD_BLOOD_GROUP
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
    step: 8,
    term1: false,
    term2: false
  };

  const handleSubmit = form => dispatch(saveUser(form));

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Registration />
    </Formik>
  );
};

export default RegistrationContainer;
