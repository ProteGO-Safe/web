import React from 'react';
import PropTypes from 'prop-types';
import { not } from 'ramda';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryLabel } from 'victory';
import { Color } from '../../theme/colors';
import { Small } from '../../theme/typography';
import { styles } from './chart.helpers';
import * as Styled from './Chart.styled';
import { numberWithSpaces } from '../../utils/number';

const Chart = ({ data, footer, header }) => {
  if (not(data)) {
    return null;
  }
  if (data.every(value => not(value))) {
    return null;
  }
  const parsedData = data && data.length > 2 ? data.slice(0, 2) : data;

  const renderData = parsedData.map((values, index) => {
    const points = values.map((y, x) => ({
      x,
      y
    }));

    return (
      <VictoryArea
        data={points}
        height={80}
        // eslint-disable-next-line
        key={index}
        labels={({ datum }) => (parsedData.length >= 2 ? null : `+ ${numberWithSpaces(datum.y)}`)}
        labelComponent={<VictoryLabel renderInPortal verticalAnchor="middle" textAnchor="end" />}
        style={styles[index]}
      />
    );
  });

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Small color={Color.lightGray}>{header}</Small>
      </Styled.Header>

      {/* Number of values is provided by props in order to display only the last value on the chart */}
      {/* All data elements should have the same length at the moment (14 days) */}
      <Styled.Chart numberOfValues={data[0].length}>
        <VictoryChart height={80} padding={{ top: 15 }}>
          {renderData}
          <VictoryAxis style={{ axis: { stroke: Color.white } }} />
        </VictoryChart>
      </Styled.Chart>
      <Styled.Footer>
        <Small color={Color.lightGray}>{footer}</Small>
      </Styled.Footer>
    </Styled.Wrapper>
  );
};

Chart.defaultProps = {
  data: [],
  footer: '',
  header: ''
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array),
  footer: PropTypes.node,
  header: PropTypes.node
};

export default Chart;
