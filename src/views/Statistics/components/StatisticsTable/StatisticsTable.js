import React from 'react';
import { EmptyTable, FilledTable } from './components';

const StatisticsTable = ({ data, fields, noDataLabel }) => {
  if (!data.length) {
    return <EmptyTable label={noDataLabel} fields={fields} />;
  }

  return <FilledTable data={data} fields={fields} />;
};

export default StatisticsTable;
