import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ReactComponent as IconDeath } from '../../../../assets/img/icons/icon-death.svg';
import { resolveChartHeader } from '../../statistics.helpers';
import { Chart, T, Title } from '../../../../components';
import { Legend, StatisticsTable, UpdateDistricts } from '../../components';
import { getLastTwoWeeks } from '../../../../store/selectors/statistics';
import { Color } from '../../../../theme/colors';
import { Slide } from '../../Statistics.styled';

const DeathsCauses = ({ districts, lastUpdate, summary, voivodeships }) => {
  const chartLine1 = useSelector(getLastTwoWeeks)('deathsWithoutComorbidities');
  const chartLine2 = useSelector(getLastTwoWeeks)('deathsWithComorbidities');

  const legendData = [
    {
      dot: Color.primaryLight_2,
      key: 'newDeathsWithoutComorbidities',
      label: 'statistics_view_text_27',
      value: summary.newDeathsWithoutComorbidities
    },
    {
      dot: Color.red,
      key: 'newDeathsWithComorbidities',
      label: 'statistics_view_text_28',
      value: summary.newDeathsWithComorbidities
    }
  ];

  const voivodeshipsTableData = [
    {
      header: <T i18nKey="statistics_view_voivodeship" />,
      field: 'name'
    },
    {
      header: <T i18nKey="statistics_view_text_27" />,
      field: 'newDeathsWithoutComorbidities'
    },
    {
      header: <T i18nKey="statistics_view_text_28" />,
      field: 'newDeathsWithComorbidities'
    }
  ];

  const districtsTableData = [
    {
      header: <T i18nKey="statistics_view_district" />,
      field: 'name'
    },
    {
      header: <T i18nKey="statistics_view_text_27" />,
      field: 'newDeathsWithoutComorbidities'
    },
    {
      header: <T i18nKey="statistics_view_text_28" />,
      field: 'newDeathsWithComorbidities'
    }
  ];

  return (
    <Slide>
      <Chart
        data={[chartLine1, chartLine2]}
        footer={<T i18nKey="statistics_view_text_9" />}
        header={resolveChartHeader(lastUpdate)}
      />
      <Legend data={legendData} />
      <Title icon={<IconDeath />} text={<T i18nKey="statistics_view_text_14" />} />
      <StatisticsTable data={voivodeships} fields={voivodeshipsTableData} />
      <Title icon={<IconDeath />} text={<T i18nKey="statistics_view_text_15" />} />
      <StatisticsTable data={districts} fields={districtsTableData} noDataLabel="statistics_view_text_31" />
      <UpdateDistricts />
    </Slide>
  );
};

DeathsCauses.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired,
  lastUpdate: PropTypes.string.isRequired,
  summary: PropTypes.object.isRequired,
  voivodeships: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DeathsCauses;
