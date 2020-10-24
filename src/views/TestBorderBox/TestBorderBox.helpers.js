import { Color } from '../../theme/colors';

export const DATA = {
  TEST_QUALIFICATION: {
    colorBorder: Color.primary,
    colorTitle: Color.black,
    title: 'test_border_box_qualification_title',
    description: {
      paragraph_1: 'test_border_box_qualification_description_1',
      phone_number: 'test_border_box_qualification_description_2'
    }
  },
  TEST_PICK_UP: {
    colorBorder: Color.primary,
    colorTitle: Color.primary,
    path: '/', // TODO: change PATH
    title: 'test_border_box_pick_up_title',
    description: {
      paragraph_1: 'test_border_box_pick_up_description_1'
    }
  },
  TEST_VERIFICATION: {
    buttonName: 'test_border_box_verification_button_name',
    buttonPath: '/', // TODO: change PATH
    colorBorder: Color.green,
    colorTitle: Color.black,
    title: 'test_border_box_verification_title',
    description: {
      paragraph_1: 'test_border_box_verification_description_1',
      paragraph_2: 'test_border_box_verification_description_2'
    }
  },
  TEST_APPROVE: {
    colorBorder: Color.green,
    colorTitle: Color.black,
    title: 'test_border_box_approve_title',
    description: {
      paragraph_1: 'test_border_box_approve_description_1'
    }
  }
};
