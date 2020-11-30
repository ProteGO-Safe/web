import React from 'react';
import { withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, FieldSet, Layout, T } from '../../components';
import {
  Title,
  Paragraph1,
  Paragraph2,
  WarningContent,
  WarningLabel,
  WarningList,
  WarningListItem
} from './Information.styled';

import warning from '../../assets/img/icons/warning.svg';

const Information = ({ t, hideInformation }) => {
  const { triageLevel } = useSelector(state => state.triage);

  return (
    <Layout id="view-information" hideBackButton={triageLevel === ''}>
      <Title>{t('information_text1')}</Title>
      <Paragraph1>{t('information_text2')}</Paragraph1>
      <WarningContent>
        <WarningLabel>
          <img src={warning} alt={t('information_text3')} />
          {t('information_text3')}
        </WarningLabel>
        <Paragraph2>{t('information_text4')}</Paragraph2>
        <WarningList>
          <WarningListItem>
            <T i18nKey="information_text5" />
          </WarningListItem>
          <WarningListItem>
            <T i18nKey="information_text7" />
          </WarningListItem>
          <WarningListItem>
            <T i18nKey="information_text10" />
          </WarningListItem>
        </WarningList>
      </WarningContent>
      <FieldSet>
        <Button onClick={hideInformation} label={t('button_next')} />
      </FieldSet>
    </Layout>
  );
};

export default withTranslation()(Information);
