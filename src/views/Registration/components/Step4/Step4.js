import React from 'react';
import { useFormikContext } from 'formik';
import {
  Button,
  Container,
  FieldSet,
  Input,
  Option
} from '../../../../components';

import {
  FIELD_CHRONIC_SICK,
  FIELD_CHRONIC_SICK_OTHER,
  VALUE_CHRONIC_SICK_1,
  VALUE_CHRONIC_SICK_2,
  VALUE_CHRONIC_SICK_3
} from '../../../../constants';

import './Step4.scss';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

const Step4 = () => {
  const { handleChange, setFieldValue, values } = useFormikContext();

  return (
    <Container>
      <h3>
        Czy jesteś na coś
        <br /> przewlekle chory?
      </h3>
      <FieldSet>
        <Option
          checked={values[FIELD_CHRONIC_SICK] === VALUE_CHRONIC_SICK_1}
          name={FIELD_CHRONIC_SICK}
          onChange={() =>
            setFieldValue(FIELD_CHRONIC_SICK, VALUE_CHRONIC_SICK_1)
          }
          text="Problemy z ciśnieniem"
          value={values[FIELD_CHRONIC_SICK]}
        />
        <Option
          checked={values[FIELD_CHRONIC_SICK] === VALUE_CHRONIC_SICK_2}
          name={FIELD_CHRONIC_SICK}
          onChange={() =>
            setFieldValue(FIELD_CHRONIC_SICK, VALUE_CHRONIC_SICK_2)
          }
          text="Problemy z sercem"
          value={values[FIELD_CHRONIC_SICK]}
        />
        <Option
          checked={values[FIELD_CHRONIC_SICK] === VALUE_CHRONIC_SICK_3}
          name={FIELD_CHRONIC_SICK}
          onChange={() =>
            setFieldValue(FIELD_CHRONIC_SICK, VALUE_CHRONIC_SICK_3)
          }
          text="Choroba płuc"
          value={values[FIELD_CHRONIC_SICK]}
        />
      </FieldSet>
      <Input
        placeholder="Inne"
        onChange={handleChange}
        name={FIELD_CHRONIC_SICK_OTHER}
        value={values[FIELD_CHRONIC_SICK_OTHER]}
      />
      <Button
        disabled={
          !values[FIELD_CHRONIC_SICK] && !values[FIELD_CHRONIC_SICK_OTHER]
        }
        height="small"
        onClick={() => null}
        icon={Icon}
        size="small"
        text="Dalej"
      />
    </Container>
  );
};

export default Step4;
