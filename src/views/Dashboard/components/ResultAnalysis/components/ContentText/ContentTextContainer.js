import React from 'react';
import { and, not } from 'ramda';
import { withTranslation } from 'react-i18next';
import useHealthStats from '../../../../../../hooks/useHealthStats';
import useTriage from '../../../../../../hooks/useTriage';
import ContentText from './ContentText';
import { T } from '../../../../../../components/T';
import useFilledDiagnosis from '../../../../../../hooks/useFilledDiagnosis';
import useLabTest from '../../../../../../hooks/useLabTest';

const ContentTextContainer = ({ t }) => {
  const { lastDate } = useFilledDiagnosis();
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

  const translatedText = (() => {
    if (isCovidConfirmed) {
      return <T i18nKey="result_analysis_text_25" />;
    }
    if (isCovidManual) {
      return <T i18nKey="result_analysis_text_27" />;
    }

    if (isTriageTorLow) {
      return <T i18nKey="result_analysis_text_9" />;
    }
    if (isTriageTorMiddle) {
      return (
        <T
          i18nKey="result_analysis_text_10"
          variables={{ date: lastDate, currentState: t('result_analysis_variant_3') }}
        />
      );
    }
    if (isTriageTorMiddleEnLow) {
      return (
        <T
          i18nKey="result_analysis_text_38"
          variables={{ date: lastDate, currentState: t('result_analysis_variant_3') }}
        />
      );
    }
    if (isTriageTorHighNoCovid) {
      return (
        <T
          i18nKey="result_analysis_text_12"
          variables={{ date: lastDate, currentState: t('result_analysis_variant_4') }}
        />
      );
    }
    if (isTriageTorHighNoCovidEnLow) {
      return (
        <T
          i18nKey="result_analysis_text_39"
          variables={{ date: lastDate, currentState: t('result_analysis_variant_4') }}
        />
      );
    }
    if (isTriageTorHighCovid) {
      return (
        <T
          i18nKey="result_analysis_text_23"
          variables={{ date: lastDate, currentState: t('result_analysis_variant_4') }}
        />
      );
    }
    if (isTriageTorHighCovidEnLow) {
      return (
        <T
          i18nKey="result_analysis_text_40"
          variables={{ date: lastDate, currentState: t('result_analysis_variant_4') }}
        />
      );
    }
    if (isTriageEnLow) {
      return <T i18nKey="result_analysis_text_14" />;
    }
    if (and(isTriageEnMiddle, isSubscriptionConfirmed)) {
      return <T i18nKey="result_analysis_text_29" />;
    }
    if (and(isTriageEnMiddle, not(isSubscriptionConfirmed))) {
      return <T i18nKey="result_analysis_text_15" />;
    }
    if (and(isTriageEnHigh, isSubscriptionConfirmed)) {
      return <T i18nKey="result_analysis_text_37" />;
    }
    if (and(isTriageEnHigh, not(isSubscriptionConfirmed))) {
      return <T i18nKey="result_analysis_text_19" />;
    }

    return <T i18nKey="result_analysis_text_3" />;
  })();

  return <ContentText translatedText={translatedText} />;
};

export default withTranslation()(ContentTextContainer);
