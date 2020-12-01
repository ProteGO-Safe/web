import React from 'react';
import { Color } from '../../theme/colors';
import { T } from '../../components';
import { Routes } from '../../services/navigationService/routes';
import { ButtonIconShadow } from './components/ButtonIconShadow';

export const resolveData = () => {
  return {
    TEST_IN_PROGRESS: {
      colorBorder: Color.primary,
      colorTitle: Color.black,
      content: <T i18nKey="test_border_box_qualification_description_1" />,
      title: 'test_border_box_qualification_title'
    },
    QUALIFICATION_FOR_TEST: {
      colorBorder: Color.primary,
      colorTitle: Color.primary,
      content: <T i18nKey="test_border_box_pick_up_description_1" />,
      path: Routes.SummaryRiskTest,
      title: 'test_border_box_pick_up_title'
    },
    TOR_IS_NEEDED: {
      colorBorder: Color.primary,
      colorTitle: Color.primary,
      content: <T i18nKey="test_border_box_text_2" />,
      path: Routes.Diagnosis,
      title: 'test_border_box_text_1'
    },
    TEST_IS_CONFIRMED: {
      colorBorder: Color.green,
      colorTitle: Color.black,
      content: (
        <>
          <T i18nKey="test_border_box_approve_description_9" />
          <br />
          <T i18nKey="test_border_box_approve_description_10" />
          <ButtonIconShadow name={<T i18nKey="test_border_box_approve_description_11" />} path={Routes.LabTestResult} />
        </>
      ),
      title: 'test_border_box_approve_description_8'
    }
  };
};
