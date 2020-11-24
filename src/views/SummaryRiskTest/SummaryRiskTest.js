import React from 'react';
import useModalContext from '../../hooks/useModalContext';
import { Button, RiskTestResult, T } from '../../components';
import AnnotationContent from './components/AnnotationContent/AnnotationContent';
import PrivacyPolicyContent from '../PrivacyPolicyDetails/component/PrivacyPolicyContent/PrivacyPolicyContent';
import * as Styled from './SummaryRiskTest.styled';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';

const SummaryRiskTest = ({ data }) => {
  const { goTo } = useNavigation();
  const { openModal } = useModalContext();

  const handleOpenModal = () => {
    openModal(
      <AnnotationContent>
        <T i18nKey={data.annotation.paragraph_2} />
        <Styled.Link
          onClick={() => {
            openModal(<PrivacyPolicyContent small />);
          }}
        >
          <T i18nKey={data.annotation.paragraph_3} />
        </Styled.Link>
      </AnnotationContent>,
      'normal',
      <T i18nKey={data.annotation.title} />,
      null
    );
  };

  return (
    <Styled.SummaryRiskTest data-cy="view-summary-risk-test">
      <Styled.Title>
        <T i18nKey={data.title} />
      </Styled.Title>

      <RiskTestResult color={data.color} icon={data.icon} text={data.status} />

      <Styled.Description>
        {data.paragraph && (
          <Styled.Paragraph>
            <T i18nKey={data.paragraph} />
          </Styled.Paragraph>
        )}
        {data.paragraph_strong && (
          <Styled.Strong>
            <T i18nKey={data.paragraph_strong} />
          </Styled.Strong>
        )}
        {data.info && (
          <Styled.Paragraph>
            <T i18nKey={data.info} />
          </Styled.Paragraph>
        )}
      </Styled.Description>

      {data.annotation && (
        <Styled.Annotation>
          <T i18nKey={data.annotation.paragraph_1} />{' '}
          <Styled.Link onClick={handleOpenModal}>
            <T i18nKey={data.annotation.link_name} />
          </Styled.Link>
        </Styled.Annotation>
      )}

      <Styled.ButtonWrapper>
        <Button
          onClick={() =>
            data.annotation ? goTo(Routes.LabTest) : goTo(Routes.Home)
          }
        >
          <T i18nKey={data.button} />
        </Button>
        {data.button_remind_later && (
          <Button onClick={() => goTo(Routes.Home)} type="outline">
            <T i18nKey={data.button_remind_later} />
          </Button>
        )}
      </Styled.ButtonWrapper>
    </Styled.SummaryRiskTest>
  );
};

export default SummaryRiskTest;
