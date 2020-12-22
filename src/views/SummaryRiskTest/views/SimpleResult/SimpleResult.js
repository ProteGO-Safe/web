import React from 'react';
import { T } from '../../../../components/T';
import { RiskTestResult } from '../../components/RiskTestResult';
import { ButtonWrapper, Description, Paragraph, Title } from '../../components';
import { Button } from '../../../../components';
import { Routes } from '../../../../services/navigationService/routes';
import useNavigation from '../../../../hooks/useNavigation';

const SimpleResult = ({ paragraphsLabels = [], title }) => {
  const { goTo } = useNavigation();

  return (
    <>
      <Title>{title}</Title>
      <RiskTestResult />
      <Description>
        {paragraphsLabels.map(value => (
          <Paragraph key={value}>
            <T i18nKey={value} />
          </Paragraph>
        ))}
      </Description>

      <ButtonWrapper>
        <Button onClick={() => goTo(Routes.Home)}>
          <T i18nKey="summary_risk_test_button_name_2" />
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default SimpleResult;
