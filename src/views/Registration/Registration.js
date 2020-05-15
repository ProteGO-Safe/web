import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { saveUser } from '../../store/actions/user';
import * as constants from '../../constants';
import { chronicSickValues } from '../../constants';
import { EXPLAINER_STEP } from './Registration.constants';
import { Explainer } from './components/Explainer';
import { ImprintFiller } from '../../components/ImprintFiller';
import { AGE_VALIDATOR } from '../../utils/validationSchemas';

const Registration = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(EXPLAINER_STEP);

  if (step === EXPLAINER_STEP) {
    return <Explainer onFinishClick={() => setStep(undefined)} />;
  }

  const initialValues = {
    [constants.FIELD_AGE]: '',
    [constants.FIELD_SEX]: '',
    [constants.FIELD_NAME]: '',
    // [constants.FIELD_PHONE]: '',
    [constants.FIELD_BLOOD_GROUP]: '',
    step: 1,
    [constants.FIELD_TERM1]: false
  };

  const validationSchema = Yup.object().shape({
    [constants.FIELD_NAME]: Yup.string()
      .trim()
      .min(3, 'Za krótkie imię')
      .max(20, 'Za długie imię')
      .matches(/^[a-zA-Z0-9wąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]+$/, 'Bez znaków specjalnych'),
    // [constants.FIELD_PHONE]: Yup.string().required(
    //   'Numer telefonu jest wymagany'
    // ),
    [constants.FIELD_TERM1]: Yup.boolean().oneOf(
      [true],
      'Proszę zaznaczyć zgodę'
    ),
    [constants.FIELD_AGE]: AGE_VALIDATOR
  });

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
      // phone: form[constants.FIELD_PHONE],
      sex: resolveSex(form[constants.FIELD_SEX]),
      age: form[constants.FIELD_AGE],
      chronicSicks: [...chronicSicks],
      bloodGroup: form[constants.FIELD_BLOOD_GROUP],
      smokeNumber: form[constants.FIELD_SMOKE_NUMBER]
    };

    dispatch(saveUser(data));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <ImprintFiller />
    </Formik>
  );
};

export default Registration;
