import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { saveUser } from '../../store/actions/user';
import * as constants from '../../constants';
import { chronicSickValues } from '../../constants';
import Routes from '../../routes';
import useLoaderContext from '../../hooks/useLoaderContext';
import { ImprintFiller } from '../../components/ImprintFiller';
import { AGE_VALIDATOR } from '../../utills/validationSchemas';

const UserDataChange = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { setLoader } = useLoaderContext();
  const { age, bloodGroup, chronicSicks, name, sex, smokeNumber } = useSelector(
    state => state.user
  );

  const filledChronicsSicks = {};

  chronicSicks.forEach(_obj => {
    const { name: filledName, description: filledDescription } = _obj;
    filledChronicsSicks[filledName] = true;
    const foundedChronicsSick = chronicSickValues.find(
      value => value.field === filledName
    );
    if (foundedChronicsSick && filledDescription) {
      filledChronicsSicks[foundedChronicsSick.description] = filledDescription;
    }
  });

  const smoke = smokeNumber
    ? constants.VALUE_SMOKE_YES
    : constants.VALUE_SMOKE_NO;

  const isChronicSick =
    chronicSicks.length === 0
      ? constants.VALUE_IS_CHRONIC_SICK_NO
      : constants.VALUE_IS_CHRONIC_SICK_YES;

  const initialValues = {
    [constants.FIELD_AGE]: age,
    [constants.FIELD_SEX]: sex,
    [constants.FIELD_NAME]: name,
    [constants.FIELD_BLOOD_GROUP]: bloodGroup,
    [constants.FIELD_SMOKE]: smoke,
    [constants.FIELD_SMOKE_NUMBER]: smokeNumber,
    [constants.FIELD_IS_CHRONIC_SICK]: isChronicSick,
    step: 1,
    ...filledChronicsSicks
  };

  const validationSchema = Yup.object().shape({
    [constants.FIELD_NAME]: Yup.string()
      .trim()
      .min(3, 'Za krótkie imię')
      .max(20, 'Za długie imię')
      .matches( /^[a-zA-Z0-9wąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]+$/, 'Bez znaków specjalnych'),
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
    const chronicSicksFromForm = chronicSickValues
      .filter(sick => form[sick.field])
      .map(sick => {
        return { name: sick.field, description: form[sick.description] };
      });

    const data = {
      name: form[constants.FIELD_NAME],
      // phone: form[constants.FIELD_PHONE],
      sex: resolveSex(form[constants.FIELD_SEX]),
      age: form[constants.FIELD_AGE],
      chronicSicks: [...chronicSicksFromForm],
      bloodGroup: form[constants.FIELD_BLOOD_GROUP],
      smokeNumber: form[constants.FIELD_SMOKE_NUMBER]
    };

    const goHome = () => {
      setLoader(true);
      setTimeout(() => setLoader(false), 1000);
      history.push(Routes.Home);
    };

    dispatch(saveUser(data)).then(goHome);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <ImprintFiller editMode />
    </Formik>
  );
};

export default UserDataChange;
