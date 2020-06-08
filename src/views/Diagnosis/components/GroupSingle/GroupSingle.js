import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { Button, FieldSet, Radio } from '../../../../components';
import { Title } from '../../Diagnosis.styled';

import {
  FIELD_CHOICE_ID,
  FIELD_ITEM_ID,
  VALUE_PRESENT
} from '../../../../constants';

import Icon from '../../../../assets/img/icons/angle-right-white.svg';
import { itemsPropType } from '../../prop-types';

const GroupSingle = ({ text, items }) => {
  const { setFieldValue, values, submitForm } = useFormikContext();

  const handleChange = itemId => {
    setFieldValue(FIELD_ITEM_ID, itemId);
    setFieldValue(FIELD_CHOICE_ID, VALUE_PRESENT);
  };

  return (
    <>
      <Title>{text}</Title>
      <FieldSet>
        {items.map(item => (
          <Radio
            key={item.id}
            checked={values[FIELD_ITEM_ID] === item.id}
            name={FIELD_ITEM_ID}
            onChange={() => handleChange(item.id)}
            label={item.name}
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

GroupSingle.propTypes = {
  text: PropTypes.string.isRequired,
  items: itemsPropType
};

export default GroupSingle;
