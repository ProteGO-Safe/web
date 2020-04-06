import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import moment from 'moment';
import Container from '../../components/Container/Container';
import { fetchDevicesList } from '../../store/actions/nativeData';
import { selectMatchedDevices } from '../../store/selectors/nativeData';
import './MatchedDevices.scss';
import Routes from '../../routes';
import Header from '../../components/Header/Header';

const MatchedDevices = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const matchedDevices = useSelector(selectMatchedDevices);

  const goBack = () => history.push(Routes.Home);

  useEffect(() => {
    dispatch(fetchDevicesList());
  }, [dispatch]);

  const renderEmptyState = () => (
    <div className="matched-devices__empty">List urządzeń jest pusta</div>
  );

  const renderMatchedDevicesList = () => (
    <ul className="matched-devices__list">
      {matchedDevices.map(({ name, timestamp, duration, status }) => (
        <li key={name} className="matched-devices__list-item">
          <b>{name}</b>
          {moment(timestamp).format('YYYY-MM-DD HH:mm')}
          <br />
          {Math.floor(moment.duration(duration, 'seconds').asMinutes())}{' '}
          minut(y)
          <br />
          {status ? '✔️' : '❌'}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="view matched-devices">
      <Header onBackClick={goBack} />
      <Container className="matched-devices__container">
        <h4 className="h1 text-center medium">Spotkane urządzenia</h4>
        <div className="content">
          {matchedDevices.length
            ? renderMatchedDevicesList()
            : renderEmptyState()}
        </div>
      </Container>
    </div>
  );
};

export default MatchedDevices;
