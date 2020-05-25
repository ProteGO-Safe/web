import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import { Checkbox, FieldSet } from '../../../../components';
import { Button } from '../../../../components/Button';
import { VALUE_ABSENT, VALUE_PRESENT } from '../../../../constants';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';
import { itemsPropType } from '../../prop-types';
import { Title } from '../../Diagnosis.styled';

const GroupMultiple = ({ text, items }) => {
  const { setFieldValue, values, submitForm } = useFormikContext();
  const [otherSelected, setOtherSelected] = useState(false);

  const handleChange = itemId => {
    setOtherSelected(false);
    if (values[itemId] === VALUE_PRESENT) {
      setFieldValue(itemId, VALUE_ABSENT);
      return;
    }

    if (values[itemId] === VALUE_ABSENT) {
      setFieldValue(itemId, VALUE_PRESENT);
    }
  };

  const handelSelectOther = () => {
    setOtherSelected(true);
    items.forEach(item => setFieldValue(item.id, VALUE_ABSENT));
  };

  const someSelected = Object.keys(values).some(
    answer => values[answer] === VALUE_PRESENT
  );

  return (
    <>
      <Title>{text}</Title>
      <FieldSet>
        {items.map(item => (
          <Checkbox
            checked={values[item.id] === VALUE_PRESENT}
            key={item.id}
            label={item.name}
            name={item.id}
            onChange={() => handleChange(item.id)}
            type="checkbox"
            value={values[item.id]}
            size="big"
          />
        ))}
        <Checkbox
          checked={otherSelected}
          label="Żadne z powyższych"
          name="Żadne z powyższych"
          onChange={handelSelectOther}
          type="checkbox"
          size="big"
        />
      </FieldSet>
      <Button
        disabled={!someSelected}
        onClick={submitForm}
        icon={Icon}
        size="medium"
        text="Dalej"
      />
    </>
  );
};

GroupMultiple.propTypes = {
  text: PropTypes.string.isRequired,
  items: itemsPropType
};

export default GroupMultiple;
