import * as Yup from 'yup';

export const AGE_VALIDATOR = Yup.number()
  .min(1, 'Za mały wiek')
  .max(150, 'Za duży wiek')
  .integer('Wiek musi być liczbą naturalną')
  .required('Wiek jest wymagany');
