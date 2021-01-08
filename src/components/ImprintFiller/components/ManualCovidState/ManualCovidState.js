import React from 'react';
import { useFormikContext } from 'formik';
import { FormGroup } from '@material-ui/core';
import { Button, Radio, T } from '../../../index';
import { FIELD_MANUAL_COVID } from '../../../../constants';
import { Actions, Title, Label } from '../../ImprintFiller.styled';
import * as Styled from './ManualCovidState.styled';

const ManualCovidState = ({ handelGoToNextStep }) => {
  const { setFieldValue, values } = useFormikContext();

  const yesManualCovid = values[FIELD_MANUAL_COVID] === true;
  const noManualCovid = values[FIELD_MANUAL_COVID] === false;

  const handleManualCovidRadio = value => {
    setFieldValue(FIELD_MANUAL_COVID, value);
  };

  return (
    <>
      <Title>
        <T i18nKey="manual_covid_state_text1" />
      </Title>
      <FormGroup>
        <Radio
          checked={yesManualCovid}
          onChange={() => handleManualCovidRadio(true)}
          name={FIELD_MANUAL_COVID}
          label={
            <Label>
              <T i18nKey="manual_covid_state_text2" />
            </Label>
          }
        />
        <Radio
          checked={noManualCovid}
          onChange={() => handleManualCovidRadio(false)}
          name={FIELD_MANUAL_COVID}
          label={
            <Label>
              <T i18nKey="manual_covid_state_text3" />
            </Label>
          }
        />
      </FormGroup>

      {noManualCovid && (
        <Styled.WarningBox>
          <Styled.Icon />
          <Styled.Description>
            <Styled.Title>
              <T i18nKey="manual_covid_state_text4" />
            </Styled.Title>
            <Styled.Paragraph>
              <T i18nKey="manual_covid_state_text5" />
            </Styled.Paragraph>
          </Styled.Description>
        </Styled.WarningBox>
      )}

      <Actions>
        <Button
          disabled={values[FIELD_MANUAL_COVID] === undefined}
          onClick={handelGoToNextStep}
          label={<T i18nKey="button_next" />}
        />
      </Actions>
    </>
  );
};

export default ManualCovidState;
