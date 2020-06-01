import React from 'react';
import { Grid } from '@material-ui/core';

import {
  VALUE_SMOKE_NO,
  VALUE_SMOKE_YES,
} from '../../constants';

import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';
import { Paragraph, SmallText } from '../../theme/typography';
import { ImprintWrapper } from './Imprint.styled';

import './Imprint.scss';

const Imprint = ({ user = {} }) => {
  const { chronicSicks, bloodGroup, smokeNumber, isFilled } = user;

  const smokingContent = () => {
    if (!isFilled) {
      return 'brak danych';
    }
    if (smokeNumber) {
      return `${VALUE_SMOKE_YES} ${smokeNumber}`;
    }
    return VALUE_SMOKE_NO;
  };

  const chronicSicksContent = () => {
    if (!isFilled) {
      return <SmallText>brak danych</SmallText>;
    }
    if (chronicSicks.length === 0) {
      return <SmallText>Brak dolegliwości</SmallText>;
    }
    return chronicSicks.map((sick, index) => (
      <SmallText key={sick.name}>
        {`${sick.name}${sick.description ? `: ${sick.description}` : ''}${
          index === chronicSicks.length - 1 ? '' : ','
        }`}
      </SmallText>
    ));
  };

  return (
    <ImprintWrapper className="metrics-paragraph">
      <Grid container>
        <Grid item xs={6}>
          <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
            Palenie:
          </Paragraph>
          <SmallText>{smokingContent()}</SmallText>
        </Grid>

        <Grid item xs={6}>
          <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
            Grupa krwi:
          </Paragraph>
          <SmallText>{bloodGroup || 'brak danych'}</SmallText>
        </Grid>

        <Grid item>
          <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
            Dolegliwości:
          </Paragraph>
          {chronicSicksContent()}
        </Grid>
      </Grid>
    </ImprintWrapper>
  );
};

export default Imprint;
