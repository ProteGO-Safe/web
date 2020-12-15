import React, { useState } from 'react';
import { Color } from '../../../../theme/colors';
import {
  // ExposureHigh,
  // ExposureHighPinApprove,
  // ExposureLow,
  // ExposureMiddle,
  // ExposureMiddlePinApprove,
  NoData
  // RiskTestHigh,
  // RiskTestHighSick,
  // RiskTestLow,
  // RiskTestMiddle,
  // SickApprove,
  // SickReported
} from './contents';
import ResultAnalysis from './ResultAnalysis';

// import { ReactComponent as FaceLow } from '../../../../assets/img/icons/face-low.svg';
// import { ReactComponent as FaceMiddle } from '../../../../assets/img/icons/face-middle.svg';
// import { ReactComponent as FaceHigh } from '../../../../assets/img/icons/face-high.svg';
// import { ReactComponent as ENLow } from '../../../../assets/img/icons/en-low.svg';
// import { ReactComponent as ENMiddle } from '../../../../assets/img/icons/en-middle.svg';
// import { ReactComponent as ENHigh } from '../../../../assets/img/icons/en-high.svg';
// import { ReactComponent as VirusHigh } from '../../../../assets/img/icons/virus-high.svg';

const ResultAnalysisContainer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(prev => !prev);

  return (
    <ResultAnalysis
      color={Color.gradient_c2} // gradient_c2, red, green_1
      content={<NoData />} // ./contents
      currentState="result_analysis_variant_1" // variants: result_analysis_variant_1 - result_analysis_variant_8
      handleToggleButton={handleOpen}
      icon={null} // icons svg ^ UP
      open={open}
      userName="Mateusz"
    />
  );
};

export default ResultAnalysisContainer;
