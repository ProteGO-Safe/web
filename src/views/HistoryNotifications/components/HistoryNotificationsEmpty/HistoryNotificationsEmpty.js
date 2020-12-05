import React from 'react';
import * as Styled from './HistoryNotificationsEmpty.styled';

import { ReactComponent as Image } from '../../../../assets/img/icons/history-notifications-empty.svg';
import { T } from '../../../../components/T';

const HistoryNotificationsEmpty = () => (
  <Styled.HistoryNotificationsEmpty>
    <Styled.ImageWrapper>
      <Image />
    </Styled.ImageWrapper>

    <Styled.Title>
      <T i18nKey="history_notifications_text_3" />
    </Styled.Title>
    <Styled.Text>
      <T i18nKey="history_notifications_text_4" />
    </Styled.Text>
  </Styled.HistoryNotificationsEmpty>
);

export default HistoryNotificationsEmpty;
