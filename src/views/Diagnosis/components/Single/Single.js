import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import { Container } from '../../../../components/Container';
import { Option } from '../../../../components/Option';
import { FieldSet } from '../../../../components/FieldSet';
import { Button } from '../../../../components/Button';
import { FIELD_ID } from '../../../../constants';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

const Single = ({ text, choices }) => {
  const { setFieldValue, values, submitForm } = useFormikContext();

  const handleChange = (field, value) => {
    setFieldValue(field, value);
  };

  const renderOption = choice => (
    <Option
      key={choice.id}
      checked={values[FIELD_ID] === choice.id}
      name={FIELD_ID}
      onChange={() => handleChange(FIELD_ID, choice.id)}
      text={choice.label}
      value={values[FIELD_ID]}
    />
  );

  const renderOptions = () => choices.map(_choise => renderOption(_choise));

  return (
    <Container>
      <h3>{text}</h3>
      <FieldSet>
        {renderOptions()}
      </FieldSet>
      <Button
        disabled={!values[FIELD_ID]}
        height="small"
        onClick={submitForm}
        icon={Icon}
        size="small"
        text="Dalej"
      />
    </Container>
  )
};

Single.propTypes = {
  text: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })),
};

export default Single;
