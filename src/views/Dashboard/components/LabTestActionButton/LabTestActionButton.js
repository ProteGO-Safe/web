import React from 'react';
import PropTypes from 'prop-types';
import { PhoneNumber, RippleEffect } from '../../../../components';
import { Wrapper } from '../index';
import * as Styled from './LabTestActionButton.styled';

import { ReactComponent as IconTest } from '../../../../assets/img/icons/reka-test.svg';
import { ReactComponent as IconTestNotification } from '../../../../assets/img/icons/reka-test_noti.svg';
import { ReactComponent as Arrow } from '../../../../assets/img/icons/angle-right-blue.svg';

const LabTestActionButton = ({ description, isIconNotification, onClick, title, phone }) => {
  const renderContent = () => {
    return (
      <Styled.LabTestActionButton onClick={onClick}>
        <Styled.Image iconPos={isIconNotification}>
          {isIconNotification ? <IconTestNotification /> : <IconTest />}
        </Styled.Image>

        <Styled.Content>
          <Styled.Label>
            {title} <Arrow />
          </Styled.Label>

          <Styled.Text>{description}</Styled.Text>
        </Styled.Content>

        <RippleEffect />
        <RippleEffect />
      </Styled.LabTestActionButton>
    );
  };

  if (phone) {
    return (
      <Wrapper padding noBorder>
        <PhoneNumber value={phone}>{renderContent()}</PhoneNumber>
      </Wrapper>
    );
  }
  return (
    <Wrapper padding noBorder>
      {renderContent()}
    </Wrapper>
  );
};

LabTestActionButton.defaultProps = {
  description: '',
  isIconNotification: false,
  phone: undefined
};

LabTestActionButton.propTypes = {
  description: PropTypes.string,
  isIconNotification: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  phone: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default LabTestActionButton;
