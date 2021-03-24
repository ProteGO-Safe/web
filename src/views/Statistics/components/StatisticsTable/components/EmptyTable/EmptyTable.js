import React from 'react';
import PropTypes from 'prop-types';
import { RowBody, RowHeader, Table, Tbody, Thead } from '../../../../../../components/Table/Table.styled';
import { Small } from '../../../../../../theme/typography';
import { T } from '../../../../../../components/T';
import * as Styled from './EmptyTable.styled';
import { Color } from '../../../../../../theme/colors';
import { TH } from '../../../../../../components/Table/componets';

const EmptyTable = ({ label, fields }) => {
  const renderedHeaders = fields.map(({ header, field }, index) => {
    const isFirst = index === 0;
    return (
      <TH key={field} align={isFirst && 'left'} colspan={isFirst && 3}>
        {header}
      </TH>
    );
  });
  const body = label ? (
    <RowBody>
      <Styled.Wrapper align="left" colSpan={3}>
        <Small color={Color.black}>
          <T i18nKey={label} />
        </Small>
      </Styled.Wrapper>
    </RowBody>
  ) : null;
  return (
    <Table>
      <Thead>
        <RowHeader>{renderedHeaders}</RowHeader>
      </Thead>
      <Tbody>{body}</Tbody>
    </Table>
  );
};

EmptyTable.defaultProps = {
  label: ''
};

EmptyTable.propTypes = {
  label: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default EmptyTable;
