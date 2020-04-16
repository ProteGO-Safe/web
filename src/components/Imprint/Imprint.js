import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import {
  VALUE_MAN,
  VALUE_SMOKE_NO,
  VALUE_SMOKE_YES,
  VALUE_WOMAN
} from '../../constants';

import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';
import { Paragraph, SmallText } from '../../theme/typography';
import { ImprintWrapper } from './Imprint.styled';

import './Imprint.scss';

const tSex = {
  [VALUE_MAN]: 'Mężczyzna',
  [VALUE_WOMAN]: 'Kobieta'
};

const Imprint = ({ user }) => {
  const { sex, age, chronicSicks, bloodGroup, smokeNumber } = user;

  return (
    <ImprintWrapper className="metrics-paragraph">
      <Grid container>
        <Grid item xs={6}>
          <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>Płeć:</Paragraph>
          <SmallText>{tSex[sex]}</SmallText>
        </Grid>

        <Grid item xs={6}>
          <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>Wiek:</Paragraph>
          <SmallText>{age}</SmallText>
        </Grid>

        <Grid item xs={6}>
          <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>Palenie:</Paragraph>
          <SmallText>
            {smokeNumber ? VALUE_SMOKE_YES : VALUE_SMOKE_NO}
            {smokeNumber && ` (${smokeNumber})`}
          </SmallText>
        </Grid>

        <Grid item xs={6}>
          <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>Grupa krwi:</Paragraph>
          <SmallText>{bloodGroup}</SmallText>
        </Grid>

        <Grid item>
          <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>Dolegliwości:</Paragraph>
          {chronicSicks && chronicSicks.length ? (
            chronicSicks.map((sick, index) => (
              <SmallText key={sick.name}>
                {`${sick.name} ${sick.description ? sick.description : ''}${
                  index === chronicSicks.length - 1 ? '' : ','
                }`}
              </SmallText>
            ))
          ) : (
            <SmallText>Brak dolegliwości</SmallText>
          )}
        </Grid>
      </Grid>
    </ImprintWrapper>
  );
};

Imprint.propTypes = {
  user: PropTypes.shape({
    age: PropTypes.number.isRequired,
    bloodGroup: PropTypes.string.isRequired,
    chronicSicks: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        name: PropTypes.string
      })
    ),
    sex: PropTypes.oneOf([VALUE_MAN, VALUE_WOMAN]),
    smokeNumber: PropTypes.string,
    phone: PropTypes.number.isRequired
  }).isRequired
};

export default Imprint;
