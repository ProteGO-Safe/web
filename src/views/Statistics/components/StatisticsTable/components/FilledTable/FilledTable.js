import React, { useState, useEffect } from 'react';
import orderby from 'lodash.orderby';
import { not } from 'ramda';
import PropTypes from 'prop-types';
import { RowBody, RowHeader, Table, Tbody, TD, Thead } from '../../../../../../components/Table/Table.styled';
import { Small } from '../../../../../../theme/typography';
import { Color } from '../../../../../../theme/colors';
import { TH } from '../../../../../../components/Table/componets';
import { ARROW_TYPE } from '../../../../../../components/Table/table.constants';

const FilledTable = ({ data, fields }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState(fields[0].field);
  const [ascending, setAscending] = useState(true);

  useEffect(() => {
    setSortedData(prev => {
      if (sortBy === 'name' && ascending) {
        return [...prev.sort((a, b) => a.name.localeCompare(b.name))];
      }
      if (sortBy === 'name' && not(ascending)) {
        return [...prev.sort((a, b) => b.name.localeCompare(a.name))];
      }
      return orderby(prev, [sortBy], [ascending ? 'asc' : 'desc']);
    });
  }, [sortBy, ascending]);

  const sortData = field => {
    setSortBy(field);
    if (field === sortBy) {
      setAscending(prev => not(prev));
    } else {
      setAscending(true);
    }
  };

  const renderedHeaders = fields.map(({ header, field }, index) => {
    const isFirst = index === 0;
    return (
      <TH
        key={field}
        align={isFirst && 'left'}
        colspan={isFirst && 3}
        onClick={() => sortData(field)}
        selected={field === sortBy}
        type={field === sortBy ? (ascending ? ARROW_TYPE.UP : ARROW_TYPE.DOWN) : ARROW_TYPE.DOWN}
      >
        {header}
      </TH>
    );
  });

  const renderedRows = sortedData.map(item => (
    <RowBody key={item.id}>
      {fields.map(({ field }, index) => {
        const isFirst = index === 0;
        return (
          <TD align={isFirst && 'left'} key={field}>
            <Small color={isFirst && Color.black}>{item[field]}</Small>
          </TD>
        );
      })}
    </RowBody>
  ));
  return (
    <Table>
      <Thead>
        <RowHeader>{renderedHeaders}</RowHeader>
      </Thead>
      <Tbody>{renderedRows}</Tbody>
    </Table>
  );
};

FilledTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FilledTable;
