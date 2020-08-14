import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { withTranslation } from 'react-i18next';
import { saveUser } from '../../store/actions/user';
import * as constants from '../../constants';
import { chronicSickValues } from '../../constants';
import Routes from '../../routes';
import useLoaderContext from '../../hooks/useLoaderContext';
import { ImprintFiller } from '../../components/ImprintFiller';

const UserDataChange = ({ t }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { setLoader } = useLoaderContext();
  const { bloodGroup, chronicSicks, name, smokeNumber } = useSelector(
    state => state.user
  );

  const filledChronicsSicks = (() => {
    if (chronicSicks === undefined) {
      return undefined;
    }
    const filledChronicsSicksToReturn = {};
    chronicSicks.forEach(_obj => {
      const { name: filledName, description: filledDescription } = _obj;
      filledChronicsSicksToReturn[filledName] = true;
      const foundedChronicsSick = chronicSickValues.find(
        value => value.field === filledName
      );
      if (foundedChronicsSick && filledDescription) {
        filledChronicsSicksToReturn[
          foundedChronicsSick.description
        ] = filledDescription;
      }
    });
    return filledChronicsSicksToReturn;
  })();

  const smoke = (() => {
    if (smokeNumber === undefined) {
      return undefined;
    }
    return smokeNumber ? t('yes') : t('no');
  })();

  const isChronicSick = (() => {
    if (chronicSicks === undefined) {
      return undefined;
    }
    return chronicSicks.length === 0
      ? constants.VALUE_IS_CHRONIC_SICK_NO
      : constants.VALUE_IS_CHRONIC_SICK_YES;
  })();

  const initialValues = {
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
      .min(1, 'name_form_text7')
      .max(12, 'name_form_text8')
      .matches(/^[a-zA-Z0-9wąćęłńóśźżĄĆĘŁŃÓŚŹŻ ]+$/, 'name_form_text9'),
    [constants.FIELD_TERM1]: Yup.boolean().oneOf([true], t('name_form_text10'))
  });

  const handleSubmit = form => {
    const chronicSicksFromForm = chronicSickValues
      .filter(sick => form[sick.field])
      .map(sick => {
        return { name: sick.field, description: form[sick.description] };
      });

    const data = {
      name: form[constants.FIELD_NAME],
      chronicSicks: [...chronicSicksFromForm],
      bloodGroup: form[constants.FIELD_BLOOD_GROUP],
      smokeNumber: form[constants.FIELD_SMOKE_NUMBER],
      isSmoking: form[constants.FIELD_SMOKE] === t('yes')
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
      <ImprintFiller />
    </Formik>
  );
};

export default withTranslation()(UserDataChange);
