import React from 'react';
import { Color } from '../../theme/colors';
import { PhoneNumber } from '../../components/PhoneNumber';
import Routes from '../../routes';

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
      path: `${Routes.LabTest}/1`,
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
      path: `${Routes.Diagnosis}?p=1`,
      title: 'test_border_box_text_1'
    },
    TEST_IS_CONFIRMED: {
      colorBorder: Color.green,
      colorTitle: Color.black,
      content: (
        <>
          <strong>{t('test_border_box_approve_description_1')}</strong>{' '}
          {t('test_border_box_approve_description_2')}{' '}
          <strong>{t('test_border_box_approve_description_3')}</strong>{' '}
          {t('test_border_box_approve_description_4')}{' '}
          <strong>{t('test_border_box_approve_description_5')}</strong>{' '}
          {t('test_border_box_approve_description_6')}
          <br />
          {t('test_border_box_approve_description_7')}
        </>
      ),
      title: 'test_border_box_approve_title'
    }
  };
};
