import React from 'react';
import { useFormikContext } from 'formik';
import { Button, Container, FieldSet, Option } from '../../../../components';

import { FIELD_SEX, VALUE_MAN, VALUE_WOMAN } from '../../../../constants';
import './Step2.scss';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

const Step2 = () => {
  const { setFieldValue, values } = useFormikContext();

  const handleChange = (field, value) => {
    setFieldValue(field, value);
  };

  const disabled = !values[FIELD_SEX];

  return (
    <Container>
      <h3>Kim jesteś?</h3>
      <FieldSet>
        <Option
          checked={values[FIELD_SEX] === VALUE_WOMAN}
          name={FIELD_SEX}
          onChange={() => handleChange(FIELD_SEX, VALUE_WOMAN)}
          text="Kobieta"
          value={values[FIELD_SEX]}
        />
        <Option
          checked={values[FIELD_SEX] === VALUE_MAN}
          name={FIELD_SEX}
          onChange={() => handleChange(FIELD_SEX, VALUE_MAN)}
          text="Mężczyzna"
          value={values[FIELD_SEX]}
        />
      </FieldSet>
      <Button
        disabled={disabled}
        height="small"
        onClick={() => setFieldValue('step', 3)}
        icon={Icon}
        size="medium"
        text="Dalej"
      />
    </Container>
  );
};

export default Step2;
