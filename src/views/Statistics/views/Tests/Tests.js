import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ReactComponent as IconCovidTests } from '../../../../assets/img/icons/icon-covid-tests.svg';
import { resolveChartHeader } from '../../statistics.helpers';
import { Chart, T, Title } from '../../../../components';
import { Legend, StatisticsTable, UpdateDistricts } from '../../components';
import { getLastTwoWeeks } from '../../../../store/selectors/statistics';
import { Slide } from '../../Statistics.styled';

const Tests = ({ districts, lastUpdate, summary, voivodeships }) => {
  const chartLine1 = useSelector(getLastTwoWeeks)('tests');

  const legendData = [
    {
      key: 'newTests',
      label: 'statistics_view_today',
      value: summary.newTests
    }
  ];

  const voivodeshipsTableData = [
    {
      header: <T i18nKey="statistics_view_voivodeship" />,
      field: 'name'
    },
    {
      header: <T i18nKey="statistics_view_today" />,
      field: 'newTests'
    }
  ];

  const districtsTableData = [
    {
      header: <T i18nKey="statistics_view_district" />,
      field: 'name'
    },
    {
      header: <T i18nKey="statistics_view_today" />,
      field: 'newTests'
    }
  ];

  return (
    <Slide>
      <Chart
        data={[chartLine1]}
        footer={<T i18nKey="statistics_view_text_9" />}
        header={resolveChartHeader(lastUpdate)}
      />
      <Legend data={legendData} />
      <Title icon={<IconCovidTests />} text={<T i18nKey="statistics_view_text_16" />} />
      <StatisticsTable data={voivodeships} fields={voivodeshipsTableData} />
      <Title icon={<IconCovidTests />} text={<T i18nKey="statistics_view_text_17" />} />
      <StatisticsTable data={districts} fields={districtsTableData} noDataLabel="statistics_view_text_31" />
      <UpdateDistricts />
    </Slide>
  );
};

Tests.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired,
  lastUpdate: PropTypes.string.isRequired,
  summary: PropTypes.object.isRequired,
  voivodeships: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Tests;
