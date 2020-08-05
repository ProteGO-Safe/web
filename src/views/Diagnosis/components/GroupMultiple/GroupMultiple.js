import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import { Button, Checkbox, FieldSet } from '../../../../components';
import { withTranslation } from 'react-i18next';
import { VALUE_ABSENT, VALUE_PRESENT } from '../../../../constants';
import { itemsPropType } from '../../prop-types';
import { Title } from '../../Diagnosis.styled';

const GroupMultiple = ({ t, text, items }) => {
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

  const someSelected =
    Object.keys(values).some(answer => values[answer] === VALUE_PRESENT) ||
    otherSelected;

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
          label={t('group_multiple_text1')}
          name={t('group_multiple_text1')}
          onChange={handelSelectOther}
          type="checkbox"
          size="big"
        />
      </FieldSet>
      <Button disabled={!someSelected} onClick={submitForm} label={t('button_next')} />
    </>
  );
};

GroupMultiple.propTypes = {
  text: PropTypes.string.isRequired,
  items: itemsPropType
};

export default withTranslation()(GroupMultiple);
