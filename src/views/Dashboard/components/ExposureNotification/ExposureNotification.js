import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { NavLink, ExposureNotificationImage, ToggleButton, T } from '../../../../components';
import * as Styled from './ExposureNotification.styled';

import { ReactComponent as Arrow } from '../../../../assets/img/icons/angle-right-blue.svg';

const ExposureNotification = ({
  active,
  color,
  handleDisable,
  handleToggleButton,
  keys,
  open,
  pathToEnable,
  t,
  updateKeys
}) => {
  const text = active ? t('exposure_notification_text_2') : t('exposure_notification_text_3');

  return (
    <Styled.ExposureNotification>
      <Styled.Content>
        <Styled.Title>
          <T i18nKey="exposure_notification_text_1" variables={{ color, text }} />
        </Styled.Title>

        {active ? (
          <>
            <Styled.Description open={open}>
              <Styled.Keys>
                <T i18nKey="exposure_notification_text_4" variables={{ keys }} />
              </Styled.Keys>

              <Styled.Keys>
                <T i18nKey="exposure_notification_text_10" variables={{ date: updateKeys }} />
              </Styled.Keys>

              <NavLink to={pathToEnable}>
                <Styled.KeysButton>
                  <T i18nKey="exposure_notification_text_5" />
                </Styled.KeysButton>
              </NavLink>
            </Styled.Description>

            <ToggleButton active={open} onClick={handleToggleButton} />
          </>
        ) : (
          <>
            <Styled.Text>
              <T i18nKey="exposure_notification_text_8" />
            </Styled.Text>
            <Styled.Link onClick={handleDisable}>
              <T i18nKey="exposure_notification_text_9" /> <Arrow />
            </Styled.Link>
          </>
        )}
      </Styled.Content>

      <Styled.Image>
        <ExposureNotificationImage color={color} active={active} />
      </Styled.Image>
    </Styled.ExposureNotification>
  );
};

ExposureNotification.propTypes = {
  active: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  handleDisable: PropTypes.func.isRequired,
  handleToggleButton: PropTypes.func.isRequired,
  keys: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  pathToEnable: PropTypes.string.isRequired
};

export default withTranslation()(ExposureNotification);
