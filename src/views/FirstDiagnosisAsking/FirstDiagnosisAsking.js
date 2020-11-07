import React from 'react';
import { withTranslation } from 'react-i18next';
import { Button, Layout } from '../../components/index';
import { Paragraph, Small, ButtonWrapper } from './FirstDiagnosisAsking.styled';

const FirstDiagnosisAsking = ({ t, onYesClick, onNoClick }) => {
  return (
    <Layout id="view-first-diagnosis-asking" hideBackButton isGovFooter>
      <Paragraph>
        {t('first_diagnosis_asking_text1')}
        <br />
        {t('first_diagnosis_asking_text2')}
      </Paragraph>
      <Small>{t('first_diagnosis_asking_text3')}</Small>
      <ButtonWrapper>
        <Button
          label={t('first_diagnosis_asking_text4')}
          onClick={onYesClick}
        />
        <Button
          label={t('first_diagnosis_asking_text5')}
          type="outline"
          onClick={onNoClick}
        />
      </ButtonWrapper>
    </Layout>
  );
};

export default withTranslation()(FirstDiagnosisAsking);
