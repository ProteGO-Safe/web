import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ReactComponent as IconVaccine } from '../../../../assets/img/icons/icon-vaccine.svg';
import { resolveChartHeader } from '../../statistics.helpers';
import { Chart, T, Title } from '../../../../components';
import { Legend, MoreAboutVaccines, StatisticsTable, UpdateDistricts } from '../../components';
import { getLastTwoWeeks } from '../../../../store/selectors/statistics';
import { Color } from '../../../../theme/colors';
import { Slide } from '../../Statistics.styled';

const Doses = ({ districts, lastUpdate, summary, voivodeships }) => {
  const chartLine1 = useSelector(getLastTwoWeeks)('vaccinationsDose1');
  const chartLine2 = useSelector(getLastTwoWeeks)('vaccinationsDose2');

  const legendData = [
    {
      dot: Color.primaryLight_2,
      key: 'newVaccinationsDose1',
      label: 'statistics_view_text_23',
      value: summary.newVaccinationsDose1
    },
    {
      dot: Color.red,
      key: 'newVaccinationsDose2',
      label: 'statistics_view_text_24',
      value: summary.newVaccinationsDose2
    }
  ];

  const voivodeshipsTableData = [
    {
      header: <T i18nKey="statistics_view_voivodeship" />,
      field: 'name'
    },
    {
      header: <T i18nKey="statistics_view_text_23" />,
      field: 'totalVaccinationsDose1'
    },
    {
      header: <T i18nKey="statistics_view_text_24" />,
      field: 'totalVaccinationsDose2'
    }
  ];

  const districtsTableData = [
    {
      header: <T i18nKey="statistics_view_district" />,
      field: 'name'
    },
    {
      header: <T i18nKey="statistics_view_text_23" />,
      field: 'totalVaccinationsDose1'
    },
    {
      header: <T i18nKey="statistics_view_text_24" />,
      field: 'totalVaccinationsDose2'
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
      <Title icon={<IconVaccine />} text={<T i18nKey="statistics_view_text_1" />} />
      <StatisticsTable data={voivodeships} fields={voivodeshipsTableData} />
      <Title icon={<IconVaccine />} text={<T i18nKey="statistics_view_text_2" />} />
      <StatisticsTable data={districts} fields={districtsTableData} noDataLabel="statistics_view_text_31" />
      <UpdateDistricts />
      <MoreAboutVaccines />
    </Slide>
  );
};

Doses.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired,
  lastUpdate: PropTypes.string.isRequired,
  summary: PropTypes.object.isRequired,
  voivodeships: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Doses;
