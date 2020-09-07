import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { withTranslation } from 'react-i18next';
import { Button, FieldSet, Radio } from '../../../../components';
import { Title } from '../../Diagnosis.styled';

import {
  FIELD_CHOICE_ID,
  FIELD_ITEM_ID,
  VALUE_PRESENT
} from '../../../../constants';

import { itemsPropType } from '../../prop-types';

const GroupSingle = ({ t, text, items }) => {
  const { setFieldValue, values, submitForm } = useFormikContext();

  const handleChange = itemId => {
    setFieldValue(FIELD_ITEM_ID, itemId);
    setFieldValue(FIELD_CHOICE_ID, VALUE_PRESENT);
  };

  return (
    <>
      <Title>{t(text)}</Title>
      <FieldSet>
        {items.map(item => (
          <Radio
            key={item.id}
            checked={values[FIELD_ITEM_ID] === item.id}
            name={FIELD_ITEM_ID}
            onChange={() => handleChange(item.id)}
            label={t(item.name)}
          />
        ))}
      </FieldSet>
      <Button
        disabled={!values[FIELD_CHOICE_ID]}
        onClick={submitForm}
        label={t('button_next')}
      />
    </>
  );
};

GroupSingle.propTypes = {
  text: PropTypes.string.isRequired,
  items: itemsPropType
};

export default withTranslation()(GroupSingle);
