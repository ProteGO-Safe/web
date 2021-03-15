import React from 'react';
import PropTypes from 'prop-types';
import { RowBody } from '../../../../components/Table/Table.styled';
import { Small } from '../../../../theme/typography';
import { T } from '../../../../components/T';
import * as Styled from './SubscribedDistrictsEmpty.styled';
import { Color } from '../../../../theme/colors';

const SubscribedDistrictsEmpty = ({ colSpan }) => {
  return (
    <RowBody>
      <Styled.Wrapper align="left" colSpan={colSpan}>
        <Small color={Color.black}>
          <T i18nKey="statistics_view_text_31" />
        </Small>
      </Styled.Wrapper>
    </RowBody>
  );
};

SubscribedDistrictsEmpty.defaultProps = {
  colSpan: 2
};

SubscribedDistrictsEmpty.propTypes = {
  colSpan: PropTypes.number
};

export default SubscribedDistrictsEmpty;
