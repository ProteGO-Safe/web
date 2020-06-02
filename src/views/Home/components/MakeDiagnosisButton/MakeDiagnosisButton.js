import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from '../../../RiskTest/RiskTest.styled';
import { BordersButton } from '../../../../components/BordersButton';
import Routes from '../../../../routes';

const MakeDiagnosisButton = () => {
  const history = useHistory();
  const goToDiagnosis = () => {
    history.push(Routes.Diagnosis);
  };

  return (
    <BordersButton
      onClick={goToDiagnosis}
      text="Wykonaj TEST oceny ryzyka"
      icon={<Icon />}
    />
  );
};

export default MakeDiagnosisButton;
