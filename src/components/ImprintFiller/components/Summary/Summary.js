import React from 'react';
import { useFormikContext } from 'formik';
import { withTranslation } from 'react-i18next';
import { Button, T } from '../../../index';
import Imprint from '../../../Imprint/Imprint';
import {
  chronicSickValues,
  FIELD_BLOOD_GROUP,
  FIELD_MANUAL_COVID,
  FIELD_SMOKE,
  FIELD_SMOKE_NUMBER
} from '../../../../constants';
import { Color } from '../../../../theme/colors';
import { SmallText } from '../../../../theme/typography';
import { FontWeight } from '../../../../theme/fonts';
import { Actions, Title } from '../../ImprintFiller.styled';

const Summary = ({ t, handleResetForm }) => {
  const { handleSubmit, values } = useFormikContext();

  const chronicSicks = chronicSickValues
    .filter(sick => values[sick.field])
    .map(sick => {
      return { name: sick.field, description: values[sick.description] };
    });

  return (
    <>
      <Title>
        <T i18nKey="imprint_filler_summary_text1" />
      </Title>
      <Imprint
        user={{
          bloodGroup: values[FIELD_BLOOD_GROUP],
          chronicSicks,
          smokeNumber: values[FIELD_SMOKE_NUMBER],
          isSmoking: values[FIELD_SMOKE] === t('yes')
        }}
        forceHideManualCovid={values[FIELD_MANUAL_COVID] === false}
      />
      <Actions>
        <Button onClick={handleSubmit}>
          <SmallText color={Color.white} fontWeight={FontWeight.Bold}>
            <T i18nKey="imprint_filler_summary_text2" />
          </SmallText>
        </Button>
        <Button onClick={handleResetForm} type="outline">
          <SmallText color={Color.primary} fontWeight={FontWeight.Bold}>
            <T i18nKey="imprint_filler_summary_text3" />
          </SmallText>
        </Button>
      </Actions>
    </>
  );
};

export default withTranslation()(Summary);
