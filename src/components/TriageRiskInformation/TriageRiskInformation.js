import React from 'react';
import { InfoContainer } from './TriageRiskInformation.styled';
import useTriage from '../../hooks/useTriage';

const TriageRiskInformation = () => {
  const { isDangerous, color, content } = useTriage();

  return (
    isDangerous && (
      <InfoContainer color={color}>
        <p>{content}</p>
      </InfoContainer>
    )
  );
};

export default TriageRiskInformation;
