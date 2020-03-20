import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import { Container } from '../../../../components/Container';
import { Option } from '../../../../components/Option';
import { FieldSet } from '../../../../components/FieldSet';
import { Button } from '../../../../components/Button';
import { VALUE_ABSENT, VALUE_PRESENT } from '../../../../constants';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';

const GroupMultiple = ({ text, items }) => {
  const { setFieldValue, values, submitForm } = useFormikContext();

  const handleChange = itemId => {
    if (values[itemId] === VALUE_PRESENT) {
      setFieldValue(itemId, VALUE_ABSENT);
      return;
    }

    if (values[itemId] === VALUE_ABSENT) {
      setFieldValue(itemId, VALUE_PRESENT);
    }
  };

  const renderOption = item => {
    return (
      <Option
        key={item.id}
        checked={values[item.id] === VALUE_PRESENT}
        name={item.id}
        onChange={() => handleChange(item.id)}
        text={item.name}
        type={'checkbox'}
        value={values[item.id]}
      />
    );
  };

  const renderOptions = () => items.map(_item => renderOption(_item));

  return (
    <Container>
      <h3>{text}</h3>
      <FieldSet>{renderOptions()}</FieldSet>
      <Button
        disabled={Object.values(values).every(value => value === VALUE_ABSENT)}
        height="small"
        onClick={submitForm}
        icon={Icon}
        size="small"
        text="Dalej"
      />
    </Container>
  );
};

GroupMultiple.propTypes = {
  text: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      choices: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired
        })
      )
    })
  )
};

export default GroupMultiple;
