import React from 'react';
import { SubscribeItem } from '../../../../components';
import * as Styled from './FlattenListDistricts.styled';

const FlattenListDistricts = ({ items, handleSubscribeDistrict }) => {
  const renderDistricts = items.map(item => {
    const { districtId, name, state, isSubscribed } = item;
    return (
      <SubscribeItem
        key={name}
        name={name}
        status={state}
        handleClick={() => handleSubscribeDistrict(districtId)}
        subscribed={isSubscribed}
      />
    );
  });

  return <Styled.List>{renderDistricts}</Styled.List>;
};

export default FlattenListDistricts;
