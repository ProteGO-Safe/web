import React from 'react';
import { Button, FieldSet, Layout, T } from '../../components';
import * as Styled from './Information.styled';

import warning from '../../assets/img/icons/warning.svg';

const Information = ({ hideInformation }) => (
  <Layout id="view-information" hideBell>
    <Styled.Title>
      <T i18nKey="information_text1" />
    </Styled.Title>
    <Styled.Paragraph1>
      <T i18nKey="information_text2" />
    </Styled.Paragraph1>
    <Styled.WarningContent>
      <Styled.WarningLabel>
        <img src={warning} alt={<T i18nKey="information_text3" />} />
        <T i18nKey="information_text3" />
      </Styled.WarningLabel>
      <Styled.Paragraph2>
        <T i18nKey="information_text4" />
      </Styled.Paragraph2>
      <Styled.WarningList>
        <Styled.WarningListItem>
          <T i18nKey="information_text5" />
        </Styled.WarningListItem>
        <Styled.WarningListItem>
          <T i18nKey="information_text7" />
        </Styled.WarningListItem>
        <Styled.WarningListItem>
          <T i18nKey="information_text10" />
        </Styled.WarningListItem>
      </Styled.WarningList>
    </Styled.WarningContent>
    <FieldSet>
      <Button onClick={hideInformation} label={<T i18nKey="button_next" />} />
    </FieldSet>
  </Layout>
);

export default Information;
