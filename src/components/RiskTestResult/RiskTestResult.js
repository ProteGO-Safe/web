import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './RiskTestResult.styled';
import { T } from '../index';

const RiskTestResult = ({ color, icon, text }) => {
  return (
    <Styled.RiskTestResult color={color}>
      <Styled.Title>
        <T i18nKey="risk_test_result_title" />
      </Styled.Title>
      <Styled.Result icon={icon}>
        <T i18nKey={text} />
      </Styled.Result>
    </Styled.RiskTestResult>
  );
};

RiskTestResult.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default RiskTestResult;
