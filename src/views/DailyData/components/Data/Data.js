import React from 'react';
import moment from 'moment';
import { withTranslation } from 'react-i18next';
import { Grid } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { ImprintWrapper } from '../../../../components/Imprint/Imprint.styled';
import { Paragraph, SmallText } from '../../../../theme/typography';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';
import {
  FIELD_CHILLS,
  FIELD_CONTACTS,
  FIELD_COUGH,
  FIELD_MUSCLE_PAIN,
  FIELD_RUNNY_NOSE,
  FIELD_TEMPERATURE,
  FIELD_TIME
} from '../../../../constants';
import { levels } from '../Form/constants';

const Data = ({ t }) => {
  const { values } = useFormikContext();
  const date = moment(values[FIELD_TIME]).format('DD MMM, YYYY');

  return (
    <>
      <SmallText style={{ marginBottom: '19px' }}>
        {t('data_text1')} {date}
      </SmallText>
      <ImprintWrapper className="metrics-paragraph">
        <Grid container>
          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              {t('data_text2')}
            </Paragraph>
            <SmallText>{values[FIELD_TEMPERATURE]} °C</SmallText>
          </Grid>

          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              {t('data_text3')}
            </Paragraph>
            <SmallText>{t(levels[values[FIELD_RUNNY_NOSE]])}</SmallText>
          </Grid>

          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              {t('data_text4')}
            </Paragraph>
            <SmallText>{t(levels[values[FIELD_COUGH]])}</SmallText>
          </Grid>

          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              {t('data_text5')}
            </Paragraph>
            <SmallText>{t(levels[values[FIELD_CHILLS]])}</SmallText>
          </Grid>

          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              {t('data_text6')}
            </Paragraph>
            <SmallText>{t(levels[values[FIELD_MUSCLE_PAIN]])}</SmallText>
          </Grid>

          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              {t('data_text7')}
            </Paragraph>
            <SmallText>{values[FIELD_CONTACTS]}</SmallText>
          </Grid>
        </Grid>
      </ImprintWrapper>
    </>
  );
};

export default withTranslation()(Data);
