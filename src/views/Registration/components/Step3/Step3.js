import React from 'react';
import { useFormikContext } from 'formik';
import { Button, Container, Input } from '../../../../components';

import { FIELD_AGE } from '../../../../constants';
import './Step3.scss';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

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
        type="number"
        value={values[FIELD_AGE]}
      />
      <Button
        disabled={!values[FIELD_AGE]}
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
