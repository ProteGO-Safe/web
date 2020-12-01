import React from 'react';
import { Button, Content, Icon, ArrowRight } from './CallHelpline.styled';
import { T } from '../index';

import IconContact from '../../assets/img/icons/icon-contact.svg';
import { ReactComponent as ArrowIcon } from '../../assets/img/icons/arrow-current-color.svg';

const CallHelpline = ({ phoneNumber, color, hideText }) => {
  const callText = <T i18nKey="call_helpline" />;
  const tel = phoneNumber.split(' ').join('');

  return (
    <Button className={hideText && 'small'} href={`tel:${tel}`} color={color}>
      <Icon className={hideText && 'small'} color={color}>
        <img src={IconContact} alt={callText} />
      </Icon>
      {!hideText && (
        <Content color={color}>
          {callText}
          <br />
          {phoneNumber}
          <ArrowRight>
            <ArrowIcon />
          </ArrowRight>
        </Content>
      )}
    </Button>
  );
};

export default CallHelpline;
