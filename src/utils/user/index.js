import * as Yup from 'yup';

export const userNameValidationSchema = Yup.string()
  .min(1, 'name_form_text7')
  .max(12, 'name_form_text8')
  .matches(/[^\s\\]/, 'name_form_text9')
  .nullable();
