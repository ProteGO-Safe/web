import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from '../../../RiskTest/RiskTest.styled';
import { Button } from '../../../../components';
import Routes from '../../../../routes';

const MakeDiagnosisButton = () => {
  const history = useHistory();
  const goToDiagnosis = () => {
    history.push(Routes.Diagnosis);
  };

  return (
    <Button
      onClick={goToDiagnosis}
      label="Wykonaj TEST oceny ryzyka"
      type="border"
      icon={<Icon />}
    />
  );
};

export default MakeDiagnosisButton;
