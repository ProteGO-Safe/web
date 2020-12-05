import React from 'react';
import ContentRiskCheck from './ContentRiskCheck';
import useLanguage from '../../../../../../hooks/useLanguage';
import { T } from '../../../../../../components';
import * as Styled from './ContentRiskCheck.styled';

const ContentRiskCheckContainer = ({ data }) => {
  const { language } = useLanguage();

  const items = data.map(({ exposures, keys, timestamp }) => {
    const time = new Intl.DateTimeFormat(language, {
      hour: '2-digit',
      minute: '2-digit'
    }).format(timestamp);

    return (
      <Styled.Item key={timestamp}>
        <T i18nKey="history_notifications_text_5" variables={{ exposures, keys, time }} />
      </Styled.Item>
    );
  });

  const isExposures = data.some(item => item.exposures > 0);

  return <ContentRiskCheck exposures={isExposures} renderItems={items} />;
};

export default ContentRiskCheckContainer;
