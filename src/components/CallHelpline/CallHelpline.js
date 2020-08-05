import React from 'react';
import { Button, Content, Icon, ArrowRight } from './CallHelpline.styled';
import { withTranslation } from 'react-i18next';
import { Button, Content, Icon } from './CallHelpline.styled';

import IconContact from '../../assets/img/icons/icon-contact.svg';
import { ReactComponent as ArrowIcon } from '../../assets/img/icons/arrow-current-color.svg';

const CallHelpline = ({ phoneNumber, color, hideText, t }) => {
  const callText = t('call_helpline');
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

export default withTranslation()(CallHelpline);
