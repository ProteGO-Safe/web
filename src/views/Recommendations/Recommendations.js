import React from 'react';
import { Layout } from '../../components';
import {
  // ExposureHigh,
  // ExposureHighPinApprove,
  // ExposureMiddle,
  // RiskTestHigh,
  // RiskTestHighSick,
  // RiskTestMiddle,
  // SickApprove,
  SickReported
} from './contents';

const Recommendations = () => {
  const renderContent = <SickReported />;

  return (
    <Layout isNavigation noMargin>
      {renderContent}
    </Layout>
  );
};

export default Recommendations;
