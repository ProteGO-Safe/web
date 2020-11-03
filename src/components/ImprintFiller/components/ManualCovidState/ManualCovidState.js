import React from 'react';
import { withTranslation } from 'react-i18next';
import { useFormikContext } from 'formik';
import { FormGroup } from '@material-ui/core';
import { Button, Radio } from '../../../index';
import { FIELD_MANUAL_COVID } from '../../../../constants';
import { Actions, Title, Label } from '../../ImprintFiller.styled';
import * as Styled from './ManualCovidState.styled';

const ManualCovidState = ({ t }) => {
  const { setFieldValue, values } = useFormikContext();

  const yesManualCovid = values[FIELD_MANUAL_COVID] === true;
  const noManualCovid = values[FIELD_MANUAL_COVID] === false;

  const handleManualCovidRadio = value => {
    setFieldValue(FIELD_MANUAL_COVID, value);
  };

  return (
    <>
      <Title>{t('manual_covid_state_text1')}</Title>
      <FormGroup>
        <Radio
          checked={yesManualCovid}
          onChange={() => handleManualCovidRadio(true)}
          name={FIELD_MANUAL_COVID}
          label={<Label>{t('manual_covid_state_text2')}</Label>}
        />
        <Radio
          checked={noManualCovid}
          onChange={() => handleManualCovidRadio(false)}
          name={FIELD_MANUAL_COVID}
          label={<Label>{t('manual_covid_state_text3')}</Label>}
        />
      </FormGroup>

      {noManualCovid && (
        <Styled.WarningBox>
          <Styled.Icon />
          <Styled.Description>
            <Styled.Title>{t('manual_covid_state_text4')}</Styled.Title>
            <Styled.Paragraph>{t('manual_covid_state_text5')}</Styled.Paragraph>
          </Styled.Description>
        </Styled.WarningBox>
      )}

      <Actions>
        <Button
          disabled={values[FIELD_MANUAL_COVID] === undefined}
          onClick={() => setFieldValue('step', 6)}
          label={t('button_next')}
        />
      </Actions>
    </>
  );
};

export default withTranslation()(ManualCovidState);
