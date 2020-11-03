import React from 'react';
import { withTranslation } from 'react-i18next';
import { Grid } from '@material-ui/core';

import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';
import { Paragraph, SmallText } from '../../theme/typography';
import { ImprintWrapper } from './Imprint.styled';

import './Imprint.scss';

const Imprint = ({ labTestPin, t, user = {} }) => {
  const { chronicSicks, bloodGroup, smokeNumber, isSmoking } = user;

  const smokingContent = () => {
    if (!smokeNumber && isSmoking === undefined) {
      return t('imprint_text5');
    }
    if (smokeNumber) {
      return `${t('yes')} ${t(smokeNumber)}`;
    }
    return t('no');
  };

  const chronicSicksContent = () => {
    if (!chronicSicks) {
      return <SmallText>{t('imprint_text5')}</SmallText>;
    }
    if (chronicSicks.length === 0) {
      return <SmallText>{t('imprint_text4')}</SmallText>;
    }
    return chronicSicks.map((sick, index) => (
      <SmallText key={sick.name}>
        {`${t(sick.name)}${sick.description ? `: ${t(sick.description)}` : ''}${
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
            {t('imprint_text1')}
          </Paragraph>
          <SmallText>{smokingContent()}</SmallText>
        </Grid>

        <Grid item xs={6}>
          <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
            {t('imprint_text2')}
          </Paragraph>
          <SmallText>
            {bloodGroup === 'undefined' ? t('imprint_text5') : bloodGroup}
          </SmallText>
        </Grid>

        <Grid item xs={6}>
          <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
            {t('imprint_text3')}
          </Paragraph>
          {chronicSicksContent()}
        </Grid>

        <Grid item xs={6}>
          <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
            {t('imprint_text13')}
          </Paragraph>
          <SmallText>{t('imprint_text14')}</SmallText>
        </Grid>

        {labTestPin && (
          <Grid item xs={6}>
            <Paragraph color={Color.lightBlack} fontWeight={FontWeight.Bold}>
              {t('imprint_text12')}
            </Paragraph>
            <SmallText>{labTestPin}</SmallText>
          </Grid>
        )}
      </Grid>
    </ImprintWrapper>
  );
};

export default withTranslation()(Imprint);
