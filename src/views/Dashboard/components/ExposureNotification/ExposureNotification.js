import React from 'react';
import PropTypes from 'prop-types';
import { ExposureNotificationImage, NavLink, T, ToggleButton } from '../../../../components';
import * as Styled from './ExposureNotification.styled';

import { ReactComponent as Arrow } from '../../../../assets/img/icons/angle-right-blue.svg';
import { prepareKeyTranslation } from '../../../../utils/number';

const ExposureNotification = ({
  active,
  color,
  handleEnable,
  handleToggleButton,
  keys,
  open,
  pathToEnable,
  updatedKeysDate
}) => {
  const keyTranslationLabels = {
    number1: 'exposure_notification_text_13',
    number2to4: 'exposure_notification_text_14',
    number5to9999: 'exposure_notification_text_4',
    number10000to999999: 'exposure_notification_text_15',
    number1000000toInf: 'exposure_notification_text_16'
  };

  return (
    <Styled.ExposureNotification>
      <Styled.Content>
        <Styled.Title>
          {active ? (
            <T i18nKey="exposure_notification_text_11" variables={{ color }} />
          ) : (
            <T i18nKey="exposure_notification_text_12" variables={{ color }} />
          )}
        </Styled.Title>

        {active ? (
          <>
            <Styled.Description open={open}>
              <Styled.Keys>{prepareKeyTranslation({ number: keys, labels: keyTranslationLabels })}</Styled.Keys>
              {updatedKeysDate && (
                <Styled.SmallKeys>
                  <T i18nKey="exposure_notification_text_10" variables={{ date: updatedKeysDate }} />
                </Styled.SmallKeys>
              )}

              <NavLink to={pathToEnable}>
                <Styled.KeysButton>
                  <T i18nKey="exposure_notification_text_5" />
                </Styled.KeysButton>
              </NavLink>
            </Styled.Description>

            <Styled.ToggleButtonWrapper>
              <ToggleButton active={open} onClick={handleToggleButton} />
            </Styled.ToggleButtonWrapper>
          </>
        ) : (
          <>
            <Styled.Text>
              <T i18nKey="exposure_notification_text_8" />
            </Styled.Text>
            <Styled.Link onClick={handleEnable}>
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

ExposureNotification.defaultProps = {
  active: false
};

ExposureNotification.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string.isRequired,
  handleEnable: PropTypes.func.isRequired,
  handleToggleButton: PropTypes.func.isRequired,
  keys: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  pathToEnable: PropTypes.string.isRequired
};

export default ExposureNotification;
