import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ReactComponent as IconVaccine } from '../../../../assets/img/icons/icon-vaccine.svg';
import { resolveChartHeader } from '../../statistics.helpers';
import { Chart, T, Title } from '../../../../components';
import { Legend, MoreAboutVaccines, SubscribedDistrictsEmpty, UpdateDistricts } from '../../components';
import { getLastTwoWeeks } from '../../../../store/selectors/statistics';
import { Small } from '../../../../theme/typography';
import { Color } from '../../../../theme/colors';
import { Slide } from '../../Statistics.styled';
import { RowBody, RowHeader, Table, Tbody, TD, TH, Thead } from '../../../../components/Table/Table.styled';

const Doses = ({ districts, lastUpdate, summary, voivodeships }) => {
  const chartLine1 = useSelector(getLastTwoWeeks)('vaccinationsDose1');
  const chartLine2 = useSelector(getLastTwoWeeks)('vaccinationsDose2');

  const legendData = [
    {
      dot: Color.primaryLight_2,
      label: <T i18nKey="statistics_view_text_23" />,
      value: summary.newVaccinationsDose1
    },
    {
      dot: Color.red,
      label: <T i18nKey="statistics_view_text_24" />,
      value: summary.newVaccinationsDose2
    }
  ];

  const renderedRowsForVoivodeshipsTable = voivodeships.map(voivodeship => (
    <RowBody key={voivodeship.id}>
      <TD align="left">
        <Small color={Color.black}>{voivodeship.name}</Small>
      </TD>
      <TD>
        <Small>{voivodeship.details.totalVaccinationsDose1}</Small>
      </TD>
      <TD>
        <Small>{voivodeship.details.totalVaccinationsDose2}</Small>
      </TD>
    </RowBody>
  ));

  const renderedRowsForDistrictsTable = districts.length ? (
    districts.map(district => (
      <RowBody key={district.id}>
        <TD align="left">
          <Small color={Color.black}>{district.name}</Small>
        </TD>
        <TD>
          <Small>{district.totalVaccinationsDose1}</Small>
        </TD>
        <TD>
          <Small>{district.totalVaccinationsDose2}</Small>
        </TD>
      </RowBody>
    ))
  ) : (
    <SubscribedDistrictsEmpty colSpan={3} />
  );

  return (
    <Slide>
      <Chart
        data={[chartLine1, chartLine2]}
        footer={<T i18nKey="statistics_view_text_9" />}
        header={resolveChartHeader(lastUpdate)}
      />
      <Legend data={legendData} />
      <Title icon={<IconVaccine />} text={<T i18nKey="statistics_view_text_1" />} />

      <Table>
        <Thead>
          <RowHeader>
            <TH align="left" colspan={3}>
              <T i18nKey="statistics_view_voivodeship" />
            </TH>
            <TH>
              <T i18nKey="statistics_view_text_23" />
            </TH>
            <TH>
              <T i18nKey="statistics_view_text_24" />
            </TH>
          </RowHeader>
        </Thead>
        <Tbody>{renderedRowsForVoivodeshipsTable}</Tbody>
      </Table>

      <Title icon={<IconVaccine />} text={<T i18nKey="statistics_view_text_2" />} />

      <Table>
        <Thead>
          <RowHeader>
            <TH align="left" colspan={3}>
              <T i18nKey="statistics_view_district" />
            </TH>
            <TH>
              <T i18nKey="statistics_view_text_23" />
            </TH>
            <TH>
              <T i18nKey="statistics_view_text_24" />
            </TH>
          </RowHeader>
        </Thead>
        <Tbody>{renderedRowsForDistrictsTable}</Tbody>
      </Table>
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
