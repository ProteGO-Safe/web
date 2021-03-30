import React from 'react';
import { Button, Layout, T } from '../../../../../../components';
import useNavigation from '../../../../../../hooks/useNavigation';
import { Routes } from '../../../../../../services/navigationService/routes';
import * as Styled from './Result.styled';
import useModalContext from '../../../../../../hooks/useModalContext';

const Result = ({ back, isReadyForLabTest, onFinish }) => {
  const { openModal } = useModalContext();
  const { goTo } = useNavigation();

  return (
    <Layout fullHeight onBackClick={back}>
      <Styled.Title>
        <T i18nKey="lab_test_text26" />
      </Styled.Title>

      <Styled.BoxBorder>
        {isReadyForLabTest ? <T i18nKey="lab_test_text27_1" /> : <T i18nKey="lab_test_text27" />}
      </Styled.BoxBorder>

      <Styled.Text>
        {isReadyForLabTest ? <T i18nKey="lab_test_text28_1" /> : <T i18nKey="lab_test_text28" />}
      </Styled.Text>

      {isReadyForLabTest && (
        <Styled.Annotation>
          <T i18nKey="summary_risk_test_annotation_1_1" />{' '}
          <Styled.Link
            onClick={() =>
              openModal({
                value: (
                  <Styled.AnnotationContent>
                    <T i18nKey="summary_risk_test_annotation_2" />
                  </Styled.AnnotationContent>
                ),
                modalTitle: <T i18nKey="summary_risk_test_annotation_title" />
              })
            }
          >
            <T i18nKey="summary_risk_test_annotation_more" />
          </Styled.Link>
        </Styled.Annotation>
      )}

      <Styled.ButtonWrapper>
        {isReadyForLabTest ? (
          <>
            <Button onClick={() => onFinish()}>
              <T i18nKey="summary_risk_test_button_name_1" />
            </Button>
            <Button onClick={() => goTo(Routes.Home)} type="outline">
              <T i18nKey="info_lab_test_text6" />
            </Button>
          </>
        ) : (
          <Button onClick={() => goTo(Routes.Home)} label={<T i18nKey="button_understand" />} />
        )}
      </Styled.ButtonWrapper>
    </Layout>
  );
};

export default Result;
