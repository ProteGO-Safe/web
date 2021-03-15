import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import Statistics from './Statistics';
import {
  getStatisticsSummary,
  getSubscribedDistrictsData,
  getUpdateDate,
  getVoivodeshipsData
} from '../../store/selectors/statistics';

const StatisticsContainer = ({ handleBack }) => {
  const voivodeships = useSelector(getVoivodeshipsData);
  const summary = useSelector(getStatisticsSummary);
  const districts = useSelector(getSubscribedDistrictsData);
  const updated = useSelector(getUpdateDate);

  const lastUpdate = moment(updated).format('DD.MM.YYYY');

  return (
    <Statistics
      districts={districts}
      handleBack={handleBack}
      lastUpdate={lastUpdate}
      summary={summary}
      voivodeships={voivodeships}
    />
  );
};

export default StatisticsContainer;
