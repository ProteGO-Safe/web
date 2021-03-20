import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ReactComponent as IconVaccine } from '../../../../assets/img/icons/icon-vaccine.svg';
import { resolveChartHeader } from '../../statistics.helpers';
import { Chart, T, Title } from '../../../../components';
import { Legend, MoreAboutVaccines, StatisticsTable, UpdateDistricts } from '../../components';
import { getLastTwoWeeks } from '../../../../store/selectors/statistics';
import { Slide } from '../../Statistics.styled';

const Vaccinations = ({ districts, lastUpdate, summary, voivodeships }) => {
  const chartLine1 = useSelector(getLastTwoWeeks)('vaccinations');

  const legendData = [
    {
      key: 'newVaccinations',
      label: 'statistics_view_today',
      value: summary.newVaccinations
    },
    {
      key: 'totalVaccinations',
      label: 'statistics_view_total',
      value: summary.totalVaccinations
    }
  ];

  const voivodeshipsTableData = [
    {
      header: <T i18nKey="statistics_view_voivodeship" />,
      field: 'name'
    },
    {
      header: <T i18nKey="statistics_view_today" />,
      field: 'newVaccinations'
    },
    {
      header: <T i18nKey="statistics_view_total" />,
      field: 'totalVaccinations'
    }
  ];

  const districtsTableData = [
    {
      header: <T i18nKey="statistics_view_district" />,
      field: 'name'
    },
    {
      header: <T i18nKey="statistics_view_today" />,
      field: 'newVaccinations'
    },
    {
      header: <T i18nKey="statistics_view_total" />,
      field: 'totalVaccinations'
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
      <Title icon={<IconVaccine />} text={<T i18nKey="statistics_view_text_1" />} />
      <StatisticsTable data={voivodeships} fields={voivodeshipsTableData} />
      <Title icon={<IconVaccine />} text={<T i18nKey="statistics_view_text_2" />} />
      <StatisticsTable data={districts} fields={districtsTableData} noDataLabel="statistics_view_text_31" />
      <UpdateDistricts />
      <MoreAboutVaccines />
    </Slide>
  );
};

Vaccinations.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired,
  lastUpdate: PropTypes.string.isRequired,
  summary: PropTypes.object.isRequired,
  voivodeships: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Vaccinations;
