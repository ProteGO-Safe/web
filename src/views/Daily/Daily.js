import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Routes from '../../routes';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { daysDetailsPropType } from '../../utils/calendar';
import { Button } from '../../components';

import arrowRight from '../../assets/img/icons/angle-right.svg';
import { Container, Content, View } from '../../theme/grid';
import {
  DiaryHistory,
  DiaryLabel,
  Diarylist,
  DiaryListItem,
  Title,
  NotebookIcon
} from './Daily.styled';

const Daily = ({ t, goToHistory, onFill, today, previousDays }) => {
  const history = useHistory();
  const renderDairyDays = previousDays.map(_obj => (
    <DiaryListItem
      key={_obj.timestamp}
      onClick={() => goToHistory(_obj.timestamp)}
    >
      <span>
        {t('daily_text6')}
        <br />
        {_obj.dayWeek}&nbsp;({_obj.day}&nbsp;r.)
      </span>

      <img src={arrowRight} alt="arrow" />
    </DiaryListItem>
  ));

  return (
    <View>
      <Header onBackClick={() => history.push(Routes.Home)} />
      <Content>
        <Container className="full-height">
          <Title>
            {t('daily_text1')}
            <br />
            {t('daily_text2')}
          </Title>
          <Button onClick={onFill} type="border" icon={<NotebookIcon />}>
            {t('daily_text3')}
            {today} <br />
            {t('daily_text4')}
          </Button>
          <DiaryHistory>
            <DiaryLabel>{t('daily_text5')}</DiaryLabel>
            <Diarylist>{renderDairyDays}</Diarylist>
          </DiaryHistory>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

Daily.propTypes = {
  goToHistory: PropTypes.func.isRequired,
  onFill: PropTypes.func.isRequired,
  today: PropTypes.string.isRequired,
  previousDays: daysDetailsPropType
};

export default withTranslation()(Daily);
