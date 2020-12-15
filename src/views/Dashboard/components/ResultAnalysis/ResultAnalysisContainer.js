import React, { useState, useMemo } from 'react';
import { and } from 'ramda';
import { Color } from '../../../../theme/colors';
import {
  ExposureHigh,
  ExposureHighPinApprove,
  ExposureLow,
  ExposureMiddle,
  ExposureMiddlePinApprove,
  NoData,
  RiskTestHigh,
  RiskTestHighSick,
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

const ResultAnalysisContainer = () => {
  const username = useUserName();
  const { signedUp } = useLabTest();
  const healthStats = useHealthStats();
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
      noTor,
      noEn,
      isTorLow,
      isTorMiddle,
      isTorHigh,
      isTorHighWithCovid,
      isEnLow,
      isEnMiddle,
      isEnHigh,
      isCovidConfirmed,
      isCovidManual
    } = healthStats;
    if (isCovidConfirmed) {
      return createDataView(Color.red, SickApprove, VirusHigh, 'result_analysis_variant_8');
    }
    if (isCovidManual) {
      return createDataView(Color.red, SickReported, VirusHigh, 'result_analysis_variant_7');
    }

    if (and(isTorLow, noEn) || and(isTorLow, isEnLow)) {
      return createDataView(Color.green_1, RiskTestLow, FaceLow, 'result_analysis_variant_2');
    }
    if (and(isTorMiddle, noEn) || and(isTorMiddle, isEnLow)) {
      return createDataView(Color.info, RiskTestMiddle, FaceMiddle, 'result_analysis_variant_3');
    }
    if (and(isTorHigh, noEn) || and(isTorHigh, isEnLow)) {
      return createDataView(Color.red, RiskTestHigh, FaceHigh, 'result_analysis_variant_4');
    }
    if (and(isTorHighWithCovid, noEn) || and(isTorHighWithCovid, isEnLow)) {
      return createDataView(Color.red, RiskTestHighSick, FaceHigh, 'result_analysis_variant_4');
    }

    if (and(noTor, isEnLow)) {
      return createDataView(Color.green_1, ExposureLow, ENLow, 'result_analysis_variant_2');
    }
    if (and(isTorLow, isEnMiddle) || and(isTorMiddle, isEnMiddle) || and(noEn, isEnMiddle)) {
      return createDataView(
        Color.info,
        signedUp ? ExposureMiddlePinApprove : ExposureMiddle,
        ENMiddle,
        'result_analysis_variant_3'
      );
    }
    if (
      and(isTorHigh, isEnMiddle) ||
      and(isTorHighWithCovid, isEnMiddle) ||
      and(isTorLow, isEnHigh) ||
      and(isTorMiddle, isEnHigh) ||
      and(isTorHigh, isEnHigh) ||
      and(isTorHighWithCovid, isEnHigh) ||
      and(noTor, isEnHigh)
    ) {
      return createDataView(
        Color.red,
        signedUp ? ExposureHighPinApprove : ExposureHigh,
        ENHigh,
        'result_analysis_variant_4'
      );
    }
    return createDataView(Color.gradient_c2, NoData, null, 'result_analysis_variant_1');
  }, [healthStats, signedUp]);

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
