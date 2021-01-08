import React from 'react';
import ContentRiskCheck from './ContentRiskCheck';
import { T } from '../../../../../../components';
import * as Styled from './ContentRiskCheck.styled';
import { getFormattedTime } from '../../../../../../utils/date';

const ContentRiskCheckContainer = ({ data }) => {
  const items = data.map(({ exposures, keys, timestamp }) => {
    const time = getFormattedTime(timestamp);

    return (
      <Styled.Item key={`${timestamp}-${keys}-${exposures}`}>
        <T i18nKey="history_notifications_text_5" variables={{ exposures, keys, time }} />
      </Styled.Item>
    );
  });

  const isExposures = data.some(item => item.exposures > 0);

  return <ContentRiskCheck exposures={isExposures} renderItems={items} />;
};

export default ContentRiskCheckContainer;
