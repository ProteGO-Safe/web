import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import Container from '../../components/Container/Container';
import Background from '../../assets/img/banners/banner-1.png';
import { fetchDevicesList } from '../../store/actions/nativeData';
import { selectMatchedDevices } from '../../store/selectors/nativeData';
import { Header } from '../components/Header';
import './MatchedDevices.scss';

const MatchedDevices = () => {
  const dispatch = useDispatch();
  const matchedDevices = useSelector(selectMatchedDevices);

  useEffect(() => {
    dispatch(fetchDevicesList());
  }, [dispatch]);

  const renderEmptyState = () => (
    <div className="matched-devices__empty">List urządzeń jest pusta</div>
  );

  const renderMatchedDevicesList = () => (
    <ul className="matched-devices__list">
      {matchedDevices.map(({ name, timestamp, duration }) => (
        <li key={name} className="matched-devices__list-item">
          <b>{name}</b>
          {moment(timestamp).format('YYYY-MM-DD HH:mm')}
          <br />
          {Math.floor(moment.duration(duration, 'seconds').asMinutes())}{' '}
          minut(y)
        </li>
      ))}
    </ul>
  );

  return (
    <div className="view matched-devices">
      <Header background={Background} prevUrl="/" />
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
