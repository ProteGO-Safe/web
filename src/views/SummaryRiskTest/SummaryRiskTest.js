import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { RiskTestResult, Button, Checkbox } from '../../components';
import * as Styled from './SummaryRiskTest.styled';

const SummaryRiskTest = ({ data, t }) => (
  <Styled.SummaryRiskTest>
    <Styled.Title>{t(data.title)}</Styled.Title>

    <RiskTestResult color={data.color} icon={data.icon} text={data.status} />

    <Styled.Description>
      {data.paragraph && (
        <Styled.Paragraph>{t(data.paragraph)}</Styled.Paragraph>
      )}
      {data.paragraph_strong && (
        <Styled.Strong>{t(data.paragraph_strong)}</Styled.Strong>
      )}
      {data.info && <Styled.Paragraph>{t(data.info)}</Styled.Paragraph>}
    </Styled.Description>

    {data.annotation && (
      <>
        <Styled.Required>
          {t('summary_risk_test_annotation_required')}
        </Styled.Required>
        <Checkbox
          label={
            <Styled.Annotation>
              {t(data.annotation.paragraph_1)}
              <br />
              <br />
              {t(data.annotation.paragraph_2)}
            </Styled.Annotation>
          }
          name="terms"
          checked
          onChange={() => null}
        />
      </>
    )}

    <Styled.ButtonWrapper>
      <NavLink to={data.path}>
        <Button onClick={() => null}>{t(data.button)}</Button>
      </NavLink>
    </Styled.ButtonWrapper>
  </Styled.SummaryRiskTest>
);

export default withTranslation()(SummaryRiskTest);
