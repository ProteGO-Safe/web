import React from 'react';
import { useFormikContext } from 'formik';
import { Container, FieldSet, Option } from '../../../../components';

import {
  FIELD_GENDER,
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
          checked={values[FIELD_GENDER] === VALUE_MAN}
          name={FIELD_GENDER}
          onChange={() => handleChange(FIELD_GENDER, VALUE_MAN)}
          text="Mężczyzna"
          value={values[FIELD_GENDER]}
        />
        <Option
          checked={values[FIELD_GENDER] === VALUE_WOMAN}
          name={FIELD_GENDER}
          onChange={() => handleChange(FIELD_GENDER, VALUE_WOMAN)}
          text="Kobieta"
          value={values[FIELD_GENDER]}
        />
        <Option
          checked={values[FIELD_GENDER] === VALUE_OTHER}
          name={FIELD_GENDER}
          onChange={() => handleChange(FIELD_GENDER, VALUE_OTHER)}
          text="Inne"
          value={values[FIELD_GENDER]}
        />
      </FieldSet>
    </Container>
  );
};

export default Step2;
