import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
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

const Vaccinations = ({ districts, lastUpdate, summary, voivodeships }) => {
  const { t } = useTranslation();

  const chartLine1 = useSelector(getLastTwoWeeks)('vaccinations');

  const legendData = [
    {
      label: <T i18nkey="statistics_view_today" />,
      value: summary.newVaccinations
    }
  ];

  const renderedRowsForVoivodeshipsTable = voivodeships.map(voivodeship => (
    <RowBody key={voivodeship.id}>
      <TD align="left">
        <Small color={Color.black}>{voivodeship.name}</Small>
      </TD>
      <TD>
        <Small>{voivodeship.details.newVaccinations}</Small>
      </TD>
      <TD>
        <Small>{voivodeship.details.totalVaccinations}</Small>
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
          <Small>{district.newVaccinations}</Small>
        </TD>
        <TD>
          <Small>{district.totalVaccinations}</Small>
        </TD>
      </RowBody>
    ))
  ) : (
    <SubscribedDistrictsEmpty />
  );

  return (
    <Slide>
      <Chart
        data={[chartLine1]}
        footer={<T i18nKey="statistics_view_text_9" />}
        header={resolveChartHeader(lastUpdate, t)}
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
              <T i18nKey="statistics_view_today" />
            </TH>
            <TH>
              <T i18nKey="statistics_view_total" />
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
              <T i18nKey="statistics_view_today" />
            </TH>
            <TH>
              <T i18nKey="statistics_view_total" />
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

Vaccinations.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired,
  lastUpdate: PropTypes.string.isRequired,
  summary: PropTypes.object.isRequired,
  voivodeships: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Vaccinations;
