import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ReactComponent as IconCovidTests } from '../../../../assets/img/icons/icon-covid-tests.svg';
import { resolveChartHeader } from '../../statistics.helpers';
import { Chart, T, Title } from '../../../../components';
import { Legend, SubscribedDistrictsEmpty, UpdateDistricts } from '../../components';
import { getLastTwoWeeks } from '../../../../store/selectors/statistics';
import { Small } from '../../../../theme/typography';
import { Color } from '../../../../theme/colors';
import { Slide } from '../../Statistics.styled';
import { RowBody, RowHeader, Table, Tbody, TD, TH, Thead } from '../../../../components/Table/Table.styled';

const Tests = ({ districts, lastUpdate, summary, voivodeships }) => {
  const chartLine1 = useSelector(getLastTwoWeeks)('tests');

  const legendData = [
    {
      label: <T i18nkey="statistics_view_today" />,
      value: summary.newTests
    }
  ];

  const renderedRowsForVoivodeshipsTable = voivodeships.map(voivodeship => (
    <RowBody key={voivodeship.id}>
      <TD align="left">
        <Small color={Color.black}>{voivodeship.name}</Small>
      </TD>
      <TD>
        <Small>{voivodeship.details.newTests}</Small>
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
          <Small>{district.newTests}</Small>
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
        header={resolveChartHeader(lastUpdate)}
      />
      <Legend data={legendData} />
      <Title icon={<IconCovidTests />} text={<T i18nKey="statistics_view_text_16" />} />

      <Table>
        <Thead>
          <RowHeader>
            <TH align="left" colspan={3}>
              <T i18nKey="statistics_view_voivodeship" />
            </TH>
            <TH>
              <T i18nKey="statistics_view_today" />
            </TH>
          </RowHeader>
        </Thead>
        <Tbody>{renderedRowsForVoivodeshipsTable}</Tbody>
      </Table>

      <Title icon={<IconCovidTests />} text={<T i18nKey="statistics_view_text_17" />} />

      <Table>
        <Thead>
          <RowHeader>
            <TH align="left" colspan={3}>
              <T i18nKey="statistics_view_district" />
            </TH>
            <TH>
              <T i18nKey="statistics_view_today" />
            </TH>
          </RowHeader>
        </Thead>
        <Tbody>{renderedRowsForDistrictsTable}</Tbody>
      </Table>
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
