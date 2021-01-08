import React from 'react';
import { Grid } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';
import { Paragraph, SmallText } from '../../theme/typography';
import { ImprintWrapper } from './Imprint.styled';
import { T } from '../index';

import './Imprint.scss';
import useHealthStats from '../../hooks/useHealthStats';

const Imprint = ({ labTestPin, user = {}, forceHideManualCovid }) => {
  const { chronicSicks, bloodGroup, smokeNumber, isSmoking } = user;
  const { isCovidManual } = useHealthStats();

  const smokingContent = () => {
    if (!smokeNumber && isSmoking === undefined) {
      return <T i18nKey="imprint_text5" />;
    }
    if (smokeNumber) {
      return (
        <>
          <T i18nKey="yes" /> <T i18nKey={smokeNumber} />
        </>
      );
    }
    return <T i18nKey="no" />;
  };

  const chronicSicksContent = () => {
    if (!chronicSicks) {
      return (
        <SmallText>
          <T i18nKey="imprint_text5" />
        </SmallText>
      );
    }
    if (chronicSicks.length === 0) {
      return (
        <SmallText>
          <T i18nKey="imprint_text4" />
        </SmallText>
      );
    }
    return chronicSicks.map((sick, index) => (
      <SmallText key={sick.name}>
        <T i18nKey={sick.name} />
        {sick.description ? `: ${sick.description}` : ''}
        {index === chronicSicks.length - 1 ? '' : ','}
      </SmallText>
    ));
  };

  return (
    <ImprintWrapper className="metrics-paragraph">
      <Grid container>
        <Grid item xs={6}>
          <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
            <T i18nKey="imprint_text1" />
          </Paragraph>
          <SmallText>{smokingContent()}</SmallText>
        </Grid>

        <Grid item xs={6}>
          <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
            <T i18nKey="imprint_text2" />
          </Paragraph>
          <SmallText>{bloodGroup === 'undefined' ? <T i18nKey="imprint_text5" /> : bloodGroup}</SmallText>
        </Grid>

        <Grid item xs={6}>
          <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
            <T i18nKey="imprint_text3" />
          </Paragraph>
          {chronicSicksContent()}
        </Grid>

        {isCovidManual && !forceHideManualCovid && (
          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              <T i18nKey="imprint_text13" />
            </Paragraph>
            <SmallText>
              <T i18nKey="imprint_text14" />
            </SmallText>
          </Grid>
        )}

        {labTestPin && (
          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              <T i18nKey="imprint_text12" />
            </Paragraph>
            <SmallText>{labTestPin}</SmallText>
          </Grid>
        )}
      </Grid>
    </ImprintWrapper>
  );
};

export default withTranslation()(Imprint);
