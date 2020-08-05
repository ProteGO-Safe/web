import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import { FIELD_CHOICE_ID } from '../../../../constants';
import { Button, FieldSet, Radio } from '../../../../components';
import { Title } from '../../Diagnosis.styled';
import { choicesPropType } from '../../prop-types';

const Single = ({ text, choices }) => {
  const { setFieldValue, values, submitForm } = useFormikContext();

  const handleChange = (field, value) => {
    setFieldValue(field, value);
  };

  return (
    <>
      <Title>{text}</Title>
      <FieldSet>
        {choices.map(choice => (
          <Radio
            key={choice.id}
            checked={values[FIELD_CHOICE_ID] === choice.id}
            name={FIELD_CHOICE_ID}
            onChange={() => handleChange(FIELD_CHOICE_ID, choice.id)}
            label={choice.label}
          />
        ))}
      </FieldSet>
      <Button
        disabled={!values[FIELD_CHOICE_ID]}
        onClick={submitForm}
        label="Dalej"
      />
    </>
  );
};

Single.propTypes = {
  text: PropTypes.string.isRequired,
  choices: choicesPropType
};

export default Single;
