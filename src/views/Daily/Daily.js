import React from 'react';
import PropTypes from 'prop-types';

import { daysDetailsPropType } from '../../utills/calendar';
import { Container } from '../../components';
import './Daily.scss';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';

import notebook from '../../assets/img/icons/welcome-screen.svg';
import arrowRight from '../../assets/img/icons/angle-right.svg';

const Daily = ({ goToHistory, onFill, today, previousDays }) => {
  return (
    <div className="view view__risk-test">
      <Header />
      <Container>
        <h4 className="diary__title">
          Uzupełnij dzisiejszy wpis do <br />
          swojego dziennika zdrowia
        </h4>
        <div className="diary__data" onClick={onFill}>
          <img src={notebook} alt="Dziennik zdrowia" />
          <div className="diary__data--text">
            Dziś, {today} <br />
            Kliknij i uzupełnij dane.
          </div>
        </div>
        <div className="diary__history">
          <div className="diary__history--label">Dotychczasowe wpisy</div>
          <div className="diary__history--list">
            {previousDays.map(_obj => (
              <div
                className="diary__history--item"
                onClick={() => goToHistory(_obj.timestamp)}
              >
                <span>
                  Wpis z dnia:&nbsp;{_obj.dayWeek}&nbsp;({_obj.day})
                </span>

                <img src={arrowRight} alt="arrow" />
              </div>
            ))}
          </div>
        </div>
      </Container>
      <BottomNavigation />
    </div>
  );
};

Daily.propTypes = {
  goToHistory: PropTypes.func.isRequired,
  onFill: PropTypes.func.isRequired,
  today: PropTypes.string.isRequired,
  previousDays: daysDetailsPropType
};

export default Daily;
