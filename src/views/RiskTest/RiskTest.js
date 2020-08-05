import React from 'react';
import PropTypes from 'prop-types';

import { daysDetailsPropType } from '../../utils/calendar';
import Header from '../../components/Header/Header';
import LineItem from '../../components/LineItem/LineItem';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Button } from '../../components';
import { Icon, ListTitle, Title } from './RiskTest.styled';
import { Container, Content, View } from '../../theme/grid';
import {withTranslation} from "react-i18next";

const RiskTest = ({ t, goToHistory, onFill, previousDays }) => (
  <View>
    <Header />
    <Content>
      <Container>
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
      </Container>
      <BottomNavigation />
    </Content>
  </View>
);

RiskTest.propTypes = {
  onFill: PropTypes.func.isRequired,
  goToHistory: PropTypes.func.isRequired,
  previousDays: daysDetailsPropType
};

export default withTranslation()(RiskTest);
