import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import * as Styled from './RiskTestResult.styled';

const RiskTestResult = ({ color, icon, text, t }) => {
  return (
    <Styled.RiskTestResult color={color}>
      <Styled.Title>{t('risk_test_result_title')}</Styled.Title>
      <Styled.Result icon={icon}>{t(text)}</Styled.Result>
    </Styled.RiskTestResult>
  );
};

RiskTestResult.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default withTranslation()(RiskTestResult);
