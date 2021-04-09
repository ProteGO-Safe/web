import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ReactComponent as IconRecover } from '../../../../assets/img/icons/icon-recover.svg';
import { resolveChartHeader } from '../../statistics.helpers';
import { Chart, T, Title } from '../../../../components';
import { Legend, StatisticsTable, UpdateDistricts } from '../../components';
import { getLastTwoWeeks } from '../../../../store/selectors/statistics';
import { Slide } from '../../Statistics.styled';

const Recovered = ({ districts, lastUpdate, summary, voivodeships }) => {
  const chartLine1 = useSelector(getLastTwoWeeks)('recovered');

  const legendData = [
    {
      key: 'newRecovered',
      label: 'statistics_view_today',
      value: summary.newRecovered
    },
    {
      key: 'totalRecovered',
      label: 'statistics_view_total',
      value: summary.totalRecovered
    }
  ];

  const voivodeshipsTableData = [
    {
      header: <T i18nKey="statistics_view_voivodeship" />,
      field: 'name'
    },
    {
      header: <T i18nKey="statistics_view_today" />,
      field: 'newRecovered'
    }
  ];

  const districtsTableData = [
    {
      header: <T i18nKey="statistics_view_district" />,
      field: 'name'
    },
    {
      header: <T i18nKey="statistics_view_today" />,
      field: 'newRecovered'
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
      <Title icon={<IconRecover />} text={<T i18nKey="statistics_view_text_10" />} />
      <StatisticsTable data={voivodeships} fields={voivodeshipsTableData} />
      <Title icon={<IconRecover />} text={<T i18nKey="statistics_view_text_11" />} />
      <StatisticsTable data={districts} fields={districtsTableData} noDataLabel="statistics_view_text_31" />
      <UpdateDistricts />
    </Slide>
  );
};

Recovered.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired,
  lastUpdate: PropTypes.string.isRequired,
  summary: PropTypes.object.isRequired,
  voivodeships: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Recovered;
