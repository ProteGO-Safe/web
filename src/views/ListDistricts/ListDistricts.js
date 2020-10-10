import React from 'react';
import { Collapse, SubscribeItem } from '../../components';
import * as Styled from './ListDistricts.styled';

const ListDistricts = ({ items }) => {
  console.log(items);
  const renderDistricts = items.map(item => {
    const { id, name } = item;
    return (
      <Collapse key={id} title={name}>
        {item.districts.map(
          ({ id: _id, name: _name, state: _state, is_subscribed }) => (
            <SubscribeItem
              key={_id}
              name={_name}
              status={_state}
              handleClick={() => null}
              subscribed={is_subscribed}
            />
          )
        )}
      </Collapse>
    );
  });

  return <Styled.ListDistricts>{renderDistricts}</Styled.ListDistricts>;
};

export default ListDistricts;
