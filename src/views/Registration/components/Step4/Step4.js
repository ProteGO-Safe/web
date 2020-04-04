import React, { Fragment, useState } from 'react';
import { useFormikContext } from 'formik';
import {
  Button,
  Checkbox,
  Container,
  FieldSet,
  Input
} from '../../../../components';

import { chronicSickValues } from '../../../../constants';

import './Step4.scss';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

const Step4 = () => {
  const { handleChange, setFieldValue, values } = useFormikContext();
  const [otherSelected, setOtherSelected] = useState(false);

  const handelSelectOther = () => {
    setOtherSelected(true);
    chronicSickValues
      .map(field => field.field)
      .forEach(item => setFieldValue(item, false));
  };

  const handleSetFieldValue = (field, value) => {
    setOtherSelected(false);
    setFieldValue(field, value);
  };

  const isAnyFieldSelected = () => {
    return otherSelected || chronicSickValues.find(_obj => values[_obj.field]);
  };

  const goToNextStep = () => {
    if (isAnyFieldSelected()) {
      setFieldValue('step', 6);
    }
  };

  const fieldsToRender = chronicSickValues.map(
    ({ field, description, placeholder }) => (
      <Fragment key={field}>
        <Checkbox
          checked={values[field]}
          description={field}
          name={field}
          onChange={() => handleSetFieldValue(field, !values[field])}
          size="big"
          value={values[field] || ''}
        />
        {values[field] && placeholder && (
          <Input
            label={placeholder}
            name={description}
            max={150}
            min={0}
            onChange={handleChange}
            size="small"
            value={values[description] || ''}
          />
        )}
      </Fragment>
    )
  );

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
