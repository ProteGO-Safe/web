import React from 'react';
import PropTypes from 'prop-types';
import { T } from '../index';
import * as Styled from './DataUpdate.styled';

import { ReactComponent as IconNoData } from '../../assets/img/icons/icon-statistics-no-data.svg';

const DataUpdate = ({ mrgT, noPadding }) => (
  <Styled.Wrapper padding={noPadding} mrgT={mrgT}>
    <Styled.Image>
      <IconNoData />
    </Styled.Image>

    <Styled.Title>
      <T i18nKey="data_update_1" />
    </Styled.Title>

    <Styled.Description>
      <T i18nKey="data_update_2" />
    </Styled.Description>
  </Styled.Wrapper>
);

DataUpdate.defaultProps = {
  mrgT: 10,
  noPadding: false
};

DataUpdate.propTypes = {
  mrgT: PropTypes.number,
  noPadding: PropTypes.bool
};

export default DataUpdate;
