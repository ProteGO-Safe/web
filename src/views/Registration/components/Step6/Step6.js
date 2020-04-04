import React from 'react';
import { useFormikContext } from 'formik';
import { Button, Container, FieldSet, Option } from '../../../../components';

import {
  FIELD_SMOKE,
  VALUE_SMOKE_NO,
  VALUE_SMOKE_YES
} from '../../../../constants';
import './Step6.scss';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

const Step6 = () => {
  const { setFieldValue, values } = useFormikContext();

  return (
    <Container>
      <h3>
        Czy palisz papierosy lub
        <br />
        inne wyroby tytoniowe?
      </h3>
      <FieldSet>
        <Option
          checked={values[FIELD_SMOKE] === VALUE_SMOKE_YES}
          name={FIELD_SMOKE}
          onChange={() => setFieldValue(FIELD_SMOKE, VALUE_SMOKE_YES)}
          text="Tak"
          value={values[FIELD_SMOKE]}
        />
        <Option
          checked={values[FIELD_SMOKE] === VALUE_SMOKE_NO}
          name={FIELD_SMOKE}
          onChange={() => setFieldValue(FIELD_SMOKE, VALUE_SMOKE_NO)}
          text="Nie"
          value={values[FIELD_SMOKE]}
        />
      </FieldSet>
      <Button
        disabled={!values[FIELD_SMOKE]}
        onClick={() =>
          setFieldValue('step', values[FIELD_SMOKE] === VALUE_SMOKE_YES ? 8 : 9)
        }
        icon={Icon}
        size="medium"
        text="Dalej"
      />
    </Container>
  );
};

export default Step6;
