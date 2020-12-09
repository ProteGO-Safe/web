import React, { Fragment } from 'react';
import { useFormikContext } from 'formik';
import { FormGroup } from '@material-ui/core';
import {
  chronicSickValues,
  FIELD_IS_CHRONIC_SICK,
  VALUE_IS_CHRONIC_SICK_NO,
  VALUE_IS_CHRONIC_SICK_YES
} from '../../../../constants';

import { Button, Checkbox, Radio, TextField, T } from '../../../index';

import { Actions, Description, InputWrapper, Label, SubContainer, Title, Wrapper } from '../../ImprintFiller.styled';

const ChronicSick = ({ handelGoToNextStep }) => {
  const { handleChange, setFieldValue, values } = useFormikContext();

  const handleSelectChronicSick = () => {
    setFieldValue(FIELD_IS_CHRONIC_SICK, VALUE_IS_CHRONIC_SICK_YES);
  };

  const handleSelectNoChronicSick = () => {
    setFieldValue(FIELD_IS_CHRONIC_SICK, VALUE_IS_CHRONIC_SICK_NO);
    chronicSickValues.map(field => field.field).forEach(item => setFieldValue(item, false));
  };

  const handleSetFieldValue = (field, value) => {
    setFieldValue(field, value);
  };

  const isAnyFieldSelected = () =>
    values[FIELD_IS_CHRONIC_SICK] === VALUE_IS_CHRONIC_SICK_NO || chronicSickValues.find(_obj => values[_obj.field]);

  const goToNextStep = () => {
    if (isAnyFieldSelected()) {
      handelGoToNextStep();
    }
  };

  const renderCheckboxes = chronicSickValues.map(({ field, description, placeholder }) => (
    <Fragment key={field}>
      <Checkbox
        checked={values[field]}
        label={
          <Label>
            <T i18nKey={field} />
          </Label>
        }
        name={field}
        onChange={() => handleSetFieldValue(field, !values[field])}
        size="big"
        value={values[field] || ''}
      />
      {values[field] && placeholder && (
        <InputWrapper>
          <TextField
            label={<T i18nKey={placeholder} />}
            name={description}
            onChange={handleChange}
            value={values[description] || ''}
          />
        </InputWrapper>
      )}
    </Fragment>
  ));

  const disabled = !isAnyFieldSelected();

  const isChronicSick = values[FIELD_IS_CHRONIC_SICK] === VALUE_IS_CHRONIC_SICK_YES;

  return (
    <>
      <Title>
        <T i18nKey="chronic_sick_text1" />
      </Title>
      <Wrapper>
        <FormGroup>
          <Radio
            checked={values[FIELD_IS_CHRONIC_SICK] === VALUE_IS_CHRONIC_SICK_NO}
            label={
              <Label>
                <T i18nKey="chronic_sick_text2" />
              </Label>
            }
            onChange={handleSelectNoChronicSick}
            name={FIELD_IS_CHRONIC_SICK}
          />
          <Radio
            checked={values[FIELD_IS_CHRONIC_SICK] === VALUE_IS_CHRONIC_SICK_YES}
            label={
              <Label>
                <T i18nKey="chronic_sick_text3" />
              </Label>
            }
            onChange={handleSelectChronicSick}
            name={FIELD_IS_CHRONIC_SICK}
          />
        </FormGroup>
      </Wrapper>

      {isChronicSick && (
        <SubContainer>
          <Description>
            <T i18nKey="chronic_sick_text4" />
          </Description>
          {renderCheckboxes}
        </SubContainer>
      )}
      <Actions>
        <Button disabled={disabled} onClick={goToNextStep} label={<T i18nKey="button_next" />} />
      </Actions>
    </>
  );
};

export default ChronicSick;
