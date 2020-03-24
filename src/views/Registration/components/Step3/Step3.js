import React from 'react';
import { useFormikContext } from 'formik';
import { Button, Container, Input } from '../../../../components';

import { FIELD_AGE } from '../../../../constants';
import './Step3.scss';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

const Step3 = () => {
  const { handleChange, setFieldValue, values } = useFormikContext();

  const disabled =
    !values[FIELD_AGE] || values[FIELD_AGE] > 150 || values[FIELD_AGE] < 1;

  return (
    <Container>
      <h3>Ile masz lat?</h3>
      <Input
        placeholder="wiek"
        onChange={handleChange}
        max={150}
        min={1}
        name={FIELD_AGE}
        type="number"
        value={values[FIELD_AGE]}
      />
      <Button
        disabled={disabled}
        height="small"
        onClick={() => setFieldValue('step', 4)}
        icon={Icon}
        size="small"
        text="Dalej"
      />
    </Container>
  );
};

export default Step3;
