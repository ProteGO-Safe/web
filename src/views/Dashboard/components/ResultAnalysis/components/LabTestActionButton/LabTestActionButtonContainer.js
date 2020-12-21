import React, { useMemo } from 'react';
import { and, not, or } from 'ramda';
import LabTestActionButton from './LabTestActionButton';
import useHealthStats from '../../../../../../hooks/useHealthStats';
import useLabTest from '../../../../../../hooks/useLabTest';
import { T } from '../../../../../../components';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';

const LabTestActionButtonContainer = () => {
  const { goTo } = useNavigation();
  const { noTor, noEn, isTorLow, isEnLow } = useHealthStats();
  const { isSubscriptionInProgress, isSubscriptionVerified } = useLabTest();

  const prepareData = (titleLabel, descriptionLabel, onClick) => {
    return {
      title: <T i18nKey={titleLabel} />,
      description: <T i18nKey={descriptionLabel} />,
      onClick
    };
  };

  const readyForLabTest = and(not(or(noTor, isTorLow)), not(or(noEn, isEnLow)));

  const data = useMemo(() => {
    if (and(readyForLabTest, not(isSubscriptionInProgress))) {
      return prepareData('result_analysis_text_17', 'result_analysis_text_18', () => goTo(Routes.LabTest));
    }
    if (and(not(readyForLabTest), not(isSubscriptionInProgress))) {
      return prepareData('result_analysis_text_17_1', 'result_analysis_text_18_1', () => goTo(Routes.Diagnosis));
    }
    if (isSubscriptionVerified) {
      return prepareData('result_analysis_text_17_2', 'result_analysis_text_18_2');
    }
    return undefined;
  }, [isSubscriptionInProgress, isSubscriptionVerified, readyForLabTest, goTo]);

  if (not(readyForLabTest)) {
    return null;
  }

  if (!data) {
    return null;
  }

  return <LabTestActionButton title={data.title} description={data.description} onClick={data.onClick} />;
};

export default LabTestActionButtonContainer;
