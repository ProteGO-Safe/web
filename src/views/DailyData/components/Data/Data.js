import React from 'react';
import moment from 'moment';
import { Grid } from '@material-ui/core';
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
import { T } from '../../../../components';

const Data = ({ data }) => {
  const date = moment(data[FIELD_TIME]).format('DD MMM, YYYY');

  return (
    <>
      <SmallText style={{ marginBottom: '19px' }}>
        <T i18nKey="data_text1" /> {date}
      </SmallText>
      <ImprintWrapper className="metrics-paragraph">
        <Grid container>
          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              <T i18nKey="data_text2" />
            </Paragraph>
            <SmallText>{data[FIELD_TEMPERATURE]} °C</SmallText>
          </Grid>

          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              <T i18nKey="data_text3" />
            </Paragraph>
            <SmallText>
              <T i18nKey={levels[data[FIELD_RUNNY_NOSE]]} />
            </SmallText>
          </Grid>

          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              <T i18nKey="data_text4" />
            </Paragraph>
            <SmallText>
              <T i18nKey={levels[data[FIELD_COUGH]]} />
            </SmallText>
          </Grid>

          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              <T i18nKey="data_text5" />
            </Paragraph>
            <SmallText>
              <T i18nKey={levels[data[FIELD_CHILLS]]} />
            </SmallText>
          </Grid>

          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              <T i18nKey="data_text6" />
            </Paragraph>
            <SmallText>
              <T i18nKey={levels[data[FIELD_MUSCLE_PAIN]]} />
            </SmallText>
          </Grid>

          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              <T i18nKey="data_text7" />
            </Paragraph>
            <SmallText>{data[FIELD_CONTACTS]}</SmallText>
          </Grid>
        </Grid>
      </ImprintWrapper>
    </>
  );
};

export default Data;
