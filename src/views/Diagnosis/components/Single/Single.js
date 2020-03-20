import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import { FIELD_CHOICE_ID } from '../../../../constants';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';
import {
  Button,
  FieldSet,
  Option
} from '../../../../components';

const Single = ({ text, choices }) => {
  const { setFieldValue, values, submitForm } = useFormikContext();

  const handleChange = (field, value) => {
    setFieldValue(field, value);
  };

  const renderOption = choice => (
    <Option
      color="white"
      key={choice.id}
      checked={values[FIELD_CHOICE_ID] === choice.id}
      name={FIELD_CHOICE_ID}
      onChange={() => handleChange(FIELD_CHOICE_ID, choice.id)}
      text={choice.label}
      value={values[FIELD_CHOICE_ID]}
    />
  );

  const renderOptions = choices.map(_choise => renderOption(_choise));

  return (
    <>
      <h3>{text}</h3>
      <FieldSet>{renderOptions}</FieldSet>
      <Button
        disabled={!values[FIELD_CHOICE_ID]}
        height="small"
        onClick={submitForm}
        icon={Icon}
        size="small"
        text="Dalej"
      />
    </>
  );
};

Single.propTypes = {
  text: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  )
};

export default Single;
