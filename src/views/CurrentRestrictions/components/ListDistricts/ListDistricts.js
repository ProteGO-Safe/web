import React from 'react';
import { Collapse, SubscribeItem } from '../../../../components';
import * as Styled from './ListDistricts.styled';

const ListDistricts = ({ items, handleSubscribeDistrict, handleUnsubscribeDistrict }) => {
  const handleClick = (districtId, isSubscribed) =>
    isSubscribed ? handleUnsubscribeDistrict(districtId) : handleSubscribeDistrict(districtId);

  const renderDistricts = items.map(item => {
    const { id: voivodeshipId, name } = item;
    return (
      <Collapse key={voivodeshipId} title={name}>
        {item.districts.map(({ id: districtId, name: _name, state, isSubscribed }) => (
          <SubscribeItem
            key={districtId}
            name={_name}
            status={state}
            handleClick={() => handleClick(districtId, isSubscribed)}
            subscribed={isSubscribed}
          />
        ))}
      </Collapse>
    );
  });

  return <Styled.ListDistricts>{renderDistricts}</Styled.ListDistricts>;
};

export default ListDistricts;
