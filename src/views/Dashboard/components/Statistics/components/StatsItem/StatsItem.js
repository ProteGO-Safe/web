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
      <Styled.Number>
        <ScaleText minFontSize={10} maxFontSize={20}>
          {newRecord > 0 && '+'} {numberWithSpaces(newRecord)}
        </ScaleText>
      </Styled.Number>
      <Styled.SmallNumber>
        <ScaleText minFontSize={10} maxFontSize={12}>
          {numberWithSpaces(totalRecord)}
        </ScaleText>
      </Styled.SmallNumber>
    </Styled.Content>
  </Styled.StatsItem>
);

StatsItem.propTypes = {
  name: PropTypes.string.isRequired,
  newRecord: PropTypes.number.isRequired,
  totalRecord: PropTypes.number.isRequired
};

export default StatsItem;
