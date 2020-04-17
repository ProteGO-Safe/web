import React from 'react';
import { useFormikContext } from 'formik';
import { FormGroup } from '@material-ui/core';

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
import Icon from '../../../../assets/img/icons/angle-right-white.svg';
import { Button, Radio } from '../../../../components';

import { Actions, Label, Title } from '../../Registration.styled';

const BloodGroup = () => {
  const { setFieldValue, values } = useFormikContext();

  const renderRadios = [
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
    <Radio
      key={value}
      checked={values[FIELD_BLOOD_GROUP] === value}
      label={<Label>{text}</Label>}
      name={FIELD_BLOOD_GROUP}
      onChange={() => setFieldValue(FIELD_BLOOD_GROUP, value)}
    />
  ));

  return (
    <>
      <Title>Jaka jest Twoja grupa krwi?</Title>
      <FormGroup>{renderRadios}</FormGroup>
      <Actions>
        <Button
          disabled={!values[FIELD_BLOOD_GROUP]}
          onClick={() => setFieldValue('step', 6)}
          icon={Icon}
          size="medium"
          text="Dalej"
        />
      </Actions>
    </>
  );
};

export default BloodGroup;
