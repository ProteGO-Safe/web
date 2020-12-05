import React from 'react';
import PropTypes from 'prop-types';
import { Layout, T } from '../../components';
import { HistoryNotificationsEmpty, HistoryNotificationsItem } from './components';
import * as Styled from './HistoryNotifications.styled';

const HistoryNotifications = ({ handleMarkAllRead, isMarkAllReadVisible, items }) => {
  const renderNotifications = items.map(item => {
    const { description, id, isRead, riskChecks, riskLevel, timestamp, title, type } = item;

    return (
      <HistoryNotificationsItem
        content={description}
        isRead={isRead}
        key={id}
        riskChecks={riskChecks}
        riskLevel={riskLevel}
        timestamp={timestamp}
        title={title}
        type={type}
      />
    );
  });

  return (
    <Layout isNavigation noMargin>
      <Styled.Container>
        <Styled.Title>
          <T i18nKey="history_notifications_text_1" />
        </Styled.Title>
      </Styled.Container>

      {renderNotifications.length > 0 ? (
        <Styled.HistoryNotifications>
          <Styled.Container noMargin>
            {isMarkAllReadVisible && (
              <Styled.MarkAllRead onClick={handleMarkAllRead}>
                <T i18nKey="history_notifications_text_2" />
              </Styled.MarkAllRead>
            )}

            {renderNotifications}
          </Styled.Container>
        </Styled.HistoryNotifications>
      ) : (
        <Styled.Container noMargin>
          <HistoryNotificationsEmpty />
        </Styled.Container>
      )}
    </Layout>
  );
};

HistoryNotifications.defaultProps = {
  renderNotifications: []
};

HistoryNotifications.propTypes = {
  handleMarkAllRead: PropTypes.func.isRequired,
  isMarkAllReadVisible: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  renderNotifications: PropTypes.array
};

export default HistoryNotifications;
