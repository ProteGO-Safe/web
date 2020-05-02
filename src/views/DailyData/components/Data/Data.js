import React from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
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
  FIELD_TEMPERATURE
} from '../../../../constants';
import { levels } from '../Form/constants';

const Data = () => {
  const { values } = useFormikContext();
  const location = useLocation();
  const date = moment
    .unix(location.pathname.split('/')[2])
    .format('DD.MM.YYYYr.');

  return (
    <>
      <SmallText style={{ marginBottom: '19px' }}>
        Wpis z dnia: {date}
      </SmallText>
      <ImprintWrapper className="metrics-paragraph">
        <Grid container>
          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              Temperatura
            </Paragraph>
            <SmallText>{values[FIELD_TEMPERATURE]}</SmallText>
          </Grid>

          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              Katar
            </Paragraph>
            <SmallText>{levels[values[FIELD_RUNNY_NOSE]]}</SmallText>
          </Grid>

          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              Kaszel
            </Paragraph>
            <SmallText>{levels[values[FIELD_COUGH]]}</SmallText>
          </Grid>

          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              Dreszcze
            </Paragraph>
            <SmallText>{levels[values[FIELD_CHILLS]]}</SmallText>
          </Grid>

          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              Ból mięśni
            </Paragraph>
            <SmallText>{levels[values[FIELD_MUSCLE_PAIN]]}</SmallText>
          </Grid>

          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              Miejsce i kontakty
            </Paragraph>
            <SmallText>{values[FIELD_CONTACTS]}</SmallText>
          </Grid>
        </Grid>
      </ImprintWrapper>
    </>
  );
};

export default Data;
