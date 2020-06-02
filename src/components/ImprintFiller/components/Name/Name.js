import React from 'react';
import { useFormikContext } from 'formik';
import { FormGroup } from '@material-ui/core';
import { Button, Checkbox, TextField } from '../../..';
import { FIELD_NAME, FIELD_TERM1 } from '../../../../constants';

import useModalContext from '../../../../hooks/useModalContext';
import PrivacyPolicyContent from '../../../../views/PrivacyPolicyDetails/component/PrivacyPolicyContent/PrivacyPolicyContent';
import RegulationsContent from '../../../../views/Regulations/component/RegulationsContent/RegulationsContent';

import { Annotation, TextLink } from '../../../../theme/typography';
import { Actions, Title } from '../../ImprintFiller.styled';
import './Name.scss';

const Name = ({ editMode, handleClick }) => {
  const { errors, handleChange, setFieldValue, values } = useFormikContext();
  const { openModal } = useModalContext();

  const disabled = (() => {
    if (editMode) {
      return !values[FIELD_NAME];
    }
    return !values[FIELD_NAME] || !values[FIELD_TERM1];
  })();

  return (
    <>
      {!editMode && (
        <div className="worth-it">
          <Title>
            Pomóż sobie i innym. <br /> Zaczynamy!
          </Title>
        </div>
      )}
      <TextField
        error={errors[FIELD_NAME]}
        label="Jak aplikacja może się do Ciebie zwracać?"
        placeholder="Twój nick lub pseudonim"
        onChange={handleChange}
        name={FIELD_NAME}
        value={values[FIELD_NAME]}
        info="Podpowiedź: nie podawaj swojego nazwiska."
      />
      {!editMode && (
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
      )}

      <Actions>
        <Button disabled={disabled} onClick={handleClick} text="Dalej" />
      </Actions>
    </>
  );
};

export default Name;
