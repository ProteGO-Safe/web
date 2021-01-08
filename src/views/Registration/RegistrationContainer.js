import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { saveUserName } from '../../store/actions/user';
import * as constants from '../../constants';
import Registration from './Registration';
import { userNameValidationSchema } from '../../utils/user';
import { Layout } from '../../components';

const RegistrationContainer = () => {
  const dispatch = useDispatch();

  const initialValues = {
    step: 1,
    [constants.FIELD_NAME]: '',
    [constants.FIELD_TERM1]: false
  };

  const validationSchema = Yup.object().shape({
    [constants.FIELD_NAME]: userNameValidationSchema
  });

  const handleSubmit = form => {
    const data = {
      name: form[constants.FIELD_NAME]
    };

    dispatch(saveUserName(data));
  };

  return (
    <Layout hideBackButton isGovFooter hideBell>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
      >
        <Registration />
      </Formik>
    </Layout>
  );
};

export default RegistrationContainer;
