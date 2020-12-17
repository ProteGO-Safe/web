import React from 'react';
import { T } from '../../../../components/T';
import { RiskTestResult } from '../../components/RiskTestResult';
import { Annotation, AnnotationContent, ButtonWrapper, Description, Link, Paragraph, Title } from '../../components';
import useModalContext from '../../../../hooks/useModalContext';
import { Button } from '../../../../components';
import { Routes } from '../../../../services/navigationService/routes';
import useNavigation from '../../../../hooks/useNavigation';

const LabTestReady = () => {
  const { openModal } = useModalContext();
  const { goTo } = useNavigation();

  return (
    <>
      <Title>
        <T i18nKey="summary_risk_test_title_1" />
      </Title>
      <RiskTestResult />
      <Description>
        <Paragraph>
          <T i18nKey="summary_risk_test_description_1_1" />
        </Paragraph>
        <Paragraph>
          <T i18nKey="summary_risk_test_description_1_2" />
        </Paragraph>
      </Description>
      <Annotation>
        <T i18nKey="summary_risk_test_annotation_1_1" />{' '}
        <Link
          onClick={() =>
            openModal({
              value: (
                <AnnotationContent>
                  <T i18nKey="summary_risk_test_annotation_2" />
                </AnnotationContent>
              ),
              modalTitle: <T i18nKey="summary_risk_test_annotation_title" />
            })
          }
        >
          <T i18nKey="summary_risk_test_annotation_more" />
        </Link>
      </Annotation>
      <ButtonWrapper>
        <Button onClick={() => goTo(Routes.LabTest)}>
          <T i18nKey="summary_risk_test_button_name_1" />
        </Button>
        <Button onClick={() => goTo(Routes.Home)} type="outline">
          <T i18nKey="summary_risk_test_button_name_3" />
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default LabTestReady;
