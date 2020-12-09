import React from 'react';
import * as Styled from './HistoryActivitiesEmpty.styled';

import { ReactComponent as Image } from '../../../../assets/img/icons/history-activities-empty.svg';
import { T } from '../../../../components/T';

const HistoryActivitiesEmpty = () => (
  <Styled.HistoryActivitiesEmpty>
    <Styled.ImageWrapper>
      <Image />
    </Styled.ImageWrapper>

    <Styled.Title>
      <T i18nKey="history_notifications_text_3" />
    </Styled.Title>
    <Styled.Text>
      <T i18nKey="history_notifications_text_4" />
    </Styled.Text>
  </Styled.HistoryActivitiesEmpty>
);

export default HistoryActivitiesEmpty;
