import React, { Fragment, useState } from 'react';
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
  FIELD_CHRONIC_SICK_2_DESC,
  FIELD_CHRONIC_SICK_3,
  FIELD_CHRONIC_SICK_3_DESC,
  FIELD_CHRONIC_SICK_4,
  FIELD_CHRONIC_SICK_4_DESC,
  FIELD_CHRONIC_SICK_5,
  FIELD_CHRONIC_SICK_5_DESC,
  FIELD_CHRONIC_SICK_6,
  FIELD_CHRONIC_SICK_6_DESC,
  FIELD_CHRONIC_SICK_7,
  FIELD_CHRONIC_SICK_7_DESC
} from '../../../../constants';

import './Step4.scss';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

const Step4 = () => {
  const { handleChange, setFieldValue, values } = useFormikContext();
  const [otherSelected, setOtherSelected] = useState(false);

  const fields = [
    {
      checkbox: FIELD_CHRONIC_SICK_1,
      input: FIELD_CHRONIC_SICK_1_DESC
    },
    {
      checkbox: FIELD_CHRONIC_SICK_2,
      input: FIELD_CHRONIC_SICK_2_DESC
    },
    {
      checkbox: FIELD_CHRONIC_SICK_3,
      input: FIELD_CHRONIC_SICK_3_DESC
    },
    {
      checkbox: FIELD_CHRONIC_SICK_4,
      input: FIELD_CHRONIC_SICK_4_DESC
    },
    {
      checkbox: FIELD_CHRONIC_SICK_5,
      input: FIELD_CHRONIC_SICK_5_DESC
    },
    {
      checkbox: FIELD_CHRONIC_SICK_6,
      input: FIELD_CHRONIC_SICK_6_DESC
    },
    {
      checkbox: FIELD_CHRONIC_SICK_7,
      input: FIELD_CHRONIC_SICK_7_DESC
    }
  ];

  const handelSelectOther = () => {
    setOtherSelected(true);
    fields
      .map(field => field.checkbox)
      .forEach(item => setFieldValue(item, false));
  };

  const handleSetFieldValue = (field, value) => {
    setOtherSelected(false);
    setFieldValue(field, value);
  };

  const isAnyFieldSelected = () => {
    return (
      otherSelected ||
      values[FIELD_CHRONIC_SICK_1] ||
      values[FIELD_CHRONIC_SICK_2] ||
      values[FIELD_CHRONIC_SICK_3] ||
      values[FIELD_CHRONIC_SICK_4] ||
      values[FIELD_CHRONIC_SICK_5] ||
      values[FIELD_CHRONIC_SICK_6] ||
      values[FIELD_CHRONIC_SICK_7]
    );
  };

  const goToNextStep = () => {
    if (isAnyFieldSelected()) {
      setFieldValue('step', 5);
    }
  };

  const fieldsToRender = fields.map(({ checkbox, input }) => (
    <Fragment key={checkbox}>
      <Checkbox
        checked={values[checkbox]}
        description={checkbox}
        name={checkbox}
        onChange={() => handleSetFieldValue(checkbox, !values[checkbox])}
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
        {fieldsToRender}
        <Checkbox
          checked={otherSelected}
          description="nie jestem przewlekle chory."
          name="nie jestem przewlekle chory."
          onChange={handelSelectOther}
          size="big"
        />
      </FieldSet>
      <Button
        height="small"
        onClick={goToNextStep}
        icon={Icon}
        size="medium"
        text="Dalej"
        disabled={!isAnyFieldSelected()}
      />
    </Container>
  );
};

export default Step4;
