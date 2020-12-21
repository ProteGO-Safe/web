import React, { useMemo, useState } from 'react';
import { Color } from '../../../../theme/colors';
import {
  ExposureHigh,
  ExposureHighPinApprove,
  ExposureLow,
  ExposureMiddle,
  ExposureMiddlePinApprove,
  NoData,
  RiskTestHighCovid,
  RiskTestHighNoCovid,
  RiskTestLow,
  RiskTestMiddle,
  SickApprove,
  SickReported
} from './contents';
import ResultAnalysis from './ResultAnalysis';
import useUserName from '../../../../hooks/useUserName';
import useHealthStats from '../../../../hooks/useHealthStats';
import useLabTest from '../../../../hooks/useLabTest';

import { ReactComponent as FaceLow } from '../../../../assets/img/icons/face-low.svg';
import { ReactComponent as FaceMiddle } from '../../../../assets/img/icons/face-middle.svg';
import { ReactComponent as FaceHigh } from '../../../../assets/img/icons/face-high.svg';
import { ReactComponent as ENLow } from '../../../../assets/img/icons/en-low.svg';
import { ReactComponent as ENMiddle } from '../../../../assets/img/icons/en-middle.svg';
import { ReactComponent as ENHigh } from '../../../../assets/img/icons/en-high.svg';
import { ReactComponent as VirusHigh } from '../../../../assets/img/icons/virus-high.svg';
import useTriage from '../../../../hooks/useTriage';

const ResultAnalysisContainer = () => {
  const username = useUserName();
  const { isSubscriptionConfirmed } = useLabTest();
  const healthStats = useHealthStats();
  const triage = useTriage();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(prev => !prev);

  const createDataView = (color, content, icon, stateLabel) => {
    return {
      color,
      content,
      icon,
      stateLabel
    };
  };

  const dataView = useMemo(() => {
    const {
      isTriageTorLow,
      isTriageTorMiddle,
      isTriageTorHighNoCovid,
      isTriageTorHighCovid,
      isTriageEnLow,
      isTriageEnMiddle,
      isTriageEnHigh
    } = triage;
    const { isCovidConfirmed, isCovidManual } = healthStats;
    if (isCovidConfirmed) {
      return createDataView(Color.red, SickApprove, VirusHigh, 'result_analysis_variant_8');
    }
    if (isCovidManual) {
      return createDataView(Color.red, SickReported, VirusHigh, 'result_analysis_variant_7');
    }

    if (isTriageTorLow) {
      return createDataView(Color.green_1, RiskTestLow, FaceLow, 'result_analysis_variant_2');
    }
    if (isTriageTorMiddle) {
      return createDataView(Color.info, RiskTestMiddle, FaceMiddle, 'result_analysis_variant_3');
    }
    if (isTriageTorHighNoCovid) {
      return createDataView(Color.red, RiskTestHighNoCovid, FaceHigh, 'result_analysis_variant_4');
    }
    if (isTriageTorHighCovid) {
      return createDataView(Color.red, RiskTestHighCovid, FaceHigh, 'result_analysis_variant_4');
    }

    if (isTriageEnLow) {
      return createDataView(Color.green_1, ExposureLow, ENLow, 'result_analysis_variant_2');
    }
    if (isTriageEnMiddle) {
      return createDataView(
        Color.info,
        isSubscriptionConfirmed ? ExposureMiddlePinApprove : ExposureMiddle,
        ENMiddle,
        'result_analysis_variant_3'
      );
    }
    if (isTriageEnHigh) {
      return createDataView(
        Color.red,
        isSubscriptionConfirmed ? ExposureHighPinApprove : ExposureHigh,
        ENHigh,
        'result_analysis_variant_4'
      );
    }
    return createDataView(Color.gradient_c2, NoData, null, 'result_analysis_variant_1');
  }, [triage, healthStats, isSubscriptionConfirmed]);

  return (
    <>
      <ResultAnalysis
        color={dataView.color}
        content={<dataView.content />}
        currentState={dataView.stateLabel}
        handleToggleButton={handleOpen}
        icon={dataView.icon ? <dataView.icon /> : undefined}
        open={open}
        userName={username}
      />
    </>
  );
};

export default ResultAnalysisContainer;
