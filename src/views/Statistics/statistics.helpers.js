import React from 'react';
import { T } from '../../components';

export const resolveChartHeader = lastUpdate => {
  return (
    <>
      <T i18nKey="statistics_view_text_8" /> {lastUpdate}
    </>
  );
};
