import React from 'react';
import { useDispatch } from 'react-redux';
import FirstDiagnosisAsking from './FirstDiagnosisAsking';
import { finishFirstDiagnosis } from '../../store/actions/app';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';

const FirstDiagnosisAskingContainer = () => {
  const dispatch = useDispatch();
  const { goTo } = useNavigation();
  const goToDiagnosis = () => {
    goTo(Routes.Diagnosis);
  };
  const goToHome = () => {
    dispatch(finishFirstDiagnosis());
  };
  return (
    <>
      <FirstDiagnosisAsking onYesClick={goToDiagnosis} onNoClick={goToHome} />
    </>
  );
};

export default FirstDiagnosisAskingContainer;
