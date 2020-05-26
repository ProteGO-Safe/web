import React from 'react';
import { Button, Content, Icon } from './CallHelpline.styled';

import IconContact from '../../assets/img/icons/icon-contact.svg';
import ArrowIcon from '../../assets/img/icons/angle-right-current.svg';

const CallHelpline = ({ phoneNumber, color, hideText }) => {
  const tel = phoneNumber.split(' ').join('');

  return (
    <Button className={hideText && 'small'} href={`tel:${tel}`} color={color}>
      <Icon className={hideText && 'small'} color={color}>
        <img src={IconContact} alt="Zadzwoń na infolinie" />
      </Icon>
      {!hideText && (
        <Content color={color}>
          Zadzwoń na infolinię
          <br />
          {phoneNumber}
          <img src={ArrowIcon} alt="Zadzwoń na infolinie" />
        </Content>
      )}
    </Button>
  );
};

export default CallHelpline;
