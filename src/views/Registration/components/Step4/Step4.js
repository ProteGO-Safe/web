import React, { Fragment, useState } from 'react';
import { useFormikContext } from 'formik';
import {
  Button,
  Checkbox,
  Container,
  FieldSet,
  Input
} from '../../../../components';

import * as constants from '../../../../constants';

import './Step4.scss';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

const Step4 = () => {
  const { handleChange, setFieldValue, values } = useFormikContext();
  const [otherSelected, setOtherSelected] = useState(false);

  const fields = [
    {
      checkbox: constants.FIELD_CHRONIC_SICK_1,
      input: constants.FIELD_CHRONIC_SICK_1_DESC,
      placeholder: constants.FIELD_CHRONIC_SICK_1_PH
    },
    {
      checkbox: constants.FIELD_CHRONIC_SICK_2,
      input: constants.FIELD_CHRONIC_SICK_2_DESC,
      placeholder: constants.FIELD_CHRONIC_SICK_2_PH
    },
    {
      checkbox: constants.FIELD_CHRONIC_SICK_3,
      input: constants.FIELD_CHRONIC_SICK_3_DESC
    },
    {
      checkbox: constants.FIELD_CHRONIC_SICK_4,
      input: constants.FIELD_CHRONIC_SICK_4_DESC
    },
    {
      checkbox: constants.FIELD_CHRONIC_SICK_5,
      input: constants.FIELD_CHRONIC_SICK_5_DESC
    },
    {
      checkbox: constants.FIELD_CHRONIC_SICK_6,
      input: constants.FIELD_CHRONIC_SICK_6_DESC,
      placeholder: constants.FIELD_CHRONIC_SICK_6_PH
    },
    {
      checkbox: constants.FIELD_CHRONIC_SICK_7,
      input: constants.FIELD_CHRONIC_SICK_7_DESC
    },
    {
      checkbox: constants.FIELD_CHRONIC_SICK_8,
      input: constants.FIELD_CHRONIC_SICK_8_DESC
    },
    {
      checkbox: constants.FIELD_CHRONIC_SICK_9,
      input: constants.FIELD_CHRONIC_SICK_9_DESC,
      placeholder: constants.FIELD_CHRONIC_SICK_9_PH
    },
    {
      checkbox: constants.FIELD_CHRONIC_SICK_10,
      input: constants.FIELD_CHRONIC_SICK_10_DESC,
      placeholder: constants.FIELD_CHRONIC_SICK_10_PH
    },
    {
      checkbox: constants.FIELD_CHRONIC_SICK_11,
      input: constants.FIELD_CHRONIC_SICK_11_DESC,
      placeholder: constants.FIELD_CHRONIC_SICK_11_PH
    },
    {
      checkbox: constants.FIELD_CHRONIC_SICK_12,
      input: constants.FIELD_CHRONIC_SICK_12_DESC,
      placeholder: constants.FIELD_CHRONIC_SICK_12_PH
    },
    {
      checkbox: constants.FIELD_CHRONIC_SICK_13,
      input: constants.FIELD_CHRONIC_SICK_13_DESC,
      placeholder: constants.FIELD_CHRONIC_SICK_13_PH
    },
    {
      checkbox: constants.FIELD_CHRONIC_SICK_14,
      input: constants.FIELD_CHRONIC_SICK_14_DESC,
      placeholder: constants.FIELD_CHRONIC_SICK_14_PH
    },
    {
      checkbox: constants.FIELD_CHRONIC_SICK_15,
      input: constants.FIELD_CHRONIC_SICK_15_DESC,
      placeholder: constants.FIELD_CHRONIC_SICK_15_PH
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
      values[constants.FIELD_CHRONIC_SICK_1] ||
      values[constants.FIELD_CHRONIC_SICK_2] ||
      values[constants.FIELD_CHRONIC_SICK_3] ||
      values[constants.FIELD_CHRONIC_SICK_4] ||
      values[constants.FIELD_CHRONIC_SICK_5] ||
      values[constants.FIELD_CHRONIC_SICK_6] ||
      values[constants.FIELD_CHRONIC_SICK_7] ||
      values[constants.FIELD_CHRONIC_SICK_8] ||
      values[constants.FIELD_CHRONIC_SICK_9] ||
      values[constants.FIELD_CHRONIC_SICK_10] ||
      values[constants.FIELD_CHRONIC_SICK_11] ||
      values[constants.FIELD_CHRONIC_SICK_12] ||
      values[constants.FIELD_CHRONIC_SICK_13] ||
      values[constants.FIELD_CHRONIC_SICK_14] ||
      values[constants.FIELD_CHRONIC_SICK_15]
    );
  };

  const goToNextStep = () => {
    if (isAnyFieldSelected()) {
      setFieldValue('step', 5);
    }
  };

  const fieldsToRender = fields.map(({ checkbox, input, placeholder }) => (
    <Fragment key={checkbox}>
      <Checkbox
        checked={values[checkbox]}
        description={checkbox}
        name={checkbox}
        onChange={() => handleSetFieldValue(checkbox, !values[checkbox])}
        size="big"
        value={values[checkbox]}
      />
      {values[checkbox] && placeholder && (
        <Input
          label={placeholder}
          name={input}
          max={150}
          min={0}
          onChange={handleChange}
          size="small"
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
        size="small"
        text="Dalej"
        disabled={!isAnyFieldSelected()}
      />
    </Container>
  );
};

export default Step4;
