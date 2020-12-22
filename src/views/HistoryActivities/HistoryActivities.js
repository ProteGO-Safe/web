import React from 'react';
import PropTypes from 'prop-types';
import { Layout, T } from '../../components';
import { HistoryActivitiesEmpty, HistoryActivitiesItem } from './components';
import * as Styled from './HistoryActivities.styled';

const HistoryActivities = ({ handleMarkAllRead, isMarkAllReadVisible, items }) => {
  const renderedItems = items.map(item => {
    const { content, id, isRead, riskChecks, riskLevel, timestamp, title, type } = item;

    return (
      <HistoryActivitiesItem
        content={content}
        id={id}
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
    <Layout isNavigation>
      <Styled.Container>
        <Styled.Title>
          <T i18nKey="history_notifications_text_1" />
        </Styled.Title>
      </Styled.Container>

      {renderedItems.length > 0 ? (
        <Styled.Container>
          <Styled.HistoryActivities>
            {isMarkAllReadVisible && (
              <Styled.MarkAllRead onClick={handleMarkAllRead}>
                <T i18nKey="history_notifications_text_2" />
              </Styled.MarkAllRead>
            )}

            {renderedItems}
          </Styled.HistoryActivities>
        </Styled.Container>
      ) : (
        <Styled.Container>
          <HistoryActivitiesEmpty />
        </Styled.Container>
      )}
    </Layout>
  );
};

HistoryActivities.defaultProps = {
  items: []
};

HistoryActivities.propTypes = {
  handleMarkAllRead: PropTypes.func.isRequired,
  isMarkAllReadVisible: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array
};

export default HistoryActivities;
