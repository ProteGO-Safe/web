import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import { FIELD_CHOICE_ID } from '../../../../constants';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';
import { Button, FieldSet, Radio } from '../../../../components';
import { choicesPropType } from '../../prop-types';

const Single = ({ text, choices }) => {
  const { setFieldValue, values, submitForm } = useFormikContext();

  const handleChange = (field, value) => {
    setFieldValue(field, value);
  };

  return (
    <>
      <h3>{text}</h3>
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
        icon={Icon}
        size="medium"
        text="Dalej"
      />
    </>
  );
};

Single.propTypes = {
  text: PropTypes.string.isRequired,
  choices: choicesPropType
};

export default Single;
