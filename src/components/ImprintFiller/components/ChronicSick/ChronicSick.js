import React, { Fragment } from 'react';
import { useFormikContext } from 'formik';
import { FormGroup } from '@material-ui/core';

import {
  chronicSickValues,
  FIELD_IS_CHRONIC_SICK,
  VALUE_IS_CHRONIC_SICK_NO,
  VALUE_IS_CHRONIC_SICK_YES
} from '../../../../constants';

import { Button, Checkbox, Radio, TextField } from '../../..';

import {
  Actions,
  Description,
  InputWrapper,
  Label,
  SubContainer,
  Title
} from '../../ImprintFiller.styled';

const ChronicSick = () => {
  const { handleChange, setFieldValue, values } = useFormikContext();

  const handleSelectChronicSick = () => {
    setFieldValue(FIELD_IS_CHRONIC_SICK, VALUE_IS_CHRONIC_SICK_YES);
  };

  const handleSelectNoChronicSick = () => {
    setFieldValue(FIELD_IS_CHRONIC_SICK, VALUE_IS_CHRONIC_SICK_NO);
    chronicSickValues
      .map(field => field.field)
      .forEach(item => setFieldValue(item, false));
  };

  const handleSetFieldValue = (field, value) => {
    setFieldValue(field, value);
  };

  const isAnyFieldSelected = () =>
    values[FIELD_IS_CHRONIC_SICK] === VALUE_IS_CHRONIC_SICK_NO ||
    chronicSickValues.find(_obj => values[_obj.field]);

  const goToNextStep = () => {
    if (isAnyFieldSelected()) {
      setFieldValue('step', 3);
    }
  };

  const renderCheckboxes = chronicSickValues.map(
    ({ field, description, placeholder }) => (
      <Fragment key={field}>
        <Checkbox
          checked={values[field]}
          label={<Label>{field}</Label>}
          name={field}
          onChange={() => handleSetFieldValue(field, !values[field])}
          size="big"
          value={values[field] || ''}
        />
        {values[field] && placeholder && (
          <InputWrapper>
            <TextField
              label={placeholder}
              name={description}
              onChange={handleChange}
              value={values[description] || ''}
            />
          </InputWrapper>
        )}
      </Fragment>
    )
  );

  const disabled = !isAnyFieldSelected();

  const isChronicSick =
    values[FIELD_IS_CHRONIC_SICK] === VALUE_IS_CHRONIC_SICK_YES;

  return (
    <>
      <Title>Czy cierpisz na jakąś dolegliwość?</Title>
      <FormGroup>
        <Radio
          checked={values[FIELD_IS_CHRONIC_SICK] === VALUE_IS_CHRONIC_SICK_NO}
          label={
            <Label>
              Nie, jestem zdrowy/-a i nie cierpię na przewlekłe choroby
            </Label>
          }
          onChange={handleSelectNoChronicSick}
          name={FIELD_IS_CHRONIC_SICK}
        />
        <Radio
          checked={values[FIELD_IS_CHRONIC_SICK] === VALUE_IS_CHRONIC_SICK_YES}
          label={<Label>Tak, jestem przewlekle chory/-a</Label>}
          onChange={handleSelectChronicSick}
          name={FIELD_IS_CHRONIC_SICK}
        />
      </FormGroup>
      {isChronicSick && (
        <SubContainer>
          <Description>Zaznacz dolegliwość, na którą cierpisz:</Description>
          {renderCheckboxes}
        </SubContainer>
      )}
      <Actions>
        <Button disabled={disabled} onClick={goToNextStep} label="Dalej" />
      </Actions>
    </>
  );
};

export default ChronicSick;
