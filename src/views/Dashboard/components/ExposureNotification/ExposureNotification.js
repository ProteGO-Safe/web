import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, ExposureNotificationImage, ToggleButton } from '../../../../components';
import * as Styled from './ExposureNotification.styled';

import { ReactComponent as Arrow } from '../../../../assets/img/icons/angle-right-blue.svg';

const ExposureNotification = ({
  active,
  color,
  description,
  handleDisable,
  handleEnable,
  handleToggleButton,
  keys,
  labelDisable,
  labelEnable,
  open,
  title
}) => (
  <Styled.ExposureNotification>
    <Styled.Content>
      <Styled.Title>{title}</Styled.Title>

      {active ? (
        <>
          <Styled.Description open={open}>
            <Styled.Keys>{keys}</Styled.Keys>

            <NavLink to={handleEnable}>
              <Styled.KeysButton>{labelEnable}</Styled.KeysButton>
            </NavLink>
          </Styled.Description>

          <ToggleButton active={open} onClick={handleToggleButton} />
        </>
      ) : (
        <>
          <Styled.Text>{description}</Styled.Text>
          <Styled.Link onClick={handleDisable}>
            {labelDisable} <Arrow />
          </Styled.Link>
        </>
      )}
    </Styled.Content>

    <Styled.Image>
      <ExposureNotificationImage color={color} active={active} />
    </Styled.Image>
  </Styled.ExposureNotification>
);

ExposureNotification.propTypes = {
  active: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  handleDisable: PropTypes.func.isRequired,
  handleEnable: PropTypes.func.isRequired,
  handleToggleButton: PropTypes.func.isRequired,
  keys: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  labelDisable: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  labelEnable: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
};

export default ExposureNotification;
