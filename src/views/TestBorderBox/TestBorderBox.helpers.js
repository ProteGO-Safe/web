import React from 'react';
import { Color } from '../../theme/colors';
import { T, PhoneNumber } from '../../components';
import { Routes } from '../../services/navigationService/routes';
import { ButtonIconShadow } from './components/ButtonIconShadow';

export const resolveData = t => {
  return {
    TEST_IN_PROGRESS: {
      colorBorder: Color.primary,
      colorTitle: Color.black,
      content: (
        <>
          {t('test_border_box_qualification_description_1')}
          <PhoneNumber>
            {t('test_border_box_qualification_description_2')}
          </PhoneNumber>
        </>
      ),
      title: 'test_border_box_qualification_title'
    },
    QUALIFICATION_FOR_TEST: {
      colorBorder: Color.primary,
      colorTitle: Color.primary,
      content: (
        <>
          {t('test_border_box_pick_up_description_1')}
          <br />
          {t('test_border_box_pick_up_description_2')}
        </>
      ),
      path: Routes.SummaryRiskTest,
      title: 'test_border_box_pick_up_title'
    },
    TOR_IS_NEEDED: {
      colorBorder: Color.primary,
      colorTitle: Color.primary,
      content: (
        <>
          {t('test_border_box_text_2')}{' '}
          <strong>{t('test_border_box_text_3')}</strong>
        </>
      ),
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
          <ButtonIconShadow
            name={<T i18nKey="test_border_box_approve_description_11" />}
            path={Routes.LabTestResult}
          />
        </>
      ),
      title: 'test_border_box_approve_description_8'
    }
  };
};
