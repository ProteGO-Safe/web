import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import { withTranslation } from 'react-i18next';
import { FIELD_CHOICE_ID } from '../../../../constants';
import { Button, FieldSet, Radio } from '../../../../components';
import { Title } from '../../Diagnosis.styled';
import { choicesPropType } from '../../prop-types';

const Single = ({ t, text, choices }) => {
  const { setFieldValue, values, submitForm } = useFormikContext();

  const handleChange = (field, value) => {
    setFieldValue(field, value);
  };

  return (
    <>
      <Title>{t(text)}</Title>
      <FieldSet>
        {choices.map(choice => (
          <Radio
            key={choice.id}
            checked={values[FIELD_CHOICE_ID] === choice.id}
            name={FIELD_CHOICE_ID}
            onChange={() => handleChange(FIELD_CHOICE_ID, choice.id)}
            label={t(choice.label)}
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

Single.propTypes = {
  text: PropTypes.string.isRequired,
  choices: choicesPropType
};

export default withTranslation()(Single);
