import React from 'react';
import { useFormikContext } from 'formik';
import { Container, FieldSet, Option } from '../../../../components';

import {
  FIELD_SEX,
  VALUE_MAN,
  VALUE_WOMAN,
  VALUE_OTHER
} from '../../../../constants';
import './Step2.scss';

const Step2 = () => {
  const { setFieldValue, values } = useFormikContext();

  const handleChange = (field, value) => {
    setFieldValue(field, value);
    setFieldValue('step', 3);
  };

  return (
    <Container>
      <h3>Kim jesteś?</h3>
      <FieldSet>
        <Option
          checked={values[FIELD_SEX] === VALUE_MAN}
          name={FIELD_SEX}
          onChange={() => handleChange(FIELD_SEX, VALUE_MAN)}
          text="Mężczyzna"
          value={values[FIELD_SEX]}
        />
        <Option
          checked={values[FIELD_SEX] === VALUE_WOMAN}
          name={FIELD_SEX}
          onChange={() => handleChange(FIELD_SEX, VALUE_WOMAN)}
          text="Kobieta"
          value={values[FIELD_SEX]}
        />
        <Option
          checked={values[FIELD_SEX] === VALUE_OTHER}
          name={FIELD_SEX}
          onChange={() => handleChange(FIELD_SEX, VALUE_OTHER)}
          text="Inne"
          value={values[FIELD_SEX]}
        />
      </FieldSet>
    </Container>
  );
};

export default Step2;
