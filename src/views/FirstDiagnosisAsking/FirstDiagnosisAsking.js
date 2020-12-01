import React from 'react';
import { Button, Layout, T } from '../../components/index';
import { Paragraph, Small, ButtonWrapper } from './FirstDiagnosisAsking.styled';

const FirstDiagnosisAsking = ({ onYesClick, onNoClick }) => {
  return (
    <Layout id="view-first-diagnosis-asking" hideBackButton isGovFooter>
      <Paragraph>
        <T i18nKey="first_diagnosis_asking_text1" />
        <br />
        <T i18nKey="first_diagnosis_asking_text2" />
      </Paragraph>
      <Small>
        <T i18nKey="first_diagnosis_asking_text3" />
      </Small>
      <ButtonWrapper>
        <Button label={<T i18nKey="first_diagnosis_asking_text4" />} onClick={onYesClick} />
        <Button label={<T i18nKey="first_diagnosis_asking_text5" />} type="outline" onClick={onNoClick} />
      </ButtonWrapper>
    </Layout>
  );
};

export default FirstDiagnosisAsking;
