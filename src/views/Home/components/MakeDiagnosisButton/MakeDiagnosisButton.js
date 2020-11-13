import React from 'react';
import { withTranslation } from 'react-i18next';
import { Icon } from '../../../RiskTest/RiskTest.styled';
import { Button } from '../../../../components';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';

const MakeDiagnosisButton = ({ t }) => {
  const { goTo } = useNavigation();
  const goToDiagnosis = () => {
    goTo(Routes.Diagnosis);
  };

  return (
    <Button
      onClick={goToDiagnosis}
      label={t('make_diagnosis_button_text1')}
      type="border"
      icon={<Icon />}
    />
  );
};

export default withTranslation()(MakeDiagnosisButton);
