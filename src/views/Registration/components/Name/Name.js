import React from 'react';
import { useFormikContext } from 'formik';
import { FormGroup } from '@material-ui/core';
import { Button, Checkbox, TextField } from '../../../../components';
import {
  FIELD_NAME,
  FIELD_TERM1
} from '../../../../constants';

import useModalContext from '../../../../hooks/useModalContext';
import PrivacyPolicyContent from '../../../PrivacyPolicyDetails/component/PrivacyPolicyContent/PrivacyPolicyContent';
import RegulationsContent from '../../../Regulations/component/RegulationsContent/RegulationsContent';

import {
  Annotation,
  List,
  ListItem,
  TextLink
} from '../../../../theme/typography';
import { Actions, Title } from '../../Registration.styled';
import './Name.scss';

const Name = () => {
  const {
    errors,
    handleChange,
    setErrors,
    setFieldValue,
    values,
    validateForm
  } = useFormikContext();
  const { openModal } = useModalContext();

  const fields = [FIELD_NAME, FIELD_TERM1];

  const handleClick = () => {
    validateForm().then(error => {
      if (!fields.some(field => Object.keys(error).includes(field))) {
        setFieldValue('step', 2);
        setErrors({});
      }
    });
  };

  const disabled =
    !values[FIELD_NAME] || !values[FIELD_TERM1];

  return (
    <>
      <div className="worth-it">
        <Title>Dlaczego warto?</Title>
        <List>
          <ListItem>
            Na bieżąco sprawdzaj w jakiej jesteś grupie ryzyka (wytyczne WHO)
          </ListItem>
          <ListItem>Uzupełniaj Dziennik Zdrowia</ListItem>
          <ListItem>
            Wszystkie ważne informacje o COVID-19 w jednym miejscu
          </ListItem>
        </List>
      </div>
      <TextField
        error={errors[FIELD_NAME]}
        label="Jak masz na imię?"
        placeholder="imię"
        onChange={handleChange}
        name={FIELD_NAME}
        value={values[FIELD_NAME]}
      />
      <FormGroup>
        <Checkbox
          checked={values[FIELD_TERM1]}
          label={
            <Annotation>
              Oświadczam, że zapoznałem/am się z{' '}
              <TextLink
                onClick={() => openModal(<RegulationsContent />)}
                role="button"
              >
                Regulaminem
              </TextLink>{' '}
              ProteGO Safe oraz{' '}
              <TextLink
                onClick={() => openModal(<PrivacyPolicyContent />)}
                role="button"
              >
                Polityką Prywatności
              </TextLink>{' '}
              i akceptuję ich postanowienia.
            </Annotation>
          }
          error={errors[FIELD_TERM1]}
          name={FIELD_TERM1}
          onChange={() => setFieldValue(FIELD_TERM1, !values[FIELD_TERM1])}
        />
      </FormGroup>
      <Actions>
        <Button disabled={disabled} onClick={handleClick} text="Dalej" />
      </Actions>
    </>
  );
};

export default Name;
