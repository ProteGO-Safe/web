import React from 'react';
import { withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, FieldSet, Layout } from '../../components';
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
    <Layout hideBackButton={triageLevel === ''}>
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
            <strong>{t('information_text5')}</strong>
            {t('information_text6')}
          </WarningListItem>
          <WarningListItem>
            {t('information_text7')}
            <strong>{t('information_text8')}</strong>
            {t('information_text9')}
          </WarningListItem>
          <WarningListItem>
            {t('information_text10')}
            <strong>{t('information_text11')}</strong>
            {t('information_text12')}
            <strong>{t('information_text13')}</strong>
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
