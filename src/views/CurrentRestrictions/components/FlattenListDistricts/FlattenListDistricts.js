import React from 'react';
import { SubscribeItem } from '../../../../components';
import * as Styled from './FlattenListDistricts.styled';

const FlattenListDistricts = ({
  items,
  handleSubscribeDistrict,
  handleUnsubscribeDistrict
}) => {
  const handleClick = (districtId, isSubscribed) =>
    isSubscribed
      ? handleUnsubscribeDistrict(districtId)
      : handleSubscribeDistrict(districtId);

  const renderDistricts = items.map(item => {
    const { districtId, name, state, isSubscribed } = item;
    return (
      <SubscribeItem
        key={name}
        name={name}
        status={state}
        handleClick={() => handleClick(districtId, isSubscribed)}
        subscribed={isSubscribed}
      />
    );
  });

  return <Styled.List>{renderDistricts}</Styled.List>;
};

export default FlattenListDistricts;
