import React from 'react';
import { useFormikContext } from 'formik';
import { Button, Container, FieldSet, Option } from '../../../../components';

import {
  FIELD_BLOOD_GROUP,
  VALUE_BLOOD_GROUP_0MINUS,
  VALUE_BLOOD_GROUP_0PLUS,
  VALUE_BLOOD_GROUP_ABMINUS,
  VALUE_BLOOD_GROUP_ABPLUS,
  VALUE_BLOOD_GROUP_AMINUS,
  VALUE_BLOOD_GROUP_APLUS,
  VALUE_BLOOD_GROUP_BMINUS,
  VALUE_BLOOD_GROUP_BPLUS,
  VALUE_BLOOD_GROUP_UNDEFINED
} from '../../../../constants';

import './Step5.scss';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

const Step5 = () => {
  const { setFieldValue, submitForm, values } = useFormikContext();

  const fields = [
    {
      text: 'AB+',
      value: VALUE_BLOOD_GROUP_ABPLUS
    },
    {
      text: 'AB-',
      value: VALUE_BLOOD_GROUP_ABMINUS
    },
    {
      text: 'A+',
      value: VALUE_BLOOD_GROUP_APLUS
    },
    {
      text: 'A-',
      value: VALUE_BLOOD_GROUP_AMINUS
    },
    {
      text: 'B+',
      value: VALUE_BLOOD_GROUP_BPLUS
    },
    {
      text: 'B-',
      value: VALUE_BLOOD_GROUP_BMINUS
    },
    {
      text: '0+',
      value: VALUE_BLOOD_GROUP_0PLUS
    },
    {
      text: '0-',
      value: VALUE_BLOOD_GROUP_0MINUS
    },
    {
      text: 'nie wiem',
      value: VALUE_BLOOD_GROUP_UNDEFINED
    }
  ].map(({ text, value }) => (
    <Option
      color="white"
      key={value}
      checked={values[FIELD_BLOOD_GROUP] === value}
      name={FIELD_BLOOD_GROUP}
      onChange={() => setFieldValue(FIELD_BLOOD_GROUP, value)}
      text={text}
      type="checkbox"
      value={value}
    />
  ));

  return (
    <Container>
      <h3>Jaka jest Twoja grupa krwi?</h3>
      <FieldSet horizontal>{fields}</FieldSet>
      <Button
        disabled={!values[FIELD_BLOOD_GROUP]}
        height="small"
        onClick={submitForm}
        icon={Icon}
        size="small"
        text="Dalej"
      />
    </Container>
  );
};

export default Step5;
