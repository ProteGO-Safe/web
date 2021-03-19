import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Statistics from './Statistics';
import { fetchSummaryStatistics } from '../../../../store/actions/statistics';
import { getStatisticsSummary } from '../../../../store/selectors/statistics';
import { getFormattedDay } from '../../../../utils/date';
import { fetchSubscribedDistricts } from '../../../../store/actions/restrictions';
import { Wrapper } from '../index';
import { DataUpdate, T } from '../../../../components';
import * as Styled from './Statistics.styled';
import { STATISTIC_KIND } from '../../../../constants';

const StatisticsContainer = () => {
  const dispatch = useDispatch();
  const {
    newCases,
    newDeaths,
    newRecovered,
    newVaccinations,
    newVaccinationsDose1,
    newVaccinationsDose2,
    newUndesirableReaction,
    newDeathsWithComorbidities,
    newDeathsWithoutComorbidities,
    newTests,
    totalCases,
    totalDeaths,
    totalRecovered,
    totalVaccinations,
    totalVaccinationsDose1,
    totalVaccinationsDose2,
    totalUndesirableReaction,
    updated
  } = useSelector(getStatisticsSummary);

  useEffect(() => {
    dispatch(fetchSummaryStatistics());
    dispatch(fetchSubscribedDistricts());
    // eslint-disable-next-line
  }, [dispatch]);

  const filerValueNumber = item => {
    const { firstLine, secondLine } = item;
    if (firstLine && Number.isInteger(firstLine.value)) {
      return true;
    }
    if (secondLine && Number.isInteger(secondLine.value)) {
      return true;
    }
    return false;
  };

  const vaccinationsBoxes = [
    {
      id: '1',
      kind: STATISTIC_KIND.VACCINATIONS,
      heading: <T i18nKey="dashboard_statistic_5" />,
      firstLine: {
        value: newVaccinations,
        label: <T i18nKey="dashboard_statistic_3" />
      },
      secondLine: {
        value: totalVaccinations,
        label: <T i18nKey="dashboard_statistic_4" />,
        smallSize: true,
        withoutPlus: true
      }
    },
    {
      id: '2',
      kind: STATISTIC_KIND.DOSES,
      heading: <T i18nKey="dashboard_statistic_6" />,
      firstLine: {
        value: newVaccinationsDose1,
        label: <T i18nKey="dashboard_statistic_3" />
      },
      secondLine: {
        value: totalVaccinationsDose1,
        label: <T i18nKey="dashboard_statistic_4" />,
        smallSize: true,
        withoutPlus: true
      }
    },
    {
      id: '3',
      kind: STATISTIC_KIND.DOSES,
      heading: <T i18nKey="dashboard_statistic_7" />,
      firstLine: {
        value: newVaccinationsDose2,
        label: <T i18nKey="dashboard_statistic_3" />
      },
      secondLine: {
        value: totalVaccinationsDose2,
        label: <T i18nKey="dashboard_statistic_4" />,
        smallSize: true,
        withoutPlus: true
      }
    },
    {
      id: '4',
      kind: STATISTIC_KIND.UNDESIRABLE_REACTION,
      heading: <T i18nKey="dashboard_statistic_8" />,
      firstLine: {
        value: newUndesirableReaction,
        label: <T i18nKey="dashboard_statistic_3" />
      },
      secondLine: {
        value: totalUndesirableReaction,
        label: <T i18nKey="dashboard_statistic_4" />,
        smallSize: true,
        withoutPlus: true
      }
    }
  ].filter(filerValueNumber);

  const covidStatsBoxes = [
    {
      id: '1',
      kind: STATISTIC_KIND.CASES,
      heading: <T i18nKey="dashboard_statistic_10" />,
      firstLine: {
        value: newCases,
        label: <T i18nKey="dashboard_statistic_3" />
      },
      secondLine: {
        value: totalCases,
        label: <T i18nKey="dashboard_statistic_4" />,
        smallSize: true,
        withoutPlus: true
      }
    },
    {
      id: '2',
      kind: STATISTIC_KIND.RECOVERED,
      heading: <T i18nKey="dashboard_statistic_11" />,
      firstLine: {
        value: newRecovered,
        label: <T i18nKey="dashboard_statistic_3" />
      },
      secondLine: {
        value: totalRecovered,
        label: <T i18nKey="dashboard_statistic_4" />,
        smallSize: true,
        withoutPlus: true
      }
    },
    {
      id: '3',
      kind: STATISTIC_KIND.DEATHS,
      heading: <T i18nKey="dashboard_statistic_12" />,
      firstLine: {
        value: newDeaths,
        label: <T i18nKey="dashboard_statistic_3" />
      },
      secondLine: {
        value: totalDeaths,
        label: <T i18nKey="dashboard_statistic_4" />,
        smallSize: true,
        withoutPlus: true
      }
    },
    {
      id: '4',
      kind: STATISTIC_KIND.DEATHS_CAUSES,
      heading: <T i18nKey="dashboard_statistic_13" />,
      firstLine: {
        value: newDeathsWithoutComorbidities,
        label: <T i18nKey="dashboard_statistic_15" />,
        smallSize: true,
        withoutPlus: true
      },
      secondLine: {
        value: newDeathsWithComorbidities,
        label: <T i18nKey="dashboard_statistic_16" />,
        smallSize: true,
        withoutPlus: true
      }
    },
    {
      id: '5',
      kind: STATISTIC_KIND.TESTS,
      heading: <T i18nKey="dashboard_statistic_14" />,
      firstLine: {
        value: newTests,
        label: <T i18nKey="dashboard_statistic_3" />,
        withoutPlus: true
      }
    }
  ].filter(filerValueNumber);

  const existsCovidStatsItems = useMemo(() => covidStatsBoxes.length > 0, [covidStatsBoxes]);

  const existsVaccinationStatsItems = useMemo(() => vaccinationsBoxes.length > 0, [vaccinationsBoxes]);

  return (
    <Wrapper pdgTop="10">
      <Styled.Title>
        <T i18nKey="dashboard_statistic_1" />
      </Styled.Title>

      {existsCovidStatsItems || existsVaccinationStatsItems ? (
        <Statistics
          covidStatsBoxes={covidStatsBoxes}
          dateUpdated={getFormattedDay(updated)}
          vaccinationsBoxes={vaccinationsBoxes}
        />
      ) : (
        <DataUpdate />
      )}
    </Wrapper>
  );
};

export default StatisticsContainer;
