import React from 'react';
import * as Styled from './Bell.styled';

import { ReactComponent as BellIcon } from '../../assets/img/icons/bell.svg';
import { ReactComponent as BellIconSelect } from '../../assets/img/icons/bell_selected.svg';

const Bell = ({ active, badge, handleClick }) => (
  <Styled.Bell active={active} onClick={handleClick}>
    {active ? <BellIconSelect /> : <BellIcon />}

    {badge >= 1 && <Styled.Badge>{badge > 9 ? '9+' : badge}</Styled.Badge>}
  </Styled.Bell>
);

export default Bell;
