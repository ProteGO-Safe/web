import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { saveUserName } from '../../store/actions/user';
import * as constants from '../../constants';
import { EXPLAINER_STEP } from './Registration.constants';
import { Explainer } from './components/Explainer';
import { NameForm } from './components/NameForm';

const Registration = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(EXPLAINER_STEP);

  if (step === EXPLAINER_STEP) {
    return <Explainer onFinishClick={() => setStep(undefined)} />;
  }

  const initialValues = {
    [constants.FIELD_NAME]: '',
    [constants.FIELD_TERM1]: false
  };

  const validationSchema = Yup.object().shape({
    [constants.FIELD_NAME]: Yup.string()
      .trim()
      .min(3, 'Za krótki pseudonim')
      .max(20, 'Za długi pseudonim')
      .matches(/^[a-zA-Z0-9wąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]+$/, 'Bez znaków specjalnych'),
    [constants.FIELD_TERM1]: Yup.boolean().oneOf(
      [true],
      'Proszę zaznaczyć zgodę'
    )
  });

  const handleSubmit = form => {
    const data = {
      name: form[constants.FIELD_NAME]
    };

    dispatch(saveUserName(data));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <NameForm />
    </Formik>
  );
};

export default Registration;
