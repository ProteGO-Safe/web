import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './RiskTestResult.styled';
import { T } from '../../../../components';

const RiskTestResult = ({ color, icon, riskLevel }) => {
  return (
    <Styled.RiskTestResult color={color}>
      <Styled.Title>
        <T i18nKey="risk_test_result_title" />
      </Styled.Title>
      <Styled.Result icon={icon}>{riskLevel}</Styled.Result>
    </Styled.RiskTestResult>
  );
};

RiskTestResult.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  riskLevel: PropTypes.node.isRequired
};

export default RiskTestResult;
