import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import { Button, FieldSet, Option } from '../../../../components';

import {
  FIELD_CHOICE_ID,
  FIELD_ITEM_ID,
  VALUE_PRESENT
} from '../../../../constants';

import Icon from '../../../../assets/img/icons/angle-right-white.svg';

const GroupSingle = ({ text, items }) => {
  const { setFieldValue, values, submitForm } = useFormikContext();

  const handleChange = itemId => {
    setFieldValue(FIELD_ITEM_ID, itemId);
    setFieldValue(FIELD_CHOICE_ID, VALUE_PRESENT);
  };

  const renderOption = item => (
    <Option
      color="white"
      key={item.id}
      checked={values[FIELD_ITEM_ID] === item.id}
      name={FIELD_ITEM_ID}
      onChange={() => handleChange(item.id)}
      text={item.name}
      value={values[FIELD_ITEM_ID]}
    />
  );

  const renderOptions = items.map(_item => renderOption(_item));

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

GroupSingle.propTypes = {
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

export default GroupSingle;
