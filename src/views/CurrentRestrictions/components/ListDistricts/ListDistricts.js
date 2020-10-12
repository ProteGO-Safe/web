import React from 'react';
import { Collapse, SubscribeItem } from '../../../../components';
import * as Styled from './ListDistricts.styled';

const ListDistricts = ({ items, handleSubscribeDistrict }) => {
  const renderDistricts = items.map(item => {
    const { id: voivodeshipId, name } = item;
    return (
      <Collapse key={voivodeshipId} title={name}>
        {item.districts.map(
          ({ id: districtId, name: _name, state: _state, is_subscribed }) => (
            <SubscribeItem
              key={districtId}
              name={_name}
              status={_state}
              handleClick={() => handleSubscribeDistrict(districtId)}
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
