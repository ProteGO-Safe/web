import React from 'react';
import PropTypes from 'prop-types';
import { ExposureNotificationImage, NavLink, T, ToggleButton } from '../../../../components';
import * as Styled from './ExposureNotification.styled';

import { ReactComponent as Arrow } from '../../../../assets/img/icons/angle-right-blue.svg';
import { prepareKeyTranslation } from '../../../../utils/number';
import { Color } from '../../../../theme/colors';

const ExposureNotification = ({
  active,
  allKeys,
  color,
  handleEnable,
  handleToggleButton,
  lastWeekKeys,
  open,
  pathToEnable,
  todayKeys
}) => {
  const todayKeysTranslationLabels = {
    number1: 'exposure_notification_text_13',
    number2to4: 'exposure_notification_text_14',
    number5to9999: 'exposure_notification_text_4',
    number10000to999999: 'exposure_notification_text_15',
    number1000000toInf: 'exposure_notification_text_16'
  };

  const lastWeekKeysTranslationLabels = {
    number1: 'exposure_notification_text_17',
    number2to4: 'exposure_notification_text_18',
    number5to9999: 'exposure_notification_text_19',
    number10000to999999: 'exposure_notification_text_20',
    number1000000toInf: 'exposure_notification_text_21'
  };

  const allKeysTranslationLabels = {
    number1: 'exposure_notification_text_22',
    number2to4: 'exposure_notification_text_23',
    number5to9999: 'exposure_notification_text_24',
    number10000to999999: 'exposure_notification_text_25',
    number1000000toInf: 'exposure_notification_text_26'
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
              {(todayKeys || lastWeekKeys || allKeys) && (
                <>
                  <Styled.Keys>
                    {prepareKeyTranslation({ number: todayKeys, labels: todayKeysTranslationLabels })}
                  </Styled.Keys>

                  <Styled.SmallKeysWrapper>
                    <Styled.SmallKeys>
                      {prepareKeyTranslation({ number: lastWeekKeys, labels: lastWeekKeysTranslationLabels })}
                    </Styled.SmallKeys>
                    <Styled.SmallKeys>
                      {prepareKeyTranslation({ number: allKeys, labels: allKeysTranslationLabels })}
                    </Styled.SmallKeys>
                  </Styled.SmallKeysWrapper>
                </>
              )}

              <Styled.KeysButton>
                <NavLink to={pathToEnable}>
                  <T i18nKey="exposure_notification_text_5" />
                </NavLink>
              </Styled.KeysButton>
            </Styled.Description>

            <Styled.ToggleButtonWrapper>
              <ToggleButton active={open} onClick={handleToggleButton} color={Color.primary} />
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
  allKeys: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  handleEnable: PropTypes.func.isRequired,
  handleToggleButton: PropTypes.func.isRequired,
  lastWeekKeys: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  pathToEnable: PropTypes.string.isRequired,
  todayKeys: PropTypes.number.isRequired
};

export default ExposureNotification;
