import React from 'react';
import { not, or } from 'ramda';
import { T } from '../../../../components/T';
import SimpleResult from './SimpleResult';
import useHealthStats from '../../../../hooks/useHealthStats';
import useLabTest from '../../../../hooks/useLabTest';
import useTorHigh from '../../hooks/useTorHigh';

const SimpleResultContainer = () => {
  const { isTorLow, isTorMiddle, isEnMiddle, isEnHigh, noEn } = useHealthStats();
  const { isSubscriptionInProgress } = useLabTest();
  const isTorHigh = useTorHigh();

  const resolveParagraphsLabels = () => {
    if (isTorHigh) {
      return [
        'summary_risk_test_description_2_1',
        'summary_risk_test_description_2_2',
        'summary_risk_test_description_2_3'
      ];
    }

    if (isTorMiddle) {
      return ['summary_risk_test_description_3_1', 'summary_risk_test_description_2_2'];
    }

    if (isTorLow) {
      if (not(isSubscriptionInProgress) && or(isEnMiddle, isEnHigh)) {
        return ['summary_risk_test_description_3_1', 'summary_risk_test_description_2_2'];
      }

      return ['summary_risk_test_description_3_1'];
    }
    return [];
  };

  const resolveTitle = () => {
    if (noEn) {
      return <T i18nKey="summary_risk_test_title_2" />;
    }
    return <T i18nKey="summary_risk_test_title_3" />;
  };

  return <SimpleResult paragraphsLabels={resolveParagraphsLabels()} title={resolveTitle()} />;
};

export default SimpleResultContainer;
