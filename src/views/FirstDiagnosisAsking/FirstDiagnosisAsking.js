import React from 'react';
import { Button, T } from '../../components/index';
import { ButtonWrapper, Paragraph, Small } from './FirstDiagnosisAsking.styled';

const FirstDiagnosisAsking = ({ onYesClick, onNoClick }) => {
  return (
    <>
      <Paragraph>
        <T i18nKey="first_diagnosis_asking_text1" />
      </Paragraph>
      <Small>
        <T i18nKey="first_diagnosis_asking_text3" />
      </Small>
      <ButtonWrapper>
        <Button label={<T i18nKey="first_diagnosis_asking_text4" />} onClick={onYesClick} />
        <Button label={<T i18nKey="first_diagnosis_asking_text5" />} type="outline" onClick={onNoClick} />
      </ButtonWrapper>
    </>
  );
};

export default FirstDiagnosisAsking;
