import React, { Fragment } from 'react';
import { useFormikContext } from 'formik';
import {
  Button,
  Checkbox,
  Container,
  FieldSet,
  Input
} from '../../../../components';

import {
  FIELD_CHRONIC_SICK_1,
  FIELD_CHRONIC_SICK_1_DESC,
  FIELD_CHRONIC_SICK_2,
  FIELD_CHRONIC_SICK_3,
  FIELD_CHRONIC_SICK_4,
  FIELD_CHRONIC_SICK_5,
  FIELD_CHRONIC_SICK_6,
  FIELD_CHRONIC_SICK_7,
} from '../../../../constants';

import './Step4.scss';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

const Step4 = () => {
  const {
    handleChange,
    setFieldValue,
    submitForm,
    values
  } = useFormikContext();

  const fields = [
    {
      checkbox: FIELD_CHRONIC_SICK_1,
      input: FIELD_CHRONIC_SICK_1_DESC,
      description: 'nadciśnienie tętnicze'
    },
    {
      checkbox: FIELD_CHRONIC_SICK_2,
      input: FIELD_CHRONIC_SICK_2,
      description: 'przewlekłe choroby układu oddechowego'
    },
    {
      checkbox: FIELD_CHRONIC_SICK_3,
      input: FIELD_CHRONIC_SICK_3,
      description: 'choroby układu krążenia'
    },
    {
      checkbox: FIELD_CHRONIC_SICK_4,
      input: FIELD_CHRONIC_SICK_4,
      description: 'cukrzyca'
    },
    {
      checkbox: FIELD_CHRONIC_SICK_5,
      input: FIELD_CHRONIC_SICK_5,
      description: 'choroby układu immunologicznego'
    },
    {
      checkbox: FIELD_CHRONIC_SICK_6,
      input: FIELD_CHRONIC_SICK_6,
      description:
        'stosowanie leków obniżających odporność (immunosupresyjnych)'
    },
    {
      checkbox: FIELD_CHRONIC_SICK_7,
      input: FIELD_CHRONIC_SICK_7,
      description: 'choroby onkologiczne'
    }
  ].map(({ checkbox, input, description }) => (
    <Fragment key={checkbox}>
      <Checkbox
        checked={values[checkbox]}
        description={description}
        name={checkbox}
        onChange={() =>
          setFieldValue(checkbox, !values[checkbox])
        }
        size="big"
        value={values[checkbox]}
      />
      {values[checkbox] && (
        <Input
          label="jak długo?"
          name={input}
          max={150}
          min={0}
          onChange={handleChange}
          placeholder="podać w latach z dokładnością do 0.25 roku"
          size="small"
          type="number"
          value={values[input]}
        />
      )}
    </Fragment>
  ));

  return (
    <Container>
      <h3>
        Czy jesteś na coś
        <br /> przewlekle chory?
      </h3>
      <FieldSet>
        {fields}
      </FieldSet>
      <Button
        height="small"
        onClick={submitForm}
        icon={Icon}
        size="small"
        text="Dalej"
      />
    </Container>
  );
};

export default Step4;
