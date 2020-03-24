import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import Checkbox from '../../../../components/Checkbox/Checkbox';
import { FieldSet } from '../../../../components/FieldSet';
import { Button } from '../../../../components/Button';
import { VALUE_ABSENT, VALUE_PRESENT } from '../../../../constants';
import Icon from '../../../../assets/img/icons/angle-right-white.svg';
import { itemsPropType } from '../../prop-types';

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

  return (
    <>
      <h3>{text}</h3>
      <FieldSet>
        {items.map(item => (
          <Checkbox
            key={item.id}
            checked={values[item.id] === VALUE_PRESENT}
            name={item.id}
            onChange={() => handleChange(item.id)}
            description={item.name}
            type="checkbox"
            value={values[item.id]}
            size="big"
          />
        ))}
        <Checkbox
          checked={otherSelected}
          name="Żadne z powyższych"
          onChange={handelSelectOther}
          description="Żadne z powyższych"
          type="checkbox"
          size="big"
        />
      </FieldSet>
      <Button
        height="small"
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
