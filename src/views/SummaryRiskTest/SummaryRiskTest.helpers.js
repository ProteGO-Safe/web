import { Color } from '../../theme/colors';

import IconLow from '../../assets/img/icons/risk-test-result-low.svg';
import IconMiddle from '../../assets/img/icons/risk-test-result-middle.svg';
import IconHigh from '../../assets/img/icons/risk-test-result-high.svg';

export const DATA = {
  TOR_RED_EN_RED: {
    color: Color.danger,
    icon: IconHigh,
    status: 'risk_test_result_high',
    title: 'summary_risk_test_title_1',
    paragraph: 'summary_risk_test_description_1_1',
    paragraph_strong: 'summary_risk_test_description_1_2',
    button: 'summary_risk_test_button_name_1',
    button_remind_later: 'summary_risk_test_button_name_3',
    annotation: {
      title: 'summary_risk_test_annotation_title',
      paragraph_1: 'summary_risk_test_annotation_1',
      paragraph_2: 'summary_risk_test_annotation_2',
      paragraph_3: 'summary_risk_test_annotation_3',
      paragraph_4: 'summary_risk_test_annotation_4',
      link_name: 'summary_risk_test_annotation_more'
    }
  },
  TOR_RED_EN_NOT_RED: {
    color: Color.danger,
    icon: IconHigh,
    status: 'risk_test_result_high',
    title: 'summary_risk_test_title_2',
    paragraph: 'summary_risk_test_description_2_1',
    paragraph_strong: 'summary_risk_test_description_2_2',
    info: 'summary_risk_test_description_2_3',
    button: 'summary_risk_test_button_name_2'
  },
  TOR_ORANGE_EN_RED: {
    color: Color.orange,
    icon: IconMiddle,
    status: 'risk_test_result_middle',
    title: 'summary_risk_test_title_3',
    paragraph: 'summary_risk_test_description_3_1',
    paragraph_strong: 'summary_risk_test_description_3_2',
    info: 'summary_risk_test_description_3_3',
    button: 'summary_risk_test_button_name_2'
  },
  TOR_ORANGE_EN_NOT_RED: {
    color: Color.orange,
    icon: IconMiddle,
    status: 'risk_test_result_middle',
    title: 'summary_risk_test_title_4',
    paragraph: 'summary_risk_test_description_4_1',
    paragraph_strong: 'summary_risk_test_description_4_2',
    button: 'summary_risk_test_button_name_2'
  },
  TOR_GREEN_EN_RED: {
    color: Color.green,
    icon: IconLow,
    status: 'risk_test_result_low',
    title: 'summary_risk_test_title_5',
    paragraph: 'summary_risk_test_description_5_1',
    paragraph_strong: 'summary_risk_test_description_5_2',
    button: 'summary_risk_test_button_name_2'
  },
  TOR_GREEN_EN_NOT_RED: {
    color: Color.green,
    icon: IconLow,
    status: 'risk_test_result_low',
    title: 'summary_risk_test_title_6',
    paragraph: 'summary_risk_test_description_6_1',
    button: 'summary_risk_test_button_name_2'
  }
};
