import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { saveUser } from '../../store/actions/user';

import * as constants from '../../constants';
import Registration from './Registration';
import { chronicSickValues } from '../../constants';

const RegistrationContainer = () => {
  const dispatch = useDispatch();

  const initialValues = {
    [constants.FIELD_AGE]: '',
    [constants.FIELD_SEX]: '',
    [constants.FIELD_NAME]: '',
    [constants.FIELD_BLOOD_GROUP]: '',
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
    const chronicSicks = chronicSickValues
      .filter(sick => form[sick.field])
      .map(sick => {
        return { name: sick.field, description: form[sick.description] };
      });

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
