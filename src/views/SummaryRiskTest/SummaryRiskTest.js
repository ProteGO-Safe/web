import React from 'react';
import { withTranslation } from 'react-i18next';
import useModalContext from '../../hooks/useModalContext';
import { Button, RiskTestResult } from '../../components';
import AnnotationContent from './components/AnnotationContent/AnnotationContent';
import PrivacyPolicyContent from '../PrivacyPolicyDetails/component/PrivacyPolicyContent/PrivacyPolicyContent';
import * as Styled from './SummaryRiskTest.styled';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';

const SummaryRiskTest = ({ data, t }) => {
  const { goTo } = useNavigation();
  const { openModal } = useModalContext();

  const handleOpenModal = () => {
    openModal(
      <AnnotationContent>
        {t(data.annotation.paragraph_2)}
        <Styled.Link
          onClick={() => {
            openModal(<PrivacyPolicyContent small />);
          }}
        >
          {t(data.annotation.paragraph_3)}
        </Styled.Link>
      </AnnotationContent>,
      'normal',
      t(data.annotation.title),
      null
    );
  };

  return (
    <Styled.SummaryRiskTest data-cy="view-summary-risk-test">
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
        <Styled.Annotation>
          {t(data.annotation.paragraph_1)}{' '}
          <Styled.Link onClick={handleOpenModal}>
            {t(data.annotation.link_name)}
          </Styled.Link>
        </Styled.Annotation>
      )}

      <Styled.ButtonWrapper>
        <Button
          onClick={() =>
            data.annotation ? goTo(Routes.LabTest) : goTo(Routes.Home)
          }
        >
          {t(data.button)}
        </Button>
        {data.button_remind_later && (
          <Button onClick={() => goTo(Routes.Home)} type="outline">
            {t(data.button_remind_later)}
          </Button>
        )}
      </Styled.ButtonWrapper>
    </Styled.SummaryRiskTest>
  );
};

export default withTranslation()(SummaryRiskTest);
