import React from 'react';
import PropTypes from 'prop-types';
import { RippleEffect } from '../../../../components';
import { Wrapper } from '../index';
import * as Styled from './LabTestActionButton.styled';

import { ReactComponent as IconTest } from '../../../../assets/img/icons/reka-test.svg';
import { ReactComponent as IconTestNotification } from '../../../../assets/img/icons/reka-test_noti.svg';
import { ReactComponent as Arrow } from '../../../../assets/img/icons/angle-right-blue.svg';

const LabTestActionButton = ({ description, isIconNotification, onClick, title }) => {
  return (
    <Wrapper padding noBorder>
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
    </Wrapper>
  );
};

LabTestActionButton.defaultProps = {
  description: '',
  isIconNotification: false
};

LabTestActionButton.propTypes = {
  description: PropTypes.string,
  isIconNotification: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default LabTestActionButton;
