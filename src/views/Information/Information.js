import React from 'react';
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

const Information = ({ hideInformation }) => {
  const { triageLevel } = useSelector(state => state.triage);

  return (
    <Layout id="view-information" hideBackButton={triageLevel === ''} hideBell>
      <Title>
        <T i18nKey="information_text1" />
      </Title>
      <Paragraph1>
        <T i18nKey="information_text2" />
      </Paragraph1>
      <WarningContent>
        <WarningLabel>
          <img src={warning} alt={<T i18nKey="information_text3" />} />
          <T i18nKey="information_text3" />
        </WarningLabel>
        <Paragraph2>
          <T i18nKey="information_text4" />
        </Paragraph2>
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
        <Button onClick={hideInformation} label={<T i18nKey="button_next" />} />
      </FieldSet>
    </Layout>
  );
};

export default Information;
