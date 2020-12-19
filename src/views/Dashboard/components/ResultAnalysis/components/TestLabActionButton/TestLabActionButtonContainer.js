import React, { useMemo } from 'react';
import { and, not, or } from 'ramda';
import TestLabActionButton from './TestLabActionButton';
import useHealthStats from '../../../../../../hooks/useHealthStats';
import useLabTest from '../../../../../../hooks/useLabTest';
import { T } from '../../../../../../components';
import { Routes } from '../../../../../../services/navigationService/routes';
import useNavigation from '../../../../../../hooks/useNavigation';

const TestLabActionButtonContainer = () => {
  const { goTo } = useNavigation();
  const { isEnHigh, isTorHigCovid, isEnMiddle, isTorMiddle } = useHealthStats();
  const { isSubscriptionInProgress, isSubscriptionVerified } = useLabTest();

  const prepareData = (titleLabel, descriptionLabel, onClick) => {
    return {
      title: <T i18nKey={titleLabel} />,
      description: <T i18nKey={descriptionLabel} />,
      onClick
    };
  };

  const acceptableEn = or(isEnMiddle, isEnHigh);
  const acceptableTor = or(isTorMiddle, isTorHigCovid);

  const data = useMemo(() => {
    if (and(acceptableTor, not(isSubscriptionInProgress))) {
      return prepareData('result_analysis_text_17', 'result_analysis_text_18', () => goTo(Routes.LabTest));
    }
    if (and(not(acceptableTor), not(isSubscriptionInProgress))) {
      return prepareData('result_analysis_text_17_1', 'result_analysis_text_18_1', () => goTo(Routes.Diagnosis));
    }
    if (isSubscriptionVerified) {
      return prepareData('result_analysis_text_17_2', 'result_analysis_text_18_2');
    }
    return undefined;
  }, [isSubscriptionInProgress, isSubscriptionVerified, acceptableTor, goTo]);

  if (not(acceptableEn)) {
    return null;
  }

  if (!data) {
    return null;
  }

  return <TestLabActionButton title={data.title} description={data.description} onClick={data.onClick} />;
};

export default TestLabActionButtonContainer;
