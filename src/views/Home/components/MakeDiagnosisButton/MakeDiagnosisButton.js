import React from 'react';
import { Icon } from '../../../RiskTest/RiskTest.styled';
import { Button, T } from '../../../../components';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';

const MakeDiagnosisButton = () => {
  const { goTo } = useNavigation();
  const goToDiagnosis = () => {
    goTo(Routes.Diagnosis);
  };

  return (
    <Button onClick={goToDiagnosis} label={<T i18nKey="make_diagnosis_button_text1" />} type="border" icon={<Icon />} />
  );
};

export default MakeDiagnosisButton;
