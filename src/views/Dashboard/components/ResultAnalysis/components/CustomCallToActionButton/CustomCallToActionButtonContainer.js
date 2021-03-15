import React from 'react';
import { and, not, or } from 'ramda';
import useHealthStats from '../../../../../../hooks/useHealthStats';
import useTriage from '../../../../../../hooks/useTriage';
import CustomCallToActionButton from './CustomCallToActionButton';
import { T } from '../../../../../../components/T';
import useLabTest from '../../../../../../hooks/useLabTest';
import useNavigation from '../../../../../../hooks/useNavigation';
import { Routes } from '../../../../../../services/navigationService/routes';
import { RecommendationsComponents } from '../../../../../Recommendations/recommendations.constant';

const CustomCallToActionButtonContainer = () => {
  const { goTo } = useNavigation();
  const { isSubscriptionConfirmed } = useLabTest();
  const { isCovidConfirmed, isCovidManual } = useHealthStats();
  const {
    isTriageTorLow,
    isTriageTorMiddle,
    isTriageTorHighNoCovid,
    isTriageTorHighCovid,
    isTriageEnLow,
    isTriageEnMiddle,
    isTriageEnHigh,
    isTriageTorMiddleEnLow,
    isTriageTorHighNoCovidEnLow,
    isTriageTorHighCovidEnLow
  } = useTriage();

  const recommendationsText = <T i18nKey="result_analysis_text_26" />;
  const recommendationsAction = component => () => goTo(Routes.Recommendations, { component });
  const torText = <T i18nKey="result_analysis_text_4" />;
  const torAction = () => goTo(Routes.Diagnosis);

  const createData = (action, text) => ({ action, text });

  const data = (() => {
    if (isCovidConfirmed) {
      return createData(recommendationsAction(RecommendationsComponents.SickApprove), recommendationsText);
    }
    if (isCovidManual) {
      return createData(recommendationsAction(RecommendationsComponents.SickReported), recommendationsText);
    }

    if (isTriageTorLow) {
      return null;
    }
    if (or(isTriageTorMiddle, isTriageTorMiddleEnLow)) {
      return createData(recommendationsAction(RecommendationsComponents.RiskTestMiddle), recommendationsText);
    }
    if (or(isTriageTorHighNoCovid, isTriageTorHighNoCovidEnLow)) {
      return createData(recommendationsAction(RecommendationsComponents.RiskTestHighNoCovid), recommendationsText);
    }
    if (or(isTriageTorHighCovid, isTriageTorHighCovidEnLow)) {
      return createData(recommendationsAction(RecommendationsComponents.RiskTestHighCovid), recommendationsText);
    }

    if (isTriageEnLow) {
      return null;
    }
    if (and(isTriageEnMiddle, isSubscriptionConfirmed)) {
      return createData(recommendationsAction(RecommendationsComponents.ExposureMiddle), recommendationsText);
    }
    if (and(isTriageEnMiddle, not(isSubscriptionConfirmed))) {
      return createData(recommendationsAction(RecommendationsComponents.ExposureMiddle), recommendationsText);
    }
    if (and(isTriageEnHigh, isSubscriptionConfirmed)) {
      return createData(recommendationsAction(RecommendationsComponents.ExposureHighPinApprove), recommendationsText);
    }
    if (and(isTriageEnHigh, not(isSubscriptionConfirmed))) {
      return createData(recommendationsAction(RecommendationsComponents.ExposureHigh), recommendationsText);
    }
    return createData(torAction, torText);
  })();

  if (data === null) {
    return null;
  }

  return <CustomCallToActionButton text={data.text} action={data.action} />;
};

export default CustomCallToActionButtonContainer;
