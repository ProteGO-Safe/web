import React from 'react';
import { Layout } from '../../components';
import {
  ExposureHigh,
  ExposureHighPinApprove,
  ExposureMiddle,
  RiskTestHighNoCovid,
  RiskTestHighCovid,
  RiskTestMiddle,
  SickApprove,
  SickReported
} from './contents';
import useNavigation from '../../hooks/useNavigation';
import { RecommendationsComponents } from './recommendations.constant';

const Recommendations = () => {
  const { getParam } = useNavigation();

  const components = {
    [RecommendationsComponents.ExposureHigh]: ExposureHigh,
    [RecommendationsComponents.ExposureHighPinApprove]: ExposureHighPinApprove,
    [RecommendationsComponents.ExposureMiddle]: ExposureMiddle,
    [RecommendationsComponents.RiskTestHighNoCovid]: RiskTestHighNoCovid,
    [RecommendationsComponents.RiskTestHighCovid]: RiskTestHighCovid,
    [RecommendationsComponents.RiskTestMiddle]: RiskTestMiddle,
    [RecommendationsComponents.SickApprove]: SickApprove,
    [RecommendationsComponents.SickReported]: SickReported
  };

  const param = getParam('component');

  const Component = components[param];

  return (
    <Layout isNavigation>
      <Component />
    </Layout>
  );
};

export default Recommendations;
