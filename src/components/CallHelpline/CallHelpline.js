import React from 'react';
import { Button, Content, Icon } from './CallHelpline.styled';

import IconContact from '../../assets/img/icons/icon-contact.svg';

const CallHelpline = ({ phoneNumber, color, hideText }) => {
  const tel = phoneNumber.split(' ').join('');

  return (
    <Button className={hideText && 'small'} href={`tel:${tel}`} color={color}>
      <Icon className={hideText && 'small'} color={color}>
        <img src={IconContact} alt="Zadzwoń na infolinie" />
      </Icon>
      {!hideText && (
        <Content color={color}>
          Zadzwoń na infolinie
          <br />
          {phoneNumber}
        </Content>
      )}
    </Button>
  );
};

export default CallHelpline;
