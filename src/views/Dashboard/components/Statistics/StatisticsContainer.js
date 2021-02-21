import React, { useEffect, useMemo, useState } from 'react';
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
  const {
    newCases,
    newDeaths,
    newRecovered,
    newVaccinations,
    newVaccinationsDose1,
    newVaccinationsDose2,
    totalCases,
    totalDeaths,
    totalRecovered,
    totalVaccinations,
    totalVaccinationsDose1,
    totalVaccinationsDose2,
    updated
  } = useSelector(getCovidStats);
  const subscribedDistricts = useSelector(getSubscribedDistricts);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCovidStatistics());
    dispatch(fetchSubscribedDistricts());
    // eslint-disable-next-line
  }, [dispatch]);

  const handleOpen = () => setOpen(prev => !prev);

  const vaccinationStats = [
    {
      name: 'statistics_text_16',
      news: newVaccinations,
      totals: totalVaccinations
    },
    {
      name: 'statistics_text_17',
      news: newVaccinationsDose1,
      totals: totalVaccinationsDose1
    },
    {
      name: 'statistics_text_18',
      news: newVaccinationsDose2,
      totals: totalVaccinationsDose2
    }
  ].filter(({ news, totals }) => {
    // both props have to be a number
    return not(or(not(Number.isInteger(news)), not(Number.isInteger(totals))));
  });

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

  const existsCovidStatsItems = useMemo(() => covidStats.length > 0, [covidStats]);

  const existsVaccinationStatsItems = useMemo(() => vaccinationStats.length > 0, [vaccinationStats]);

  return existsCovidStatsItems || existsVaccinationStatsItems ? (
    <Statistics
      covidStats={covidStats}
      dateUpdated={getFormattedDay(updated)}
      districtItems={subscribedDistricts}
      existsCovidStatsItems={existsCovidStatsItems}
      existsVaccinationStatsItems={existsVaccinationStatsItems}
      handleToggleButton={handleOpen}
      open={open}
      vaccinationStats={vaccinationStats}
    />
  ) : null;
};

export default StatisticsContainer;
