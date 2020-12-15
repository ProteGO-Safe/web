import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
      new: newCases,
      total: totalCases
    },
    {
      name: 'statistics_text_4',
      new: newDeaths,
      total: totalDeaths
    },
    {
      name: 'statistics_text_5',
      new: newRecovered,
      total: totalRecovered
    }
  ];

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
