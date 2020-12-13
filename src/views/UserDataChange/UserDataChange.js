import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { withTranslation } from 'react-i18next';
import { saveUser } from '../../store/actions/user';
import * as constants from '../../constants';
import { chronicSickValues } from '../../constants';
import useLoaderContext from '../../hooks/useLoaderContext';
import { ImprintFiller } from '../../components/ImprintFiller';
import { userNameValidationSchema } from '../../utils/user';
import useNavigation from '../../hooks/useNavigation';
import { revokeEnStatus } from '../../store/actions/nativeData';
import { revokeManualCovid, revokeTorStatus } from '../../store/actions/triage';
import { Routes } from '../../services/navigationService/routes';

const UserDataChange = ({ t }) => {
  const { goTo } = useNavigation();
  const dispatch = useDispatch();
  const { setLoader } = useLoaderContext();
  const { bloodGroup, chronicSicks, name, smokeNumber } = useSelector(state => state.user);

  const filledChronicsSicks = (() => {
    if (chronicSicks === undefined) {
      return undefined;
    }
    const filledChronicsSicksToReturn = {};
    chronicSicks.forEach(_obj => {
      const { name: filledName, description: filledDescription } = _obj;
      filledChronicsSicksToReturn[filledName] = true;
      const foundedChronicsSick = chronicSickValues.find(value => value.field === filledName);
      if (foundedChronicsSick && filledDescription) {
        filledChronicsSicksToReturn[foundedChronicsSick.description] = filledDescription;
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
    return chronicSicks.length === 0 ? constants.VALUE_IS_CHRONIC_SICK_NO : constants.VALUE_IS_CHRONIC_SICK_YES;
  })();

  const initialValues = {
    [constants.FIELD_NAME]: name,
    [constants.FIELD_BLOOD_GROUP]: bloodGroup,
    [constants.FIELD_SMOKE]: smoke,
    [constants.FIELD_SMOKE_NUMBER]: smokeNumber,
    [constants.FIELD_IS_CHRONIC_SICK]: isChronicSick,
    [constants.FIELD_MANUAL_COVID]: true,
    ...filledChronicsSicks
  };

  const validationSchema = Yup.object().shape({
    [constants.FIELD_NAME]: userNameValidationSchema,
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

    const goToHome = revoke => {
      setLoader(true);
      setTimeout(() => {
        goTo(Routes.Home);
        if (revoke) {
          dispatch(revokeTorStatus());
          dispatch(revokeManualCovid());
        }
        setLoader(false);
      }, 1000);
    };

    if (form[constants.FIELD_MANUAL_COVID] === false) {
      dispatch(saveUser(data)).then(() =>
        dispatch(revokeEnStatus()).then(() => {
          goToHome(true);
        })
      );
      return;
    }

    dispatch(saveUser(data)).then(() => goToHome(false));
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
