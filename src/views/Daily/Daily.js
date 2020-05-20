import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Routes from '../../routes';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';
import { daysDetailsPropType } from '../../utills/calendar';
import { BordersButton } from '../../components';

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

const Daily = ({ goToHistory, onFill, today, previousDays }) => {
  const history = useHistory();
  const renderDairyDays = previousDays.map(_obj => (
    <DiaryListItem
      key={_obj.timestamp}
      onClick={() => goToHistory(_obj.timestamp)}
    >
      <span>
        Wpis z dnia:
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
            Uzupełnij dzisiejszy wpis do <br />
            swojego dziennika zdrowia
          </Title>
          <BordersButton onClick={onFill} icon={<NotebookIcon />}>
            Dziś, {today} <br />
            Kliknij i uzupełnij dane.
          </BordersButton>
          <DiaryHistory>
            <DiaryLabel>Dotychczasowe wpisy:</DiaryLabel>
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

export default Daily;
