import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import useModalContext from '../../hooks/useModalContext';
import { Button, RiskTestResult } from '../../components';
import AnnotationContent from './components/AnnotationContent/AnnotationContent';
import PrivacyPolicyContent from '../PrivacyPolicyDetails/component/PrivacyPolicyContent/PrivacyPolicyContent';
import * as Styled from './SummaryRiskTest.styled';

const SummaryRiskTest = ({ data, t }) => {
  const { openModal } = useModalContext();

  const handleOpenModal = () => {
    openModal(
      <AnnotationContent>
        {t(data.annotation.paragraph_2)}
        <br />
        <br />
        {t(data.annotation.paragraph_3)}
        <Styled.Link
          onClick={() => {
            openModal(<PrivacyPolicyContent small />);
          }}
        >
          {t(data.annotation.paragraph_4)}
        </Styled.Link>
      </AnnotationContent>,
      'normal',
      t(data.annotation.title),
      null
    );
  };

  return (
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
        <Styled.Annotation>
          {t(data.annotation.paragraph_1)}{' '}
          <Styled.Link onClick={handleOpenModal}>
            {t(data.annotation.link_name)}
          </Styled.Link>
        </Styled.Annotation>
      )}

      <Styled.ButtonWrapper>
        <NavLink to={data.path}>
          <Button onClick={() => null}>{t(data.button)}</Button>
        </NavLink>
        {data.button_remind_later && (
          <NavLink to={data.path_remind_later}>
            <Button onClick={() => null} type="outline">
              {t(data.button_remind_later)}
            </Button>
          </NavLink>
        )}
      </Styled.ButtonWrapper>
    </Styled.SummaryRiskTest>
  );
};

export default withTranslation()(SummaryRiskTest);
