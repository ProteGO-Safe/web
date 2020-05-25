import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from '../../views/RiskTest/RiskTest.styled';
import { BordersButton } from '../BordersButton';
import useTriage from '../../hooks/useTriage';

const MakeDiagnosisButton = () => {
  const history = useHistory();
  const { isExposure = false } = useTriage();
  const goToDiagnosis = () => {
    history.push('/diagnosis');
  };

  return (
    !isExposure && (
      <BordersButton
        onClick={goToDiagnosis}
        text="Wykonaj TEST oceny ryzyka"
        icon={<Icon />}
      />
    )
  );
};

export default MakeDiagnosisButton;
