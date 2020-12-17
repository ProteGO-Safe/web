import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { not, or } from 'ramda';
import Statistics from './Statistics';
import { fetchCovidStatistics } from '../../../../store/actions/nativeData';
import { getCovidStats } from '../../../../store/selectors/nativeData';
import { getFormattedDay } from '../../../../utils/date';
import { getSubscribedDistricts } from '../../../../store/selectors/restrictions';
import { fetchSubscribedDistricts } from '../../../../store/actions/restrictions';

const StatisticsContainer = () => {
  const dispatch = useDispatch();
  const { updated, newCases, totalCases, newDeaths, totalDeaths, newRecovered, totalRecovered } = useSelector(
    getCovidStats
  );
  const subscribedDistricts = useSelector(getSubscribedDistricts);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCovidStatistics());
    dispatch(fetchSubscribedDistricts());
    // eslint-disable-next-line
  }, [dispatch]);

  const handleOpen = () => setOpen(prev => !prev);

  const covidStats = [
    {
      name: 'statistics_text_3',
      news: newCases,
      totals: totalCases
    },
    {
      name: 'statistics_text_4',
      news: newDeaths,
      totals: totalDeaths
    },
    {
      name: 'statistics_text_5',
      news: newRecovered,
      totals: totalRecovered
    }
  ].filter(({ news, totals }) => {
    // both props have to be a number
    return not(or(not(Number.isInteger(news)), not(Number.isInteger(totals))));
  });

  return (
    <Statistics
      districtItems={subscribedDistricts}
      open={open}
      dateUpdated={getFormattedDay(updated)}
      handleToggleButton={handleOpen}
      covidStats={covidStats}
    />
  );
};

export default StatisticsContainer;
