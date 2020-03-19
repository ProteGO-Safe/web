import React from 'react';
import { useFormikContext } from 'formik';
import { Container, Input } from '../../../../components';

import { FIELD_AGE } from '../../../../constants';
import './Step3.scss';

const Step3 = () => {
  const { handleChange, setFieldValue, values } = useFormikContext();

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      setFieldValue('step', 4);
    }
  };

  return (
    <Container>
      <h3>Ile masz?</h3>
      <Input
        placeholder="wiek"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        name={FIELD_AGE}
        value={values[FIELD_AGE]}
      />
    </Container>
  );
};

export default Step3;
