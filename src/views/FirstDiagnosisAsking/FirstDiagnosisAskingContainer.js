import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FirstDiagnosisAsking from './FirstDiagnosisAsking';
import { finishFirstDiagnosis } from '../../store/actions/app';
import Routes from '../../routes';

const FirstDiagnosisAskingContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const goToDiagnosis = () => {
    history.push({
      pathname: Routes.Diagnosis,
      search: '?p=1'
    });
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
