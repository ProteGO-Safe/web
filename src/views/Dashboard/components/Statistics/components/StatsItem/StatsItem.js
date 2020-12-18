import React from 'react';
import PropTypes from 'prop-types';
import ScaleText from 'react-scale-text';
import { T } from '../../../../../../components';
import { numberWithSpaces } from '../../../../../../utils/number';
import * as Styled from './StatsItem.styled';

const StatsItem = ({ name, newRecord, totalRecord }) => (
  <Styled.StatsItem>
    <Styled.Header>
      <ScaleText minFontSize={8} maxFontSize={12}>
        <T i18nKey={name} />
      </ScaleText>
    </Styled.Header>

    <Styled.Content>
      <Styled.Number>+ {numberWithSpaces(newRecord)}</Styled.Number>
      <Styled.SmallNumber>{numberWithSpaces(totalRecord)}</Styled.SmallNumber>
    </Styled.Content>
  </Styled.StatsItem>
);

StatsItem.propTypes = {
  name: PropTypes.string.isRequired,
  newRecord: PropTypes.number.isRequired,
  totalRecord: PropTypes.number.isRequired
};

export default StatsItem;
