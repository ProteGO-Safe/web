import React from 'react';
import { useSelector } from 'react-redux';
import { getSerious } from '../../../../store/selectors/triage';
import BlockBorder from './BlockBorder';

const BlockBorderContainer = ({ title, hideItems }) => {
  const serious = useSelector(getSerious);
  const items = serious.map(_obj => _obj.common_name).map(item => item);
  return <BlockBorder items={hideItems ? [] : items} title={title} />;
};

export default BlockBorderContainer;
