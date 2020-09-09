import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { daysDetailsPropType } from '../../utils/calendar';
import { Button, Layout, LineItem } from '../../components';
import { Icon, ListTitle, Title } from './RiskTest.styled';

const RiskTest = ({ t, goToHistory, onFill, previousDays }) => (
  <Layout isNavigation>
    <Title>{t('risk_test_text1')}</Title>
    <Button
      onClick={onFill}
      label={t('risk_test_text2')}
      type="border"
      icon={<Icon />}
    />
    <ListTitle>{t('risk_test_text3')}</ListTitle>
    {previousDays.map(previousDay => {
      const { day, dayWeek, timestamp } = previousDay;
      const text = `Test: ${dayWeek} (${day} r.)`;
      return (
        <LineItem
          key={timestamp}
          onClick={() => goToHistory(timestamp)}
          text={text}
        />
      );
    })}
  </Layout>
);

RiskTest.propTypes = {
  onFill: PropTypes.func.isRequired,
  goToHistory: PropTypes.func.isRequired,
  previousDays: daysDetailsPropType
};

export default withTranslation()(RiskTest);
