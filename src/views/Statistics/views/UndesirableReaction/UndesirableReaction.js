import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { resolveChartHeader } from '../../statistics.helpers';
import { Chart, T } from '../../../../components';
import { Legend, MoreAboutVaccines } from '../../components';
import { getLastTwoWeeks } from '../../../../store/selectors/statistics';
import { Slide } from '../../Statistics.styled';

const UndesirableReaction = ({ lastUpdate, summary }) => {
  const chartLine1 = useSelector(getLastTwoWeeks)('undesirableReactions');

  const legendData = [
    {
      key: 'undesirableReactions',
      label: 'statistics_view_total',
      value: summary.totalUndesirableReaction
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
      <MoreAboutVaccines />
    </Slide>
  );
};

UndesirableReaction.propTypes = {
  lastUpdate: PropTypes.string.isRequired,
  summary: PropTypes.object.isRequired
};

export default UndesirableReaction;
