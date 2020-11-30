import React from 'react';
import { RiskTestResult, T } from '../../components';
import * as Styled from './SummaryRiskTest.styled';

const SummaryRiskTest = ({ data }) => {
  return (
    <Styled.SummaryRiskTest data-cy="view-summary-risk-test">
      <Styled.Title>
        <T i18nKey={data.title} />
      </Styled.Title>
      <RiskTestResult color={data.color} icon={data.icon} text={data.status} />
      {data.description}
      <Styled.ButtonWrapper>{data.buttons}</Styled.ButtonWrapper>
    </Styled.SummaryRiskTest>
  );
};

export default SummaryRiskTest;
