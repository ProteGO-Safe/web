import React from 'react';
import { useFormikContext } from 'formik';
import { Button, Checkbox, Container, FieldSet } from '../../../../components';

import {
  FIELD_SMOKE_NUMBER,
  VALUE_SMOKE_NUMBER_1,
  VALUE_SMOKE_NUMBER_2,
  VALUE_SMOKE_NUMBER_3,
  VALUE_SMOKE_NUMBER_4,
  VALUE_SMOKE_NUMBER_5
} from '../../../../constants';
import './Step7.scss';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

const Step7 = () => {
  const { setFieldValue, values } = useFormikContext();

  const fields = [
    VALUE_SMOKE_NUMBER_1,
    VALUE_SMOKE_NUMBER_2,
    VALUE_SMOKE_NUMBER_3,
    VALUE_SMOKE_NUMBER_4,
    VALUE_SMOKE_NUMBER_5
  ].map(field => (
    <Checkbox
      checked={values[FIELD_SMOKE_NUMBER] === field}
      description={field}
      key={field}
      name={field}
      onChange={() => setFieldValue(FIELD_SMOKE_NUMBER, field)}
      size="big"
      value={values[FIELD_SMOKE_NUMBER]}
    />
  ));

  return (
    <Container>
      <h3>Ile papierosów wypalasz codziennie?</h3>
      <FieldSet>{fields}</FieldSet>
      <Button
        disabled={!values[FIELD_SMOKE_NUMBER]}
        height="small"
        onClick={() => setFieldValue('step', 8)}
        icon={Icon}
        size="medium"
        text="Dalej"
      />
    </Container>
  );
};

export default Step7;
