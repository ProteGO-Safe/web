import React, { useMemo } from 'react';
import { and, not } from 'ramda';
import LabTestActionButton from './LabTestActionButton';
import useLabTest from '../../../../../../hooks/useLabTest';
import { T } from '../../../../../../components';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';
import useReadyForLabTest from '../../../../../../hooks/useReadyForLabTest';

const LabTestActionButtonContainer = () => {
  const { goTo } = useNavigation();
  const readyForLabTest = useReadyForLabTest();
  const { isSubscriptionInProgress, isSubscriptionVerified } = useLabTest();

  const prepareData = (titleLabel, descriptionLabel, onClick, hideArrow = false) => {
    return {
      title: <T i18nKey={titleLabel} />,
      description: <T i18nKey={descriptionLabel} />,
      onClick,
      hideArrow
    };
  };

  const data = useMemo(() => {
    if (and(readyForLabTest, not(isSubscriptionInProgress))) {
      return prepareData('result_analysis_text_17', 'result_analysis_text_18', () => goTo(Routes.LabTest));
    }
    if (and(not(readyForLabTest), not(isSubscriptionInProgress))) {
      return prepareData('result_analysis_text_17_1', 'result_analysis_text_18_1', () => goTo(Routes.Diagnosis));
    }
    if (isSubscriptionVerified) {
      return prepareData('result_analysis_text_17_2', 'result_analysis_text_18_2', () => null, true);
    }
    return undefined;
  }, [isSubscriptionInProgress, isSubscriptionVerified, readyForLabTest, goTo]);

  if (not(readyForLabTest)) {
    return null;
  }

  if (!data) {
    return null;
  }

  return (
    <LabTestActionButton
      title={data.title}
      description={data.description}
      onClick={data.onClick}
      hideArrow={data.hideArrow}
    />
  );
};

export default LabTestActionButtonContainer;
