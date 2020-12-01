import React from 'react';
import { Color } from '../../theme/colors';
import { Routes } from '../../services/navigationService/routes';
import { Button, T } from '../../components';
import AnnotationContent from './components/AnnotationContent/AnnotationContent';
import * as Styled from './SummaryRiskTest.styled';

import IconLow from '../../assets/img/icons/risk-test-result-low.svg';
import IconMiddle from '../../assets/img/icons/risk-test-result-middle.svg';
import IconHigh from '../../assets/img/icons/risk-test-result-high.svg';

export const types = {
  TOR_RED_EN_RED: 'TOR_RED_EN_RED',
  TOR_RED_EN_NOT_RED: 'TOR_RED_EN_NOT_RED',
  TOR_ORANGE_EN_RED: 'TOR_ORANGE_EN_RED',
  TOR_ORANGE_EN_NOT_RED: 'TOR_ORANGE_EN_NOT_RED',
  TOR_GREEN_EN_RED: 'TOR_GREEN_EN_RED',
  TOR_GREEN_EN_NOT_RED: 'TOR_GREEN_EN_NOT_RED'
};

export const resolveData = (goTo, openModal, type) => {
  switch (type) {
    case types.TOR_RED_EN_RED:
      return {
        color: Color.danger,
        icon: IconHigh,
        status: 'risk_test_result_high',
        title: 'summary_risk_test_title_1',
        description: (
          <>
            <Styled.Description>
              <Styled.Paragraph>
                <T i18nKey="summary_risk_test_description_1_1" />
              </Styled.Paragraph>
              <Styled.Paragraph>
                <T i18nKey="summary_risk_test_description_1_2" />
              </Styled.Paragraph>
            </Styled.Description>
            <Styled.Annotation>
              <T i18nKey="summary_risk_test_annotation_1" />{' '}
              <Styled.Link
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
              </Styled.Link>
            </Styled.Annotation>
          </>
        ),
        buttons: (
          <>
            <Button onClick={() => goTo(Routes.LabTest)}>
              <T i18nKey="summary_risk_test_button_name_1" />
            </Button>
            <Button onClick={() => goTo(Routes.Home)} type="outline">
              <T i18nKey="summary_risk_test_button_name_3" />
            </Button>
          </>
        )
      };
    case types.TOR_RED_EN_NOT_RED:
      return {
        color: Color.danger,
        icon: IconHigh,
        status: 'risk_test_result_high',
        title: 'summary_risk_test_title_2',
        description: (
          <Styled.Description>
            <Styled.Paragraph>
              <T i18nKey="summary_risk_test_description_2_1" />
            </Styled.Paragraph>
            <Styled.Paragraph>
              <T i18nKey="summary_risk_test_description_2_2" />
            </Styled.Paragraph>
            <Styled.Paragraph>
              <T i18nKey="summary_risk_test_description_2_3" />
            </Styled.Paragraph>
          </Styled.Description>
        ),
        buttons: (
          <Button onClick={() => goTo(Routes.Home)}>
            <T i18nKey="summary_risk_test_button_name_2" />
          </Button>
        )
      };
    case types.TOR_ORANGE_EN_RED:
      return {
        color: Color.orange,
        icon: IconMiddle,
        status: 'risk_test_result_middle',
        title: 'summary_risk_test_title_3',
        description: (
          <Styled.Description>
            <Styled.Paragraph>
              <T i18nKey="summary_risk_test_description_3_1" />
            </Styled.Paragraph>
            <Styled.Paragraph>
              <T i18nKey="summary_risk_test_description_3_2" />
            </Styled.Paragraph>
            <Styled.Paragraph>
              <T i18nKey="summary_risk_test_description_3_3" />
            </Styled.Paragraph>
          </Styled.Description>
        ),
        buttons: (
          <Button onClick={() => goTo(Routes.Home)}>
            <T i18nKey="summary_risk_test_button_name_2" />
          </Button>
        )
      };
    case types.TOR_ORANGE_EN_NOT_RED:
      return {
        color: Color.orange,
        icon: IconMiddle,
        status: 'risk_test_result_middle',
        title: 'summary_risk_test_title_4',
        description: (
          <Styled.Description>
            <Styled.Paragraph>
              <T i18nKey="summary_risk_test_description_4_1" />
            </Styled.Paragraph>
            <Styled.Paragraph>
              <T i18nKey="summary_risk_test_description_4_2" />
            </Styled.Paragraph>
          </Styled.Description>
        ),
        buttons: (
          <Button onClick={() => goTo(Routes.Home)}>
            <T i18nKey="summary_risk_test_button_name_2" />
          </Button>
        )
      };
    case types.TOR_GREEN_EN_RED:
      return {
        color: Color.green,
        icon: IconLow,
        status: 'risk_test_result_low',
        title: 'summary_risk_test_title_5',
        description: (
          <Styled.Description>
            <Styled.Paragraph>
              <T i18nKey="summary_risk_test_description_5_1" />
            </Styled.Paragraph>
            <Styled.Paragraph>
              <T i18nKey="summary_risk_test_description_5_2" />
            </Styled.Paragraph>
          </Styled.Description>
        ),
        buttons: (
          <Button onClick={() => goTo(Routes.Home)}>
            <T i18nKey="summary_risk_test_button_name_2" />
          </Button>
        )
      };
    case types.TOR_GREEN_EN_NOT_RED:
      return {
        color: Color.green,
        icon: IconLow,
        status: 'risk_test_result_low',
        title: 'summary_risk_test_title_6',
        description: (
          <Styled.Description>
            <Styled.Paragraph>
              <T i18nKey="summary_risk_test_description_6_1" />
            </Styled.Paragraph>
          </Styled.Description>
        ),
        buttons: (
          <Button onClick={() => goTo(Routes.Home)}>
            <T i18nKey="summary_risk_test_button_name_2" />
          </Button>
        )
      };
    default:
      return null;
  }
};
